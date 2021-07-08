import { PublicKey } from "@solana/web3.js";
import Decimal from "decimal.js";
import { OrcaU64 } from "..";
import { OrcaPoolConfig } from "./pools";

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
   * Query the token id of tokenA in this pool
   * @returns Returns the token id of tokenA in this pool
   */
  getTokenAId: () => string;

  /**
   * Query the token id of the tokenB in this pool
   * @returns Returns the token id of tokenB in this pool
   */
  getTokenBId: () => string;

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

  /**
   * Get the latest quote to trade one token to another in this pool
   * @param inputTokenId The token you want to trade from
   * @param inputAmount The amount of token you would to trade
   * @param slippage The slippage in percentage you are willing to take in this trade
   * @return Returns a quote on the exchanged token based on the input token amount
   */
  getQuote: (inputTokenId: string, inputAmount: Decimal, slippage: number) => Promise<Quote>;
};

export type Quote = {
  /**
   * Returns the rate of exchange given the trade amount. Fees are included.
   * @returns a function that returns the rate of exchange when the quote was built (denominated by output token)
   */
  getRate: () => Decimal;

  /**
   * Returns the fee that will be charged in this exchange.
   * @return a function that returns the fee (denominated by input token) that will be charged in this exchange.
   */
  getFees: () => OrcaU64;

  /**
   * Returns the % impact to the rate if this transaction goes through.
   * @return a function to return the % impact to the rate if this transaction goes through.
   */
  getPriceImpact: () => Decimal;

  /**
   * Returns the expected amount of output tokens returned if this exchange is transacted. Fees applied.
   * @return a function to return the expected amount of output tokens returned if this exchange is transacted
   */
  getExpectedOutputAmount: () => OrcaU64;

  /**
   * Returns the minimum amount of output tokens returned if this exchange is transacted. Fees & maximum slippage applied.
   * @return a function to return the minimum amount of output tokens returned if this exchange is transacted
   */
  getMinOutputAmount: () => OrcaU64;
};
