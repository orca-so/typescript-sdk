import { PublicKey } from "@solana/web3.js";
import { Percentage } from "../utils/percentage";

/**
 * An Orca token-swap pool
 * @param address The pool account address
 * @param nonce The nonce used to generate the pool authority
 * @param authority The pool authority PDA address to sign instructions
 * @param poolTokenAddress Public address for the pool token
 * @param poolTokenMint Mint address for the pool token
 * @param poolTokenDecimals Number of decimal places for the pool token
 * @param feeAccount Public address of the pool token fee account
 * @param tokens The name, public key pair of the tokens in this pool
 * @param curveType Trading curve type. 0 - ConstantProduct, 1 - ConstantPrice, 3 - Offset
 */
export type OrcaPoolParams = {
  address: PublicKey;
  nonce: number;
  authority: PublicKey;
  poolTokenAddress: PublicKey;
  poolTokenMint: PublicKey;
  poolTokenDecimals: number;
  feeAccount: PublicKey;
  tokenIds: string[];
  tokens: Record<string, OrcaPoolToken>;
  curveType: CurveType;
  feeStructure: FeeStructure;
};

export type OrcaToken = {
  name: string;
  mint: PublicKey;
  decimals: number;
};

export type OrcaPoolToken = OrcaToken & {
  addr: PublicKey;
};

export enum CurveType {
  ConstantProduct,
  ConstantPrice,
  Stable,
  Offset,
}

export type FeeStructure = {
  traderFee: Percentage;
  ownerFee: Percentage;
};
