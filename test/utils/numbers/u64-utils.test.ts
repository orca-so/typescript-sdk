import { u64 } from "@solana/spl-token";
import { PublicKey } from "@solana/web3.js";
import Decimal from "decimal.js";
import { OrcaToken } from "../../../src";
import { OrcaU64, U64Utils } from "../../../src/public";

const tokenWithScale6: OrcaToken = {
  tag: "tag5",
  scale: 6,
  name: "name",
  mint: new PublicKey("Es9vMFrzaCERmJfrF4H2FYD4KCoNkY11McCe8BenwNYB"),
};

const tokenWithScale8: OrcaToken = {
  ...tokenWithScale6,
  scale: 8,
};

/**
 * U64Utils.toTokenU64
 */
describe.each([
  { input: new Decimal(10), token: tokenWithScale6, expectedValue: new u64("10000000") },
  { input: new Decimal(10.5233), token: tokenWithScale6, expectedValue: new u64("10523300") },
  {
    input: new OrcaU64(new u64("105234058"), 8),
    token: tokenWithScale8,
    expectedValue: new u64("105234058"),
  },
])("U64Utils.toTokenU64", ({ input, token, expectedValue }) => {
  test(`toTokenU64(${input.toString()}, ${token.tag} with dec ${
    token.scale
  }) returns {${expectedValue}}`, () => {
    expect(U64Utils.toTokenU64(input, token, "someVarName")).toEqual(expectedValue);
  });
});

describe.each([
  { input: new Decimal(-15), token: tokenWithScale6 },
  { input: new OrcaU64(new u64("15"), 4), token: tokenWithScale6 },
])("U64Utils.toTokenU64", ({ input, token }) => {
  test(`toTokenU64(${input}) throws error }`, () => {
    expect(() => U64Utils.toTokenU64(input, token, "someVarName")).toThrow();
  });
});
