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
  OrcaPoolToken,
  Quote,
  TransactionPayload,
  Percentage,
  resolveOrCreateAssociatedTokenAddress,
  ZERO,
  DepositQuote,
  WithdrawQuote,
  DecimalUtil,
  Network,
  ORCA_TOKEN_SWAP_ID_DEVNET,
  ORCA_TOKEN_SWAP_ID,
} from "../../../public";
import {
  createApprovalInstruction,
  createDepositInstruction,
  createSwapInstruction,
  createWithdrawInstruction,
} from "../../../public/utils/web3/instructions/pool-instructions";
import { Owner } from "../../../public/utils/web3/key-utils";
import { QuotePoolParams, QuoteBuilderFactory } from "../../quote/quote-builder";
import { OrcaPoolParams } from "./pool-types";

export class OrcaPoolImpl implements OrcaPool {
  private connection: Connection;
  private poolParams: OrcaPoolParams;
  private orcaTokenSwapId: PublicKey;

  constructor(connection: Connection, network: Network, config: OrcaPoolParams) {
    this.connection = connection;
    this.poolParams = config;

    this.orcaTokenSwapId =
      network === Network.MAINNET ? ORCA_TOKEN_SWAP_ID : ORCA_TOKEN_SWAP_ID_DEVNET;
  }

  public getTokenA(): OrcaPoolToken {
    const tokenId = this.poolParams.tokenIds[0];
    return this.poolParams.tokens[tokenId];
  }

  public getTokenB(): OrcaPoolToken {
    const tokenId = this.poolParams.tokenIds[1];
    return this.poolParams.tokens[tokenId];
  }

  public getPoolTokenMint(): PublicKey {
    return this.poolParams.poolTokenMint;
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
    const { inputPoolToken, outputPoolToken } = getTokens(
      this.poolParams,
      inputToken.mint.toString()
    );

    const { inputTokenCount, outputTokenCount } = await getTokenCount(
      this.connection,
      this.poolParams,
      inputPoolToken,
      outputPoolToken
    );

    return this.getQuoteWithPoolAmounts(
      inputToken,
      inputAmount,
      inputTokenCount,
      outputTokenCount,
      slippage
    );
  }

  public async getQuoteWithPoolAmounts(
    inputToken: OrcaToken,
    inputAmount: Decimal | OrcaU64,
    inputTokenPoolAmount: u64,
    outputTokenPoolAmount: u64,
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

    const {
      value: { feeCalculator },
    } = await this.connection.getRecentBlockhashAndContext("singleGossip");

    const quoteParams: QuotePoolParams = {
      inputToken: inputPoolToken,
      outputToken: outputPoolToken,
      inputTokenCount: inputTokenPoolAmount,
      outputTokenCount: outputTokenPoolAmount,
      feeStructure: feeStructure,
      slippageTolerance: slippageTolerance,
      lamportsPerSignature: feeCalculator.lamportsPerSignature,
      amp: this.poolParams.amp !== undefined ? new u64(this.poolParams.amp) : undefined,
    };

    const quoteBuilder = QuoteBuilderFactory.getBuilder(this.poolParams.curveType);

    const quote = quoteBuilder?.buildQuote(quoteParams, inputAmountU64);

    if (quote == undefined) {
      throw new Error("Failed to get quote!");
    }

    return quote;
  }

  public async swap(
    owner: Keypair | PublicKey,
    inputToken: OrcaToken,
    amountIn: Decimal | OrcaU64,
    minimumAmountOut: Decimal | OrcaU64
  ): Promise<TransactionPayload> {
    const _owner = new Owner(owner);

    const ownerAddress = _owner.publicKey;

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
        _owner,
        inputPoolToken.mint,
        amountInU64
      );

