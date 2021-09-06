import { u64 } from "@solana/spl-token";
import Decimal from "decimal.js";
import { computeBaseOutputAmount, computeOutputAmount } from "@orca-so/stablecurve";
import { QuotePoolParams } from "./quote-builder";
import { DecimalUtil, OrcaU64, Quote, ZERO } from "../../public";
import { solToken } from "../../constants/tokens";

function getInputAmountLessFees(inputTradeAmount: u64, params: QuotePoolParams): u64 {
  return inputTradeAmount.sub(getLPFees(inputTradeAmount, params));
}

function getOutputAmountWithNoSlippage(
  inputTradeAmountLessFees: u64,
  params: QuotePoolParams
): u64 {
  const [poolInputAmount, poolOutputAmount, amp] = [
    params.inputTokenCount,
    params.outputTokenCount,
    params.amp!,
  ];

  return computeBaseOutputAmount(inputTradeAmountLessFees, poolInputAmount, poolOutputAmount, amp);
}

function getOutputAmount(inputTradeAmountLessFees: u64, params: QuotePoolParams): u64 {
  const [poolInputAmount, poolOutputAmount, amp] = [
    params.inputTokenCount,
    params.outputTokenCount,
    params.amp!,
  ];

  return computeOutputAmount(inputTradeAmountLessFees, poolInputAmount, poolOutputAmount, amp);
}

function getExpectedOutputAmountWithNoSlippage(
  inputTradeAmount: u64,
  params: QuotePoolParams
): u64 {
  const inputTradeAmountLessFees = getInputAmountLessFees(inputTradeAmount, params);

  return getOutputAmountWithNoSlippage(inputTradeAmountLessFees, params);
}

function getExpectedOutputAmount(inputTradeAmount: u64, params: QuotePoolParams): u64 {
  const inputTradeAmountLessFees = getInputAmountLessFees(inputTradeAmount, params);

  return getOutputAmount(inputTradeAmountLessFees, params);
}

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
  if (
    inputTradeAmount.eq(ZERO) ||
    params.inputTokenCount.eq(ZERO) ||
    params.outputTokenCount.eq(ZERO)
  ) {
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

function getLPFees(inputTradeAmount: u64, params: QuotePoolParams): u64 {
  const { feeStructure } = params;

  const tradingFee =
    feeStructure.traderFee.numerator === ZERO
      ? ZERO
      : inputTradeAmount
          .mul(feeStructure.traderFee.numerator)
          .div(feeStructure.traderFee.denominator);

  const ownerFee =
    feeStructure.ownerFee.numerator === ZERO
      ? ZERO
      : inputTradeAmount
          .mul(feeStructure.ownerFee.numerator)
          .div(feeStructure.ownerFee.denominator);

  return new u64(tradingFee.add(ownerFee).toString());
}

function getMinimumAmountOut(inputTradeAmount: u64, params: QuotePoolParams): u64 {
  const slippageTolerance = params.slippageTolerance;
  const expectedOutputAmount = getExpectedOutputAmount(inputTradeAmount, params);

  return expectedOutputAmount
    .mul(slippageTolerance.denominator.sub(slippageTolerance.numerator))
    .div(slippageTolerance.denominator);
}

function getNetworkFees(params: QuotePoolParams): number {
  let numSigs;

  if (params.inputToken === solToken || params.outputToken === solToken) {
    numSigs = 3;
  } else {
    numSigs = 2;
  }

  return params.lamportsPerSignature * numSigs;
}

export class StablePoolQuoteBuilder {
  buildQuote(params: QuotePoolParams, inputTradeAmount: u64): Quote {
    if (!params.amp) {
      throw new Error("amp param required for stable pool");
    }

    return {
      getRate: () => getRate(inputTradeAmount, params),
      getPriceImpact: () => getPriceImpact(inputTradeAmount, params),
      getLPFees: () =>
        OrcaU64.fromU64(getLPFees(inputTradeAmount, params), params.inputToken.scale),
      getNetworkFees: () => OrcaU64.fromNumber(getNetworkFees(params)),
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
