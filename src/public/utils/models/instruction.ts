import {
  Keypair,
  Signer,
  Transaction,
  TransactionInstruction,
  TransactionSignature,
} from "@solana/web3.js";

export type Instruction = {
  instructions: TransactionInstruction[];
  cleanupInstructions: TransactionInstruction[];
  signers: Keypair[];
};

export type TransactionPayload = {
  transaction: Transaction;
  signers: Signer[];
  execute: () => Promise<TransactionSignature>;
};
