import { Token, TOKEN_PROGRAM_ID, u64 } from "@solana/spl-token";
import { TokenSwap } from "@solana/spl-token-swap";
import { Keypair, PublicKey } from "@solana/web3.js";
import { OrcaPoolParams, OrcaPoolToken } from "../../../../model/orca/pool/pool-types";
import { OrcaToken } from "../../../pools";
import { ORCA_TOKEN_SWAP_ID } from "../../constants";
import { Instruction } from "../../models";

export const createApprovalInstruction = (
  ownerAddress: PublicKey,
  approveAmount: u64,
  tokenUserAddress: PublicKey,
  userTransferAuthority?: Keypair
): { userTransferAuthority: Keypair } & Instruction => {
  userTransferAuthority = userTransferAuthority || new Keypair();

  const approvalInstruction = Token.createApproveInstruction(
    TOKEN_PROGRAM_ID,
    tokenUserAddress,
    userTransferAuthority.publicKey,
    ownerAddress,
    [],
    approveAmount
  );

  const revokeInstruction = Token.createRevokeInstruction(
    TOKEN_PROGRAM_ID,
    tokenUserAddress,
    ownerAddress,
    []
  );

  return {
    userTransferAuthority: userTransferAuthority,
    instructions: [approvalInstruction],
    cleanupInstructions: [revokeInstruction],
    signers: [userTransferAuthority],
  };
};

export const createSwapInstruction = async (
  poolParams: OrcaPoolParams,
  owner: Keypair,
  inputToken: OrcaPoolToken,
  inputTokenUserAddress: PublicKey,
  outputToken: OrcaPoolToken,
  outputTokenUserAddress: PublicKey,
  amountIn: u64,
  minimumAmountOut: u64,
  userTransferAuthority: PublicKey
): Promise<Instruction> => {
  const amountInU64 = amountIn;
  const minimumAmountOutU64 = minimumAmountOut;

  const [authorityForPoolAddress] = await PublicKey.findProgramAddress(
    [poolParams.address.toBuffer()],
    ORCA_TOKEN_SWAP_ID
  );

  const swapInstruction = TokenSwap.swapInstruction(
    poolParams.address,
    authorityForPoolAddress,
    userTransferAuthority,
    inputTokenUserAddress,
    inputToken.addr,
    outputToken.addr,
    outputTokenUserAddress,
    poolParams.poolTokenMint,
    poolParams.feeAccount,
    null,
    ORCA_TOKEN_SWAP_ID,
    TOKEN_PROGRAM_ID,
    amountInU64,
    minimumAmountOutU64
  );

  return {
    instructions: [swapInstruction],
    cleanupInstructions: [],
    signers: [owner],
  };
};

export const createDepositInstruction = async (
  poolParams: OrcaPoolParams,
  userTransferAuthorityPublicKey: PublicKey,
  userTokenAPublicKey: PublicKey,
  userTokenBPublicKey: PublicKey,
  userPoolTokenPublicKey: PublicKey,
  poolTokenAmount: u64,
  maximumTokenA: u64,
  maximumTokenB: u64,
  tokenAPublicKey: PublicKey,
  tokenBPublicKey: PublicKey,
  owner: Keypair
): Promise<Instruction> => {
  const depositInstruction = TokenSwap.depositAllTokenTypesInstruction(
    poolParams.address,
    poolParams.authority,
    userTransferAuthorityPublicKey,
    userTokenAPublicKey,
    userTokenBPublicKey,
    tokenAPublicKey,
    tokenBPublicKey,
    userPoolTokenPublicKey,
    poolParams.poolTokenMint,
    ORCA_TOKEN_SWAP_ID,
    TOKEN_PROGRAM_ID,
    poolTokenAmount,
    maximumTokenA,
    maximumTokenB
  );

  return {
    instructions: [depositInstruction],
    cleanupInstructions: [],
    signers: [owner],
  };
};

export const createWithdrawInstruction = async (
  poolParams: OrcaPoolParams,
  userTransferAuthorityPublicKey: PublicKey,
  userTokenAPublicKey: PublicKey,
  userTokenBPublicKey: PublicKey,
  userPoolTokenPublicKey: PublicKey,
  poolTokenAmount: u64,
  minimumTokenA: u64,
  minimumTokenB: u64,
  tokenAPublicKey: PublicKey,
  tokenBPublicKey: PublicKey,
  owner: Keypair
): Promise<Instruction> => {
  const withdrawInstruction = TokenSwap.withdrawAllTokenTypesInstruction(
    poolParams.address,
    poolParams.authority,
    userTransferAuthorityPublicKey,
    poolParams.poolTokenMint,
    poolParams.feeAccount,
    userPoolTokenPublicKey,
    tokenAPublicKey,
    tokenBPublicKey,
    userTokenAPublicKey,
    userTokenBPublicKey,
    ORCA_TOKEN_SWAP_ID,
    TOKEN_PROGRAM_ID,
    poolTokenAmount,
    minimumTokenA,
    minimumTokenB
  );

  return {
    instructions: [withdrawInstruction],
    cleanupInstructions: [],
    signers: [owner],
  };
};
