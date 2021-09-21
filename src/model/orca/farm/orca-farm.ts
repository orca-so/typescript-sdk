import { Aquafarm, fetchGlobalFarms, fetchUserFarms, getUserFarmAddress } from "@orca-so/aquafarm";
import { TOKEN_PROGRAM_ID, u64 } from "@solana/spl-token";
import { Connection, Keypair, PublicKey } from "@solana/web3.js";
import Decimal from "decimal.js";
import {
  deriveAssociatedTokenAddress,
  deserializeAccount,
  OrcaU64,
  ORCA_AQUAFARM_ID,
  resolveOrCreateAssociatedTokenAddress,
  TransactionBuilder,
  TransactionPayload,
  U64Utils,
} from "../../..";
import { OrcaFarm } from "../../../public/";
import {
  createAquafarmConvertTokensInstruction,
  createAquafarmRevertTokensInstruction,
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
      return OrcaU64.fromNumber(0, this.farmParams.poolTokenDecimals);
    }
    const result = deserializeAccount(accountInfo?.data);
    if (result == undefined) {
      throw new Error("Failed to parse user account for LP token.");
    }

    return OrcaU64.fromU64(result.amount, this.farmParams.poolTokenDecimals);
  }

  public async getFarmSupply(): Promise<OrcaU64> {
    // Use farm supply if aquafarm exists for this pool, default to pool supply
    const context = await this.connection.getTokenSupply(this.farmParams.farmTokenMint);

    const amt = new u64(context.value.amount);

    return OrcaU64.fromU64(amt, this.farmParams.poolTokenDecimals);
  }

  public async deposit(
    owner: Keypair | PublicKey,
    poolTokenAmount: Decimal | OrcaU64
  ): Promise<TransactionPayload> {
    const _owner = new Owner(owner);
    const ownerAddress = _owner.publicKey;

    const poolTokenAmount_U64 = U64Utils.toPoolU64(
      poolTokenAmount,
      this.farmParams,
      "poolTokenAmount"
    );

    const { address: aquafarmAddress, rewardTokenMint } = this.farmParams;
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

    // If the user lacks the pool token account, create it
    const { address: userPoolTokenPublicKey, ...resolvePoolTokenInstructions } =
      await resolveOrCreateAssociatedTokenAddress(
        this.connection,
        _owner,
        this.farmParams.poolTokenMint
      );

    // Approve transfer of pool token to be converted to aquafarm tokens
    const { userTransferAuthority, ...transferPoolTokenInstruction } = createApprovalInstruction(
      ownerAddress,
      poolTokenAmount_U64,
      userPoolTokenPublicKey
    );

    // Convert pool tokens to aquafarm tokens
    const convertToAquafarmTokens = await createAquafarmConvertTokensInstruction(
      aquafarm,
      userTransferAuthority.publicKey,
      userPoolTokenPublicKey,
      userFarmTokenPublicKey,
      userRewardTokenPublicKey,
      poolTokenAmount_U64,
      userFarmPublicKey,
      _owner
    );

    return await new TransactionBuilder(this.connection, ownerAddress, _owner)
      .addInstruction(initUserFarmInstruction)
      .addInstruction(resolveFarmTokenInstructions)
      .addInstruction(resolvePoolTokenInstructions)
      .addInstruction(resolveRewardTokenInstructions)
      .addInstruction(transferPoolTokenInstruction)
      .addInstruction(convertToAquafarmTokens)
      .build();
  }

  public async withdraw(
    owner: Keypair | PublicKey,
    poolTokenAmount: Decimal | OrcaU64
  ): Promise<TransactionPayload> {
    const _owner = new Owner(owner);
    const ownerAddress = _owner.publicKey;

    const poolTokenAmount_U64 = U64Utils.toPoolU64(
      poolTokenAmount,
      this.farmParams,
      "poolTokenAmount"
    );

    const { address: aquafarmAddress, rewardTokenMint } = this.farmParams;
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

    // TODO is this possible?
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

    // Get user's poolToken token account
    const { address: userPoolTokenPublicKey, ...resolvePoolTokenInstructions } =
      await resolveOrCreateAssociatedTokenAddress(
        this.connection,
        _owner,
        this.farmParams.poolTokenMint
      );

    // Approve transfer of aquafarm tokens to be reverted to pool tokens
    const { userTransferAuthority, ...transferAquafarmTokenInstruction } =
      createApprovalInstruction(ownerAddress, poolTokenAmount_U64, userFarmTokenPublicKey);

    // Revert aquafarm tokens to pool tokens
    const revertFromAquafarmTokens = await createAquafarmRevertTokensInstruction(
      aquafarm,
      userTransferAuthority.publicKey,
      userPoolTokenPublicKey,
      userFarmTokenPublicKey,
      userRewardTokenPublicKey,
      poolTokenAmount_U64,
      _owner
    );

    return await new TransactionBuilder(this.connection, ownerAddress, _owner)
      .addInstruction(initUserFarmInstruction)
      .addInstruction(resolveFarmTokenInstructions)
      .addInstruction(resolveRewardTokenInstructions)
      .addInstruction(resolvePoolTokenInstructions)
      .addInstruction(transferAquafarmTokenInstruction)
      .addInstruction(revertFromAquafarmTokens)
      .build();
  }
}
