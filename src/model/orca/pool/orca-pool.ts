import { Aquafarm, fetchGlobalFarms, fetchUserFarms, getUserFarmAddress } from "@orca-so/aquafarm";
import { TOKEN_PROGRAM_ID, u64 } from "@solana/spl-token";
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
  ORCA_AQUAFARM_ID,
} from "../../../public";
import {
  createApprovalInstruction,
  createAquafarmConvertTokensInstruction,
  createAquafarmRevertTokensInstruction,
  createDepositInstruction,
  createInitUserFarmInstruction,
  createSwapInstruction,
  createWithdrawInstruction,
} from "../../../public/utils/web3/instructions/pool-instructions";
import { Owner } from "../../../public/utils/web3/key-utils";
import { QuotePoolParams, QuoteBuilderFactory } from "../../quote/quote-builder";
import { OrcaPoolParams } from "./pool-types";

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
    // Use farm balance if aquafarm exists for this pool, default to pool balance
    const mintAddress =
      this.poolParams.aquafarmParams?.farmTokenMint || this.poolParams.poolTokenMint;
    const address = await deriveAssociatedTokenAddress(owner, mintAddress);

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
    // Use farm supply if aquafarm exists for this pool, default to pool supply
    const mintAddress =
      this.poolParams.aquafarmParams?.farmTokenMint || this.poolParams.poolTokenMint;
    const context = await this.connection.getTokenSupply(mintAddress);

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
      userTransferAuthority.publicKey
    );

    return await new TransactionBuilder(this.connection, ownerAddress, _owner)
      .addInstruction(resolveInputAddrInstructions)
      .addInstruction(resolveOutputAddrInstructions)
      .addInstruction(approvalInstruction)
      .addInstruction(swapInstruction)
      .build();
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
      _owner
    );

    const transactionBuilder = new TransactionBuilder(this.connection, ownerAddress, _owner)
      .addInstruction(resolveTokenAInstrucitons)
      .addInstruction(resolveTokenBInstrucitons)
      .addInstruction(resolvePoolTokenInstructions)
      .addInstruction(transferTokenAInstruction)
      .addInstruction(transferTokenBInstruction)
      .addInstruction(depositInstruction);

    if (this.poolParams.aquafarmParams) {
      const { address: aquafarmAddress, rewardTokenMint } = this.poolParams.aquafarmParams;
      const userFarmPublicKey = (
        await getUserFarmAddress(aquafarmAddress, ownerAddress, TOKEN_PROGRAM_ID, ORCA_AQUAFARM_ID)
      )[0];

      const globalFarms = await fetchGlobalFarms(
        this.connection,
        [aquafarmAddress],
        ORCA_AQUAFARM_ID
      );
      const userFarms = await fetchUserFarms(
        this.connection,
        ownerAddress,
        [aquafarmAddress],
        ORCA_AQUAFARM_ID
      );

      if (!globalFarms) {
        throw new Error("Failed to get globalFarms information");
      }
      const aquafarm = new Aquafarm(globalFarms[0], ORCA_AQUAFARM_ID, userFarms && userFarms[0]);

      // If the user lacks the user farm, create it
      const initUserFarmInstruction = await createInitUserFarmInstruction(
        aquafarm,
        userFarmPublicKey,
        _owner
      );

      // If the user lacks the farm token account, create it
      const { address: userFarmTokenPublicKey, ...resolveFarmTokenInstructions } =
        await resolveOrCreateAssociatedTokenAddress(
          this.connection,
          _owner,
          aquafarm.globalFarm.farmTokenMint
        );

      // If the user lacks the reward token account, create it
      const { address: userRewardTokenPublicKey, ...resolveRewardTokenInstructions } =
        await resolveOrCreateAssociatedTokenAddress(this.connection, _owner, rewardTokenMint);

      // Approve transfer of pool token to be converted to aquafarm tokens
      const { ...transferPoolTokenInstruction } = createApprovalInstruction(
        ownerAddress,
        minPoolTokenAmountOut_U64,
        userPoolTokenPublicKey,
        userTransferAuthority
      );

      // Convert pool tokens to aquafarm tokens
      const convertToAquafarmTokens = await createAquafarmConvertTokensInstruction(
        aquafarm,
        userTransferAuthority.publicKey,
        userPoolTokenPublicKey,
        userFarmTokenPublicKey,
        userRewardTokenPublicKey,
        minPoolTokenAmountOut_U64,
        userFarmPublicKey,
        _owner
      );

      transactionBuilder.addInstruction(initUserFarmInstruction);
      transactionBuilder.addInstruction(resolveFarmTokenInstructions);
      transactionBuilder.addInstruction(resolveRewardTokenInstructions);
      transactionBuilder.addInstruction(transferPoolTokenInstruction);
      transactionBuilder.addInstruction(convertToAquafarmTokens);
    }

    return await transactionBuilder.build();
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

    const transactionBuilder = new TransactionBuilder(this.connection, ownerAddress, _owner)
      .addInstruction(resolveTokenAInstrucitons)
      .addInstruction(resolveTokenBInstrucitons)
      .addInstruction(resolvePoolTokenInstructions)
      .addInstruction(transferPoolTokenInstruction);

    if (this.poolParams.aquafarmParams) {
      const { address: aquafarmAddress, rewardTokenMint } = this.poolParams.aquafarmParams;
      const globalFarms = await fetchGlobalFarms(
        this.connection,
        [aquafarmAddress],
        ORCA_AQUAFARM_ID
      );
      const userFarms = await fetchUserFarms(
        this.connection,
        ownerAddress,
        [aquafarmAddress],
        ORCA_AQUAFARM_ID
      );

      if (!globalFarms) {
        throw new Error("Failed to get globalFarms information");
      }
      const aquafarm = new Aquafarm(globalFarms[0], ORCA_AQUAFARM_ID, userFarms && userFarms[0]);

      if (aquafarm.isUserFarmInitialized()) {
        // If the user lacks the farm token account, create it
        const { address: userFarmTokenPublicKey, ...resolveFarmTokenInstructions } =
          await resolveOrCreateAssociatedTokenAddress(
            this.connection,
            _owner,
            aquafarm.globalFarm.farmTokenMint
          );

        // If the user lacks the reward token account, create it
        const { address: userRewardTokenPublicKey, ...resolveRewardTokenInstructions } =
          await resolveOrCreateAssociatedTokenAddress(this.connection, _owner, rewardTokenMint);

        // Approve transfer of aquafarm tokens to be reverted to pool tokens
        const { ...transferAquafarmTokenInstruction } = createApprovalInstruction(
          ownerAddress,
          poolTokenAmountIn_U64,
          userFarmTokenPublicKey,
          userTransferAuthority
        );

        // Revert aquafarm tokens to pool tokens
        const revertFromAquafarmTokens = await createAquafarmRevertTokensInstruction(
          aquafarm,
          userTransferAuthority.publicKey,
          userPoolTokenPublicKey,
          userFarmTokenPublicKey,
          userRewardTokenPublicKey,
          poolTokenAmountIn_U64,
          _owner
        );

        transactionBuilder.addInstruction(resolveFarmTokenInstructions);
        transactionBuilder.addInstruction(resolveRewardTokenInstructions);
        transactionBuilder.addInstruction(transferAquafarmTokenInstruction);
        transactionBuilder.addInstruction(revertFromAquafarmTokens);
      }
    }

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
      _owner
    );
    transactionBuilder.addInstruction(withdrawInstruction);

    return await transactionBuilder.build();
  }
}
