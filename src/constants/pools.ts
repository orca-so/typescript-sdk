import { PublicKey } from "@solana/web3.js";
import { CurveType, OrcaPoolParams } from "../model/orca/pool/pool-types";
import { Percentage } from "../public/utils/models/percentage";
import * as Tokens from "./tokens";

/**
 * The following content is auto-generated.
 */

export const orcaSolPool: OrcaPoolParams = Object.freeze({
  address: new PublicKey("6avPQZKaY1U7XhotXpiLFHRgLLTGZYFSQAkCctBk3YwK"),
  nonce: 255,
  authority: new PublicKey("GRaxyX1w1nsM9pqXSzLLRg4B6bUby7GFB6CB4aNpVXcA"),
  poolTokenMint: new PublicKey("Hb7gJpT3E3rhtWtEgLLxvCmtt2sgdJNqk5xHeDyeqYgs"),
  poolTokenDecimals: 6,
  feeAccount: new PublicKey("9z7Mx6wmLRKroX5bb2Ndst3CYnUvYJPRK5j9KFeTJmA7"),
  tokenIds: [Tokens.orcaToken.mint.toString(), Tokens.solToken.mint.toString()],
  tokens: {
    [Tokens.orcaToken.mint.toString()]: {
      ...Tokens.orcaToken,
      addr: new PublicKey("BHqRqqEBgy9JDJiPKUMq1uPsqaFd9CzNqUTyPggUo8ST"),
    },
    [Tokens.solToken.mint.toString()]: {
      ...Tokens.solToken,
      addr: new PublicKey("F3kFZDc2XANJro8r9bcabJL8x2ab8UN9KBS2hkmbNbr6"),
    },
  },
  curveType: CurveType.ConstantProduct,
  feeStructure: {
    traderFee: Percentage.fromFraction(2, 1000),
    ownerFee: Percentage.fromFraction(1, 1000),
  },
});

export const orcaUsdcPool: OrcaPoolParams = Object.freeze({
  address: new PublicKey("3MerQZU1qV1Hxgzb9gitg8sFt3j7PHfE6ny71y5xgkuA"),
  nonce: 255,
  authority: new PublicKey("kULPQ61V8tasn8yMkxgorTLryegWdywAGXubdogXoxa"),
  poolTokenMint: new PublicKey("5uADevdQu1qyKPGBUv8i8U3u4twF8pAMngMvdE3vjPuC"),
  poolTokenDecimals: 6,
  feeAccount: new PublicKey("Hqn2hMEzuTK7XmHzdbkjKEcsFbWt13yx9UsZnh2pGWS2"),
  tokenIds: [Tokens.orcaToken.mint.toString(), Tokens.usdcToken.mint.toString()],
  tokens: {
    [Tokens.orcaToken.mint.toString()]: {
      ...Tokens.orcaToken,
      addr: new PublicKey("8N7qAxirQGo8xK9aicKV4yGS36ikpxvWWT3RQrXpodVg"),
    },
    [Tokens.usdcToken.mint.toString()]: {
      ...Tokens.usdcToken,
      addr: new PublicKey("4T29p7NQYnZyr9aHoZY8uBPAZEdBSBG2mGMCdTP6QXzA"),
    },
  },
  curveType: CurveType.ConstantProduct,
  feeStructure: {
    traderFee: Percentage.fromFraction(2, 1000),
    ownerFee: Percentage.fromFraction(1, 1000),
  },
});

export const solUsdcPool: OrcaPoolParams = Object.freeze({
  address: new PublicKey("5i1VN2ub8j8Jh4cyxKmFbvxs7UyemX6bUNjUc1cMhaKT"),
  nonce: 254,
  authority: new PublicKey("4MhS5Hkm24txkinYhTNtcq5FTPT8W6ijb4cXv46RDGRx"),
  poolTokenMint: new PublicKey("A3iUhJdYsbq9YCSFzpUfKUzkoBgPs5KN73PsuedSjmMB"),
  poolTokenDecimals: 6,
  feeAccount: new PublicKey("5qXrWiGFAva3LvHAKs49jkGqDQ5w7fRgSppWYJaeswjC"),
  tokenIds: [Tokens.solToken.mint.toString(), Tokens.usdcToken.mint.toString()],
  tokens: {
    [Tokens.solToken.mint.toString()]: {
      ...Tokens.solToken,
      addr: new PublicKey("2BdwDJ3yV5aAy7Ze7bVfzec8oEdMnzD2ds9CEcwpScKZ"),
    },
    [Tokens.usdcToken.mint.toString()]: {
      ...Tokens.usdcToken,
      addr: new PublicKey("5gMLYxbKDqr2a1tWhxwmrbL3NDog6eumjx7pYF7JVse6"),
    },
  },
  curveType: CurveType.ConstantProduct,
  feeStructure: {
    traderFee: Percentage.fromFraction(2, 1000),
    ownerFee: Percentage.fromFraction(1, 1000),
  },
});

