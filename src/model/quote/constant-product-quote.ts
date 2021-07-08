import { u64 } from "@solana/spl-token";
import Decimal from "decimal.js";
import { Quote } from "../..";
import { DecimalUtil } from "../../utils/decimal-utils";
import { U64Utils } from "../../utils/u64-utils";
import { QuotePoolParams } from "./quote-builder";

/**
 * ConstantProductPools
 *
 * Product price curve:
 * x = inputTokenCount
 * y = outputTokenCount
 * k =  x * y
 */

function getRate(inputTradeAmountU64: u64, params: QuotePoolParams): Decimal {
  const expectedOutputAmountU64 = getExpectedOutputAmount(inputTradeAmountU64, params);
  const inputTradeAmount = DecimalUtil.fromU64(inputTradeAmountU64, params.inputToken.decimals);
  const outputTradeAmount = DecimalUtil.fromU64(
    expectedOutputAmountU64,
    params.outputToken.decimals
  );
  return outputTradeAmount.div(inputTradeAmount);
}

function getPriceImpact(inputTradeAmount: u64, params: QuotePoolParams): Decimal {
  const noSlippageOutputCountU64 = getExpectedOutputAmountWithNoSlippage(inputTradeAmount, params);
  const outputCountU64 = getExpectedOutputAmount(inputTradeAmount, params);

  const noSlippageOutputCount = DecimalUtil.fromU64(
    noSlippageOutputCountU64,
    params.outputToken.decimals
  );
  const outputCount = DecimalUtil.fromU64(outputCountU64, params.outputToken.decimals);

  const impact = noSlippageOutputCount.sub(outputCount).div(noSlippageOutputCount);
  return impact.mul(100);
}

function getFees(inputTradeAmount: u64, params: QuotePoolParams): u64 {
  const { feeStructure } = params;
  const tradingFee = inputTradeAmount
    .mul(feeStructure.traderFee.numerator)
    .div(feeStructure.traderFee.denominator);

  const ownerFee = inputTradeAmount
    .mul(feeStructure.ownerFee.numerator)
    .div(feeStructure.ownerFee.denominator);

  return new u64(tradingFee.add(ownerFee).toString());
}

function getExpectedOutputAmount(inputTradeAmount: u64, params: QuotePoolParams): u64 {
  const inputTradeLessFees = inputTradeAmount.sub(getFees(inputTradeAmount, params));
  return getOutputAmount(inputTradeLessFees, params);
}

function getExpectedOutputAmountWithNoSlippage(
  inputTradeAmount: u64,
  params: QuotePoolParams
): u64 {
  const inputTradeLessFees = inputTradeAmount.sub(getFees(inputTradeAmount, params));
  return inputTradeLessFees.mul(params.outputTokenCount).div(params.inputTokenCount);
}

function getMinimumAmountOut(inputTradeAmount: u64, params: QuotePoolParams): u64 {
  const slippageTolerance = params.slippageTolerance;
  const expectedOutputAmountFees = getExpectedOutputAmount(inputTradeAmount, params);
  const result = expectedOutputAmountFees
    .mul(slippageTolerance.denominator.sub(slippageTolerance.numerator))
    .div(slippageTolerance.denominator);
  return result;
}

// Note: This function matches the calculation done on SERUM and on Web UI.
// Given k = currInputTokenCount * currOutputTokenCount and k = newInputTokenCount * newOutputTokenCount,
// solve for newOutputTokenCount
function getOutputAmount(inputTradeAmount: u64, params: QuotePoolParams): u64 {
  const [poolInputAmount, poolOutputAmount] = [params.inputTokenCount, params.outputTokenCount];

  const invariant = poolInputAmount.mul(poolOutputAmount);

  const [newPoolOutputAmount] = U64Utils.ceilingDivision(
    invariant,
    poolInputAmount.add(inputTradeAmount)
  );

  const outputAmount = poolOutputAmount.sub(newPoolOutputAmount);

  return new u64(outputAmount.toString());
}

export class ConstantProductPoolQuoteBuilder {
  async buildQuote(params: QuotePoolParams, inputTradeAmount: u64): Promise<Quote> {
    return {
      getRate: () => getRate(inputTradeAmount, params),
      getPriceImpact: () => getPriceImpact(inputTradeAmount, params),
      getFees: () =>
        U64Utils.toOrcaU64(getFees(inputTradeAmount, params), params.inputToken.decimals),
      getExpectedOutputAmount: () =>
        U64Utils.toOrcaU64(
          getExpectedOutputAmount(inputTradeAmount, params),
          params.outputToken.decimals
        ),
      getMinOutputAmount: () =>
        U64Utils.toOrcaU64(
          getMinimumAmountOut(inputTradeAmount, params),
          params.outputToken.decimals
        ),
    };
  }
}
