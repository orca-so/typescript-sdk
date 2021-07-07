import { Token, TOKEN_PROGRAM_ID } from "@solana/spl-token";
import { TokenSwap } from "@solana/spl-token-swap";
import { Keypair, PublicKey } from "@solana/web3.js";
import { OrcaPoolParams, OrcaPoolToken } from "../../model/orca/orca-types";
import { ORCA_TOKEN_SWAP_ID } from "../constants";
import { U64Utils } from "../u64-utils";
import { findAssociatedTokenAddress } from "./find-associated-token-address";

export const createApprovalInstruction = async (
  ownerAddress: PublicKey,
  token: OrcaPoolToken,
  approveAmount: number,
  tokenUserAddress?: PublicKey
) => {
  const amountIn = U64Utils.toU64(approveAmount, token.decimals);
  const userTransferAuthority = new Keypair();

  // TODO: userATA should be mandatory when we build the support case to create ATA if it doesn't exist
  const approvedTokenUserAddress =
    tokenUserAddress ?? (await findAssociatedTokenAddress(ownerAddress, token.mint));

  const approvalInstruction = Token.createApproveInstruction(
    TOKEN_PROGRAM_ID,
    approvedTokenUserAddress,
    userTransferAuthority.publicKey,
    ownerAddress,
    [],
    amountIn
  );

  return {
    approvalInstruction: approvalInstruction,
    userTransferAuthority: userTransferAuthority,
  };
};

// TODO: SOL & WSOL Handling
export const createSwapInstruction = async (
  poolParams: OrcaPoolParams,
  ownerAddress: PublicKey,
  inputToken: OrcaPoolToken,
  outputToken: OrcaPoolToken,
  amountIn: number,
  minimumAmountOut: number,
  userTransferAuthority: PublicKey,
  inputTokenUserAddress?: PublicKey,
  outputTokenUserAddress?: PublicKey
) => {
  const amountInU64 = U64Utils.toU64(amountIn, inputToken.decimals);
  const minimumAmountOutU64 = U64Utils.toU64(minimumAmountOut, outputToken.decimals);

  // TODO: userATA should be mandatory when we build the support case to create ATA if it doesn't exist
  const inputUserAddress =
    inputTokenUserAddress ?? (await findAssociatedTokenAddress(ownerAddress, inputToken.mint));
  const outputUserAddress =
    outputTokenUserAddress ?? (await findAssociatedTokenAddress(ownerAddress, outputToken.mint));

  const [authorityForPoolAddress] = await PublicKey.findProgramAddress(
    [poolParams.address.toBuffer()],
    ORCA_TOKEN_SWAP_ID
  );

  const swapInstruction = TokenSwap.swapInstruction(
    poolParams.address,
    authorityForPoolAddress,
    userTransferAuthority,
    inputUserAddress,
    inputToken.addr,
    outputToken.addr,
    outputUserAddress,
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
