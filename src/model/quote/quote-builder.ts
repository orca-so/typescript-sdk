import { u64 } from "@solana/spl-token";
import { OrcaToken, Quote } from "../..";
import { PoolTokenCount, Percentage } from "../../public";
import { FeeStructure, CurveType } from "../orca/pool/pool-types";
import { ConstantProductPoolQuoteBuilder } from "./constant-product-quote";
import { StablePoolQuoteBuilder } from "./stable-quote";

export type QuotePoolParams = PoolTokenCount & {
  inputToken: OrcaToken;
  outputToken: OrcaToken;
  inputTokenCount: u64;
  outputTokenCount: u64;
  feeStructure: FeeStructure;
  slippageTolerance: Percentage;
  lamportsPerSignature: number;
  amp?: u64;
};

export interface QuoteBuilder {
  buildQuote(pool: QuotePoolParams, inputAmount: u64): Quote;
}

export class QuoteBuilderFactory {
  static getBuilder(curveType: CurveType): QuoteBuilder | undefined {
    switch (curveType) {
      case CurveType.ConstantProduct:
        return new ConstantProductPoolQuoteBuilder();
      case CurveType.Stable:
        return new StablePoolQuoteBuilder();
      default:
        return undefined;
    }
  }
}
