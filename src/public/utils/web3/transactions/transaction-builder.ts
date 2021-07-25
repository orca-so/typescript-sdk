import {
  Connection,
  Keypair,
  PublicKey,
  sendAndConfirmTransaction,
  Transaction,
  TransactionCtorFields,
  TransactionInstruction,
  TransactionSignature,
} from "@solana/web3.js";
import { Instruction, TransactionPayload } from "../..";

export class TransactionBuilder {
  private connection: Connection;
  private feePayer: PublicKey;
  private instructions: Instruction[];

  constructor(connection: Connection, feePayer: PublicKey) {
    this.connection = connection;
    this.feePayer = feePayer;
    this.instructions = [];
  }

  addInstruction(instruction: Instruction): TransactionBuilder {
    this.instructions.push(instruction);
    return this;
  }

  async build() {
    const recentBlockHash = (await this.connection.getRecentBlockhash("singleGossip")).blockhash;
    const txFields: TransactionCtorFields = {
      recentBlockhash: recentBlockHash,
      feePayer: this.feePayer,
    };

    let instructions: TransactionInstruction[] = [];
    let cleanupInstructions: TransactionInstruction[] = [];
    let signers: Keypair[] = [];
    this.instructions.forEach((curr) => {
      instructions = instructions.concat(curr.instructions);
      cleanupInstructions = cleanupInstructions.concat(curr.cleanupInstructions);
      signers = signers.concat(curr.signers);
    });

    const transaction = new Transaction(txFields);
    transaction.add(...instructions.concat(cleanupInstructions));
    transaction.feePayer = this.feePayer;

    const payload: TransactionPayload = {
      transaction: transaction,
      signers: signers,
      execute: async () => {
        return sendAndConfirmTransaction(this.connection, transaction, signers);
      },
    };

    return payload;
  }
}
