import { AccountLayout, Token, TOKEN_PROGRAM_ID, u64 } from "@solana/spl-token";
import {
  Keypair,
  PublicKey,
  SystemProgram,
  SYSVAR_RENT_PUBKEY,
  TransactionInstruction,
} from "@solana/web3.js";
import { Instruction, SPL_ASSOCIATED_TOKEN_ACCOUNT_PROGRAM_ID } from "../..";
import { ResolvedTokenAddressInstruction } from "../ata-utils";
import { Owner } from "../key-utils";

export const createWSOLAccountInstructions = (
  owner: PublicKey,
  solMint: PublicKey,
  amountIn: u64,
  rentExemptLamports: number
): ResolvedTokenAddressInstruction => {
  const tempAccount = new Keypair();

  const createAccountInstruction = SystemProgram.createAccount({
    fromPubkey: owner,
    newAccountPubkey: tempAccount.publicKey,
    lamports: amountIn.toNumber() + rentExemptLamports,
    space: AccountLayout.span,
    programId: TOKEN_PROGRAM_ID,
  });

  const initAccountInstruction = Token.createInitAccountInstruction(
    TOKEN_PROGRAM_ID,
    solMint,
    tempAccount.publicKey,
    owner
  );

  const closeWSOLAccountInstruction = Token.createCloseAccountInstruction(
    TOKEN_PROGRAM_ID,
    tempAccount.publicKey,
    owner,
    owner,
    []
  );

  return {
    address: tempAccount.publicKey,
    instructions: [createAccountInstruction, initAccountInstruction],
    cleanupInstructions: [closeWSOLAccountInstruction],
    signers: [tempAccount],
  };
};

export function createAssociatedTokenAccountInstruction(
  associatedTokenAddress: PublicKey,
  fundSource: PublicKey,
  destination: PublicKey,
  tokenMint: PublicKey,
  fundAddressOwner: Owner
): Instruction {
  const systemProgramId = new PublicKey("11111111111111111111111111111111");
  const keys = [
    {
      pubkey: fundSource,
      isSigner: true,
      isWritable: true,
    },
    {
      pubkey: associatedTokenAddress,
      isSigner: false,
      isWritable: true,
    },
    {
      pubkey: destination,
      isSigner: false,
      isWritable: false,
    },
    {
      pubkey: tokenMint,
      isSigner: false,
      isWritable: false,
    },
    {
      pubkey: systemProgramId,
      isSigner: false,
      isWritable: false,
    },
    {
      pubkey: TOKEN_PROGRAM_ID,
      isSigner: false,
      isWritable: false,
    },
    {
      pubkey: SYSVAR_RENT_PUBKEY,
      isSigner: false,
      isWritable: false,
    },
  ];
  const createATAInstruction = new TransactionInstruction({
    keys,
    programId: SPL_ASSOCIATED_TOKEN_ACCOUNT_PROGRAM_ID,
    data: Buffer.from([]),
  });
  return {
    instructions: [createATAInstruction],
    cleanupInstructions: [],
    signers: fundAddressOwner.signer ? [fundAddressOwner.signer] : [],
  };
}