export const solUsdtPool: OrcaPoolParams = Object.freeze({
  address: new PublicKey("FU7wwvSHCnycbaPUBt7EArPv4YmZXgBRMsCD85D4DTVZ"),
  nonce: 255,
  authority: new PublicKey("7KJuQCmYsynfiFb2hMM2onqUfoisW3Bn6QQL2KaNR3Tu"),
  poolTokenMint: new PublicKey("3kF2PdYAicdB1f2ihywFVXyYfAa97dt7mAaeccN7g9hb"),
  poolTokenDecimals: 6,
  feeAccount: new PublicKey("3GsvBH2nuRcUkW3MYgzmsR8WdW6bmpNt7R4XbMkAAy5j"),
  tokenIds: [Tokens.solToken.mint.toString(), Tokens.usdtToken.mint.toString()],
  tokens: {
    [Tokens.solToken.mint.toString()]: {
      ...Tokens.solToken,
      addr: new PublicKey("39CbqHZin5svD2pTVTBAEFnC5AnTCck3PTuqPyMCkKaJ"),
    },
    [Tokens.usdtToken.mint.toString()]: {
      ...Tokens.usdtToken,
      addr: new PublicKey("GsDZd1HJY2JCS1q2yR5kexySpvpuGeZ76doZsac9nqic"),
    },
  },
  curveType: CurveType.ConstantProduct,
  feeStructure: {
    traderFee: Percentage.fromFraction(2, 1000),
    ownerFee: Percentage.fromFraction(1, 1000),
  },
});

export const ethSolPool: OrcaPoolParams = Object.freeze({
  address: new PublicKey("6bUQhsCWYK5RGtC4isAtnnagu9KbxuAJ9FY6s9Mf8JqR"),
  nonce: 254,
  authority: new PublicKey("d68EWQGK65XRdB1NmfAcWoWmFyX7nekMtabjWms3oYo"),
  poolTokenMint: new PublicKey("5YsMqWL1xwKDJzFFg3wYSyyVN3Ug1b3jibMTS9PCmL6y"),
  poolTokenDecimals: 6,
  feeAccount: new PublicKey("B3TCY7k23nj952oEjm3GTnhyzju78xjZa8c2aGwQpngN"),
  tokenIds: [Tokens.ethToken.mint.toString(), Tokens.solToken.mint.toString()],
  tokens: {
    [Tokens.ethToken.mint.toString()]: {
      ...Tokens.ethToken,
      addr: new PublicKey("6qsvdivRqy6ycu3UjjWFEqVvgd1uRhZYGux663sQRS7s"),
    },
    [Tokens.solToken.mint.toString()]: {
      ...Tokens.solToken,
      addr: new PublicKey("A44TKtaUkT4QHCdD8s5XqzPk2zqrWLJd4uR9jDFUx3FG"),
    },
  },
  curveType: CurveType.ConstantProduct,
  feeStructure: {
    traderFee: Percentage.fromFraction(2, 1000),
    ownerFee: Percentage.fromFraction(1, 1000),
  },
});

