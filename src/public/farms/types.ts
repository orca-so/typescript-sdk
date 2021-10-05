import { Keypair, PublicKey } from "@solana/web3.js";
import Decimal from "decimal.js";
import { OrcaU64, TransactionPayload } from "..";

export type OrcaFarm = {
  /**
   * Query the balance for an user address
   * @param wallet The public key for the user.
   * @return Returns the amount of farm token the user owns for this pool.
   */
  getFarmBalance: (owner: PublicKey) => Promise<OrcaU64>;

  /**
   * Query the supply of farm tokens for this pool.
   * @return Returns the supply of farm tokens for this pool.
   */
  getFarmSupply: () => Promise<OrcaU64>;

  /**
   * Perfrom a deposit: send baseToken, and receive farmToken in return.
   * Fee for the transaction will be paid by the owner's wallet.
   *
   * NOTE:
   * 1. Associated Token Address initialization instructions will be appended if the ATA of the specified token does not exist in the user's wallet
   * 2. OrcaU64 must have the same scale as the corresponding token scale value
   *
   * @param owner The keypair for the user's wallet or just the user's public key
   * @param baseTokenAmount The amount of baseToken to deposit
   * @return The transaction signature of the deposit instruction
   */
  deposit: (
    owner: Keypair | PublicKey,
    baseTokenAmount: Decimal | OrcaU64
  ) => Promise<TransactionPayload>;

  /**
   * Perfrom a withdraw: send farmToken, and receive baseToken in return.
   * Fee for the transaction will be paid by the owner's wallet.
   *
   * WARNING:
   * 1. Withdraw is only supported from the public key that initiated the deposit.
   *
   * NOTE:
   * 1. Associated Token Address initialization instructions will be appended if the ATA of the specified token does not exist in the user's wallet
   * 2. OrcaU64 must have the same scale as the corresponding token scale value
   *
   * @param owner The keypair for the user's wallet or just the user's public key
   * @param baseTokenAmount The amount of baseToken to receive
   * @return The transaction signature of the deposit instruction
   */
  withdraw: (
    owner: Keypair | PublicKey,
    baseTokenAmount: Decimal | OrcaU64
  ) => Promise<TransactionPayload>;

  /**
   *
   * @param owner The keypair for the user's wallet or just the user's public key
   */
  getHarvestableAmount: (owner: Keypair | PublicKey) => Promise<OrcaU64>;

  /**
   *
   * @param owner The keypair for the user's wallet or just the user's public key
   */
  harvest: (owner: Keypair | PublicKey) => Promise<TransactionPayload>;
};
