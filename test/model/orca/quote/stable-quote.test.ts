import { u64 } from "@solana/spl-token";
import Decimal from "decimal.js";
import { CurveType } from "../../../../src/model/orca/pool/pool-types";
import {
  QuoteBuilder,
  QuoteBuilderFactory,
  QuotePoolParams,
} from "../../../../src/model/quote/quote-builder";
import { DecimalUtil, OrcaU64, Percentage } from "../../../../src/public";
import { stableQuotePoolParams } from "../../../test-utils";
import { Builder } from "builder-pattern";

const builder: QuoteBuilder = QuoteBuilderFactory.getBuilder(CurveType.Stable) as QuoteBuilder;

test("Input & Output tokens have same scale", () => {
  const params = Builder<QuotePoolParams>(stableQuotePoolParams).build();

  const quote = builder.buildQuote(
    params,
    DecimalUtil.toU64(new Decimal(1e6), params.inputToken.scale)
  );

  expect(quote.getRate()).toEqual(new Decimal(0.9987));
  expect(quote.getPriceImpact()).toEqual(new Decimal(0.055222));
  expect(quote.getLPFees()).toEqual(new OrcaU64(new u64("700000000"), params.inputToken.scale));
  expect(quote.getNetworkFees()).toEqual(new OrcaU64(new u64("10000")));
  expect(quote.getMinOutputAmount()).toEqual(
    new OrcaU64(new u64("997701271318"), params.outputToken.scale)
  );
  expect(quote.getExpectedOutputAmount()).toEqual(
    new OrcaU64(new u64("998699971290"), params.outputToken.scale)
  );
});

test("Input trade amount equal 0 ", () => {
  const params = Builder<QuotePoolParams>(stableQuotePoolParams).build();

  const quote = builder.buildQuote(
    params,
    DecimalUtil.toU64(new Decimal(0), params.inputToken.scale)
  );

  expect(quote.getRate()).toEqual(new Decimal(0));
  expect(quote.getPriceImpact()).toEqual(new Decimal(0));
  expect(quote.getLPFees()).toEqual(new OrcaU64(new u64("0"), params.inputToken.scale));
  expect(quote.getNetworkFees()).toEqual(new OrcaU64(new u64("10000")));
  expect(quote.getMinOutputAmount()).toEqual(new OrcaU64(new u64("0"), params.outputToken.scale));
  expect(quote.getExpectedOutputAmount()).toEqual(
    new OrcaU64(new u64("0"), params.outputToken.scale)
  );
});

test("Input Token Count is zero", () => {
  const params = Builder<QuotePoolParams>(stableQuotePoolParams)
    .inputTokenCount(new u64("0"))
    .build();

  const quote = builder.buildQuote(
    params,
    DecimalUtil.toU64(new Decimal(1e6), params.inputToken.scale)
  );

  expect(quote.getRate()).toEqual(new Decimal(19.577821));
  expect(quote.getPriceImpact()).toEqual(new Decimal(0));
  expect(quote.getLPFees()).toEqual(new OrcaU64(new u64("700000000"), params.inputToken.scale));
  expect(quote.getNetworkFees()).toEqual(new OrcaU64(new u64("10000")));

  // Recreating `OrcaU64` objects for the following checks to prevent the BN vs u64 mismatch error
  const minOutputAmount = quote.getMinOutputAmount();
  expect(new OrcaU64(minOutputAmount.toU64(), minOutputAmount.scale)).toEqual(
    new OrcaU64(new u64("19558243405204"), params.outputToken.scale)
  );

  const expectedOutputAmount = quote.getExpectedOutputAmount();
  expect(new OrcaU64(expectedOutputAmount.toU64(), expectedOutputAmount.scale)).toEqual(
    new OrcaU64(new u64("19577821226431"), params.outputToken.scale)
  );
});

test("Output Token Count is zero", () => {
  const params = Builder<QuotePoolParams>(stableQuotePoolParams)
    .outputTokenCount(new u64("0"))
    .build();

  const quote = builder.buildQuote(
    params,
    DecimalUtil.toU64(new Decimal(1e6), params.inputToken.scale)
  );

  expect(quote.getRate()).toEqual(new Decimal(0));
  expect(quote.getPriceImpact()).toEqual(new Decimal(0));
  expect(quote.getLPFees()).toEqual(new OrcaU64(new u64("700000000"), params.inputToken.scale));
  expect(quote.getNetworkFees()).toEqual(new OrcaU64(new u64("10000")));
  expect(quote.getMinOutputAmount()).toEqual(new OrcaU64(new u64("0"), params.outputToken.scale));
  expect(quote.getExpectedOutputAmount()).toEqual(
    new OrcaU64(new u64("0"), params.outputToken.scale)
  );
});

