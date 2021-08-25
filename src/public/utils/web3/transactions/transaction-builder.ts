import {
  Connection,
  Keypair,
  PublicKey,
  sendAndConfirmTransaction,
  Transaction,
  TransactionCtorFields,
  TransactionInstruction,
} from "@solana/web3.js";
import { Instruction, TransactionPayload } from "../..";
import { ExecutableTransactionPayload } from "../../models";
import { onlyKeyPairs, Owner } from "../key-utils";

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
    let signers: (Keypair | PublicKey)[] = [];
    this.instructions.forEach((curr) => {
      instructions = instructions.concat(curr.instructions);
      cleanupInstructions = cleanupInstructions.concat(curr.cleanupInstructions);
      signers = signers.concat(curr.signers);
    });

    const transaction = new Transaction(txFields);
    transaction.add(...instructions.concat(cleanupInstructions));
    transaction.feePayer = this.feePayer;

    if (onlyKeyPairs(signers)) {
      return {
        transaction: transaction,
        signers: signers as Keypair[],
        execute: async () => {
          return sendAndConfirmTransaction(this.connection, transaction, signers as Keypair[]);
        },
      } as ExecutableTransactionPayload;
    } else {
      return {
        transaction: transaction,
        signers: signers,
      } as TransactionPayload;
    }
  }
}
