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
   * TODO add comments
   */
  deposit: (
    owner: Keypair | PublicKey,
    poolTokenAmount: Decimal | OrcaU64
  ) => Promise<TransactionPayload>;

  /**
   * TODO add comments
   */
  withdraw: (
    owner: Keypair | PublicKey,
    poolTokenAmount: Decimal | OrcaU64
  ) => Promise<TransactionPayload>;
};
