import { OrcaPoolParams } from './types'
import { PublicKey } from '@solana/web3.js'
import { OrcaPoolConfig } from '../public/pools'

/**
 * Constants
 * TODO: Generate these from collectibles.json
 */

export const ethUsdcPool: OrcaPoolParams = Object.freeze({
    address: new PublicKey('DY8qBwVGLeLJSrWib7L16mL7oB4HNAQ2f9yiYWKof54v'),
    nonce: 255,
    authority: new PublicKey('82oSibpDKnPZ2Yk1vn6McjCsQQbKfBkGeEh5FsqeVrtU'),
    poolTokenAddress: new PublicKey('7TYb32qkwYosUQfUspU45cou7Bb3nefJocVMFX2mEGTT'),
    poolTokenMint: new PublicKey('7TYb32qkwYosUQfUspU45cou7Bb3nefJocVMFX2mEGTT'),
    poolTokenDecimals: 9,
    feeAccount: new PublicKey('AcMaBVt6S43JQXKnEDqdicxYofb5Cj1UgFWF9AsurTp6'),
    tokens: {
        'ETH': new PublicKey('8eUUP3t9nkXPub8X6aW2a2gzi82pUFqefwkSY8rCcVxg'),
        'USDC': new PublicKey('2tNEBoEuqJ1pPmA1fpitDnowgUQZXvCT6W3fui67AFfV'),
    },
    curveType: 0,
})

export const orcaPoolConfigs: Record<OrcaPoolConfig, OrcaPoolParams> = {
    [OrcaPoolConfig.ETH_USDC]: ethUsdcPool
}
