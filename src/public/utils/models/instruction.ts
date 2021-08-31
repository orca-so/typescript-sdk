import {
  Keypair,
  PublicKey,
  Signer,
  Transaction,
  TransactionInstruction,
  TransactionSignature,
} from "@solana/web3.js";

export const emptyInstruction: Instruction = {
  instructions: [],
  cleanupInstructions: [],
  signers: [],
};

export type Instruction = {
  instructions: TransactionInstruction[];
  cleanupInstructions: TransactionInstruction[];
  signers: Signer[];
};

export type TransactionPayload = {
  transaction: Transaction;
  signers: Signer[];
  execute: () => Promise<TransactionSignature>;
};
