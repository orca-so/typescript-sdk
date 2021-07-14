import { Connection, Keypair, PublicKey, Signer, TransactionSignature } from "@solana/web3.js";
import { OrcaPool, OrcaU64, Quote } from "../../..";
import { defaultSlippagePercentage } from "../../../constants/orca-defaults";
import { deserializeAccount } from "../../../utils/web3/deserialize-account";
import {
  deriveAssociatedTokenAddresses,
  findAssociatedTokenAddress,
} from "../../../utils/web3/find-associated-token-address";
import { PoolTokenCount, getTokenCount } from "../../../utils/web3/get-token-count";
import { OrcaPoolParams } from "./pool-types";
import { QuotePoolParams, QuoteBuilderFactory } from "../../quote/quote-builder";
import { PercentageUtils } from "../../utils/percentage";
import TransactionBuilder from "../../../utils/web3/transactions/transaction-builder";
import {
  createSwapInstruction,
  createUserTransferAuthrority,
} from "../../../utils/web3/instructions/pool-instructions";
import { u64 } from "@solana/spl-token";
import { sendAndConfirmTransaction } from "../../../utils/web3/transactions/transactions";
import { getTokens } from "../../../utils/pool-utils";

export class OrcaPoolImpl implements OrcaPool {
  private connection: Connection;
  private poolParams: OrcaPoolParams;

  constructor(connection: Connection, config: OrcaPoolParams) {
    this.connection = connection;
    this.poolParams = config;
  }

  public getTokenAId(): string {
    return this.poolParams.tokenIds[0];
  }

  public getTokenBId(): string {
    return this.poolParams.tokenIds[1];
  }

  public async getLPBalance(owner: PublicKey): Promise<OrcaU64> {
    const address = await findAssociatedTokenAddress(owner, this.poolParams.poolTokenMint);

    // TODO: SOL account handling
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
    inputTokenId: string,
    inputAmount: OrcaU64,
    slippage?: number
  ): Promise<Quote> {
    const slippageTolerance =
      slippage === undefined ? defaultSlippagePercentage : PercentageUtils.fromNumber(slippage);

    const feeStructure = this.poolParams.feeStructure;

    const { inputPoolToken, outputPoolToken } = getTokens(this.poolParams, inputTokenId);

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

    const quote = quoteBuilder?.buildQuote(
      quoteParams,
      inputAmount.shiftToScale(inputPoolToken.decimals).toU64()
    );

    if (quote == undefined) {
      throw new Error("Failed to get quote!");
    }

    return quote;
  }

  public async swap(
    owner: Keypair,
    inputTokenId: string,
    amountIn: OrcaU64,
    minimumAmountOut: OrcaU64
  ): Promise<TransactionSignature> {
    const ownerAddress = owner.publicKey;
    const { inputPoolToken, outputPoolToken } = getTokens(this.poolParams, inputTokenId);

    const [inputPoolTokenUserAddress, outputPoolTokenUserAddress] =
      await deriveAssociatedTokenAddresses(owner.publicKey, [
        inputPoolToken.mint,
        outputPoolToken.mint,
      ]);

    if (inputPoolTokenUserAddress === undefined || outputPoolTokenUserAddress === undefined) {
      throw new Error("Unable to derive input / output token associated address.");
    }

    const { userTransferAuthority, approvalInstruction, revokeInstruction } =
      createUserTransferAuthrority(
        ownerAddress,
        inputPoolToken,
        amountIn.shiftToScale(inputPoolToken.decimals).toU64(),
        inputPoolTokenUserAddress
      );

    const swapInstruction = await createSwapInstruction(
      this.poolParams,
      ownerAddress,
      inputPoolToken,
      inputPoolTokenUserAddress,
      outputPoolToken,
      outputPoolTokenUserAddress,
      amountIn.shiftToScale(inputPoolToken.decimals).toU64(),
      minimumAmountOut.shiftToScale(outputPoolToken.decimals).toU64(),
      userTransferAuthority.publicKey
    );

    const txn = await new TransactionBuilder(this.connection, ownerAddress)
      .addInstruction(approvalInstruction)
      .addInstruction(swapInstruction)
      .addCleanUpInstruction(revokeInstruction)
      .build();

    const signers: Signer[] = [owner, userTransferAuthority];
    return await sendAndConfirmTransaction(this.connection, txn, signers);
  }
}
