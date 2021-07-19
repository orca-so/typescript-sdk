import { Connection, Keypair, PublicKey, Signer, TransactionSignature } from "@solana/web3.js";
import { OrcaPool, OrcaU64, Quote } from "../../..";
import { defaultSlippagePercentage } from "../../../constants/orca-defaults";
import { deserializeAccount } from "../../../utils/web3/deserialize-account";
import { PoolTokenCount, getTokenCount } from "../../../utils/web3/get-token-count";
import { OrcaPoolParams } from "./pool-types";
import { QuotePoolParams, QuoteBuilderFactory } from "../../quote/quote-builder";
import { PercentageUtils } from "../../utils/percentage";
import TransactionBuilder from "../../../utils/web3/transactions/transaction-builder";
import {
  createSwapInstruction,
  createApprovalInstruction,
} from "../../../utils/web3/instructions/pool-instructions";
import { u64 } from "@solana/spl-token";
import { sendAndConfirmTransaction } from "../../../utils/web3/transactions/transactions";
import { getTokens } from "../../../utils/pool-utils";
import Decimal from "decimal.js";
import { U64Utils } from "../../../utils/numbers/u64-utils";
import { OrcaToken } from "../../../public/types";
import {
  deriveAssociatedTokenAddress,
  resolveAssociatedTokenAddress,
} from "../../../utils/web3/ata-utils";

export class OrcaPoolImpl implements OrcaPool {
  private connection: Connection;
  private poolParams: OrcaPoolParams;

  constructor(connection: Connection, config: OrcaPoolParams) {
    this.connection = connection;
    this.poolParams = config;
  }

  public getTokenA(): OrcaToken {
    const tokenId = this.poolParams.tokenIds[0];
    return this.poolParams.tokens[tokenId];
  }

  public getTokenB(): OrcaToken {
    const tokenId = this.poolParams.tokenIds[1];
    return this.poolParams.tokens[tokenId];
  }

  public async getLPBalance(owner: PublicKey): Promise<OrcaU64> {
    const address = await deriveAssociatedTokenAddress(owner, this.poolParams.poolTokenMint);

    const accountInfo = await this.connection.getAccountInfo(address);

    // User does not have a balance for this account
    if (accountInfo == undefined) {
      return OrcaU64.fromNumber(0, this.poolParams.poolTokenDecimals);
    }
    const result = deserializeAccount(accountInfo?.data);
    if (result == undefined) {
      throw new Error("Failed to parse user account for LP token.");
    }

    return OrcaU64.fromU64(result.amount, this.poolParams.poolTokenDecimals);
  }

  public async getLPSupply(): Promise<OrcaU64> {
    const context = await this.connection.getTokenSupply(this.poolParams.poolTokenMint);

    const amt = new u64(context.value.amount);

    return OrcaU64.fromU64(amt, this.poolParams.poolTokenDecimals);
  }

  public async getQuote(
    inputToken: OrcaToken,
    inputAmount: Decimal | OrcaU64,
    slippage?: Decimal
  ): Promise<Quote> {
    const slippageTolerance =
      slippage === undefined ? defaultSlippagePercentage : PercentageUtils.fromDecimal(slippage);

    const feeStructure = this.poolParams.feeStructure;

    const { inputPoolToken, outputPoolToken } = getTokens(
      this.poolParams,
      inputToken.mint.toString()
    );
    const inputAmountU64 = U64Utils.toTokenU64(inputAmount, inputPoolToken, "inputAmount");

    const poolTokenCount: PoolTokenCount = await getTokenCount(
      this.connection,
      this.poolParams,
      inputPoolToken,
      outputPoolToken
    );

    const quoteParams: QuotePoolParams = {
      ...poolTokenCount,
      inputToken: inputPoolToken,
      outputToken: outputPoolToken,
      feeStructure: feeStructure,
      slippageTolerance: slippageTolerance,
    };

    const quoteBuilder = QuoteBuilderFactory.getBuilder(this.poolParams.curveType);

    const quote = quoteBuilder?.buildQuote(quoteParams, inputAmountU64);

    if (quote == undefined) {
      throw new Error("Failed to get quote!");
    }

    return quote;
  }

  public async swap(
    owner: Keypair,
    inputToken: OrcaToken,
    amountIn: Decimal | OrcaU64,
    minimumAmountOut: Decimal | OrcaU64
  ): Promise<TransactionSignature> {
    const ownerAddress = owner.publicKey;
    const { inputPoolToken, outputPoolToken } = getTokens(
      this.poolParams,
      inputToken.mint.toString()
    );
    const amountInU64 = U64Utils.toTokenU64(amountIn, inputPoolToken, "amountIn");
    const minimumAmountOutU64 = U64Utils.toTokenU64(
      minimumAmountOut,
      outputPoolToken,
      "minimumAmountOut"
    );

    const { address: inputPoolTokenUserAddress, ...resolveInputAddrInstructions } =
      await resolveAssociatedTokenAddress(
        this.connection,
        owner.publicKey,
        inputPoolToken.mint,
        amountInU64
      );
    const { address: outputPoolTokenUserAddress, ...resolveOutputAddrInstructions } =
      await resolveAssociatedTokenAddress(
        this.connection,
        owner.publicKey,
        outputPoolToken.mint,
        amountInU64
      );

    if (inputPoolTokenUserAddress === undefined || outputPoolTokenUserAddress === undefined) {
      throw new Error("Unable to derive input / output token associated address.");
    }

    const { userTransferAuthority, ...approvalInstruction } = createApprovalInstruction(
      ownerAddress,
      amountInU64,
      inputPoolTokenUserAddress
    );

    const swapInstruction = await createSwapInstruction(
      this.poolParams,
      owner,
      inputPoolToken,
      inputPoolTokenUserAddress,
      outputPoolToken,
      outputPoolTokenUserAddress,
      amountInU64,
      minimumAmountOutU64,
      userTransferAuthority.publicKey
    );

    const { transaction, signers } = await new TransactionBuilder(this.connection, ownerAddress)
      .addInstruction(resolveInputAddrInstructions)
      .addInstruction(resolveOutputAddrInstructions)
      .addInstruction(approvalInstruction)
      .addInstruction(swapInstruction)
      .build();

    return await sendAndConfirmTransaction(this.connection, transaction, signers);
  }
}
