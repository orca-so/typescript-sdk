import { u64 } from "@solana/spl-token";
import { Connection, PublicKey, Keypair } from "@solana/web3.js";
import Decimal from "decimal.js";
import { defaultSlippagePercentage } from "../../../constants/orca-defaults";

import {
  OrcaU64,
  deriveAssociatedTokenAddress,
  deserializeAccount,
  getTokens,
  U64Utils,
  PoolTokenCount,
  getTokenCount,
  TransactionBuilder,
  OrcaPool,
  OrcaToken,
  Quote,
  TransactionPayload,
  Percentage,
  resolveOrCreateAssociatedTokenAddress,
} from "../../../public";
import {
  createApprovalInstruction,
  createDepositInstruction,
  createSwapInstruction,
} from "../../../public/utils/web3/instructions/pool-instructions";
import { QuotePoolParams, QuoteBuilderFactory } from "../../quote/quote-builder";
import { OrcaPoolParams, OrcaPoolToken } from "./pool-types";

export class OrcaPoolImpl implements OrcaPool {
  private connection: Connection;
  private poolParams: OrcaPoolParams;

  constructor(connection: Connection, config: OrcaPoolParams) {
    this.connection = connection;
    this.poolParams = config;
  }

  public getTokenA(): OrcaPoolToken {
    const tokenId = this.poolParams.tokenIds[0];
    return this.poolParams.tokens[tokenId];
  }

  public getTokenB(): OrcaPoolToken {
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
      slippage === undefined ? defaultSlippagePercentage : Percentage.fromDecimal(slippage);

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

    const {
      value: { feeCalculator },
    } = await this.connection.getRecentBlockhashAndContext("singleGossip");

    const quoteParams: QuotePoolParams = {
      ...poolTokenCount,
      inputToken: inputPoolToken,
      outputToken: outputPoolToken,
      feeStructure: feeStructure,
      slippageTolerance: slippageTolerance,
      lamportsPerSignature: feeCalculator.lamportsPerSignature,
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
  ): Promise<TransactionPayload> {
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
      await resolveOrCreateAssociatedTokenAddress(
        this.connection,
        owner,
        inputPoolToken.mint,
        amountInU64
      );

    const { address: outputPoolTokenUserAddress, ...resolveOutputAddrInstructions } =
      await resolveOrCreateAssociatedTokenAddress(
        this.connection,
        owner,
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

    return await new TransactionBuilder(this.connection, ownerAddress)
      .addInstruction(resolveInputAddrInstructions)
      .addInstruction(resolveOutputAddrInstructions)
      .addInstruction(approvalInstruction)
      .addInstruction(swapInstruction)
      .build();
  }

  public async deposit(
    owner: Keypair,
    poolTokenAmount: Decimal | OrcaU64,
    maximumTokenA: Decimal | OrcaU64,
    maximumTokenB: Decimal | OrcaU64
  ): Promise<TransactionPayload> {
    const ownerAddress = owner.publicKey;
    const tokenA = this.getTokenA();
    const tokenB = this.getTokenB();

    const maximumTokenA_U64 = U64Utils.toTokenU64(maximumTokenA, tokenA, "maximumTokenA");
    const maximumTokenB_U64 = U64Utils.toTokenU64(maximumTokenB, tokenB, "maximumTokenB");
    const poolTokenAmount_U64 = U64Utils.toPoolU64(
      poolTokenAmount,
      this.poolParams,
      "poolTokenAmount"
    );

    // If tokenA is SOL, this will create a new wSOL account
    // Otherwise, get tokenA's associated token account
    const { address: userTokenAPublicKey, ...resolveTokenAInstrucitons } =
      await resolveOrCreateAssociatedTokenAddress(
        this.connection,
        owner,
        tokenA.mint,
        maximumTokenA_U64
      );

    // If tokenB is SOL, this will create a new wSOL account
    // Otherwise, get tokenB's associated token account
    const { address: userTokenBPublicKey, ...resolveTokenBInstrucitons } =
      await resolveOrCreateAssociatedTokenAddress(
        this.connection,
        owner,
        tokenB.mint,
        maximumTokenB_U64
      );

    // If the user lacks the pool token account, create it
    const { address: userPoolTokenPublicKey, ...resolvePoolTokenInstructions } =
      await resolveOrCreateAssociatedTokenAddress(
        this.connection,
        owner,
        this.poolParams.poolTokenMint,
        poolTokenAmount_U64
      );

    // Approve transfer of the tokens being deposited
    const { userTransferAuthority, ...transferTokenAInstruction } = createApprovalInstruction(
      ownerAddress,
      maximumTokenA_U64,
      userTokenAPublicKey
    );
    const { ...transferTokenBInstruction } = createApprovalInstruction(
      ownerAddress,
      maximumTokenB_U64,
      userTokenBPublicKey,
      userTransferAuthority
    );

    // Create the deposit instruction
    const depositInstruction = await createDepositInstruction(
      this.poolParams,
      userTransferAuthority.publicKey,
      userTokenAPublicKey,
      userTokenBPublicKey,
      userPoolTokenPublicKey,
      poolTokenAmount_U64,
      maximumTokenA_U64,
      maximumTokenB_U64,
      tokenA.addr,
      tokenB.addr,
      owner
    );

    return await new TransactionBuilder(this.connection, ownerAddress)
      .addInstruction(resolveTokenAInstrucitons)
      .addInstruction(resolveTokenBInstrucitons)
      .addInstruction(resolvePoolTokenInstructions)
      .addInstruction(transferTokenAInstruction)
      .addInstruction(transferTokenBInstruction)
      .addInstruction(transferTokenBInstruction)
      .addInstruction(depositInstruction)
      .build();
  }

  public async withdraw(
    owner: Keypair,
    poolTokenAmount: Decimal | OrcaU64,
    minimumTokenA: Decimal | OrcaU64,
    minimumTokenB: Decimal | OrcaU64
  ): Promise<TransactionPayload> {
    const ownerAddress = owner.publicKey;

    // TODO
    // 1. Create the user's token account for the tokens being withdrawn, if necessary
    // 2. Approve transfer of the pool token
    // 3. Create the withdraw function
    // 4. Add above instructions into TransactionBuilder and build the payload

    return await new TransactionBuilder(this.connection, ownerAddress).build();
  }
}
