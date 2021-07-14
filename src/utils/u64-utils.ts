import { u64 } from "@solana/spl-token";
import Decimal from "decimal.js";

export const ZERO = new u64(0);
export const ONE = new u64(1);

export class U64Utils {
  public static ceilingDivision(dividend: u64, divisor: u64): [u64, u64] {
    let quotient = dividend.div(divisor);
    if (quotient.eq(ZERO)) {
      return [ZERO, divisor];
    }

    let remainder = dividend.mod(divisor);
    if (remainder.gt(ZERO)) {
      quotient = quotient.add(ONE);
      divisor = dividend.div(quotient);
      remainder = dividend.mod(quotient);
      if (remainder.gt(ZERO)) {
        divisor = divisor.add(ONE);
      }
    }

    return [quotient, divisor];
  }

  public static toU64(value: number | Decimal, decimals: number): u64 {
    const shifter = Math.pow(10, decimals);
    const shiftedValue = typeof value === "number" ? value * shifter : value.mul(shifter);

    return new u64(shiftedValue.toString());
  }
}
