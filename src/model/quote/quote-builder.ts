import { u64 } from "@solana/spl-token";
import { OrcaToken, Quote } from "../../public/types";
import { PoolTokenCount } from "../../utils/web3/get-token-count";
import { CurveType, FeeStructure } from "../orca/pool/pool-types";
import { Percentage } from "../utils/percentage";
import { ConstantProductPoolQuoteBuilder } from "./constant-product-quote";

export type QuotePoolParams = PoolTokenCount & {
  inputToken: OrcaToken;
  outputToken: OrcaToken;
  feeStructure: FeeStructure;
  slippageTolerance: Percentage;
  lamportsPerSignature: number;
};

export interface QuoteBuilder {
  buildQuote(pool: QuotePoolParams, inputAmount: u64): Quote;
}

export class QuoteBuilderFactory {
  static getBuilder(curveType: CurveType): QuoteBuilder | undefined {
    switch (curveType) {
      case CurveType.ConstantProduct:
        return new ConstantProductPoolQuoteBuilder();
      default:
        return undefined;
    }
  }
}
