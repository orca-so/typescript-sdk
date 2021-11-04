import { Aquafarm, fetchGlobalFarms, fetchUserFarms, getUserFarmAddress } from "@orca-so/aquafarm";
import { TOKEN_PROGRAM_ID, u64 } from "@solana/spl-token";
import { Connection, Keypair, PublicKey } from "@solana/web3.js";
import Decimal from "decimal.js";
import {
  deriveAssociatedTokenAddress,
  deserializeAccount,
  OrcaU64,
  ORCA_FARM_ID,
  resolveOrCreateAssociatedTokenAddress,
  TransactionBuilder,
  TransactionPayload,
  U64Utils,
} from "../../..";
import { OrcaFarm, ZERO } from "../../../public/";
import {
  createFarmConvertTokensInstruction,
  createFarmHarvestRewardInstruction,
  createFarmRevertTokensInstruction,
  createInitUserFarmInstruction,
} from "../../../public/utils/web3/instructions/farm-instructions";
import { createApprovalInstruction } from "../../../public/utils/web3/instructions/pool-instructions";
import { Owner } from "../../../public/utils/web3/key-utils";
import { OrcaFarmParams } from "./farm-types";

export class OrcaFarmImpl implements OrcaFarm {
  private connection: Connection;
  private farmParams: OrcaFarmParams;

  constructor(connection: Connection, config: OrcaFarmParams) {
    this.connection = connection;
    this.farmParams = config;
  }

  public async getFarmBalance(owner: PublicKey): Promise<OrcaU64> {
    const address = await deriveAssociatedTokenAddress(owner, this.farmParams.farmTokenMint);

    const accountInfo = await this.connection.getAccountInfo(address);

    // User does not have a balance for this account
    if (accountInfo == undefined) {
      return OrcaU64.fromNumber(0, this.farmParams.baseTokenDecimals);
    }
    const result = deserializeAccount(accountInfo?.data);
    if (result == undefined) {
      throw new Error("Failed to parse user account for LP token.");
    }

    return OrcaU64.fromU64(result.amount, this.farmParams.baseTokenDecimals);
  }

  public async getFarmSupply(): Promise<OrcaU64> {
    const context = await this.connection.getTokenSupply(this.farmParams.farmTokenMint);

    const amt = new u64(context.value.amount);

    return OrcaU64.fromU64(amt, this.farmParams.baseTokenDecimals);
  }

