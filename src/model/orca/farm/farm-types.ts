import { PublicKey } from "@solana/web3.js";

/**
 * An Orca aquafarm token
 * @param address The farm account address
 * @param farmTokenMint Mint address for the farm token
 * @param rewardTokenMint Mint address for the farm reward token
 * @param rewardTokenDecimals Number of decimal places for the reward token
 * @param baseTokenMint Mint address for the base token
 * @param baseTokenDecimals Number of decimal places for the base token
 */
export type OrcaFarmParams = {
  address: PublicKey;
  farmTokenMint: PublicKey;
  rewardTokenMint: PublicKey;
  rewardTokenDecimals: number;
  baseTokenMint: PublicKey;
  baseTokenDecimals: number;
};
