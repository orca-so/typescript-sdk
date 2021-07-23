import { Keypair, PublicKey, TransactionSignature } from "@solana/web3.js";
import Decimal from "decimal.js";
import { OrcaU64 } from "..";

/**
 * Allows interactions with an Orca liquidity pool.
 */
export type OrcaPool = {
  /**
   * Query the token of tokenA in this pool.
   * @returns Returns the token id of tokenA in this pool
   */
  getTokenA: () => OrcaToken;

  /**
   * Query the token of tokenB in this pool.
   * @returns Returns the token id of tokenB in this pool
   */
  getTokenB: () => OrcaToken;

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
   *
   * Note: slippage supports a maximum scale of 1 (ex. 0.1%). Additional decimal places will be floored.
   *
   * @param inputTokenId The token you want to trade from
   * @param inputAmount The amount of token you would to trade
   * @param slippage The slippage in percentage you are willing to take in this trade
   * @return Returns a quote on the exchanged token based on the input token amount
   */
  getQuote: (
    inputToken: OrcaToken,
    inputAmount: Decimal | OrcaU64,
    slippage: Decimal
  ) => Promise<Quote>;

  /**
   * Perform a swap from the input type to the other token in the pool.
   * Fee for the transaction will be paid by the owner's wallet.
   *
   * NOTE:
   * 1. User has to ensure that their owner address has established spl-token accounts for the trading pair.
   * 2. OrcaU64 must have the same scale as the corresponding token scale value
   *
   * @param owner The keypair for the user's wallet
   * @param inputToken An Orca supported token in the user's wallet to swap from
   * @param amountIn The amount of inputToken to swap from
   * @param minimumAmountOut The minimum amount of outputToken to receive from this swap
   * @return The transaction signature of the swap instruction
   */
  swap: (
    owner: Keypair,
    inputToken: OrcaToken,
    amountIn: Decimal | OrcaU64,
    minimumAmountOut: Decimal | OrcaU64
  ) => Promise<TransactionSignature>;
};

/**
 * An Orca Token
 * @param tag The tag of the token
 * @param name The presentable name of the token
 * @param mint The mint public key for the token
 * @param scale The scale of the u64 return type
 */
export type OrcaToken = {
  tag: string;
  name: string;
  mint: PublicKey;
  scale: number;
};

export type Quote = {
  /**
   * Returns the rate of exchange given the trade amount. Fees are included.
   * Rate is zero if the input trade amount, input or output token balance in pool is zero.
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
   * @return a function to return the % impact to the rate if this transaction goes through. Zero if input or output token balance in pool is zero.
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
