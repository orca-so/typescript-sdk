import { AccountLayout, TOKEN_PROGRAM_ID, u64 } from "@solana/spl-token";
import { Connection, PublicKey, Signer, TransactionInstruction } from "@solana/web3.js";
import { Instruction } from "..";
import { solToken } from "../../../constants/tokens";
import { SPL_ASSOCIATED_TOKEN_ACCOUNT_PROGRAM_ID } from "../constants";
import { createWSOLAccountInstructions } from "./instructions/token-instructions";

export type ResolvedTokenAddressInstruction = { address: PublicKey } & Instruction;

export async function resolveAssociatedTokenAddress(
  connection: Connection,
  walletAddress: PublicKey,
  tokenMint: PublicKey,
  amountIn = new u64(0)
): Promise<ResolvedTokenAddressInstruction> {
  if (tokenMint !== solToken.mint) {
    return {
      address: await deriveAssociatedTokenAddress(walletAddress, tokenMint),
      instructions: [],
      cleanupInstructions: [],
      signers: [],
    };
  } else {
    // TODO: Is there a way to store this cleaner?
    const accountRentExempt = await connection.getMinimumBalanceForRentExemption(
      AccountLayout.span
    );
    // Create a temp-account to transfer SOL in the form of WSOL
    return createWSOLAccountInstructions(walletAddress, solToken.mint, amountIn, accountRentExempt);
  }
}

export async function deriveAssociatedTokenAddress(
  walletAddress: PublicKey,
  tokenMint: PublicKey
): Promise<PublicKey> {
  return (
    await PublicKey.findProgramAddress(
      [walletAddress.toBuffer(), TOKEN_PROGRAM_ID.toBuffer(), tokenMint.toBuffer()],
      SPL_ASSOCIATED_TOKEN_ACCOUNT_PROGRAM_ID
    )
  )[0];
}
