import { PublicKey } from "@solana/web3.js";
import { OrcaPoolConfig } from "..";
import { OrcaToken, OrcaPoolParams, CurveType } from "../model/orca/pool/pool-types";
import { PercentageUtils } from "../model/utils/percentage";

/**
 * Constants
 * TODO: Generate these from collectibles.json
 */

export const solToken: OrcaToken = Object.freeze({
  id: "SOL",
  name: "Solana",
  mint: new PublicKey("So11111111111111111111111111111111111111112"),
  decimals: 9,
});

export const ethToken: OrcaToken = Object.freeze({
  id: "ETH",
  name: "Ethereum",
  mint: new PublicKey("2FPyTwcZLUg1MDrwsyoP4D6s1tM7hAkHYRjkNb5w6Pxk"),
  decimals: 6,
});

export const rayToken: OrcaToken = Object.freeze({
  id: "RAY",
  name: "Raydium",
  mint: new PublicKey("4k3Dyjzvzp8eMZWUXbBCjEvwSkkk59S5iCNLY3QrkX6R"),
  decimals: 6,
});

export const usdcToken: OrcaToken = Object.freeze({
  id: "USDC",
  name: "USD Coin",
  mint: new PublicKey("EPjFWdd5AufqSSqeM2qN1xzybapC8G4wEGGkZwyTDt1v"),
  decimals: 6,
});

export const usdtToken: OrcaToken = Object.freeze({
  id: "USDT",
  name: "Tether USD",
  mint: new PublicKey("Es9vMFrzaCERmJfrF4H2FYD4KCoNkY11McCe8BenwNYB"),
  decimals: 6,
});

export const solUsdcPool: OrcaPoolParams = Object.freeze({
  address: new PublicKey("6fTRDD7sYxCN7oyoSQaN1AWC3P2m8A6gVZzGrpej9DvL"),
  nonce: 253,
  authority: new PublicKey("B52XRdfTsh8iUGbGEBJLHyDMjhaTW8cAFCmpASGJtnNK"),
  poolTokenMint: new PublicKey("ECFcUGwHHMaZynAQpqRHkYeTBnS5GnPWZywM8aggcs3A"),
  poolTokenDecimals: 9,
  feeAccount: new PublicKey("4pdzKqAGd1WbXn1L4UpY4r58irTfjFYMYNudBrqbQaYJ"),
  tokenIds: ["SOL", "USDC"],
  tokens: {
    SOL: {
      ...solToken,
      addr: new PublicKey("FdiTt7XQ94fGkgorywN1GuXqQzmURHCDgYtUutWRcy4q"),
    },
    USDC: {
      ...usdcToken,
      addr: new PublicKey("7VcwKUtdKnvcgNhZt5BQHsbPrXLxhdVomsgrr7k2N5P5"),
    },
  },
  curveType: CurveType.ConstantProduct,
  feeStructure: {
    traderFee: PercentageUtils.fromFraction(2, 1000),
    ownerFee: PercentageUtils.fromFraction(1, 1000),
  },
});

export const solUsdtPool: OrcaPoolParams = Object.freeze({
  address: new PublicKey("4bS6bkBdJ4B1Bt4ft3oGF8La7eKpCqz8xnu1AMpMxWSP"),
  nonce: 255,
  authority: new PublicKey("EAvLj3zW236pUSSSzwjL18QuPpkTxkWaVSR5GdX7yiNa"),
  poolTokenMint: new PublicKey("BmZNYGt7aApGTUUxAQUYsW64cMbb6P7uniokCWaptj4D"),
  poolTokenDecimals: 9,
  feeAccount: new PublicKey("HR2rWgcU6SNCWxJDozDu6qCgSSvUoKCynbhQPGRNqpCG"),
  tokenIds: ["SOL", "USDT"],
  tokens: {
    SOL: {
      ...solToken,
      addr: new PublicKey("BBDQmitNga99M9QsBRnyos9uWPumNbWLC1mfbReJi45C"),
    },
    USDT: {
      ...usdtToken,
      addr: new PublicKey("8xepSs1iXsSw8QrCS1rpZk8KY3fMwUZqDT4dmzDa2trX"),
    },
  },
  curveType: CurveType.ConstantProduct,
  feeStructure: {
    traderFee: PercentageUtils.fromFraction(2, 1000),
    ownerFee: PercentageUtils.fromFraction(1, 1000),
  },
});

