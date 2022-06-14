import { u64 } from "@solana/spl-token";
import Decimal from "decimal.js";
import { OrcaToken, OrcaU64 } from "../..";
import { OrcaFarmParams } from "../../../model/orca/farm/farm-types";
import { OrcaPoolParams } from "../../../model/orca/pool/pool-types";
import { DecimalUtil } from "./decimal-utils";

export const ZERO = new u64(0);
export const ONE = new u64(1);

export class U64Utils {
  public static toTokenU64(input: Decimal | OrcaU64, token: OrcaToken, varName: string) {
    if (input instanceof OrcaU64) {
      if (input.scale !== token.scale) {
        throw new Error(
          `${varName}'s scale of ${input.scale} does not match token's decimal of ${token.scale}`
        );
      }
      return input.toU64();
    }

    return DecimalUtil.toU64(input, token.scale);
  }

  public static toPoolU64(input: Decimal | OrcaU64, pool: OrcaPoolParams, varName: string) {
    if (input instanceof OrcaU64) {
      if (input.scale !== pool.poolTokenDecimals) {
        throw new Error(
          `${varName}'s scale of ${input.scale} does not match pool's decimal of ${pool.poolTokenDecimals}`
        );
      }
      return input.toU64();
    }

    return DecimalUtil.toU64(input, pool.poolTokenDecimals);
  }

  public static toFarmU64(input: Decimal | OrcaU64, farm: OrcaFarmParams, varName: string) {
    if (input instanceof OrcaU64) {
      if (input.scale !== farm.baseTokenDecimals) {
        throw new Error(
          `${varName}'s scale of ${input.scale} does not match baseToken's decimal of ${farm.baseTokenDecimals}`
        );
      }
      return input.toU64();
    }

    return DecimalUtil.toU64(input, farm.baseTokenDecimals);
  }

  // Note: divisor input variable modified in place
  // https://github.com/solana-labs/solana-program-library/blob/master/libraries/math/src/checked_ceil_div.rs#L5-L22
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
