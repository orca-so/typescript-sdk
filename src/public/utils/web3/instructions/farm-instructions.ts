import { Aquafarm } from "@orca-so/aquafarm";
import { u64 } from "@solana/spl-token";
import { PublicKey } from "@solana/web3.js";
import { Instruction, emptyInstruction } from "../..";
import { Owner } from "../key-utils";

export const createInitUserFarmInstruction = async (
  farm: Aquafarm,
  userFarmPublicKey: PublicKey,
  owner: Owner
): Promise<Instruction> => {
  if (farm.isUserFarmInitialized()) {
    return emptyInstruction;
  }

  const initUserFarmIx = farm.constructInitUserFarmIx(owner.publicKey, userFarmPublicKey);

  return {
    instructions: [initUserFarmIx],
    cleanupInstructions: [],
    signers: owner.signer ? [owner.signer] : [],
  };
};

export const createFarmConvertTokensInstruction = async (
  farm: Aquafarm,
  userTransferAuthorityPublicKey: PublicKey,
  userBaseTokenPublicKey: PublicKey,
  userFarmTokenPublicKey: PublicKey,
  userRewardTokenPublicKey: PublicKey,
  baseTokenAmount: u64,
  userFarmPublicKey: PublicKey,
  owner: Owner
): Promise<Instruction> => {
  let convertIx;
  if (!farm.userFarm) {
    convertIx = farm.constructConvertTokensIx(
      userTransferAuthorityPublicKey,
      userBaseTokenPublicKey,
      userFarmTokenPublicKey,
      userRewardTokenPublicKey,
      baseTokenAmount,
      userFarmPublicKey,
      owner.publicKey
    );
  } else {
    convertIx = farm.constructConvertTokensIx(
      userTransferAuthorityPublicKey,
      userBaseTokenPublicKey,
      userFarmTokenPublicKey,
      userRewardTokenPublicKey,
      baseTokenAmount
    );
  }

  if (!convertIx) {
    throw new Error("constructConvertTokensIx returned null");
  }

  return {
    instructions: [convertIx],
    cleanupInstructions: [],
    signers: owner.signer ? [owner.signer] : [],
  };
};

export const createFarmRevertTokensInstruction = async (
  farm: Aquafarm,
  userBurnAuthorityPublicKey: PublicKey,
  userBaseTokenPublicKey: PublicKey,
  userFarmTokenPublicKey: PublicKey,
  userRewardTokenPublicKey: PublicKey,
  baseTokenAmount: u64,
  owner: Owner
): Promise<Instruction> => {
  const revertIx = farm.constructRevertTokensIx(
    userBurnAuthorityPublicKey,
    userBaseTokenPublicKey,
    userFarmTokenPublicKey,
    userRewardTokenPublicKey,
    baseTokenAmount
  );

  if (!revertIx) {
    throw new Error("constructRevertTokensIx returned null");
  }

  return {
    instructions: [revertIx],
    cleanupInstructions: [],
    signers: owner.signer ? [owner.signer] : [],
  };
};

export const createFarmHarvestRewardInstruction = async (
  farm: Aquafarm,
  userRewardTokenPublicKey: PublicKey,
  owner: Owner
): Promise<Instruction> => {
  const harvestIx = farm.constructHarvestIx(userRewardTokenPublicKey);

  return {
    instructions: [harvestIx],
    cleanupInstructions: [],
    signers: owner.signer ? [owner.signer] : [],
  };
};
