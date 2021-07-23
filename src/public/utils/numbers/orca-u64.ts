import { u64 } from "@solana/spl-token";
import Decimal from "decimal.js";
import { DecimalUtil } from "../../utils/numbers/decimal-utils";

/**
 * Orca's U64 wrapper class to help users convert to/from regular javascript number types
 *
 *
 * Examples:
 * OrcaU64(value: 99999, decimal: 0) -> 99999
 * OrcaU64(value: 99999, decimal: 5) -> 0.99999
 */
export class OrcaU64 {
  readonly value: u64;
  readonly scale: number;

  constructor(value: u64, scale = 0) {
    this.value = value;
    this.scale = Math.floor(scale);
  }

  /**
   * Create an OrcaU64 from a Decimal
   * @param value - an object representing the value of the u64 in Decimal form
   * @param scale - the number of digits after the decimal point to keep account for in this u64
   * @returns OrcaU64 hosting a u64 representing the input value adjusted to the provided scale
   */
  static fromDecimal(value: Decimal, scale = 0) {
    const dec = Math.floor(scale);
    return new OrcaU64(DecimalUtil.toU64(value, dec), dec);
  }

  /**
   * Create an OrcaU64 from a number
   * @param value - an object representing the value of the u64 in number form
   * @param scale - the number of digits after the decimal point to keep account for in this u64
   * @returns OrcaU64 hosting a u64 representing the input value adjusted to the provided scale
   */
  static fromNumber(value: number, scale = 0) {
    const dec = Math.floor(scale);
    return new OrcaU64(DecimalUtil.toU64(new Decimal(value), dec), dec);
  }

  /**
   * Create an OrcaU64 from a u64
   * @param value - an object representing the value of the u64
   * @param scale - the number of digits after the decimal point represented in this u64
   * @returns OrcaU64 hosting the input u64 with the provided scale
   */
  static fromU64(value: u64, scale = 0) {
    const dec = Math.floor(scale);
    return new OrcaU64(value, dec);
  }

  /**
   * Convert this OrcaU64 to Decimal.
   * @returns Decimal object that equals to the OrcaU64's value & scale
   */
  public toDecimal() {
    return DecimalUtil.fromU64(this.value, this.scale);
  }

  /**
   * Convert this OrcaU64 to number.
   * @returns number that equals to the OrcaU64's value & scale
   */
  public toNumber() {
    return DecimalUtil.fromU64(this.value, this.scale).toNumber();
  }

  /**
   * Convert this OrcaU64 to u64.
   * @returns u64 that equals to the OrcaU64 value
   */
  public toU64() {
    return new u64(this.value.toString());
  }
}