describe("Slippage tolerance", () => {
  test("tolerance equal 0%", () => {
    const params = Builder<QuotePoolParams>(stableQuotePoolParams)
      .slippageTolerance(Percentage.fromDecimal(new Decimal(0)))
      .build();
    const quote = builder.buildQuote(
      params,
      DecimalUtil.toU64(new Decimal(1e6), params.inputToken.scale)
    );

    expect(quote.getRate()).toEqual(new Decimal(0.9987));
    expect(quote.getPriceImpact()).toEqual(new Decimal(0.055222));
    expect(quote.getLPFees()).toEqual(new OrcaU64(new u64("700000000"), params.inputToken.scale));
    expect(quote.getNetworkFees()).toEqual(new OrcaU64(new u64("10000")));
    expect(quote.getMinOutputAmount()).toEqual(
      new OrcaU64(new u64("998699971290"), params.outputToken.scale)
    );
    expect(quote.getExpectedOutputAmount()).toEqual(
      new OrcaU64(new u64("998699971290"), params.outputToken.scale)
    );
  });

  test("tolerance equals 0.1%", () => {
    const params = Builder<QuotePoolParams>(stableQuotePoolParams)
      .slippageTolerance(Percentage.fromDecimal(new Decimal(0.1)))
      .build();
    const quote = builder.buildQuote(
      params,
      DecimalUtil.toU64(new Decimal(1e6), params.inputToken.scale)
    );

    expect(quote.getRate()).toEqual(new Decimal(0.9987));
    expect(quote.getPriceImpact()).toEqual(new Decimal(0.055222));
    expect(quote.getLPFees()).toEqual(new OrcaU64(new u64("700000000"), params.inputToken.scale));
    expect(quote.getNetworkFees()).toEqual(new OrcaU64(new u64("10000")));
    expect(quote.getMinOutputAmount()).toEqual(
      new OrcaU64(new u64("997701271318"), params.outputToken.scale)
    );
    expect(quote.getExpectedOutputAmount()).toEqual(
      new OrcaU64(new u64("998699971290"), params.outputToken.scale)
    );
  });

  test("tolerance equals 1%", () => {
    const params = Builder<QuotePoolParams>(stableQuotePoolParams)
      .slippageTolerance(Percentage.fromDecimal(new Decimal(1)))
      .build();
    const quote = builder.buildQuote(
      params,
      DecimalUtil.toU64(new Decimal(1e6), params.inputToken.scale)
    );

    expect(quote.getRate()).toEqual(new Decimal(0.9987));
    expect(quote.getPriceImpact()).toEqual(new Decimal(0.055222));
    expect(quote.getLPFees()).toEqual(new OrcaU64(new u64("700000000"), params.inputToken.scale));
    expect(quote.getNetworkFees()).toEqual(new OrcaU64(new u64("10000")));
    expect(quote.getMinOutputAmount()).toEqual(
      new OrcaU64(new u64("988712971577"), params.outputToken.scale)
    );
    expect(quote.getExpectedOutputAmount()).toEqual(
      new OrcaU64(new u64("998699971290"), params.outputToken.scale)
    );
  });
});

// Make sure that as amp goes up, a better price is quoted and price impact is lower
describe("Amplification Coefficient", () => {
  test("amp is undefined", () => {
    const params = Builder<QuotePoolParams>(stableQuotePoolParams).amp(undefined).build();

    expect(() =>
      builder.buildQuote(params, DecimalUtil.toU64(new Decimal(1e6), params.inputToken.scale))
    ).toThrow("amp param required for stable pool");
  });

  test("amp equals 10", () => {
    const params = Builder<QuotePoolParams>(stableQuotePoolParams).amp(new u64(10)).build();

    const quote = builder.buildQuote(
      params,
      DecimalUtil.toU64(new Decimal(1e6), params.inputToken.scale)
    );

    expect(quote.getRate()).toEqual(new Decimal(0.993818));
    expect(quote.getPriceImpact()).toEqual(new Decimal(0.502629));
    expect(quote.getLPFees()).toEqual(new OrcaU64(new u64("700000000"), params.inputToken.scale));
    expect(quote.getNetworkFees()).toEqual(new OrcaU64(new u64("10000")));
    expect(quote.getMinOutputAmount()).toEqual(
      new OrcaU64(new u64("992824297062"), params.outputToken.scale)
    );
    expect(quote.getExpectedOutputAmount()).toEqual(
      new OrcaU64(new u64("993818115178"), params.outputToken.scale)
    );
  });

  test("amp equals 100", () => {
    const params = Builder<QuotePoolParams>(stableQuotePoolParams).amp(new u64(100)).build();

    const quote = builder.buildQuote(
      params,
      DecimalUtil.toU64(new Decimal(1e6), params.inputToken.scale)
    );

    expect(quote.getRate()).toEqual(new Decimal(0.9987));
    expect(quote.getPriceImpact()).toEqual(new Decimal(0.055222));
    expect(quote.getLPFees()).toEqual(new OrcaU64(new u64("700000000"), params.inputToken.scale));
    expect(quote.getNetworkFees()).toEqual(new OrcaU64(new u64("10000")));
    expect(quote.getMinOutputAmount()).toEqual(
      new OrcaU64(new u64("997701271318"), params.outputToken.scale)
    );
    expect(quote.getExpectedOutputAmount()).toEqual(
      new OrcaU64(new u64("998699971290"), params.outputToken.scale)
    );
  });
});

