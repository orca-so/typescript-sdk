import { Token, TOKEN_PROGRAM_ID, u64 } from "@solana/spl-token";
import { TokenSwap } from "@solana/spl-token-swap";
import { Keypair, PublicKey } from "@solana/web3.js";
import { OrcaPoolParams, OrcaPoolToken } from "../../../model/orca/pool/pool-types";
import { ORCA_TOKEN_SWAP_ID } from "../../constants";

export const createUserTransferAuthority = (
  ownerAddress: PublicKey,
  approveAmount: u64,
  tokenUserAddress: PublicKey
) => {
  const userTransferAuthority = new Keypair();

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
    approvalInstruction: approvalInstruction,
    revokeInstruction: revokeInstruction,
  };
};

export const createSwapInstruction = async (
  poolParams: OrcaPoolParams,
  ownerAddress: PublicKey,
  inputToken: OrcaPoolToken,
  inputTokenUserAddress: PublicKey,
  outputToken: OrcaPoolToken,
  outputTokenUserAddress: PublicKey,
  amountIn: u64,
  minimumAmountOut: u64,
  userTransferAuthority: PublicKey
) => {
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
    ownerAddress,
    ORCA_TOKEN_SWAP_ID,
    TOKEN_PROGRAM_ID,
    amountInU64,
    minimumAmountOutU64
  );

  return swapInstruction;
};
