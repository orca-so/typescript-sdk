import { PublicKey } from '@solana/web3.js'

/**
 * An Orca token-swap pool
 * @param address The pool account address
 * @param nonce The nonce used to generate the pool authority
 * @param authority The pool authority PDA address to sign instructions
 * @param poolTokenAddress Public address for the pool token
 * @param poolTokenMint Mint address for the pool token
 * @param poolTokenDecimals Number of decimal places for the pool token
 * @param feeAccount Public address of the pool token fee account
 * @param tokens The name, public key pair of the tokens in this pool
 * @param curveType Trading curve type. 0 - ConstantProduct, 1 - ConstantPrice, 3 - Offset
 */
export type OrcaPoolParams = {
    address: PublicKey;
    nonce: number;
    authority: PublicKey;
    poolTokenAddress: PublicKey;
    poolTokenMint: PublicKey;
    poolTokenDecimals: number;
    feeAccount: PublicKey;
    tokens: Record<string, PublicKey>;
    curveType: number;
};