export const raySolPool: OrcaPoolParams = Object.freeze({
  address: new PublicKey("4c8jpn6sLMrZHMYNq6idFfMdLBWEqn1r1wFNtgsPqTwE"),
  nonce: 252,
  authority: new PublicKey("6nL4UZVRkn34Mxb7DGU91U86zhtF2PTX72Ncs64sUFx"),
  poolTokenMint: new PublicKey("GWEmABT4rD3sGhyghv9rKbfdiaFe5uMHeJqr6hhu3XvA"),
  poolTokenDecimals: 9,
  feeAccount: new PublicKey("3uUNB1KSwyF6YDuiQiRbFnnDW4Q625SQJk7LuoxQA8Pw"),
  tokenIds: ["RAY", "SOL"],
  tokens: {
    RAY: {
      ...rayToken,
      addr: new PublicKey("HxuUQPpqkxzYPYQqM6XkVVVw2UQt4m3eMYzYQFJZjuvG"),
    },
    SOL: {
      ...solToken,
      addr: new PublicKey("B6whMxirSzzNcSeJ1G4HDFTRKjPFcWovCL53uxG7LexB"),
    },
  },
  curveType: CurveType.ConstantProduct,
  feeStructure: {
    traderFee: PercentageUtils.fromFraction(2, 1000),
    ownerFee: PercentageUtils.fromFraction(1, 1000),
  },
});

export const ethSolPool: OrcaPoolParams = Object.freeze({
  address: new PublicKey("4vWJYxLx9F7WPQeeYzg9cxhDeaPjwruZXCffaSknWFxy"),
  nonce: 252,
  authority: new PublicKey("Hmjv9wvRctYXHRaX7dTdHB4MsFk4mZgKQrqrgQJXNXii"),
  poolTokenMint: new PublicKey("7bb88DAnQY7LSoWEuqezCcbk4vutQbuRqgJMqpX8h6dL"),
  poolTokenDecimals: 9,
  feeAccount: new PublicKey("CYGRBB4qAYzSqdnvVaXvyZLg5j7YNVcuqM6gdD2MMUi1"),
  tokenIds: ["ETH", "SOL"],
  tokens: {
    ETH: {
      ...ethToken,
      addr: new PublicKey("FidGus13X2HPzd3cuBEFSq32UcBQkF68niwvP6bM4fs2"),
    },
    SOL: {
      ...solToken,
      addr: new PublicKey("5x1amFuGMfUVzy49Y4Pc3HyCVD2usjLaofnzB3d8h7rv"),
    },
  },
  curveType: CurveType.ConstantProduct,
  feeStructure: {
    traderFee: PercentageUtils.fromFraction(2, 1000),
    ownerFee: PercentageUtils.fromFraction(1, 1000),
  },
});

export const ethUsdcPool: OrcaPoolParams = Object.freeze({
  address: new PublicKey("DY8qBwVGLeLJSrWib7L16mL7oB4HNAQ2f9yiYWKof54v"),
  nonce: 255,
  authority: new PublicKey("82oSibpDKnPZ2Yk1vn6McjCsQQbKfBkGeEh5FsqeVrtU"),
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
  [OrcaPoolConfig.SOL_USDC]: solUsdcPool,
  [OrcaPoolConfig.SOL_USDT]: solUsdtPool,
  [OrcaPoolConfig.RAY_SOL]: raySolPool,
  [OrcaPoolConfig.ETH_SOL]: ethSolPool,
  [OrcaPoolConfig.ETH_USDC]: ethUsdcPool,
};
