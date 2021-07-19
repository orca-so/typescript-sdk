import { Keypair, TransactionInstruction } from "@solana/web3.js";

export type Instruction = {
  instructions: TransactionInstruction[];
  cleanupInstructions: TransactionInstruction[];
  signers: Keypair[];
};
