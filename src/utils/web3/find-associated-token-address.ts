import { TOKEN_PROGRAM_ID } from "@solana/spl-token";
import { PublicKey } from "@solana/web3.js";
import { SPL_ASSOCIATED_TOKEN_ACCOUNT_PROGRAM_ID } from "../constants";

export async function deriveAssociatedTokenAddresses(
  walletAddress: PublicKey,
  tokenMints: PublicKey[]
): Promise<PublicKey[]> {
  const findATAPromises = tokenMints.map((mint) => findAssociatedTokenAddress(walletAddress, mint));
  return Promise.all(findATAPromises);
}

export async function findAssociatedTokenAddress(
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
