import { PublicKey } from "@solana/web3.js";
import { CurveType, OrcaPoolParams } from "../../model/orca/pool/pool-types";
import { Percentage } from "../../public/utils/models/percentage";
import * as Tokens from "./tokens";

/**
 * The following content is auto-generated.
 */

export const solUsdcPool: OrcaPoolParams = Object.freeze({
  address: new PublicKey("8DT1oKJPHcdJzdSf3cb2WT7L8eRjLUJeDFSe7M2QDtQE"),
  nonce: 255,
  authority: new PublicKey("BVSZP6RsqAtjvuJrXYsYN5U4XY7pLwW4PawfgVPkLbjN"),
  poolTokenMint: new PublicKey("4GpUivZ2jvZqQ3vJRsoq5PwnYv6gdV9fJ9BzHT2JcRr7"),
  poolTokenDecimals: 6,
  feeAccount: new PublicKey("HPzaLqtZGhTbs7WcdGMfLswKze28W75nrYytNSw7qdvi"),
  tokenIds: [Tokens.solToken.mint.toString(), Tokens.usdcToken.mint.toString()],
  tokens: {
    [Tokens.solToken.mint.toString()]: {
      ...Tokens.solToken,
      addr: new PublicKey("4ShvTPQ3jYZzwUpxoQFSCDZxLtxQYNPUfeL3sR9mzLjJ"),
    },
    [Tokens.usdcToken.mint.toString()]: {
      ...Tokens.usdcToken,
      addr: new PublicKey("9eKgmUSfTkQLRBvowV9zjY3BbhAQVaGSw1jfon5UwUJM"),
    },
  },
  curveType: CurveType.ConstantProduct,
  feeStructure: {
    traderFee: Percentage.fromFraction(25, 10000),
    ownerFee: Percentage.fromFraction(5, 10000),
  },
});

export const solUsdtPool: OrcaPoolParams = Object.freeze({
  address: new PublicKey("65AsoozQfBedPU3rGCB7CfBbSFhiFGaVQaeoF9mLFM3g"),
  nonce: 255,
  authority: new PublicKey("59Pu3srqBDSgWrSJKuh7xcb5omJeVkMw41eFswDWKPat"),
  poolTokenMint: new PublicKey("2E4Mp6y2gFRteXiANnwzAJEhHwD3NX1wru3XvxJpGBq2"),
  poolTokenDecimals: 6,
  feeAccount: new PublicKey("HmRP17zbgJUPPeueLjT2b1HVKt16CTixSJX6UpGkkZnp"),
  tokenIds: [Tokens.solToken.mint.toString(), Tokens.usdtToken.mint.toString()],
  tokens: {
    [Tokens.solToken.mint.toString()]: {
      ...Tokens.solToken,
      addr: new PublicKey("BhJsBxGoe39HWtwFTCxRZGhPNVZ5x9Rr2gFzNsaA6ES8"),
    },
    [Tokens.usdtToken.mint.toString()]: {
      ...Tokens.usdtToken,
      addr: new PublicKey("Ea2gPV96MQthA5CCS4NincVidxsN8JifWhBoMJVHx8mZ"),
    },
  },
  curveType: CurveType.ConstantProduct,
  feeStructure: {
    traderFee: Percentage.fromFraction(25, 10000),
    ownerFee: Percentage.fromFraction(5, 10000),
  },
});

