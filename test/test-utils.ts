import { u64 } from "@solana/spl-token";
import { PublicKey } from "@solana/web3.js";
import Decimal from "decimal.js";
import { OrcaToken } from "../src";
import { FeeStructure } from "../src/model/orca/pool/pool-types";
import { QuotePoolParams } from "../src/model/quote/quote-builder";
import { Percentage } from "../src/public";

export const defaultSOLToken: OrcaToken = {
  tag: "SOL",
  name: "Solana",
  mint: new PublicKey("So11111111111111111111111111111111111111112"),
  scale: 9,
};

export const defaultUsdcToken: OrcaToken = {
  tag: "USDC",
  name: "USD Coin",
  mint: new PublicKey("EPjFWdd5AufqSSqeM2qN1xzybapC8G4wEGGkZwyTDt1v"),
  scale: 6,
};

export const defaultEthToken: OrcaToken = {
  tag: "ETH",
  name: "Ethereum",
  mint: new PublicKey("2FPyTwcZLUg1MDrwsyoP4D6s1tM7hAkHYRjkNb5w6Pxk"),
  scale: 6,
};

export const defaultFeeStructure: FeeStructure = {
  traderFee: Percentage.fromDecimal(new Decimal(0.2)),
  ownerFee: Percentage.fromDecimal(new Decimal(0.1)),
};

export const defaultLamportsPerSignature: number = 5000;

export const defaultQuotePoolParams: QuotePoolParams = {
  inputTokenCount: new u64("27638693975460"),
  outputTokenCount: new u64("670432580208"),
  inputToken: defaultSOLToken,
  outputToken: defaultUsdcToken,
  feeStructure: defaultFeeStructure,
  slippageTolerance: Percentage.fromDecimal(new Decimal(0.1)),
  lamportsPerSignature: defaultLamportsPerSignature,
};
