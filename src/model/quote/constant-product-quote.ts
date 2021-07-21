import { u64 } from "@solana/spl-token";
import Decimal from "decimal.js";
import { OrcaU64, Quote } from "../..";
import { DecimalUtil } from "../../utils/numbers/decimal-utils";
import { U64Utils, ZERO } from "../../utils/numbers/u64-utils";
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
  if (inputTradeAmountU64.eq(ZERO)) {
    return new Decimal(0);
  }

  const expectedOutputAmountU64 = getExpectedOutputAmount(inputTradeAmountU64, params);
  const inputTradeAmount = DecimalUtil.fromU64(inputTradeAmountU64, params.inputToken.scale);
  const outputTradeAmount = DecimalUtil.fromU64(expectedOutputAmountU64, params.outputToken.scale);
  return outputTradeAmount.div(inputTradeAmount).toDecimalPlaces(params.outputToken.scale);
}

function getPriceImpact(inputTradeAmount: u64, params: QuotePoolParams): Decimal {
  if (inputTradeAmount.eq(ZERO) || params.outputTokenCount.eq(ZERO)) {
    return new Decimal(0);
  }

  const noSlippageOutputCountU64 = getExpectedOutputAmountWithNoSlippage(inputTradeAmount, params);
  const outputCountU64 = getExpectedOutputAmount(inputTradeAmount, params);

  const noSlippageOutputCount = DecimalUtil.fromU64(
    noSlippageOutputCountU64,
    params.outputToken.scale
  );
  const outputCount = DecimalUtil.fromU64(outputCountU64, params.outputToken.scale);

  const impact = noSlippageOutputCount.sub(outputCount).div(noSlippageOutputCount);
  return impact.mul(100).toDecimalPlaces(params.outputToken.scale);
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
  if (params.inputTokenCount.eq(ZERO)) {
    return params.outputTokenCount;
  }

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
  buildQuote(params: QuotePoolParams, inputTradeAmount: u64): Quote {
    return {
      getRate: () => getRate(inputTradeAmount, params),
      getPriceImpact: () => getPriceImpact(inputTradeAmount, params),
      getFees: () => OrcaU64.fromU64(getFees(inputTradeAmount, params), params.inputToken.scale),
      getExpectedOutputAmount: () =>
        OrcaU64.fromU64(
          getExpectedOutputAmount(inputTradeAmount, params),
          params.outputToken.scale
        ),
      getMinOutputAmount: () =>
        OrcaU64.fromU64(getMinimumAmountOut(inputTradeAmount, params), params.outputToken.scale),
    };
  }
}
