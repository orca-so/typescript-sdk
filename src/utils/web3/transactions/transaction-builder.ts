import {
  Connection,
  Keypair,
  PublicKey,
  Transaction,
  TransactionCtorFields,
  TransactionInstruction,
} from "@solana/web3.js";

export default class TransactionBuilder {
  connection: Connection;
  feePayer: PublicKey;
  instructions: TransactionInstruction[];
  cleanupInstructions: TransactionInstruction[];
  signers: Keypair[];

  constructor(connection: Connection, feePayer: PublicKey) {
    this.connection = connection;
    this.feePayer = feePayer;
    this.instructions = [];
    this.cleanupInstructions = [];
    this.signers = [];
  }

  addInstruction(instruction: TransactionInstruction): TransactionBuilder {
    this.instructions.push(instruction);
    return this;
  }

  addInstructions(instructions: TransactionInstruction[] | undefined): TransactionBuilder {
    if (instructions === undefined) {
      return this;
    }
    this.instructions = this.instructions.concat(instructions);
    return this;
  }

  addCleanUpInstruction(instruction: TransactionInstruction | undefined): TransactionBuilder {
    if (instruction === undefined) {
      return this;
    }
    this.cleanupInstructions.push(instruction);
    return this;
  }

  async build() {
    const recentBlockHash = (await this.connection.getRecentBlockhash("singleGossip")).blockhash;
    const txFields: TransactionCtorFields = {
      recentBlockhash: recentBlockHash,
      feePayer: this.feePayer,
    };

    const transaction = new Transaction(txFields);
    transaction.add(...this.instructions.concat(this.cleanupInstructions));
    transaction.feePayer = this.feePayer;

    return transaction;
  }
}
