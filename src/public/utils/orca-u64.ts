import { u64 } from "@solana/spl-token";
import Decimal from "decimal.js";
import { DecimalUtil } from "../../utils/decimal-utils";
import { U64Utils } from "../../utils/u64-utils";

/**
 * Orca's U64 wrapper class to help users convert to/from regular javascript number types
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
    return new OrcaU64(U64Utils.toU64(value, dec), dec);
  }

  /**
   * Create an OrcaU64 from a number
   * @param value - an object representing the value of the u64 in number form
   * @param scale - the number of digits after the decimal point to keep account for in this u64
   * @returns OrcaU64 hosting a u64 representing the input value adjusted to the provided scale
   */
  static fromNumber(value: number, scale = 0) {
    const dec = Math.floor(scale);
    return new OrcaU64(U64Utils.toU64(value, dec), dec);
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
    return this.value;
  }

  /**
   * Shift this OrcaU64 to a new scale
   * If new scale is smaller than 0, the return value will be 0.
   *
   * @param scale the new number of digits after the decimal point that the u64 adjusts to
   * @returns u64 that equals to the OrcaU64 value shifted to the new scale
   */
  public shiftToScale(scale: number) {
    if (scale < 0) {
      return new OrcaU64(new u64(0), 0);
    }

    const expectedScale = Math.floor(scale);
    const diff = expectedScale - this.scale;
    if (diff > 0) {
      return this.expand(diff);
    }
    return this.contract(Math.abs(diff));
  }

  private contract(adjustBy: number) {
    const finalAdjustValue = Math.floor(adjustBy);
    const adjustedValue = this.value.div(new u64(10).pow(new u64(finalAdjustValue)));
    const newValue = new u64(adjustedValue.toString());
    const newScale = Math.max(this.scale - finalAdjustValue, 0);
    return new OrcaU64(newValue, newScale);
  }

  private expand(shift: number) {
    const finalAdjustValue = Math.floor(shift);
    const adjustedValue = this.value.mul(new u64(10).pow(new u64(finalAdjustValue)));
    const newValue = new u64(adjustedValue.toString());
    const newScale = this.scale + shift;
    return new OrcaU64(newValue, newScale);
  }
}
