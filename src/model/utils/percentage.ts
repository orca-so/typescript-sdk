import { u64 } from "@solana/spl-token";

export type Percentage = {
  numerator: u64;
  denominator: u64;
};
export class PercentageUtils {
  public static fromNumber(number: number): Percentage {
    return PercentageUtils.fromFraction(number * 10, 1000);
  }

  public static fromFraction(numerator: u64 | number, denominator: u64 | number): Percentage {
    const num = typeof numerator === "number" ? new u64(numerator) : numerator;
    const denom = typeof denominator === "number" ? new u64(denominator) : denominator;
    return { numerator: num, denominator: denom };
  }
}
