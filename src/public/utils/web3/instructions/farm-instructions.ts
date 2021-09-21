import { Aquafarm } from "@orca-so/aquafarm";
import { u64 } from "@solana/spl-token";
import { PublicKey } from "@solana/web3.js";
import { Instruction, emptyInstruction } from "../..";
import { Owner } from "../key-utils";

export const createInitUserFarmInstruction = async (
  aquafarm: Aquafarm,
  userFarmPublicKey: PublicKey,
  owner: Owner
): Promise<Instruction> => {
  if (aquafarm.isUserFarmInitialized()) {
    return emptyInstruction;
  }

  const initUserFarmIx = aquafarm.constructInitUserFarmIx(owner.publicKey, userFarmPublicKey);

  return {
    instructions: [initUserFarmIx],
    cleanupInstructions: [],
    signers: owner.signer ? [owner.signer] : [],
  };
};

export const createAquafarmConvertTokensInstruction = async (
  aquafarm: Aquafarm,
  userTransferAuthorityPublicKey: PublicKey,
  userPoolTokenPublicKey: PublicKey,
  userFarmTokenPublicKey: PublicKey,
  userRewardTokenPublicKey: PublicKey,
  poolTokenAmount: u64,
  userFarmPublicKey: PublicKey,
  owner: Owner
): Promise<Instruction> => {
  let convertIx;
  if (!aquafarm.userFarm) {
    convertIx = aquafarm.constructConvertTokensIx(
      userTransferAuthorityPublicKey,
      userPoolTokenPublicKey,
      userFarmTokenPublicKey,
      userRewardTokenPublicKey,
      poolTokenAmount,
      userFarmPublicKey,
      owner.publicKey
    );
  } else {
    convertIx = aquafarm.constructConvertTokensIx(
      userTransferAuthorityPublicKey,
      userPoolTokenPublicKey,
      userFarmTokenPublicKey,
      userRewardTokenPublicKey,
      poolTokenAmount
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

export const createAquafarmRevertTokensInstruction = async (
  aquafarm: Aquafarm,
  userBurnAuthorityPublicKey: PublicKey,
  userPoolTokenPublicKey: PublicKey,
  userFarmTokenPublicKey: PublicKey,
  userRewardTokenPublicKey: PublicKey,
  poolTokenAmount: u64,
  owner: Owner
): Promise<Instruction> => {
  const revertIx = aquafarm.constructRevertTokensIx(
    userBurnAuthorityPublicKey,
    userPoolTokenPublicKey,
    userFarmTokenPublicKey,
    userRewardTokenPublicKey,
    poolTokenAmount
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
