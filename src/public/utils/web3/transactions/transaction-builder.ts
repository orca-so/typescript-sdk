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

export class TransactionBuilder {
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

  addInstruction(instruction: Instruction): TransactionBuilder {
    this.instructions.push(instruction);
    return this;
  }

  async build(): Promise<TransactionPayload> {
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
      cleanupInstructions = curr.cleanupInstructions.concat(cleanupInstructions);
      signers = signers.concat(curr.signers);
    });

    const transaction = new Transaction(txFields);
    transaction.add(...instructions.concat(cleanupInstructions));
    transaction.feePayer = this.feePayer;

    return {
      transaction: transaction,
      signers: signers,
      execute: this.owner.isKeyPair
        ? async () => {
            return sendAndConfirmTransaction(this.connection, transaction, signers);
          }
        : async () => {
            throw new Error(
              "Please use a Keypair for the owner parameter to enable the execute function"
            );
          },
    };
  }
}