  public async deposit(
    owner: Keypair | PublicKey,
    baseTokenAmount: Decimal | OrcaU64
  ): Promise<TransactionPayload> {
    const _owner = new Owner(owner);
    const ownerAddress = _owner.publicKey;

    const baseTokenAmount_U64 = U64Utils.toFarmU64(
      baseTokenAmount,
      this.farmParams,
      "baseTokenAmount"
    );

    const { address: farmAddress, rewardTokenMint } = this.farmParams;
    const userFarmPublicKey = (
      await getUserFarmAddress(farmAddress, ownerAddress, TOKEN_PROGRAM_ID, ORCA_FARM_ID)
    )[0];

    const globalFarms = await fetchGlobalFarms(this.connection, [farmAddress], ORCA_FARM_ID);
    const userFarms = await fetchUserFarms(
      this.connection,
      ownerAddress,
      [farmAddress],
      ORCA_FARM_ID
    );

    if (!globalFarms) {
      throw new Error("Failed to get globalFarms information");
    }
    const farm = new Aquafarm(globalFarms[0], ORCA_FARM_ID, userFarms && userFarms[0]);

    // If the user lacks the user farm, create it
    const initUserFarmInstruction = await createInitUserFarmInstruction(
      farm,
      userFarmPublicKey,
      _owner
    );

    // If the user lacks the farm token account, create it
    const { address: userFarmTokenPublicKey, ...resolveFarmTokenInstructions } =
      await resolveOrCreateAssociatedTokenAddress(
        this.connection,
        _owner,
        farm.globalFarm.farmTokenMint
      );

    // If the user lacks the reward token account, create it
    const { address: userRewardTokenPublicKey, ...resolveRewardTokenInstructions } =
      await resolveOrCreateAssociatedTokenAddress(this.connection, _owner, rewardTokenMint);

    // If the user lacks the base token account, create it
    const { address: userBaseTokenPublicKey, ...resolveBaseTokenInstructions } =
      await resolveOrCreateAssociatedTokenAddress(
        this.connection,
        _owner,
        this.farmParams.baseTokenMint
      );

    // Approve transfer of base token to be converted to farm tokens
    const { userTransferAuthority, ...transferBaseTokenInstruction } = createApprovalInstruction(
      ownerAddress,
      baseTokenAmount_U64,
      userBaseTokenPublicKey
    );

    // Convert base tokens to farm tokens
    const convertToFarmTokens = await createFarmConvertTokensInstruction(
      farm,
      userTransferAuthority.publicKey,
      userBaseTokenPublicKey,
      userFarmTokenPublicKey,
      userRewardTokenPublicKey,
      baseTokenAmount_U64,
      userFarmPublicKey,
      _owner
    );

    return await new TransactionBuilder(this.connection, ownerAddress, _owner)
      .addInstruction(initUserFarmInstruction)
      .addInstruction(resolveFarmTokenInstructions)
      .addInstruction(resolveBaseTokenInstructions)
      .addInstruction(resolveRewardTokenInstructions)
      .addInstruction(transferBaseTokenInstruction)
      .addInstruction(convertToFarmTokens)
      .build();
  }

  public async withdraw(
    owner: Keypair | PublicKey,
    baseTokenAmount: Decimal | OrcaU64
  ): Promise<TransactionPayload> {
    const _owner = new Owner(owner);
    const ownerAddress = _owner.publicKey;

    const baseTokenAmount_U64 = U64Utils.toFarmU64(
      baseTokenAmount,
      this.farmParams,
      "baseTokenAmount"
    );

    const { address: farmAddress, rewardTokenMint } = this.farmParams;
    const userFarmPublicKey = (
      await getUserFarmAddress(farmAddress, ownerAddress, TOKEN_PROGRAM_ID, ORCA_FARM_ID)
    )[0];

    const globalFarms = await fetchGlobalFarms(this.connection, [farmAddress], ORCA_FARM_ID);
    const userFarms = await fetchUserFarms(
      this.connection,
      ownerAddress,
      [farmAddress],
      ORCA_FARM_ID
    );

    if (!globalFarms) {
      throw new Error("Failed to get globalFarms information");
    }
    const farm = new Aquafarm(globalFarms[0], ORCA_FARM_ID, userFarms && userFarms[0]);

    if (!farm.isUserFarmInitialized()) {
      throw new Error("Failed to get userFarm information. Warning: withdraw from deposit address");
    }

    // If the user lacks the farm token account, create it
    const { address: userFarmTokenPublicKey, ...resolveFarmTokenInstructions } =
      await resolveOrCreateAssociatedTokenAddress(
        this.connection,
        _owner,
        farm.globalFarm.farmTokenMint
      );

    // If the user lacks the reward token account, create it
    const { address: userRewardTokenPublicKey, ...resolveRewardTokenInstructions } =
      await resolveOrCreateAssociatedTokenAddress(this.connection, _owner, rewardTokenMint);

    // Get user's baseToken token account
    const { address: userBaseTokenPublicKey, ...resolveBaseTokenInstructions } =
      await resolveOrCreateAssociatedTokenAddress(
        this.connection,
        _owner,
        this.farmParams.baseTokenMint
      );

    // Approve transfer of farm tokens to be reverted to base tokens
    const { userTransferAuthority, ...transferFarmTokenInstruction } = createApprovalInstruction(
      ownerAddress,
      baseTokenAmount_U64,
      userFarmTokenPublicKey
    );

    // Revert farm tokens to base tokens
    const revertFromFarmTokens = await createFarmRevertTokensInstruction(
      farm,
      userTransferAuthority.publicKey,
      userBaseTokenPublicKey,
      userFarmTokenPublicKey,
      userRewardTokenPublicKey,
      baseTokenAmount_U64,
      _owner
    );

    return await new TransactionBuilder(this.connection, ownerAddress, _owner)
      .addInstruction(resolveFarmTokenInstructions)
      .addInstruction(resolveRewardTokenInstructions)
      .addInstruction(resolveBaseTokenInstructions)
      .addInstruction(transferFarmTokenInstruction)
      .addInstruction(revertFromFarmTokens)
      .build();
  }

