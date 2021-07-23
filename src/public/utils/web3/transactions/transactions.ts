import { Connection, Signer, Transaction, TransactionSignature } from "@solana/web3.js";
import { nowMS } from "../../time-utils";

const TIMEOUT_MS = 60_000;
const REFRESH_INTERVAL_MS = 1_000;

async function getConfirmation(connection: Connection, txid: string): Promise<boolean> {
  try {
    const { value } = await connection.getSignatureStatus(txid);
    // Due to a bug (https://github.com/solana-labs/solana/issues/15461)
    // the `confirmationStatus` field could be unpopulated.
    // To handle this case, also check the `confirmations` field.
    // Note that a `null` value for `confirmations` signals that the
    // transaction was finalized.
    return (
      (typeof value?.confirmations === "number" && value?.confirmations > 0) ||
      value?.confirmations === null ||
      value?.confirmationStatus === "confirmed"
    );
  } catch (e) {
    console.error(e);
    return false;
  }
}

async function confirmTransaction(
  connection: Connection,
  txid: TransactionSignature
): Promise<TransactionSignature> {
  const startTime = nowMS();
  while (true) {
    if (await getConfirmation(connection, txid)) {
      return txid;
    }

    if (nowMS() - startTime > TIMEOUT_MS) {
      throw new Error(`Raw transaction ${txid} failed (${JSON.stringify(txid)})`);
    }

    await new Promise((resolve) => setTimeout(resolve, REFRESH_INTERVAL_MS));
  }
}

export async function sendAndConfirmTransaction(
  connection: Connection,
  tx: Transaction,
  signers: Signer[]
): Promise<TransactionSignature> {
  // TODO: Support Wallet Signing
  tx.sign(...signers);

  const txId = await connection.sendRawTransaction(tx.serialize());
  return await confirmTransaction(connection, txId);
}
