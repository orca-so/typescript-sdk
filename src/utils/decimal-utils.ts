import Decimal from 'decimal.js'
import { u64 } from '@solana/spl-token'

export function shiftByDecimal(input: u64, decimals: number): Decimal {
    return new Decimal(input.toString()).div(new Decimal(10).pow(decimals))
}
