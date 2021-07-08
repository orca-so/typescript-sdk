import { PublicKey } from "@solana/web3.js";
import { OrcaPoolConfig } from "./pools";
import Decimal from "decimal.js";

export type Orca = {
  /**
   * Get an instance of an Orca pool.
   * @param pool a pool config targeting an Orca pool
   */
  getPool: (pool: OrcaPoolConfig) => OrcaPool;
};

/**
 * Allows interactions with an Orca liquidity pool.
 */
export type OrcaPool = {
  /**
   * Query the balance for an user address
   * @param wallet The public key for the user.
   * @return Returns the amount of LP token the user owns for this pool.
   */
  getLPBalance: (wallet: PublicKey) => Promise<number>;

  /**
   * Query the supply of LP tokens for this pool.
   * @return Returns the supply of LP tokens for this pool
   */
  getLPSupply: () => Promise<number>;
};