export const usdcUsdtPool: OrcaPoolParams = Object.freeze({
  address: new PublicKey("4UJqLypzZzDvoAWCLt6qWEoddMYoSLjrJEB13AfRmV68"),
  nonce: 255,
  authority: new PublicKey("52Sp73fASLtZhBPyZu7rQoejG9sNzpNLaTTF4mJJGZge"),
  poolTokenMint: new PublicKey("EBor1PR5XNGHjRVB6JDJuKVCQbvdr1CVZTaX1hTAdvQv"),
  poolTokenDecimals: 6,
  feeAccount: new PublicKey("6RjV63TfeJDL7K6j8cUnaT6mWXKxqsrDFrumvqGRwss6"),
  tokenIds: [Tokens.usdcToken.mint.toString(), Tokens.usdtToken.mint.toString()],
  tokens: {
    [Tokens.usdcToken.mint.toString()]: {
      ...Tokens.usdcToken,
      addr: new PublicKey("Fp9PioKwFc6vmQZ5yB2pPSSx5VqkLhgX21dQYug79yUQ"),
    },
    [Tokens.usdtToken.mint.toString()]: {
      ...Tokens.usdtToken,
      addr: new PublicKey("GazSkg8GU4cti8Dm1cYD74CQf9UXQdUzBsP27YhC4SCt"),
    },
  },
  curveType: CurveType.Stable,
  amp: 100,
  feeStructure: {
    traderFee: Percentage.fromFraction(9, 10000),
    ownerFee: Percentage.fromFraction(1, 10000),
  },
});

export const ethSolPool: OrcaPoolParams = Object.freeze({
  address: new PublicKey("F9MgdfFEshXCTGbppcVr2DzpVxqkiVowGqd95S4vpC6D"),
  nonce: 251,
  authority: new PublicKey("FD1UJqbXtiYnMcKxcDG4MYY1vasupm2sYXAkStQhSpTb"),
  poolTokenMint: new PublicKey("8sFnpd7mM1AWxP1LXX2FWbbkaVtAopBPmPNZ9y6172WL"),
  poolTokenDecimals: 6,
  feeAccount: new PublicKey("8zyAMewVQuHBxJeqn5oRvanDaaEZ9uYxjHxJ9DYCRsgn"),
  tokenIds: [Tokens.ethToken.mint.toString(), Tokens.solToken.mint.toString()],
  tokens: {
    [Tokens.ethToken.mint.toString()]: {
      ...Tokens.ethToken,
      addr: new PublicKey("FJetz1Du8p2NWmfa9DNvHR8zC42tUCHsY3YfnkZNyZfT"),
    },
    [Tokens.solToken.mint.toString()]: {
      ...Tokens.solToken,
      addr: new PublicKey("37o62xYE1a43Ap8neq6SdrutxQKFsFHicRamkcjHigKs"),
    },
  },
  curveType: CurveType.ConstantProduct,
  feeStructure: {
    traderFee: Percentage.fromFraction(25, 10000),
    ownerFee: Percentage.fromFraction(5, 10000),
  },
});

export const ethUsdcPool: OrcaPoolParams = Object.freeze({
  address: new PublicKey("CVH3UX1fePV3fn4dE2irNgni2uRkPdEWyZeCZS5b63F3"),
  nonce: 255,
  authority: new PublicKey("3uf9wngmqKdBdrWPM9iKsXQE829sg7gH9oJghcrpePhh"),
  poolTokenMint: new PublicKey("9pRnvg7ihSJDLi6DGf3PLwr6xRRRrBPXsHYEgGL5hzgA"),
  poolTokenDecimals: 6,
  feeAccount: new PublicKey("9AekLW8Dq5T1XnLLC2rQscS4Y5YN2QwrYA7eaGdq7Xje"),
  tokenIds: [Tokens.ethToken.mint.toString(), Tokens.usdcToken.mint.toString()],
  tokens: {
    [Tokens.ethToken.mint.toString()]: {
      ...Tokens.ethToken,
      addr: new PublicKey("C7eYGeiroWzuPgqruxRmgj3xw978gRZpPTov2kqxBRpx"),
    },
    [Tokens.usdcToken.mint.toString()]: {
      ...Tokens.usdcToken,
      addr: new PublicKey("DRdNFrRqWpqQHhJDymyZvgHBH2vTkUo5jzzTwWy7RT4h"),
    },
  },
  curveType: CurveType.ConstantProduct,
  feeStructure: {
    traderFee: Percentage.fromFraction(25, 10000),
    ownerFee: Percentage.fromFraction(5, 10000),
  },
});

