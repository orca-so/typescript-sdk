import { CurveType, OrcaPoolParams, OrcaToken } from "../model/orca/orca-types";
import { PublicKey } from "@solana/web3.js";
import { OrcaPoolConfig } from "../public/pools";
import { PercentageUtils } from "../model/utils/percentage";

/**
 * Constants
 * TODO: Generate these from collectibles.json
 */

export const ethToken: OrcaToken = Object.freeze({
  name: "ETH",
  mint: new PublicKey("2FPyTwcZLUg1MDrwsyoP4D6s1tM7hAkHYRjkNb5w6Pxk"),
  decimals: 6,
});

export const usdcToken: OrcaToken = Object.freeze({
  name: "USDC",
  mint: new PublicKey("EPjFWdd5AufqSSqeM2qN1xzybapC8G4wEGGkZwyTDt1v"),
  decimals: 6,
});

export const ethUsdcPool: OrcaPoolParams = Object.freeze({
  address: new PublicKey("DY8qBwVGLeLJSrWib7L16mL7oB4HNAQ2f9yiYWKof54v"),
  nonce: 255,
  authority: new PublicKey("82oSibpDKnPZ2Yk1vn6McjCsQQbKfBkGeEh5FsqeVrtU"),
  poolTokenAddress: new PublicKey(
    "7TYb32qkwYosUQfUspU45cou7Bb3nefJocVMFX2mEGTT"
  ),
  poolTokenMint: new PublicKey("7TYb32qkwYosUQfUspU45cou7Bb3nefJocVMFX2mEGTT"),
  poolTokenDecimals: 9,
  feeAccount: new PublicKey("AcMaBVt6S43JQXKnEDqdicxYofb5Cj1UgFWF9AsurTp6"),
  tokenIds: ["ETH", "USDC"],
  tokens: {
    ETH: {
      ...ethToken,
      addr: new PublicKey("8eUUP3t9nkXPub8X6aW2a2gzi82pUFqefwkSY8rCcVxg"),
    },
    USDC: {
      ...usdcToken,
      addr: new PublicKey("2tNEBoEuqJ1pPmA1fpitDnowgUQZXvCT6W3fui67AFfV"),
    },
  },
  curveType: CurveType.ConstantProduct,
  feeStructure: {
    traderFee: PercentageUtils.fromFraction(2, 1000),
    ownerFee: PercentageUtils.fromFraction(1, 1000),
  },
});

export const orcaPoolConfigs: Record<OrcaPoolConfig, OrcaPoolParams> = {
  [OrcaPoolConfig.ETH_USDC]: ethUsdcPool,
};
