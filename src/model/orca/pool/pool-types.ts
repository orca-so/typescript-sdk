import { PublicKey } from "@solana/web3.js";
import { OrcaPoolToken } from "../../..";
import { Percentage } from "../../../public";

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
 * @param curveType Trading curve type. 0 - ConstantProduct, 1 - ConstantPrice, 2 - Stable, 3 - Offset
 * @param feeStructure The % of fees collected by this pool
 * @param amp The amplification coefficient for a stable curve pool (defines how flat the AMM curve is when prices are similar)
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
  amp?: number;
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