export const orcaSolPool: OrcaPoolParams = Object.freeze({
  address: new PublicKey("B4v9urCKnrdCMWt7rEPyA5xyuEeYQv4aDpCfGFVaCvox"),
  nonce: 252,
  authority: new PublicKey("38Q2148y3BKU6pDUfv1zpeEeKNuDHBH34WdEwo5EiTfe"),
  poolTokenMint: new PublicKey("CmDdQhusZWyi9fue27VSktYgkHefm3JXNdzc9kCpyvYi"),
  poolTokenDecimals: 6,
  feeAccount: new PublicKey("EEWAuP2d1KbwX14dgHwxXspPMYfxXvgf4CNRYvMakPHg"),
  tokenIds: [Tokens.orcaToken.mint.toString(), Tokens.solToken.mint.toString()],
  tokens: {
    [Tokens.orcaToken.mint.toString()]: {
      ...Tokens.orcaToken,
      addr: new PublicKey("HsGXFtv1uBTtWuPCEJWpxZS4QkcHwAhdPaMVSvS4fhtv"),
    },
    [Tokens.solToken.mint.toString()]: {
      ...Tokens.solToken,
      addr: new PublicKey("3coXPvurzHQ6sYLrYi8zGWG7SLVv9mHnbqmchjKgPEmz"),
    },
  },
  curveType: CurveType.ConstantProduct,
  feeStructure: {
    traderFee: Percentage.fromFraction(25, 10000),
    ownerFee: Percentage.fromFraction(5, 10000),
  },
});

export const orcaUsdcPool: OrcaPoolParams = Object.freeze({
  address: new PublicKey("GaCKuVZyo6HxUf6bkcWzDETGHqqViF6H77ax7Uxq3LXU"),
  nonce: 255,
  authority: new PublicKey("3KVqBR9cB4tNHwpNPZtedegXbQ8FbWgjzk5oob7QRnHt"),
  poolTokenMint: new PublicKey("2ZEEntzoUN7XuMs88ukLGv5HRR1byL7wFWChryF5ZHri"),
  poolTokenDecimals: 6,
  feeAccount: new PublicKey("9yVp1tUHNxorNZgXAs6thPeizCryHTebjKG4P8uUdXuv"),
  tokenIds: [Tokens.orcaToken.mint.toString(), Tokens.usdcToken.mint.toString()],
  tokens: {
    [Tokens.orcaToken.mint.toString()]: {
      ...Tokens.orcaToken,
      addr: new PublicKey("7KAqhu58omLjKjg1XNSw28JULED82mnA1vvAMVoAdA6T"),
    },
    [Tokens.usdcToken.mint.toString()]: {
      ...Tokens.usdcToken,
      addr: new PublicKey("8E2CH9fPNXbc5pqu1dWWkNsNZWvLcBEXdBnzzXuhvJNL"),
    },
  },
  curveType: CurveType.ConstantProduct,
  feeStructure: {
    traderFee: Percentage.fromFraction(25, 10000),
    ownerFee: Percentage.fromFraction(5, 10000),
  },
});

/**
 * Mapping for OrcaPool parameters
 * Key: poolTokenMint : OrcaPoolParams
 */
export const orcaDevnetPoolConfigs: Record<string, OrcaPoolParams> = {
  "4GpUivZ2jvZqQ3vJRsoq5PwnYv6gdV9fJ9BzHT2JcRr7": solUsdcPool,
  "2E4Mp6y2gFRteXiANnwzAJEhHwD3NX1wru3XvxJpGBq2": solUsdtPool,
  EBor1PR5XNGHjRVB6JDJuKVCQbvdr1CVZTaX1hTAdvQv: usdcUsdtPool,
  "8sFnpd7mM1AWxP1LXX2FWbbkaVtAopBPmPNZ9y6172WL": ethSolPool,
  "9pRnvg7ihSJDLi6DGf3PLwr6xRRRrBPXsHYEgGL5hzgA": ethUsdcPool,
  CmDdQhusZWyi9fue27VSktYgkHefm3JXNdzc9kCpyvYi: orcaSolPool,
  "2ZEEntzoUN7XuMs88ukLGv5HRR1byL7wFWChryF5ZHri": orcaUsdcPool,
};
