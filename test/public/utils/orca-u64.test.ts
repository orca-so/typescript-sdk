import { u64 } from "@solana/spl-token";
import Decimal from "decimal.js";
import { OrcaU64 } from "../../../src/public";

// OrcaU64.fromDecimal
describe.each([
  { value: 0, scale: 9, expectedValue: new u64("0"), expectedScale: 9 },
  { value: 25000, scale: 5, expectedValue: new u64("2500000000"), expectedScale: 5 },
  { value: 15.58942, scale: 6, expectedValue: new u64("15589420"), expectedScale: 6 },
  { value: 15.58942, scale: 6.7, expectedValue: new u64("15589420"), expectedScale: 6 },
])("fromDecimal($value, $decimals)", ({ value, scale: decimals, expectedValue, expectedScale }) => {
  test(`returns {${expectedValue}, ${expectedScale}}`, () => {
    expect(OrcaU64.fromDecimal(new Decimal(value), decimals)).toEqual(
      new OrcaU64(expectedValue, expectedScale)
    );
  });
});

// OrcaU64.fromNumber
describe.each([
  { value: 0, scale: 9, expectedValue: new u64("0"), expectedScale: 9 },
  { value: 25000, scale: 5, expectedValue: new u64("2500000000"), expectedScale: 5 },
  { value: 15.58942, scale: 6, expectedValue: new u64("15589420"), expectedScale: 6 },
  { value: 15.58942, scale: 6.7, expectedValue: new u64("15589420"), expectedScale: 6 },
])("fromNumber($value, $decimals)", ({ value, scale: decimals, expectedValue, expectedScale }) => {
  test(`returns {${expectedValue}, ${expectedScale}}`, () => {
    expect(OrcaU64.fromNumber(value, decimals)).toEqual(new OrcaU64(expectedValue, expectedScale));
  });
});

// OrcaU64.fromU64
describe.each([
  { value: new u64(0), scale: 9, expectedValue: new u64("0"), expectedScale: 9 },
  { value: new u64(25000), scale: 5, expectedValue: new u64("25000"), expectedScale: 5 },
  { value: new u64(15589420), scale: 6, expectedValue: new u64("15589420"), expectedScale: 6 },
  {
    value: new u64(1),
    scale: 6.7,
    expectedValue: new u64("1"),
    expectedScale: 6,
  },
])("fromU64($value, $decimals)", ({ value, scale: decimals, expectedValue, expectedScale }) => {
  test(`returns {${expectedValue}, ${expectedScale}}`, () => {
    expect(OrcaU64.fromU64(value, decimals)).toEqual(new OrcaU64(expectedValue, expectedScale));
  });
});

// OrcaU64.toDecimal
describe.each([
  { value: OrcaU64.fromNumber(0, 9), expectedValue: 0 },
  { value: OrcaU64.fromNumber(25000, 5), expectedValue: 25000 },
  { value: OrcaU64.fromNumber(15.58942, 6), expectedValue: 15.58942 },
])("toDecimal($value)", ({ value, expectedValue }) => {
  test(`returns {${expectedValue}}`, () => {
    expect(value.toDecimal()).toEqual(new Decimal(expectedValue));
  });
});

// OrcaU64.toNumber
describe.each([
  { value: OrcaU64.fromNumber(0, 9), expectedValue: 0 },
  { value: OrcaU64.fromNumber(25000, 5), expectedValue: 25000 },
  { value: OrcaU64.fromNumber(15.58942, 6), expectedValue: 15.58942 },
])("toNumber($value)", ({ value, expectedValue }) => {
  test(`returns {${expectedValue}}`, () => {
    expect(value.toNumber()).toEqual(expectedValue);
  });
});

// OrcaU64.toU64
describe.each([
  { value: OrcaU64.fromU64(new u64(0), 5), expectedValue: new u64(0) },
  { value: OrcaU64.fromU64(new u64(25000), 5), expectedValue: new u64(25000) },
  { value: OrcaU64.fromU64(new u64(15589420), 6), expectedValue: new u64(15589420) },
])("toU64($value)", ({ value, expectedValue }) => {
  test(`returns {${expectedValue}}`, () => {
    expect(value.toU64()).toEqual(expectedValue);
  });
});
