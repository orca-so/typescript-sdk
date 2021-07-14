import { Keypair, PublicKey, TransactionSignature } from "@solana/web3.js";
import Decimal from "decimal.js";
import { OrcaPoolConfig } from "./pools";
import { OrcaU64 } from "./utils/orca-u64";

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
   * Query the token id of tokenA in this pool.
   * The token id is the mint of the token.
   * @returns Returns the token id of tokenA in this pool
   */
  getTokenAId: () => string;

  /**
   * Query the token id of the tokenB in this pool
   * The token id is the mint of the token.
   * @returns Returns the token id of tokenB in this pool
   */
  getTokenBId: () => string;

  /**
   * Query the balance for an user address
   * @param wallet The public key for the user.
   * @return Returns the amount of LP token the user owns for this pool.
   */
  getLPBalance: (owner: PublicKey) => Promise<OrcaU64>;

  /**
   * Query the supply of LP tokens for this pool.
   * @return Returns the supply of LP tokens for this pool
   */
  getLPSupply: () => Promise<OrcaU64>;

  /**
   * Get the latest quote to trade one token to another in this pool
   * @param inputTokenId The token you want to trade from
   * @param inputAmount The amount of token you would to trade
   * @param slippage The slippage in percentage you are willing to take in this trade
   * @return Returns a quote on the exchanged token based on the input token amount
   */
  getQuote: (inputTokenId: string, inputAmount: OrcaU64, slippage: number) => Promise<Quote>;

  // TODO: amountIn & minimumAmountOut type should be u64
  /**
   * Perform a swap from the input type to the other token in the pool.
   * Fee for the transaction will be paid by the owner's wallet.
   *
   * NOTE: User has to ensure that their owner address has established spl-token accounts for the trading pair.
   *
   * @param owner The keypair for the user's wallet
   * @param inputTokenId An Orca supported token id in the user's wallet to swap from
   * @param amountIn The amount of inputToken to swap from
   * @param minimumAmountOut The minimum amount of outputToken to receive from this swap
   * @return The transaction signature of the swap instruction
   */
  swap: (
    owner: Keypair,
    inputTokenId: string,
    amountIn: OrcaU64,
    minimumAmountOut: OrcaU64
  ) => Promise<TransactionSignature>;
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