describe("Fee Structure", () => {
  test("both owner and trader fees are non-zero", () => {
    const params = Builder<QuotePoolParams>(stableQuotePoolParams)
      .feeStructure({
        traderFee: Percentage.fromFraction(6, 10000),
        ownerFee: Percentage.fromFraction(1, 10000),
      })
      .build();

    const quote = builder.buildQuote(
      params,
      DecimalUtil.toU64(new Decimal(1e6), params.inputToken.scale)
    );

    expect(quote.getRate()).toEqual(new Decimal(0.9987));
    expect(quote.getPriceImpact()).toEqual(new Decimal(0.055222));
    expect(quote.getLPFees()).toEqual(new OrcaU64(new u64("700000000"), params.inputToken.scale));
    expect(quote.getNetworkFees()).toEqual(new OrcaU64(new u64("10000")));
    expect(quote.getMinOutputAmount()).toEqual(
      new OrcaU64(new u64("997701271318"), params.outputToken.scale)
    );
    expect(quote.getExpectedOutputAmount()).toEqual(
      new OrcaU64(new u64("998699971290"), params.outputToken.scale)
    );
  });

  test("owner fee is non-zero, trader fee is 0", () => {
    const params = Builder<QuotePoolParams>(stableQuotePoolParams)
      .feeStructure({
        traderFee: Percentage.fromFraction(0, 10000),
        ownerFee: Percentage.fromFraction(1, 10000),
      })
      .build();

    const quote = builder.buildQuote(
      params,
      DecimalUtil.toU64(new Decimal(1e6), params.inputToken.scale)
    );

    expect(quote.getRate()).toEqual(new Decimal(0.999299));
    expect(quote.getPriceImpact()).toEqual(new Decimal(0.055253));
    expect(quote.getLPFees()).toEqual(new OrcaU64(new u64("100000000"), params.inputToken.scale));
    expect(quote.getNetworkFees()).toEqual(new OrcaU64(new u64("10000")));
    expect(quote.getMinOutputAmount()).toEqual(
      new OrcaU64(new u64("998300007201"), params.outputToken.scale)
    );
    expect(quote.getExpectedOutputAmount()).toEqual(
      new OrcaU64(new u64("999299306508"), params.outputToken.scale)
    );
  });

  test("trader fee is non-zero, owner fee is 0", () => {
    const params = Builder<QuotePoolParams>(stableQuotePoolParams)
      .feeStructure({
        traderFee: Percentage.fromFraction(6, 10000),
        ownerFee: Percentage.fromFraction(0, 10000),
      })
      .build();

    const quote = builder.buildQuote(
      params,
      DecimalUtil.toU64(new Decimal(1e6), params.inputToken.scale)
    );

    expect(quote.getRate()).toEqual(new Decimal(0.9988));
    expect(quote.getPriceImpact()).toEqual(new Decimal(0.055227));
    expect(quote.getLPFees()).toEqual(new OrcaU64(new u64("600000000"), params.inputToken.scale));
    expect(quote.getNetworkFees()).toEqual(new OrcaU64(new u64("10000")));
    expect(quote.getMinOutputAmount()).toEqual(
      new OrcaU64(new u64("997801060657"), params.outputToken.scale)
    );
    expect(quote.getExpectedOutputAmount()).toEqual(
      new OrcaU64(new u64("998799860518"), params.outputToken.scale)
    );
  });

  test("both owner and trader fees are 0", () => {
    const params = Builder<QuotePoolParams>(stableQuotePoolParams)
      .feeStructure({
        traderFee: Percentage.fromFraction(0, 10000),
        ownerFee: Percentage.fromFraction(0, 10000),
      })
      .build();

    const quote = builder.buildQuote(
      params,
      DecimalUtil.toU64(new Decimal(1e6), params.inputToken.scale)
    );

    expect(quote.getRate()).toEqual(new Decimal(0.999399));
    expect(quote.getPriceImpact()).toEqual(new Decimal(0.055258));
    expect(quote.getLPFees()).toEqual(new OrcaU64(new u64(0), params.inputToken.scale));
    expect(quote.getNetworkFees()).toEqual(new OrcaU64(new u64("10000")));
    expect(quote.getMinOutputAmount()).toEqual(
      new OrcaU64(new u64("998399796479"), params.outputToken.scale)
    );
    expect(quote.getExpectedOutputAmount()).toEqual(
      new OrcaU64(new u64("999399195675"), params.outputToken.scale)
    );
  });
});
