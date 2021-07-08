import { u64 } from "@solana/spl-token";
import { OrcaU64 } from "../public/util-types";

export const ZERO = new u64(0);
export const ONE = new u64(1);

export class U64Utils {
  public static toOrcaU64(value: u64, decimals: number): OrcaU64 {
    return { value: value, decimals: decimals };
  }

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
}
