import { u64 } from "@solana/spl-token";
import Decimal from "decimal.js";
import { ZERO } from "..";

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

  public toString = (): string => {
    return `${this.numerator.toString()}/${this.denominator.toString()}`;
  };

  public toDecimal() {
    if (this.denominator.eq(ZERO)) {
      return new Decimal(0);
    }
    return new Decimal(this.numerator.toString()).div(new Decimal(this.denominator.toString()));
  }

  public add(p2: Percentage): Percentage {
    const denomGcd = this.denominator.gcd(p2.denominator);
    const denomLcm = this.denominator.div(denomGcd).mul(p2.denominator);

    const p1DenomAdjustment = denomLcm.div(this.denominator);
    const p2DenomAdjustment = denomLcm.div(p2.denominator);

    const p1NumeratorAdjusted = this.numerator.mul(p1DenomAdjustment);
    const p2NumeratorAdjusted = p2.numerator.mul(p2DenomAdjustment);

    const newNumerator = p1NumeratorAdjusted.add(p2NumeratorAdjusted);

    return new Percentage(new u64(newNumerator.toString()), new u64(denomLcm.toString()));
  }
}
