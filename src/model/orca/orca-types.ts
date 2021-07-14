import { PublicKey } from "@solana/web3.js";
import { Percentage } from "../utils/percentage";

/**
 * An Orca token-swap pool
 * @param address The pool account address
 * @param nonce The nonce used to generate the pool authority
 * @param authority The pool authority PDA address to sign instructions
 * @param poolTokenMint Mint address for the pool token
 * @param poolTokenDecimals Number of decimal places for the pool token
 * @param feeAccount Public address of the pool token fee account
 * @param tokenIds The ids of the tokens in this pool
 * @param tokens The id, token object of the tokens in this pool
 * @param curveType Trading curve type. 0 - ConstantProduct, 1 - ConstantPrice, 3 - Offset
 * @param feeStructure The % of fees collected by this pool
 */
export type OrcaPoolParams = {
  address: PublicKey;
  nonce: number;
  authority: PublicKey;
  poolTokenMint: PublicKey;
  poolTokenDecimals: number;
  feeAccount: PublicKey;
  tokenIds: string[];
  tokens: Record<string, OrcaPoolToken>;
  curveType: CurveType;
  feeStructure: FeeStructure;
};

/**
 * An Orca Token
 * @param id The id of the token
 * @param name The presentable name of the token
 * @param mint The mint public key for the token
 * @param decimals The number of integers in the u64 return type representing the fractional part of the number
 */
export type OrcaToken = {
  id: string;
  name: string;
  mint: PublicKey;
  decimals: number;
};

/**
 * An Orca Token within an OrcaPool
 * @param addr The public key for this token for this Orca Pool
 */
export type OrcaPoolToken = OrcaToken & {
  addr: PublicKey;
};

export enum CurveType {
  ConstantProduct,
  ConstantPrice,
  Stable,
  Offset,
}

/**
 * @param traderFee Percentage of the fee that goes to the liquidity providers
 * @param ownerFee Percentage of the fee that goes to orca
 */
export type FeeStructure = {
  traderFee: Percentage;
  ownerFee: Percentage;
};
