import { u64 } from "@solana/spl-token";
import Decimal from "decimal.js";

export class Percentage {
  readonly numerator: u64;
  readonly denominator: u64;

  constructor(numerator: u64, denominator: u64) {
    this.numerator = numerator;
    this.denominator = denominator;
  }

  public static fromDecimal(number: Decimal): Percentage {
    return Percentage.fromFraction(number.toDecimalPlaces(1).mul(10).toNumber(), 1000);
  }

  public static fromFraction(numerator: u64 | number, denominator: u64 | number): Percentage {
    const num = typeof numerator === "number" ? new u64(numerator.toString()) : numerator;
    const denom = typeof denominator === "number" ? new u64(denominator.toString()) : denominator;
    return new Percentage(num, denom);
  }
}
