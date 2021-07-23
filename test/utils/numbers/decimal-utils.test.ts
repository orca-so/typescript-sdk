import { u64 } from "@solana/spl-token";
import Decimal from "decimal.js";
import { DecimalUtil } from "../../../src/public";

/**
 * DecimalUtil.fromU64
 */
describe.each([
  { input: new u64("10"), shift: 1, expectedValue: new Decimal(1) },
  { input: new u64("14250748290"), shift: 9, expectedValue: new Decimal(14.25074829) },
  { input: new u64("5"), shift: 3, expectedValue: new Decimal(0.005) },
  { input: new u64("0"), shift: 9, expectedValue: new Decimal(0) },
  { input: new u64("10"), shift: -1, expectedValue: new Decimal(100) },
])("DecimalUtil.fromU64", ({ input, shift, expectedValue }) => {
  test(`fromU64(${input.toString()}, ${shift}) returns {${expectedValue}}`, () => {
    expect(DecimalUtil.fromU64(input, shift)).toEqual(expectedValue);
  });
});

describe.each([
  { input: new u64("10"), expectedValue: new Decimal(10) },
  { input: new u64("0"), expectedValue: new Decimal(0) },
  { input: new u64("5"), expectedValue: new Decimal(5) },
])("DecimalUtil.fromU64", ({ input, expectedValue }) => {
  test(`fromU64(${input.toString()}) returns {${expectedValue}}`, () => {
    expect(DecimalUtil.fromU64(input)).toEqual(expectedValue);
  });
});

/**
 * DecimalUtil.toU64
 */
describe.each([
  { input: new Decimal(10), shift: 0, expectedValue: new u64("10") },
  { input: new Decimal(10), shift: 1, expectedValue: new u64("100") },
  { input: new Decimal(10.5), shift: 1, expectedValue: new u64("105") },
  { input: new Decimal(10.5242425252), shift: 6, expectedValue: new u64("10524242") },
])("DecimalUtil.toU64", ({ input, shift, expectedValue }) => {
  test(`toU64(${input}, ${shift}) returns {${expectedValue.toString()}}`, () => {
    expect(DecimalUtil.toU64(input, shift)).toEqual(expectedValue);
  });
});

describe.each([
  { input: new Decimal(10), expectedValue: new u64("10") },
  { input: new Decimal(10.5), expectedValue: new u64("10") },
])("DecimalUtil.toU64", ({ input, expectedValue }) => {
  test(`toU64(${input}) returns {${expectedValue.toString()}}`, () => {
    expect(DecimalUtil.toU64(input)).toEqual(expectedValue);
  });
});

describe.each([{ input: new Decimal(-15) }])("DecimalUtil.toU64", ({ input }) => {
  test(`toU64(${input}) throws error }`, () => {
    expect(() => DecimalUtil.toU64(input)).toThrow();
  });
});
