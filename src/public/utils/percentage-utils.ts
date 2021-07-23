import { u64 } from "@solana/spl-token";
import Decimal from "decimal.js";
import { Percentage } from "./models/percentage";

export class PercentageUtils {
  public static fromDecimal(number: Decimal): Percentage {
    return PercentageUtils.fromFraction(number.toDecimalPlaces(1).mul(10).toNumber(), 1000);
  }

  public static fromFraction(numerator: u64 | number, denominator: u64 | number): Percentage {
    const num = typeof numerator === "number" ? new u64(numerator.toString()) : numerator;
    const denom = typeof denominator === "number" ? new u64(denominator.toString()) : denominator;
    return { numerator: num, denominator: denom };
  }
}