export const usdcUsdtPool: OrcaPoolParams = Object.freeze({
  address: new PublicKey("C4U57QGqmAACUqBz5Sw9YBcoyWJBC5d4KMr3CCKoThsc"),
  nonce: 255,
  authority: new PublicKey("74qfPenkWX98scocyPEv8LDbrh31FfgfSPkueEMoqcHE"),
  poolTokenMint: new PublicKey("FebTkh8HbSBkehUXW9c7o8hVRziANG5h5UNg7dQGxczE"),
  poolTokenDecimals: 6,
  feeAccount: new PublicKey("BVeNQ1mcDz7rGykaCbZ3PMSK9gogsAcerjMNQQyjVzbi"),
  tokenIds: [Tokens.usdcToken.mint.toString(), Tokens.usdtToken.mint.toString()],
  tokens: {
    [Tokens.usdcToken.mint.toString()]: {
      ...Tokens.usdcToken,
      addr: new PublicKey("Eikm58d4PB2Qi4vARfUra86RFYy7Tz624NqFyUrQexgV"),
    },
    [Tokens.usdtToken.mint.toString()]: {
      ...Tokens.usdtToken,
      addr: new PublicKey("By9PCeirZ4NND8tsmxdYdHR35DwWZwcBLYTzd3gWgR9V"),
    },
  },
  curveType: CurveType.Stable,
  feeStructure: {
    traderFee: Percentage.fromFraction(2, 1000),
    ownerFee: Percentage.fromFraction(1, 1000),
  },
});

export const ethUsdcPool: OrcaPoolParams = Object.freeze({
  address: new PublicKey("2QqDBHopTBgT9Xfc76Jre3DC2iEwyyz5p4JGiHHWJZ95"),
  nonce: 255,
  authority: new PublicKey("9NqvcxBRcmfSEJENgn8qGPnmk3c5Kx5ysa7nxoQVNtTN"),
  poolTokenMint: new PublicKey("3DJ7kS7RFxz2P6gD84ErhHcbqcFBiVtAZhFZKtvMBcDZ"),
  poolTokenDecimals: 6,
  feeAccount: new PublicKey("H2kB1un7LnbiNRsqPzga683pGgFurC3CBAoyRkUYRrxN"),
  tokenIds: [Tokens.ethToken.mint.toString(), Tokens.usdcToken.mint.toString()],
  tokens: {
    [Tokens.ethToken.mint.toString()]: {
      ...Tokens.ethToken,
      addr: new PublicKey("2ykrBhtj3fzcJ4GPgARiCwMcyuYzt1jptXhJNGLD6c6i"),
    },
    [Tokens.usdcToken.mint.toString()]: {
      ...Tokens.usdcToken,
      addr: new PublicKey("3ZuF3dG9S167Go2yWH5frp8VwEt89oVJEXoQzgodVgYZ"),
    },
  },
  curveType: CurveType.ConstantProduct,
  feeStructure: {
    traderFee: Percentage.fromFraction(2, 1000),
    ownerFee: Percentage.fromFraction(1, 1000),
  },
});

export const raySolPool: OrcaPoolParams = Object.freeze({
  address: new PublicKey("BrS3AFdVS4HRY4FZGnQYqAXybubfVi4drVUfZeMDn9Ms"),
  nonce: 254,
  authority: new PublicKey("9wpR2Bg7GStmEjq1XitBngmCSWDrgWKu52QAgy8x5ZNM"),
  poolTokenMint: new PublicKey("3KDB8msZ1HXNsFVGYS5GjrsEvESshKHJp9ThbqdZLNuZ"),
  poolTokenDecimals: 6,
  feeAccount: new PublicKey("FQYDJtnNyWxU6ktTNeg5dUEq9a1CFnZxztGq37oXLcEA"),
  tokenIds: [Tokens.rayToken.mint.toString(), Tokens.solToken.mint.toString()],
  tokens: {
    [Tokens.rayToken.mint.toString()]: {
      ...Tokens.rayToken,
      addr: new PublicKey("BFVSwDoZDWgPWkxVzMzEnf5J14XbdA2Li3pkZG1vPutz"),
    },
    [Tokens.solToken.mint.toString()]: {
      ...Tokens.solToken,
      addr: new PublicKey("8WpXNnBEnfAXsdowocE4QnJY4wMN2FyRM994Lz8V6Zcp"),
    },
  },
  curveType: CurveType.ConstantProduct,
  feeStructure: {
    traderFee: Percentage.fromFraction(2, 1000),
    ownerFee: Percentage.fromFraction(1, 1000),
  },
});

