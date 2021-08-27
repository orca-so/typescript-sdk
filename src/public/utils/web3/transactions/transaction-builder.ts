import {
  Connection,
  PublicKey,
  sendAndConfirmTransaction,
  Transaction,
  TransactionCtorFields,
  Signer,
  Keypair,
  TransactionInstruction,
} from "@solana/web3.js";
import { Instruction } from "../..";
import { TransactionPayload } from "../../models";
import { Owner } from "../key-utils";

export class TransactionBuilder<Owner extends Keypair | PublicKey> {
  private connection: Connection;
  private feePayer: PublicKey;
  private instructions: Instruction[];
  private owner: Owner;

  constructor(connection: Connection, feePayer: PublicKey, owner: Owner) {
    this.connection = connection;
    this.feePayer = feePayer;
    this.instructions = [];
    this.owner = owner;
  }

  addInstruction(instruction: Instruction): TransactionBuilder<Owner> {
    this.instructions.push(instruction);
    return this;
  }

  async build(): Promise<TransactionPayload<Owner>> {
    const recentBlockHash = (await this.connection.getRecentBlockhash("singleGossip")).blockhash;
    const txFields: TransactionCtorFields = {
      recentBlockhash: recentBlockHash,
      feePayer: this.feePayer,
    };

    let instructions: TransactionInstruction[] = [];
    let cleanupInstructions: TransactionInstruction[] = [];
    let signers: Signer[] = [];
    this.instructions.forEach((curr) => {
      instructions = instructions.concat(curr.instructions);
      cleanupInstructions = cleanupInstructions.concat(curr.cleanupInstructions);
      signers = signers.concat(curr.signers);
    });

    const transaction = new Transaction(txFields);
    transaction.add(...instructions.concat(cleanupInstructions));
    transaction.feePayer = this.feePayer;

    return {
      transaction: transaction,
      signers: signers,
      execute: Owner.isKeyPair(this.owner)
        ? async () => {
            return sendAndConfirmTransaction(this.connection, transaction, signers);
          }
        : undefined,
    } as TransactionPayload<Owner>;
  }
}
