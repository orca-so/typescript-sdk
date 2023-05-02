import { AccountLayout, TOKEN_PROGRAM_ID, u64 } from "@solana/spl-token";
import { Connection, Keypair, PublicKey } from "@solana/web3.js";
import { solToken } from "../../../constants/tokens";
import { SPL_ASSOCIATED_TOKEN_ACCOUNT_PROGRAM_ID } from "../constants";
import { emptyInstruction, Instruction } from "../models/instruction";
import { deserializeAccount } from "./deserialize-account";
import {
  createAssociatedTokenAccountInstruction,
  createWSOLAccountInstructions,
} from "./instructions/token-instructions";
import { Owner } from "./key-utils";

export type ResolvedTokenAddressInstruction = { address: PublicKey } & Instruction;

/**
 * IMPORTANT: wrappedSolAmountIn should only be used for input/source token that
 *            could be SOL. This is because when SOL is the output, it is the end
 *            destination, and thus does not need to be wrapped with an amount.
 *
 * @param connection Solana connection class
 * @param owner The keypair for the user's wallet or just the user's public key
 * @param tokenMint Token mint address
 * @param wrappedSolAmountIn Optional. Only use for input/source token that could be SOL
 * @returns
 */
export async function resolveOrCreateAssociatedTokenAddress(
  connection: Connection,
  owner: Owner,
  tokenMint: PublicKey,
  wrappedSolAmountIn = new u64(0)
): Promise<ResolvedTokenAddressInstruction> {
  if (!tokenMint.equals(solToken.mint)) {
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
      wrappedSolAmountIn,
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
