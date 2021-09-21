import { PublicKey } from "@solana/web3.js";

/**
 * An Orca aquafarm token
 * @param address The farm account address
 * @param farmTokenMint Mint address for the farm token
 * @param rewardTokenMint Mint address for the farm reward token
 * @param poolTokenMint Mint address for the pool token
 * @param poolTokenDecimals Number of decimal places for the pool token
 */
export type OrcaFarmParams = {
  address: PublicKey;
  farmTokenMint: PublicKey;
  rewardTokenMint: PublicKey;
  poolTokenMint: PublicKey;
  poolTokenDecimals: number;
};