  public async getHarvestableAmount(ownerPublicKey: PublicKey): Promise<OrcaU64> {
    const { address: farmAddress, baseTokenDecimals } = this.farmParams;

    const globalFarms = await fetchGlobalFarms(this.connection, [farmAddress], ORCA_FARM_ID);
    const userFarms = await fetchUserFarms(
      this.connection,
      ownerPublicKey,
      [farmAddress],
      ORCA_FARM_ID
    );

    if (!globalFarms) {
      throw new Error("Failed to get globalFarms information");
    }

    const farm = new Aquafarm(globalFarms[0], ORCA_FARM_ID, userFarms && userFarms[0]);

    if (!farm.isUserFarmInitialized()) {
      return OrcaU64.fromU64(ZERO, baseTokenDecimals);
    }

    const farmSupply = await this.getFarmSupply();
    const harvestableAmount = farm.getCurrentHarvestableAmount(farmSupply.toU64()) ?? ZERO;
    return OrcaU64.fromU64(harvestableAmount, baseTokenDecimals);
  }

  public async harvest(owner: Keypair | PublicKey): Promise<TransactionPayload> {
    const _owner = new Owner(owner);
    const ownerAddress = _owner.publicKey;

    const { address: farmAddress, rewardTokenMint } = this.farmParams;

    const globalFarms = await fetchGlobalFarms(this.connection, [farmAddress], ORCA_FARM_ID);
    const userFarms = await fetchUserFarms(
      this.connection,
      ownerAddress,
      [farmAddress],
      ORCA_FARM_ID
    );

    if (!globalFarms) {
      throw new Error("Failed to get globalFarms information");
    }

    const farm = new Aquafarm(globalFarms[0], ORCA_FARM_ID, userFarms && userFarms[0]);

    if (!farm.isUserFarmInitialized()) {
      throw new Error("Failed to get userFarm information");
    }

    // If the user lacks the reward token account, create it
    const { address: userRewardTokenPublicKey, ...resolveRewardTokenInstructions } =
      await resolveOrCreateAssociatedTokenAddress(this.connection, _owner, rewardTokenMint);

    const harvestRewardInstruction = await createFarmHarvestRewardInstruction(
      farm,
      userRewardTokenPublicKey,
      _owner
    );

    return await new TransactionBuilder(this.connection, ownerAddress, _owner)
      .addInstruction(resolveRewardTokenInstructions)
      .addInstruction(harvestRewardInstruction)
      .build();
  }

  public async getDailyEmissions(): Promise<OrcaU64> {
    const { address, rewardTokenDecimals } = this.farmParams;

    const globalFarms = await fetchGlobalFarms(this.connection, [address], ORCA_FARM_ID);

    if (!globalFarms) {
      throw new Error("Failed to get globalFarms information");
    }

    const value = new Decimal(globalFarms[0].emissionsPerSecondNumerator.toString())
      .mul(60 * 60 * 24)
      .div(globalFarms[0].emissionsPerSecondDenominator.toString())
      .div(new Decimal(10).pow(rewardTokenDecimals));

    return OrcaU64.fromDecimal(value, rewardTokenDecimals);
  }
}