export const stepSolPool: OrcaPoolParams = Object.freeze({
  address: new PublicKey("DBfqFmScWiXHeX54vcTK7xQLUDCRK9C7RWGz3sYXDraa"),
  nonce: 254,
  authority: new PublicKey("3kr3Ky7kBF6Fva3xDA9xiZcJbhYkrPM6WaXNuJ4TuLXJ"),
  poolTokenMint: new PublicKey("2eKmVPvaFUP4gHNfsr2CHd4WzN1VLHuZbwWJF2oGFx35"),
  poolTokenDecimals: 6,
  feeAccount: new PublicKey("ANsaiwKx4GfwhYwaaGQb8pD3xXk1uy5k5Y9vfRhoMVV9"),
  tokenIds: [Tokens.stepToken.mint.toString(), Tokens.solToken.mint.toString()],
  tokens: {
    [Tokens.stepToken.mint.toString()]: {
      ...Tokens.stepToken,
      addr: new PublicKey("8hx4ngnFuseBzUX5rFdxJbzrCGtvCNSuUAHYS4oUPSUA"),
    },
    [Tokens.solToken.mint.toString()]: {
      ...Tokens.solToken,
      addr: new PublicKey("GNXv9etYxoHi3fajPWtTptibp6ZmmJ89sWZN92sxaRKh"),
    },
  },
  curveType: CurveType.ConstantProduct,
  feeStructure: {
    traderFee: Percentage.fromFraction(2, 1000),
    ownerFee: Percentage.fromFraction(1, 1000),
  },
});

export const ropeSolPool: OrcaPoolParams = Object.freeze({
  address: new PublicKey("7A5tVavQsBuEsghmAgXjmM62WKdrSfC39t1M2KJEUZeJ"),
  nonce: 252,
  authority: new PublicKey("FdGWE5F94kvgBUVf82SqWzyaw93hRve42zuY26j3tayR"),
  poolTokenMint: new PublicKey("BWKKNYY9ebmpoWRoWoWPwnD5Bz347inaJfgRASVK8Ki1"),
  poolTokenDecimals: 6,
  feeAccount: new PublicKey("EwYtMXBXhtCAVE5svziue2JkBBqzDBj7xNYyQsoyqLCN"),
  tokenIds: [Tokens.ropeToken.mint.toString(), Tokens.solToken.mint.toString()],
  tokens: {
    [Tokens.ropeToken.mint.toString()]: {
      ...Tokens.ropeToken,
      addr: new PublicKey("2S23Cmvmfg86MKcn61swSSqSF2bUE4JE3XHPuKGNfAy5"),
    },
    [Tokens.solToken.mint.toString()]: {
      ...Tokens.solToken,
      addr: new PublicKey("DeKfGqj7pUWmTidVYPxdCn2tjyem7Q2xT4p7qZwDsWYS"),
    },
  },
  curveType: CurveType.ConstantProduct,
  feeStructure: {
    traderFee: Percentage.fromFraction(2, 1000),
    ownerFee: Percentage.fromFraction(1, 1000),
  },
});

/**
 * Mapping for OrcaPool parameters
 * Key: poolTokenMint : OrcaPoolParams
 */
export const orcaPoolConfigs: Record<string, OrcaPoolParams> = {
  Hb7gJpT3E3rhtWtEgLLxvCmtt2sgdJNqk5xHeDyeqYgs: orcaSolPool,
  "5uADevdQu1qyKPGBUv8i8U3u4twF8pAMngMvdE3vjPuC": orcaUsdcPool,
  A3iUhJdYsbq9YCSFzpUfKUzkoBgPs5KN73PsuedSjmMB: solUsdcPool,
  "3kF2PdYAicdB1f2ihywFVXyYfAa97dt7mAaeccN7g9hb": solUsdtPool,
  "5YsMqWL1xwKDJzFFg3wYSyyVN3Ug1b3jibMTS9PCmL6y": ethSolPool,
  FebTkh8HbSBkehUXW9c7o8hVRziANG5h5UNg7dQGxczE: usdcUsdtPool,
  "3DJ7kS7RFxz2P6gD84ErhHcbqcFBiVtAZhFZKtvMBcDZ": ethUsdcPool,
  "3KDB8msZ1HXNsFVGYS5GjrsEvESshKHJp9ThbqdZLNuZ": raySolPool,
  "2eKmVPvaFUP4gHNfsr2CHd4WzN1VLHuZbwWJF2oGFx35": stepSolPool,
  BWKKNYY9ebmpoWRoWoWPwnD5Bz347inaJfgRASVK8Ki1: ropeSolPool,
};