    const { address: outputPoolTokenUserAddress, ...resolveOutputAddrInstructions } =
      await resolveOrCreateAssociatedTokenAddress(this.connection, _owner, outputPoolToken.mint);

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
      _owner,
      inputPoolToken,
      inputPoolTokenUserAddress,
      outputPoolToken,
      outputPoolTokenUserAddress,
      amountInU64,
      minimumAmountOutU64,
      userTransferAuthority.publicKey,
      this.orcaTokenSwapId
    );

    return await new TransactionBuilder(this.connection, ownerAddress, _owner)
      .addInstruction(resolveInputAddrInstructions)
      .addInstruction(resolveOutputAddrInstructions)
      .addInstruction(approvalInstruction)
      .addInstruction(swapInstruction)
      .build();
  }

  public async getDepositQuote(
    maxTokenAIn: Decimal | OrcaU64,
    maxTokenBIn: Decimal | OrcaU64,
    slippage?: Decimal
  ): Promise<DepositQuote> {
    const slippageTolerance =
      slippage === undefined ? defaultSlippagePercentage : Percentage.fromDecimal(slippage);

    const maxTokenAIn_U64 = U64Utils.toTokenU64(maxTokenAIn, this.getTokenA(), "maxTokenAIn");
    const maxTokenBIn_U64 = U64Utils.toTokenU64(maxTokenBIn, this.getTokenB(), "maxTokenBIn");

    const { inputTokenCount: tokenAAmount, outputTokenCount: tokenBAmount } = await getTokenCount(
      this.connection,
      this.poolParams,
      this.getTokenA(),
      this.getTokenB()
    );
    const lpSupply = await this.getLPSupply();

    if (tokenAAmount.eq(ZERO) || tokenBAmount.eq(ZERO)) {
      return {
        minPoolTokenAmountOut: OrcaU64.fromU64(ZERO, lpSupply.scale),
        maxTokenAIn: OrcaU64.fromU64(maxTokenAIn_U64, this.getTokenA().scale),
        maxTokenBIn: OrcaU64.fromU64(maxTokenBIn_U64, this.getTokenB().scale),
      };
    }

    const poolTokenAmountWithA = maxTokenAIn_U64
      .mul(slippageTolerance.denominator)
      .mul(lpSupply.toU64())
      .div(tokenAAmount)
      .div(slippageTolerance.numerator.add(slippageTolerance.denominator));

    const poolTokenAmountWithB = maxTokenBIn_U64
      .mul(slippageTolerance.denominator)
      .mul(lpSupply.toU64())
      .div(tokenBAmount)
      .div(slippageTolerance.numerator.add(slippageTolerance.denominator));

    // Pick the smaller value of the two to calculate the minimum poolTokenAmount out
    const minPoolTokenAmountOut_U64 = poolTokenAmountWithA.gt(poolTokenAmountWithB)
      ? poolTokenAmountWithB
      : poolTokenAmountWithA;

    return {
      minPoolTokenAmountOut: OrcaU64.fromU64(minPoolTokenAmountOut_U64, lpSupply.scale),
      maxTokenAIn: OrcaU64.fromU64(maxTokenAIn_U64, this.getTokenA().scale),
      maxTokenBIn: OrcaU64.fromU64(maxTokenBIn_U64, this.getTokenB().scale),
    };
  }

  public async deposit(
    owner: Keypair | PublicKey,
    maxTokenAIn: Decimal | OrcaU64,
    maxTokenBIn: Decimal | OrcaU64,
    minPoolTokenAmountOut: Decimal | OrcaU64
  ): Promise<TransactionPayload> {
    const _owner = new Owner(owner);
    const ownerAddress = _owner.publicKey;

    const tokenA = this.getTokenA();
    const tokenB = this.getTokenB();

    const maxTokenAIn_U64 = U64Utils.toTokenU64(maxTokenAIn, tokenA, "maxTokenAIn");
    const maxTokenBIn_U64 = U64Utils.toTokenU64(maxTokenBIn, tokenB, "maxTokenBIn");
    const minPoolTokenAmountOut_U64 = U64Utils.toPoolU64(
      minPoolTokenAmountOut,
      this.poolParams,
      "poolTokenAmount"
    );

    // If tokenA is SOL, this will create a new wSOL account with maxTokenAIn_U64
    // Otherwise, get tokenA's associated token account
    const { address: userTokenAPublicKey, ...resolveTokenAInstrucitons } =
      await resolveOrCreateAssociatedTokenAddress(
        this.connection,
        _owner,
        tokenA.mint,
        maxTokenAIn_U64
      );

    // If tokenB is SOL, this will create a new wSOL account with maxTokenBIn_U64
    // Otherwise, get tokenB's associated token account
    const { address: userTokenBPublicKey, ...resolveTokenBInstrucitons } =
      await resolveOrCreateAssociatedTokenAddress(
        this.connection,
        _owner,
        tokenB.mint,
        maxTokenBIn_U64
      );

    // If the user lacks the pool token account, create it
    const { address: userPoolTokenPublicKey, ...resolvePoolTokenInstructions } =
      await resolveOrCreateAssociatedTokenAddress(
        this.connection,
        _owner,
        this.poolParams.poolTokenMint
      );

    // Approve transfer of the tokens being deposited
    const { userTransferAuthority, ...transferTokenAInstruction } = createApprovalInstruction(
      ownerAddress,
      maxTokenAIn_U64,
      userTokenAPublicKey
    );
    const { ...transferTokenBInstruction } = createApprovalInstruction(
      ownerAddress,
      maxTokenBIn_U64,
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
      minPoolTokenAmountOut_U64,
      maxTokenAIn_U64,
      maxTokenBIn_U64,
      tokenA.addr,
      tokenB.addr,
      this.orcaTokenSwapId,
      _owner
    );

    return await new TransactionBuilder(this.connection, ownerAddress, _owner)
      .addInstruction(resolveTokenAInstrucitons)
      .addInstruction(resolveTokenBInstrucitons)
      .addInstruction(resolvePoolTokenInstructions)
      .addInstruction(transferTokenAInstruction)
      .addInstruction(transferTokenBInstruction)
      .addInstruction(depositInstruction)
      .build();
  }

  public async getWithdrawQuote(
    withdrawTokenAmount: Decimal | OrcaU64,
    withdrawTokenMint: PublicKey,
    slippage?: Decimal
  ): Promise<WithdrawQuote> {
    const slippageTolerance =
      slippage === undefined ? defaultSlippagePercentage : Percentage.fromDecimal(slippage);

    const lpSupply = await this.getLPSupply();
    const { inputTokenCount: tokenAAmount, outputTokenCount: tokenBAmount } = await getTokenCount(
      this.connection,
      this.poolParams,
      this.getTokenA(),
      this.getTokenB()
    );

    // withdrawTokenAmount needs represent amounts for one of the following: poolTokenAmount, tokenAAmount, or tokenBAmount
    // determine which token this amount represents, then calculate poolTokenIn_U64
    let poolTokenIn_U64 = ZERO;
    if (withdrawTokenMint.equals(this.getPoolTokenMint())) {
      poolTokenIn_U64 = U64Utils.toPoolU64(
        withdrawTokenAmount,
        this.poolParams,
        "withdrawTokenAmount"
      );
    } else if (
      withdrawTokenMint.equals(this.getTokenA().mint) ||
      withdrawTokenMint.equals(this.getTokenB().mint)
    ) {
      const token = withdrawTokenMint.equals(this.getTokenA().mint)
        ? this.getTokenA()
        : this.getTokenB();
      const totalAmount = token.mint.equals(this.getTokenA().mint) ? tokenAAmount : tokenBAmount;

      const numerator =
        withdrawTokenAmount instanceof OrcaU64
          ? withdrawTokenAmount.toDecimal()
          : withdrawTokenAmount;
      const denominator = DecimalUtil.fromU64(totalAmount, token.scale);
      const poolTokenIn = lpSupply.toDecimal().div(denominator).mul(numerator);
      poolTokenIn_U64 = U64Utils.toPoolU64(poolTokenIn, this.poolParams, "poolTokenIn");
    } else {
      throw new Error(
        `Unable to get withdraw quote with an invalid withdrawTokenMint ${withdrawTokenMint}`
      );
    }

    if (poolTokenIn_U64.eq(ZERO)) {
      return {
        maxPoolTokenAmountIn: OrcaU64.fromU64(ZERO, lpSupply.scale),
        minTokenAOut: OrcaU64.fromU64(ZERO, this.getTokenA().scale),
        minTokenBOut: OrcaU64.fromU64(ZERO, this.getTokenB().scale),
      };
    }

    const minTokenAOut = new OrcaU64(
      poolTokenIn_U64
        .mul(slippageTolerance.denominator)
        .mul(tokenAAmount)
        .div(lpSupply.toU64())
        .div(slippageTolerance.numerator.add(slippageTolerance.denominator)),
      this.getTokenA().scale
    );

    const minTokenBOut = new OrcaU64(
      poolTokenIn_U64
        .mul(slippageTolerance.denominator)
        .mul(tokenBAmount)
        .div(lpSupply.toU64())
        .div(slippageTolerance.numerator.add(slippageTolerance.denominator)),
      this.getTokenB().scale
    );

    return {
      maxPoolTokenAmountIn: OrcaU64.fromU64(poolTokenIn_U64, lpSupply.scale),
      minTokenAOut,
      minTokenBOut,
    };
  }

  public async withdraw(
    owner: Keypair | PublicKey,
    poolTokenAmountIn: Decimal | OrcaU64,
    minTokenAOut: Decimal | OrcaU64,
    minTokenBOut: Decimal | OrcaU64
  ): Promise<TransactionPayload> {
    const _owner = new Owner(owner);
    const ownerAddress = _owner.publicKey;

    const tokenA = this.getTokenA();
    const tokenB = this.getTokenB();

    const minTokenAOut_U64 = U64Utils.toTokenU64(minTokenAOut, tokenA, "minTokenAOut");
    const minTokenBOut_U64 = U64Utils.toTokenU64(minTokenBOut, tokenB, "minTokenBOut");
    const poolTokenAmountIn_U64 = U64Utils.toPoolU64(
      poolTokenAmountIn,
      this.poolParams,
      "poolTokenAmountIn"
    );

    // Create a token account for tokenA, if necessary
    const { address: userTokenAPublicKey, ...resolveTokenAInstrucitons } =
      await resolveOrCreateAssociatedTokenAddress(this.connection, _owner, tokenA.mint);

    // Create a token account for tokenB, if necessary
    const { address: userTokenBPublicKey, ...resolveTokenBInstrucitons } =
      await resolveOrCreateAssociatedTokenAddress(this.connection, _owner, tokenB.mint);

    // Get user's poolToken token account
    const { address: userPoolTokenPublicKey, ...resolvePoolTokenInstructions } =
      await resolveOrCreateAssociatedTokenAddress(
        this.connection,
        _owner,
        this.poolParams.poolTokenMint
      );

    // Approve transfer of pool token
    const { userTransferAuthority, ...transferPoolTokenInstruction } = createApprovalInstruction(
      ownerAddress,
      poolTokenAmountIn_U64,
      userPoolTokenPublicKey
    );

    // Create the withdraw instruction
    const withdrawInstruction = await createWithdrawInstruction(
      this.poolParams,
      userTransferAuthority.publicKey,
      userTokenAPublicKey,
      userTokenBPublicKey,
      userPoolTokenPublicKey,
      poolTokenAmountIn_U64,
      minTokenAOut_U64,
      minTokenBOut_U64,
      tokenA.addr,
      tokenB.addr,
      this.orcaTokenSwapId,
      _owner
    );

    return await new TransactionBuilder(this.connection, ownerAddress, _owner)
      .addInstruction(resolveTokenAInstrucitons)
      .addInstruction(resolveTokenBInstrucitons)
      .addInstruction(resolvePoolTokenInstructions)
      .addInstruction(transferPoolTokenInstruction)
      .addInstruction(withdrawInstruction)
      .build();
  }
}
