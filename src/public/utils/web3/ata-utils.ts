import { AccountLayout, TOKEN_PROGRAM_ID, u64 } from "@solana/spl-token";
import { Connection, Keypair, PublicKey } from "@solana/web3.js";
import { solToken } from "../../../constants/pools";
import { SPL_ASSOCIATED_TOKEN_ACCOUNT_PROGRAM_ID } from "../constants";
import { emptyInstruction, Instruction } from "../models/instruction";
import { deserializeAccount } from "./deserialize-account";
import {
  createAssociatedTokenAccountInstruction,
  createWSOLAccountInstructions,
} from "./instructions/token-instructions";

export type ResolvedTokenAddressInstruction = { address: PublicKey } & Instruction;

export async function resolveOrCreateAssociatedTokenAddress(
  connection: Connection,
  owner: Keypair,
  tokenMint: PublicKey,
  amountIn = new u64(0)
): Promise<ResolvedTokenAddressInstruction> {
  if (tokenMint !== solToken.mint) {
    const derivedAddress = await deriveAssociatedTokenAddress(owner.publicKey, tokenMint);

    // Check if current wallet has an ATA for this spl-token mint. If not, create one.
    let resolveAtaInstruction = emptyInstruction;
    await connection.getAccountInfo(derivedAddress).then((info) => {
      const tokenAccountInfo = deserializeAccount(info?.data);

      if (!tokenAccountInfo) {
        resolveAtaInstruction = createAssociatedTokenAccountInstruction(
          derivedAddress,
          owner.publicKey,
          owner.publicKey,
          tokenMint,
          owner
        );
      }
    });

    return {
      address: derivedAddress,
      instructions: resolveAtaInstruction.instructions,
      cleanupInstructions: resolveAtaInstruction.cleanupInstructions,
      signers: resolveAtaInstruction.signers,
    };
  } else {
    // TODO: Is there a way to store this cleaner?
    const accountRentExempt = await connection.getMinimumBalanceForRentExemption(
      AccountLayout.span
    );
    // Create a temp-account to transfer SOL in the form of WSOL
    return createWSOLAccountInstructions(
      owner.publicKey,
      solToken.mint,
      amountIn,
      accountRentExempt
    );
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
