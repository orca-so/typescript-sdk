import { PublicKey } from "@solana/web3.js";
import { CurveType, OrcaPoolParams } from "../model/orca/pool/pool-types";
import { Percentage } from "../public/utils/models/percentage";
import * as Tokens from "./tokens";

/**
 * The following content is auto-generated.
 */

export const solUsdcPool: OrcaPoolParams = Object.freeze({
  address: new PublicKey("EGZ7tiLeH62TPV1gL8WwbXGzEPa9zmcpVnnkPKKnrE2U"),
  nonce: 252,
  authority: new PublicKey("JU8kmKzDHF9sXWsnoznaFDFezLsE5uomX2JkRMbmsQP"),
  poolTokenMint: new PublicKey("APDFRM3HMr8CAGXwKHiu2f5ePSpaiEJhaURwhsRrUUt9"),
  poolTokenDecimals: 6,
  feeAccount: new PublicKey("8JnSiuvQq3BVuCU3n4DrSTw9chBSPvEMswrhtifVkr1o"),
  tokenIds: [Tokens.solToken.mint.toString(), Tokens.usdcToken.mint.toString()],
  tokens: {
    [Tokens.solToken.mint.toString()]: {
      ...Tokens.solToken,
      addr: new PublicKey("ANP74VNsHwSrq9uUSjiSNyNWvf6ZPrKTmE4gHoNd13Lg"),
    },
    [Tokens.usdcToken.mint.toString()]: {
      ...Tokens.usdcToken,
      addr: new PublicKey("75HgnSvXbWKZBpZHveX68ZzAhDqMzNDS29X6BGLtxMo1"),
    },
  },
  curveType: CurveType.ConstantProduct,
  feeStructure: {
    traderFee: Percentage.fromFraction(25, 10000),
    ownerFee: Percentage.fromFraction(5, 10000),
  },
});

export const solUsdtPool: OrcaPoolParams = Object.freeze({
  address: new PublicKey("Dqk7mHQBx2ZWExmyrR2S8X6UG75CrbbpK2FSBZsNYsw6"),
  nonce: 255,
  authority: new PublicKey("2sxKY7hxVFrY5oNE2DgaPAJFamMzsmFLM2DgVcjK5yTy"),
  poolTokenMint: new PublicKey("FZthQCuYHhcfiDma7QrX7buDHwrZEd7vL8SjS6LQa3Tx"),
  poolTokenDecimals: 6,
  feeAccount: new PublicKey("BBKgw75FivTYXj85D2AWyVdaTdTWuSuHVXRm1Xu7fipb"),
  tokenIds: [Tokens.solToken.mint.toString(), Tokens.usdtToken.mint.toString()],
  tokens: {
    [Tokens.solToken.mint.toString()]: {
      ...Tokens.solToken,
      addr: new PublicKey("DTb8NKsfhEJGY1TrA7RXN6MBiTrjnkdMAfjPEjtmTT3M"),
    },
    [Tokens.usdtToken.mint.toString()]: {
      ...Tokens.usdtToken,
      addr: new PublicKey("E8erPjPEorykpPjFV9yUYMYigEWKQUxuGfL2rJKLJ3KU"),
    },
  },
  curveType: CurveType.ConstantProduct,
  feeStructure: {
    traderFee: Percentage.fromFraction(25, 10000),
    ownerFee: Percentage.fromFraction(5, 10000),
  },
});

export const ethSolPool: OrcaPoolParams = Object.freeze({
  address: new PublicKey("EuK3xDa4rWuHeMQCBsHf1ETZNiEQb5C476oE9u9kp8Ji"),
  nonce: 255,
  authority: new PublicKey("DffrDbzPiswDJaiicBBo9CjqztKgFLrqXGwNJH4XQefZ"),
  poolTokenMint: new PublicKey("71FymgN2ZUf7VvVTLE8jYEnjP3jSK1Frp2XT1nHs8Hob"),
  poolTokenDecimals: 6,
  feeAccount: new PublicKey("unxKgWEc71ZiHwMqZs3VLqjcjmZhfTZEg94ZLGvjdMP"),
  tokenIds: [Tokens.ethToken.mint.toString(), Tokens.solToken.mint.toString()],
  tokens: {
    [Tokens.ethToken.mint.toString()]: {
      ...Tokens.ethToken,
      addr: new PublicKey("7F2cLdio3i6CCJaypj9VfNDPW2DwT3vkDmZJDEfmxu6A"),
    },
    [Tokens.solToken.mint.toString()]: {
      ...Tokens.solToken,
      addr: new PublicKey("5pUTGvN2AA2BEzBDU4CNDh3LHER15WS6J8oJf5XeZFD8"),
    },
  },
  curveType: CurveType.ConstantProduct,
  feeStructure: {
    traderFee: Percentage.fromFraction(25, 10000),
    ownerFee: Percentage.fromFraction(5, 10000),
  },
});

export const ethUsdcPool: OrcaPoolParams = Object.freeze({
  address: new PublicKey("FgZut2qVQEyPBibaTJbbX2PxaMZvT1vjDebiVaDp5BWP"),
  nonce: 253,
  authority: new PublicKey("4dfCZR32xXhoTgMRhnViNaTFwiKP9A34TDjHCR3xM5rg"),
  poolTokenMint: new PublicKey("3e1W6Aqcbuk2DfHUwRiRcyzpyYRRjg6yhZZcyEARydUX"),
  poolTokenDecimals: 6,
  feeAccount: new PublicKey("DLWewB12jzGn4wXJmFCddWDeof1Ma4cZYNRv9CP5hTvX"),
  tokenIds: [Tokens.ethToken.mint.toString(), Tokens.usdcToken.mint.toString()],
  tokens: {
    [Tokens.ethToken.mint.toString()]: {
      ...Tokens.ethToken,
      addr: new PublicKey("H9h5yTBfCHcb4eRP87fXczzXgNaMzKihr7bf1sjw7iuZ"),
    },
    [Tokens.usdcToken.mint.toString()]: {
      ...Tokens.usdcToken,
      addr: new PublicKey("JA98RXv2VdxQD8pRQq4dzJ1Bp4nH8nokCGmxvPWKJ3hx"),
    },
  },
  curveType: CurveType.ConstantProduct,
  feeStructure: {
    traderFee: Percentage.fromFraction(25, 10000),
    ownerFee: Percentage.fromFraction(5, 10000),
  },
});

export const raySolPool: OrcaPoolParams = Object.freeze({
  address: new PublicKey("3THMPkPmcHJ54JtHRyazhs7UN7HbV5KiNJVLJs6hSPSC"),
  nonce: 255,
  authority: new PublicKey("EUc3MtHPLL956pTDfM5q25jp5Fk9zW7omEzh1uyDY7s6"),
  poolTokenMint: new PublicKey("5kimD5W6yJpHRHCyPtnEyDsQRdiiJKivu5AqN3si82Jc"),
  poolTokenDecimals: 6,
  feeAccount: new PublicKey("65XNtnUsP1TMzKMGhMoD3GUFMNbmnZQwDaxDLE3jncUC"),
  tokenIds: [Tokens.rayToken.mint.toString(), Tokens.solToken.mint.toString()],
  tokens: {
    [Tokens.rayToken.mint.toString()]: {
      ...Tokens.rayToken,
      addr: new PublicKey("GZaUNWf4ov6VZaD5MqZtc5pHB3mWTqczNUB4sstt8CSR"),
    },
    [Tokens.solToken.mint.toString()]: {
      ...Tokens.solToken,
      addr: new PublicKey("GNSZ1rr57QQ6qLcmZnhMcoBymenVezhNpzcFSfJP37h9"),
    },
  },
  curveType: CurveType.ConstantProduct,
  feeStructure: {
    traderFee: Percentage.fromFraction(25, 10000),
    ownerFee: Percentage.fromFraction(5, 10000),
  },
});

export const ropeSolPool: OrcaPoolParams = Object.freeze({
  address: new PublicKey("DCENobjFZK59nLeMCVRkQtnkAWrJkWAVpmVnwVNc8gqH"),
  nonce: 251,
  authority: new PublicKey("C2DDX95TK3uC9MQXhHp3LWRv9kWtFTp36Ub9VPCKKiCV"),
  poolTokenMint: new PublicKey("ADrvfPBsRcJfGsN6Bs385zYddH52nuM5FA8UaAkX9o2V"),
  poolTokenDecimals: 6,
  feeAccount: new PublicKey("88rKjeeDQYJxGVCG39znDvbxzjPc5H37XqHRQCSNJvED"),
  tokenIds: [Tokens.ropeToken.mint.toString(), Tokens.solToken.mint.toString()],
  tokens: {
    [Tokens.ropeToken.mint.toString()]: {
      ...Tokens.ropeToken,
      addr: new PublicKey("HLHPVwgzYjTHmu1fmV9eZzdE8H3fZwhuCBRNNN2Z5miA"),
    },
    [Tokens.solToken.mint.toString()]: {
      ...Tokens.solToken,
      addr: new PublicKey("7Be3aStQmKgeXC1xqfJnA8qaGzw6keQTLqHYAJprZK2H"),
    },
  },
  curveType: CurveType.ConstantProduct,
  feeStructure: {
    traderFee: Percentage.fromFraction(25, 10000),
    ownerFee: Percentage.fromFraction(5, 10000),
  },
});

export const stepSolPool: OrcaPoolParams = Object.freeze({
  address: new PublicKey("2sNtf8wLZMR7XJm2pzvvVUNPTNRFsGTiC5vgDSGv5QGD"),
  nonce: 255,
  authority: new PublicKey("HzAJLVqZ7fnmc2LfRPtz2GHu93RpAPQsdDTg6DRoTTmf"),
  poolTokenMint: new PublicKey("8nTzqDXHriG2CXKbybeuEh1EqDQMtrbYMFWcP7AkiDaP"),
  poolTokenDecimals: 6,
  feeAccount: new PublicKey("5FEmPmAk72NycwzMXLD3hc2f47zRXocv4mvd3HEUZ5io"),
  tokenIds: [Tokens.stepToken.mint.toString(), Tokens.solToken.mint.toString()],
  tokens: {
    [Tokens.stepToken.mint.toString()]: {
      ...Tokens.stepToken,
      addr: new PublicKey("35opuEpVvggzfV361hQVNXiC7KAKS1HCeDoVpfVybo8k"),
    },
    [Tokens.solToken.mint.toString()]: {
      ...Tokens.solToken,
      addr: new PublicKey("A3DSsYZJWHiwXSQb7P2AbEoaWhpauJLU1PVdTPnzV5s9"),
    },
  },
  curveType: CurveType.ConstantProduct,
  feeStructure: {
    traderFee: Percentage.fromFraction(25, 10000),
    ownerFee: Percentage.fromFraction(5, 10000),
  },
});

export const srmSolPool: OrcaPoolParams = Object.freeze({
  address: new PublicKey("EJRXAkKyDhDgzdZz1Ss5CpWKWSK9xTR5S6GDLAer8mdh"),
  nonce: 255,
  authority: new PublicKey("2pQbngWBSWUjBHWVWQ3tppKxW3Y5NzUcye1822itKyzZ"),
  poolTokenMint: new PublicKey("9tf8rBSEQYG7AqL896fN2nZi1iYPqpWaLEdpbeQaC1Vy"),
  poolTokenDecimals: 6,
  feeAccount: new PublicKey("APyc1s8wES4Q2FTqHN8jXZtRuWQyRWZ82u7EFfras2iZ"),
  tokenIds: [Tokens.srmToken.mint.toString(), Tokens.solToken.mint.toString()],
  tokens: {
    [Tokens.srmToken.mint.toString()]: {
      ...Tokens.srmToken,
      addr: new PublicKey("2JCxZv6LaFjtWqBXSC2brsWE9WryS4Cp3VwwDeNGvLyv"),
    },
    [Tokens.solToken.mint.toString()]: {
      ...Tokens.solToken,
      addr: new PublicKey("EdhG3vQbTVVAARZB4AbhU2HsVbvfFqX2yhBAfFV22nzA"),
    },
  },
  curveType: CurveType.ConstantProduct,
  feeStructure: {
    traderFee: Percentage.fromFraction(25, 10000),
    ownerFee: Percentage.fromFraction(5, 10000),
  },
});

export const fttSolPool: OrcaPoolParams = Object.freeze({
  address: new PublicKey("68Bg6yQxWm3mrUYk3XzMiF5ycE41HwPhyEdaB1cp6wuo"),
  nonce: 255,
  authority: new PublicKey("BpshqwEmPXmJwJfFgTFafmXoHN8Lc7SouvFsh6jyYQAm"),
  poolTokenMint: new PublicKey("EsYaDKJCmcJtJHFuJYwQZwqohvVMCrFzcg8yo3i328No"),
  poolTokenDecimals: 6,
  feeAccount: new PublicKey("FWBCbjZnypLKz7uHGJXpBAEez2FurQXi9J3js7ZT1xDe"),
  tokenIds: [Tokens.fttToken.mint.toString(), Tokens.solToken.mint.toString()],
  tokens: {
    [Tokens.fttToken.mint.toString()]: {
      ...Tokens.fttToken,
      addr: new PublicKey("3eVE92aEAsLYcBACXNu1yxoHVfTM8e8vmQC2zSApGRJX"),
    },
    [Tokens.solToken.mint.toString()]: {
      ...Tokens.solToken,
      addr: new PublicKey("BbsiNbFfJsRDwqF4JaiJ6sKecNuY4eWmEaDHcY6h6HuD"),
    },
  },
  curveType: CurveType.ConstantProduct,
  feeStructure: {
    traderFee: Percentage.fromFraction(25, 10000),
    ownerFee: Percentage.fromFraction(5, 10000),
  },
});

export const copeSolPool: OrcaPoolParams = Object.freeze({
  address: new PublicKey("BRx4dJecxzeGYc1BskCWonfGCeMyv9G7tk66cf2QGhK6"),
  nonce: 254,
  authority: new PublicKey("JAJr1D6BQHFj9qJ8pfXhvJgLfn9vTcviU9sTA8MhKzN4"),
  poolTokenMint: new PublicKey("CzieDbGRdN1QGaGDNpSqzEA18bi881ccvkkGZi51pe1k"),
  poolTokenDecimals: 6,
  feeAccount: new PublicKey("9X8VRnxk6EVKGA7TErdSZYFC8oLUM569pDbZTtycjvXw"),
  tokenIds: [Tokens.copeToken.mint.toString(), Tokens.solToken.mint.toString()],
  tokens: {
    [Tokens.copeToken.mint.toString()]: {
      ...Tokens.copeToken,
      addr: new PublicKey("7v5GCdHH439SztxcqL4wpfWdPvv9EfMm8GYTHSUQoGoY"),
    },
    [Tokens.solToken.mint.toString()]: {
      ...Tokens.solToken,
      addr: new PublicKey("5tSgRUK6f2x1nAXA4gdcHNXiWdToqni9pr5xvq2Fq82u"),
    },
  },
  curveType: CurveType.ConstantProduct,
  feeStructure: {
    traderFee: Percentage.fromFraction(25, 10000),
    ownerFee: Percentage.fromFraction(5, 10000),
  },
});

export const oxySolPool: OrcaPoolParams = Object.freeze({
  address: new PublicKey("Cq4EZrvuFQpsCz8L3gS6t7iQ7VWzTtqDgSxD4AgVAAfd"),
  nonce: 255,
  authority: new PublicKey("FxxcJPunf6Vj9Ve5zyM9yatMbmkrzTQ1QSk4NqKW9DvK"),
  poolTokenMint: new PublicKey("7tYCdLN84EnTMkxM7HNamWJx7F4xgKe9KiiWvLyWjbgT"),
  poolTokenDecimals: 6,
  feeAccount: new PublicKey("Ch8i2A1GAspivXYfdme7vSxh1mhRjmRgeiKN8KpWhVqo"),
  tokenIds: [Tokens.oxyToken.mint.toString(), Tokens.solToken.mint.toString()],
  tokens: {
    [Tokens.oxyToken.mint.toString()]: {
      ...Tokens.oxyToken,
      addr: new PublicKey("BoZQMfTLTPcXnevJxNFkECVbKesfhXnTUg4kxLgzV9BX"),
    },
    [Tokens.solToken.mint.toString()]: {
      ...Tokens.solToken,
      addr: new PublicKey("8ZrEcJbgg7BdoBga5RYDR8aMujLf5cAQp8zdPZqk7nNC"),
    },
  },
  curveType: CurveType.ConstantProduct,
  feeStructure: {
    traderFee: Percentage.fromFraction(25, 10000),
    ownerFee: Percentage.fromFraction(5, 10000),
  },
});

export const btcSolPool: OrcaPoolParams = Object.freeze({
  address: new PublicKey("7N2AEJ98qBs4PwEwZ6k5pj8uZBKMkZrKZeiC7A64B47u"),
  nonce: 255,
  authority: new PublicKey("GqnLhu3bPQ46nTZYNFDnzhwm31iFoqhi3ntXMtc5DPiT"),
  poolTokenMint: new PublicKey("Acxs19v6eUMTEfdvkvWkRB4bwFCHm3XV9jABCy7c1mXe"),
  poolTokenDecimals: 6,
  feeAccount: new PublicKey("4yPG4A9jB3ibDMVXEN2aZW4oA1e1xzzA3z5VWjkZd18B"),
  tokenIds: [Tokens.btcToken.mint.toString(), Tokens.solToken.mint.toString()],
  tokens: {
    [Tokens.btcToken.mint.toString()]: {
      ...Tokens.btcToken,
      addr: new PublicKey("9G5TBPbEUg2iaFxJ29uVAT8ZzxY77esRshyHiLYZKRh8"),
    },
    [Tokens.solToken.mint.toString()]: {
      ...Tokens.solToken,
      addr: new PublicKey("5eqcnUasgU2NRrEAeWxvFVRTTYWJWfAJhsdffvc6nJc2"),
    },
  },
  curveType: CurveType.ConstantProduct,
  feeStructure: {
    traderFee: Percentage.fromFraction(25, 10000),
    ownerFee: Percentage.fromFraction(5, 10000),
  },
});

export const merSolPool: OrcaPoolParams = Object.freeze({
  address: new PublicKey("UJBm2tHwDbQZpjQvaHozg5qkjh6prSKhnWheqR5T76Q"),
  nonce: 255,
  authority: new PublicKey("C8HcMrC9WRqqXVbHRhZWjuZPbbWmszDobKFxevCtGhpT"),
  poolTokenMint: new PublicKey("HiwRobjfHZ4zsPtqCC4oBS24pSmy4t8GGkXRbQj4yU6L"),
  poolTokenDecimals: 6,
  feeAccount: new PublicKey("3Fdj69449GhiDmqyvWWTSafjRphGdiDhZ5i5rqfHBdio"),
  tokenIds: [Tokens.merToken.mint.toString(), Tokens.solToken.mint.toString()],
  tokens: {
    [Tokens.merToken.mint.toString()]: {
      ...Tokens.merToken,
      addr: new PublicKey("DHdkRWTa9SRJNMtWZQYvNNbjrDP3n92EWLHezjFGPipb"),
    },
    [Tokens.solToken.mint.toString()]: {
      ...Tokens.solToken,
      addr: new PublicKey("DC5RwjB3VkXdt2PoWKTA4Ub9KbtcY8xXpmPNKsFjALwq"),
    },
  },
  curveType: CurveType.ConstantProduct,
  feeStructure: {
    traderFee: Percentage.fromFraction(25, 10000),
    ownerFee: Percentage.fromFraction(5, 10000),
  },
});

export const fidaSolPool: OrcaPoolParams = Object.freeze({
  address: new PublicKey("4SUBbivGMvMhem3ajVtkmuPvL4GuQ8kfYTJFuQfG4F8t"),
  nonce: 255,
  authority: new PublicKey("owuNLod7H14GpQCUodcdBBeD4LiZ2T5U9KpS2sAbTp6"),
  poolTokenMint: new PublicKey("EYsNdtyu4gGTaGz8N5m5iQ3G1N6rDyMbR72B3CqbWW4W"),
  poolTokenDecimals: 6,
  feeAccount: new PublicKey("J2s1GpduscTTvMYt3os8LdvT24uhr9bPnTbxSKZZhEma"),
  tokenIds: [Tokens.fidaToken.mint.toString(), Tokens.solToken.mint.toString()],
  tokens: {
    [Tokens.fidaToken.mint.toString()]: {
      ...Tokens.fidaToken,
      addr: new PublicKey("9ofyx5yFzjH1XWmJzfiGCDfhq6ho8yFbszGQrrJXe54"),
    },
    [Tokens.solToken.mint.toString()]: {
      ...Tokens.solToken,
      addr: new PublicKey("55moYcq91pXbSRpL2DR8P3BehqSNWiJrdTn5SZFc2STn"),
    },
  },
  curveType: CurveType.ConstantProduct,
  feeStructure: {
    traderFee: Percentage.fromFraction(25, 10000),
    ownerFee: Percentage.fromFraction(5, 10000),
  },
});

export const mapsSolPool: OrcaPoolParams = Object.freeze({
  address: new PublicKey("4rkgbbCPKk5zx3KiwcCNiSpNSSLgAkswKGfX7CJjGgtC"),
  nonce: 255,
  authority: new PublicKey("8uuBxVsGf2bqH5t8mct5NfpgcTDb7czXuWVEm6Boia4x"),
  poolTokenMint: new PublicKey("99pfC8fWymXgbq3CvrExhx3UxQDC1fMWEWLbNT83F45e"),
  poolTokenDecimals: 6,
  feeAccount: new PublicKey("8w3gx1GQ1UN5sodEVP14qUwzCcgopHWUeWbT26hgK3xh"),
  tokenIds: [Tokens.mapsToken.mint.toString(), Tokens.solToken.mint.toString()],
  tokens: {
    [Tokens.mapsToken.mint.toString()]: {
      ...Tokens.mapsToken,
      addr: new PublicKey("BqExNTYk7YdeiaREHqnqN2q1F3dBCTPhkwrrWBFD4F1m"),
    },
    [Tokens.solToken.mint.toString()]: {
      ...Tokens.solToken,
      addr: new PublicKey("HdEQ99E979aXn2xTcg5UXEfLynwFkqpPTxLaNkH7Nz7P"),
    },
  },
  curveType: CurveType.ConstantProduct,
  feeStructure: {
    traderFee: Percentage.fromFraction(25, 10000),
    ownerFee: Percentage.fromFraction(5, 10000),
  },
});

export const usdcUsdtPool: OrcaPoolParams = Object.freeze({
  address: new PublicKey("F13xvvx45jVGd84ynK3c8T89UejQVxjCLtmHfPmAXAHP"),
  nonce: 255,
  authority: new PublicKey("3cGHDS8uWhdxQj14vTmFtYHX3NMouPpE4o9MjQ43Bbf4"),
  poolTokenMint: new PublicKey("H2uzgruPvonVpCRhwwdukcpXK8TG17swFNzYFr2rtPxy"),
  poolTokenDecimals: 6,
  feeAccount: new PublicKey("B4RNxMJGRzKFQyTq2Uwkmpyjtew13n7KtdqZy6qgENTu"),
  tokenIds: [Tokens.usdcToken.mint.toString(), Tokens.usdtToken.mint.toString()],
  tokens: {
    [Tokens.usdcToken.mint.toString()]: {
      ...Tokens.usdcToken,
      addr: new PublicKey("6uUn2okWk5v4x9Gc4n2LLGHtWoa9tmizHq1363dW7t9W"),
    },
    [Tokens.usdtToken.mint.toString()]: {
      ...Tokens.usdtToken,
      addr: new PublicKey("AiwmnLy7xPT28dqZpkRm6i1ZGwELUCzCsuN92v4JkSeU"),
    },
  },
  curveType: CurveType.Stable,
  amp: 100,
  feeStructure: {
    traderFee: Percentage.fromFraction(6, 10000),
    ownerFee: Percentage.fromFraction(1, 10000),
  },
});

export const orcaSolPool: OrcaPoolParams = Object.freeze({
  address: new PublicKey("2ZnVuidTHpi5WWKUwFXauYGhvdT9jRKYv5MDahtbwtYr"),
  nonce: 255,
  authority: new PublicKey("2PH1quJj9MHQXATCmNZ6qQ2gZqM8R236DpKaz99ggVpm"),
  poolTokenMint: new PublicKey("2uVjAuRXavpM6h1scGQaxqb6HVaNRn6T2X7HHXTabz25"),
  poolTokenDecimals: 6,
  feeAccount: new PublicKey("4Zc4kQZhRQeGztihvcGSWezJE1k44kKEgPCAkdeBfras"),
  tokenIds: [Tokens.orcaToken.mint.toString(), Tokens.solToken.mint.toString()],
  tokens: {
    [Tokens.orcaToken.mint.toString()]: {
      ...Tokens.orcaToken,
      addr: new PublicKey("AioST8HKQJRqjE1mknk4Rydc8wVADhdQwRJmAAYX1T6Z"),
    },
    [Tokens.solToken.mint.toString()]: {
      ...Tokens.solToken,
      addr: new PublicKey("73zdy95DynZP4exdpuXTDsexcrWbDJX9TFi2E6CDzXh4"),
    },
  },
  curveType: CurveType.ConstantProduct,
  feeStructure: {
    traderFee: Percentage.fromFraction(25, 10000),
    ownerFee: Percentage.fromFraction(5, 10000),
  },
});

export const orcaUsdcPool: OrcaPoolParams = Object.freeze({
  address: new PublicKey("2p7nYbtPBgtmY69NsE8DAW6szpRJn7tQvDnqvoEWQvjY"),
  nonce: 254,
  authority: new PublicKey("3fr1AhdiAmWLeNrS24CMoAu9pPgbzVhwLtJ6QUPmw2ob"),
  poolTokenMint: new PublicKey("n8Mpu28RjeYD7oUX3LG1tPxzhRZh3YYLRSHcHRdS3Zx"),
  poolTokenDecimals: 6,
  feeAccount: new PublicKey("7CXZED4jfRp3qdHB9Py3up6v1C4UhHofFvfT6RXbJLRN"),
  tokenIds: [Tokens.orcaToken.mint.toString(), Tokens.usdcToken.mint.toString()],
  tokens: {
    [Tokens.orcaToken.mint.toString()]: {
      ...Tokens.orcaToken,
      addr: new PublicKey("9vYWHBPz817wJdQpE8u3h8UoY3sZ16ZXdCcvLB7jY4Dj"),
    },
    [Tokens.usdcToken.mint.toString()]: {
      ...Tokens.usdcToken,
      addr: new PublicKey("6UczejMUv1tzdvUzKpULKHxrK9sqLm8edR1v9jinVWm9"),
    },
  },
  curveType: CurveType.ConstantProduct,
  feeStructure: {
    traderFee: Percentage.fromFraction(25, 10000),
    ownerFee: Percentage.fromFraction(5, 10000),
  },
});

export const kinSolPool: OrcaPoolParams = Object.freeze({
  address: new PublicKey("Ez52BLSoZw3MxWxMK4ADsJXqzUiYW9sUnwcrrQwQGdLT"),
  nonce: 253,
  authority: new PublicKey("C6WisvFQzqxTBF3DV6RFbPMPBiVHE816CZHoctB3WzrW"),
  poolTokenMint: new PublicKey("HEvnD66WcBfTajS9adUYnGRBMDehFtLySiFHSD6kEBWs"),
  poolTokenDecimals: 6,
  feeAccount: new PublicKey("5bLeJU66qTopjZBa48BUd7EXWcj4UeCMfHjjrvt8Zcgs"),
  tokenIds: [Tokens.kinToken.mint.toString(), Tokens.solToken.mint.toString()],
  tokens: {
    [Tokens.kinToken.mint.toString()]: {
      ...Tokens.kinToken,
      addr: new PublicKey("2Ssm5Dd1Zc5QpGSZzuqt3Ef4bADteuBbCGiEZJ5n48rV"),
    },
    [Tokens.solToken.mint.toString()]: {
      ...Tokens.solToken,
      addr: new PublicKey("HCS9EpKRxWDS9GCRFStNbPWgRQpvV6EyBWChJja2UbCm"),
    },
  },
  curveType: CurveType.ConstantProduct,
  feeStructure: {
    traderFee: Percentage.fromFraction(25, 10000),
    ownerFee: Percentage.fromFraction(5, 10000),
  },
});

export const samoSolPool: OrcaPoolParams = Object.freeze({
  address: new PublicKey("DiAP9qmp5foN7fLTWfBWjo9KBS1jgvKUJLWi1ZhqKaja"),
  nonce: 255,
  authority: new PublicKey("3uZcofBKVBYFrQ7jVjTFLEMWAQiZcih4AES5tKBqdo7m"),
  poolTokenMint: new PublicKey("D6N9j8F2DhtzDtrdpT74y3u2YmYAzcggiLc3nTjqux9M"),
  poolTokenDecimals: 6,
  feeAccount: new PublicKey("BYAjG645fRRHZ5JFnZKnXc4dzK9WppcoVWDMYj3zm3KF"),
  tokenIds: [Tokens.samoToken.mint.toString(), Tokens.solToken.mint.toString()],
  tokens: {
    [Tokens.samoToken.mint.toString()]: {
      ...Tokens.samoToken,
      addr: new PublicKey("AFcbD7UTzk9d1njRxyDHNbQ5Q6miPNAE1GctjD96JYAi"),
    },
    [Tokens.solToken.mint.toString()]: {
      ...Tokens.solToken,
      addr: new PublicKey("6kYbPDsYLQUwptV7ZvQKG3gjNreEEgaWh2CM4DQPYTpq"),
    },
  },
  curveType: CurveType.ConstantProduct,
  feeStructure: {
    traderFee: Percentage.fromFraction(25, 10000),
    ownerFee: Percentage.fromFraction(5, 10000),
  },
});

export const liqUsdcPool: OrcaPoolParams = Object.freeze({
  address: new PublicKey("AXSeEafwPUGSamiZWH8m2PJtvpDVtrofxvycNwxiysdh"),
  nonce: 254,
  authority: new PublicKey("6Y5TnCwgifc8Z7QYo672nT9uNd2hcivVR1NT6oDkJx6P"),
  poolTokenMint: new PublicKey("3PD9SZFwXKkXr4akLf4ofo37ZUMycwML89R2P3qxcbZG"),
  poolTokenDecimals: 6,
  feeAccount: new PublicKey("FSVPcprrTkQLRtDACFEpa2rhEVx4kBvjPuQaxj572SaC"),
  tokenIds: [Tokens.liqToken.mint.toString(), Tokens.usdcToken.mint.toString()],
  tokens: {
    [Tokens.liqToken.mint.toString()]: {
      ...Tokens.liqToken,
      addr: new PublicKey("CVspL8Tj5YdqntXJegNeDXHiBn3648QDNB7gex6D9MgY"),
    },
    [Tokens.usdcToken.mint.toString()]: {
      ...Tokens.usdcToken,
      addr: new PublicKey("8YzLsZ1FtsruswkBogEaXwmRTf5PMuyVcfSZXRAdi8qA"),
    },
  },
  curveType: CurveType.ConstantProduct,
  feeStructure: {
    traderFee: Percentage.fromFraction(25, 10000),
    ownerFee: Percentage.fromFraction(5, 10000),
  },
});

export const snyUsdcPool: OrcaPoolParams = Object.freeze({
  address: new PublicKey("BDn3Fj9UXVi2mRVMR2jzpCrAZZphnwfkvFhs192yhCTu"),
  nonce: 255,
  authority: new PublicKey("FvjsfbbzZAcrVdfrGtZUjGWAjWHXrfMG8Bjwc17vVSK3"),
  poolTokenMint: new PublicKey("AZpo4BJHHRetF96v6SGinFZBMXM4yWMo4RA8C4PriDLk"),
  poolTokenDecimals: 6,
  feeAccount: new PublicKey("DiULDJAYXdbtX8CfFsU2jCgHvQWT7u3gwRwpvQxfEMvr"),
  tokenIds: [Tokens.snyToken.mint.toString(), Tokens.usdcToken.mint.toString()],
  tokens: {
    [Tokens.snyToken.mint.toString()]: {
      ...Tokens.snyToken,
      addr: new PublicKey("14RHMRzwx9Y4Z41qpr9sTwJZ58wXqV1R9WTkUA7ybmKG"),
    },
    [Tokens.usdcToken.mint.toString()]: {
      ...Tokens.usdcToken,
      addr: new PublicKey("Dw9D9T4bBC3oGdMqxE1xWfPSCJ27SYwWD8rFfUxU99QG"),
    },
  },
  curveType: CurveType.ConstantProduct,
  feeStructure: {
    traderFee: Percentage.fromFraction(25, 10000),
    ownerFee: Percentage.fromFraction(5, 10000),
  },
});

export const msolUsdcPool: OrcaPoolParams = Object.freeze({
  address: new PublicKey("Hme4Jnqhdz2jAPUMnS7jGE5zv6Y1ynqrUEhmUAWkXmzn"),
  nonce: 255,
  authority: new PublicKey("9Z7E42k46kxnBjAh8YGXDw3rRGwwxQUBYM7Ccrmwg6ZP"),
  poolTokenMint: new PublicKey("8PSfyiTVwPb6Rr2iZ8F3kNpbg65BCfJM9v8LfB916r44"),
  poolTokenDecimals: 6,
  feeAccount: new PublicKey("3W3Skj2vQsNEMhGRQprFXQy3Q8ZbM6ojdgiDCokVPWno"),
  tokenIds: [Tokens.msolToken.mint.toString(), Tokens.usdcToken.mint.toString()],
  tokens: {
    [Tokens.msolToken.mint.toString()]: {
      ...Tokens.msolToken,
      addr: new PublicKey("GBa7G5f1FqAXEgByuHXsqsEdpyMjRgT9SNxZwmmnEJAY"),
    },
    [Tokens.usdcToken.mint.toString()]: {
      ...Tokens.usdcToken,
      addr: new PublicKey("7hFgNawzzmpDM8TTVCKm8jykBrym8C3TQdb8TDAfAVkD"),
    },
  },
  curveType: CurveType.ConstantProduct,
  feeStructure: {
    traderFee: Percentage.fromFraction(25, 10000),
    ownerFee: Percentage.fromFraction(5, 10000),
  },
});

export const slrsUsdcPool: OrcaPoolParams = Object.freeze({
  address: new PublicKey("87Xz6RK1uzP5NEhSjMewZtDAZyg4V1tYAa1KHnvge17b"),
  nonce: 254,
  authority: new PublicKey("5D9v9y6Kbswe6k1wnVceuqRXHMsRQJ8xzx8hadSH6EAM"),
  poolTokenMint: new PublicKey("AtB4nUmdyQfuWWJ9xAHw9xyVnJFfSjSuVWkiYan8y86w"),
  poolTokenDecimals: 6,
  feeAccount: new PublicKey("CLxeBxNq42AtmD43F5BTqCHTnkVHX8sP9cVPdtRkTL7D"),
  tokenIds: [Tokens.slrsToken.mint.toString(), Tokens.usdcToken.mint.toString()],
  tokens: {
    [Tokens.slrsToken.mint.toString()]: {
      ...Tokens.slrsToken,
      addr: new PublicKey("CM7oGYHy1oxzHoum8Cxv4pwnndm6Jbs3NkBZkc6v9S9d"),
    },
    [Tokens.usdcToken.mint.toString()]: {
      ...Tokens.usdcToken,
      addr: new PublicKey("3QqPbMcUMZu3Rz762g7JgvpUxhRHPtE9HFk2MSDRmPqa"),
    },
  },
  curveType: CurveType.ConstantProduct,
  feeStructure: {
    traderFee: Percentage.fromFraction(25, 10000),
    ownerFee: Percentage.fromFraction(5, 10000),
  },
});

export const portUsdcPool: OrcaPoolParams = Object.freeze({
  address: new PublicKey("4if9Gy7dvjU7XwunKxdnCcPsaT3yAHPXdz2XS1eo19LG"),
  nonce: 254,
  authority: new PublicKey("BshtCZRCHj2RZYC7u5sW3ioRJo9ZiYA4T5p8muFwrKnb"),
  poolTokenMint: new PublicKey("F8gPSpwVHj8FdAJAYULDuZBxFEJut87hUbARYYx3471w"),
  poolTokenDecimals: 6,
  feeAccount: new PublicKey("5JZXUbCfaSo3y9PYq47Hj5Yc6hVFa4j7MkDzBJfMSRSN"),
  tokenIds: [Tokens.portToken.mint.toString(), Tokens.usdcToken.mint.toString()],
  tokens: {
    [Tokens.portToken.mint.toString()]: {
      ...Tokens.portToken,
      addr: new PublicKey("2wuSqR5z2Guft2yt57Hx7K6i1AYNoUi8fjxHUeAgaKXo"),
    },
    [Tokens.usdcToken.mint.toString()]: {
      ...Tokens.usdcToken,
      addr: new PublicKey("AvP1Db3SyUxLGMSc4nSXjJkjm1kAjiLjog7cup19eWa3"),
    },
  },
  curveType: CurveType.ConstantProduct,
  feeStructure: {
    traderFee: Percentage.fromFraction(25, 10000),
    ownerFee: Percentage.fromFraction(5, 10000),
  },
});

export const sbrUsdcPool: OrcaPoolParams = Object.freeze({
  address: new PublicKey("HiYggjP2fN53Jw46e5UuskqNP3HH98jceRxEgVoeRwNw"),
  nonce: 255,
  authority: new PublicKey("ATkEV1nEkdp7zgaGpzFCsJ5WAyejcJbxqzGhQpfcDW4S"),
  poolTokenMint: new PublicKey("CS7fA5n4c2D82dUoHrYzS3gAqgqaoVSfgsr18kitp2xo"),
  poolTokenDecimals: 6,
  feeAccount: new PublicKey("7S3KKuvcHfcKWBGLDwmoTgtB97JE8LHruP8jbmQkGfH"),
  tokenIds: [Tokens.sbrToken.mint.toString(), Tokens.usdcToken.mint.toString()],
  tokens: {
    [Tokens.sbrToken.mint.toString()]: {
      ...Tokens.sbrToken,
      addr: new PublicKey("DrJTQqNZqNCf2HDLpYg9zRCMRwnhZEVQuGjeaWtX6CA7"),
    },
    [Tokens.usdcToken.mint.toString()]: {
      ...Tokens.usdcToken,
      addr: new PublicKey("DEVLUv1uiUSukQoBdy9fDQyehi4N2Boojy8J2LQ8bK2E"),
    },
  },
  curveType: CurveType.ConstantProduct,
  feeStructure: {
    traderFee: Percentage.fromFraction(25, 10000),
    ownerFee: Percentage.fromFraction(5, 10000),
  },
});

export const socnUsdcPool: OrcaPoolParams = Object.freeze({
  address: new PublicKey("6Gh36sNXrGWYiWr999d9iZtqgnipJbWuBohyHBN1cJpS"),
  nonce: 255,
  authority: new PublicKey("GXWEpRURaQZ9E62Q23EreTUfBy4hfemXgWFUWcg7YFgv"),
  poolTokenMint: new PublicKey("Dkr8B675PGnNwEr9vTKXznjjHke5454EQdz3iaSbparB"),
  poolTokenDecimals: 6,
  feeAccount: new PublicKey("HsC1Jo38jK3EpoNAkxfoUJhQVPa28anewZpLfeouUNk7"),
  tokenIds: [Tokens.socnToken.mint.toString(), Tokens.usdcToken.mint.toString()],
  tokens: {
    [Tokens.socnToken.mint.toString()]: {
      ...Tokens.socnToken,
      addr: new PublicKey("7xs9QsrxQDVoWQ8LQ8VsVjfPKBrPGjvg8ZhaLnU1i2VR"),
    },
    [Tokens.usdcToken.mint.toString()]: {
      ...Tokens.usdcToken,
      addr: new PublicKey("FZFJK64Fk1t619zmVPqCx8Uy29zJ3WuvjWitCQuxXRo3"),
    },
  },
  curveType: CurveType.ConstantProduct,
  feeStructure: {
    traderFee: Percentage.fromFraction(25, 10000),
    ownerFee: Percentage.fromFraction(5, 10000),
  },
});

export const psolUsdcPool: OrcaPoolParams = Object.freeze({
  address: new PublicKey("GW1Xt9HHtvcnky8X7aBA3BoTgiirJKP5XwC5REFcZSsc"),
  nonce: 254,
  authority: new PublicKey("GXueH9K1MzRncoTYbpLiXXC3WrKkmHUFxV5JEu8oADbw"),
  poolTokenMint: new PublicKey("C2YzN6MymD5HM2kPaH7bzcbqciyjfmpqyVaR3KA5V6z1"),
  poolTokenDecimals: 6,
  feeAccount: new PublicKey("BhHd49JYH3Hk6TV5kCjmUgf7fQSQKDjaWTokMmBhTx9o"),
  tokenIds: [Tokens.psolToken.mint.toString(), Tokens.usdcToken.mint.toString()],
  tokens: {
    [Tokens.psolToken.mint.toString()]: {
      ...Tokens.psolToken,
      addr: new PublicKey("F7XioZaGe99nosYJQCahx25TKgdUGufYf6sudm1JSgu"),
    },
    [Tokens.usdcToken.mint.toString()]: {
      ...Tokens.usdcToken,
      addr: new PublicKey("BT14DfFyNS7qcBGc8TY4HAzDev4vvqsoFBJgjtQpdM2Z"),
    },
  },
  curveType: CurveType.ConstantProduct,
  feeStructure: {
    traderFee: Percentage.fromFraction(25, 10000),
    ownerFee: Percentage.fromFraction(5, 10000),
  },
});

export const msolSolPool: OrcaPoolParams = Object.freeze({
  address: new PublicKey("9EQMEzJdE2LDAY1hw1RytpufdwAXzatYfQ3M2UuT9b88"),
  nonce: 250,
  authority: new PublicKey("6cwehd4xhKkJ2s7iGh4CaDb7KhMgqczSBnyNJieUYbHn"),
  poolTokenMint: new PublicKey("29cdoMgu6MS2VXpcMo1sqRdWEzdUR9tjvoh8fcK8Z87R"),
  poolTokenDecimals: 6,
  feeAccount: new PublicKey("6j2tt2UVYMQwqG3hRtyydW3odzBFwy3pN33tyB3xCKQ6"),
  tokenIds: [Tokens.msolToken.mint.toString(), Tokens.solToken.mint.toString()],
  tokens: {
    [Tokens.msolToken.mint.toString()]: {
      ...Tokens.msolToken,
      addr: new PublicKey("6xmki5RtGNHrfhTiHFfp9k3RQ9t8qgL1cYP2YCG2h179"),
    },
    [Tokens.solToken.mint.toString()]: {
      ...Tokens.solToken,
      addr: new PublicKey("Ew2coQtVGLeca31vqB2ssHntjzZgUy1ad9VuuAX8yw7p"),
    },
  },
  curveType: CurveType.Stable,
  amp: 100,
  feeStructure: {
    traderFee: Percentage.fromFraction(6, 10000),
    ownerFee: Percentage.fromFraction(1, 10000),
  },
});

export const orcaPaiPool: OrcaPoolParams = Object.freeze({
  address: new PublicKey("7LfLiCnoLPefaCVuh6z92TK2tPZUa9bPjW7gHT4jqrec"),
  nonce: 254,
  authority: new PublicKey("AwUWHxHyQHomqCGJJvagiSDhb2xMqJUiE25qDytdMw49"),
  poolTokenMint: new PublicKey("C7TH2jEJJaxVwwuvkbcDGfHUiZvEkkeYjyAcdTMi5ujb"),
  poolTokenDecimals: 6,
  feeAccount: new PublicKey("DrC2aGWrUmsnK6yAphSXEs8GW5nKUCkityaG8Bikn5Ne"),
  tokenIds: [Tokens.orcaToken.mint.toString(), Tokens.paiToken.mint.toString()],
  tokens: {
    [Tokens.orcaToken.mint.toString()]: {
      ...Tokens.orcaToken,
      addr: new PublicKey("HSUFpGyNXEogXQLgEMQ7aMTxE4HZneRaBovbi9btXepM"),
    },
    [Tokens.paiToken.mint.toString()]: {
      ...Tokens.paiToken,
      addr: new PublicKey("4c9rkBiqAY6fXpVvCbDwpDD44AGQ3MXSaCLcpmLUFtrX"),
    },
  },
  curveType: CurveType.ConstantProduct,
  feeStructure: {
    traderFee: Percentage.fromFraction(25, 10000),
    ownerFee: Percentage.fromFraction(5, 10000),
  },
});

export const orcaMsolPool: OrcaPoolParams = Object.freeze({
  address: new PublicKey("49tTgthTYLMPEqozZNyEQifqkGYxHqqDie9YxVczS3iB"),
  nonce: 255,
  authority: new PublicKey("9FQ9gDtS6uNr5SMPafuzkDit2rMftHfQuz5mg2X3TqHT"),
  poolTokenMint: new PublicKey("CVapmQn7HaU1yMDW3q6oUV4hx6XoYv54T4zfGXkuJqkA"),
  poolTokenDecimals: 6,
  feeAccount: new PublicKey("Hq9xxKdMavJd4teMZusF4PiGNGV3hxdcMZwAdngkHCg7"),
  tokenIds: [Tokens.orcaToken.mint.toString(), Tokens.msolToken.mint.toString()],
  tokens: {
    [Tokens.orcaToken.mint.toString()]: {
      ...Tokens.orcaToken,
      addr: new PublicKey("7hoYJc4aqttctANrNe75gscdmQD9HcXZED6AjdDdZMQ9"),
    },
    [Tokens.msolToken.mint.toString()]: {
      ...Tokens.msolToken,
      addr: new PublicKey("7MuvRUFT1wWiL7uJKdZqNwk9Fmz2HJ36bEArhDTnyFij"),
    },
  },
  curveType: CurveType.ConstantProduct,
  feeStructure: {
    traderFee: Percentage.fromFraction(25, 10000),
    ownerFee: Percentage.fromFraction(5, 10000),
  },
});

export const socnSolPool: OrcaPoolParams = Object.freeze({
  address: new PublicKey("2q6UMko5kTnv866W9MTeAFau94pLpsdeNjDdSYSgZUXr"),
  nonce: 255,
  authority: new PublicKey("Gyd77CwV23qq937x9UDa4TDkxEeQF9tp8ifotYxqW3Kd"),
  poolTokenMint: new PublicKey("APNpzQvR91v1THbsAyG3HHrUEwvexWYeNCFLQuVnxgMc"),
  poolTokenDecimals: 6,
  feeAccount: new PublicKey("42Xzazs9EvjtidvEDrj3JXbDtf6fpTq5XHh96mPctvBV"),
  tokenIds: [Tokens.socnToken.mint.toString(), Tokens.solToken.mint.toString()],
  tokens: {
    [Tokens.socnToken.mint.toString()]: {
      ...Tokens.socnToken,
      addr: new PublicKey("C8DRXUqxXtUgvgBR7BPAmy6tnRJYgVjG27VU44wWDMNV"),
    },
    [Tokens.solToken.mint.toString()]: {
      ...Tokens.solToken,
      addr: new PublicKey("DzdxH5qJ68PiM1p5o6PbPLPpDj8m1ZshcaMFATcxDZix"),
    },
  },
  curveType: CurveType.Stable,
  amp: 100,
  feeStructure: {
    traderFee: Percentage.fromFraction(6, 10000),
    ownerFee: Percentage.fromFraction(1, 10000),
  },
});

export const atlasUsdcPool: OrcaPoolParams = Object.freeze({
  address: new PublicKey("3V5sjXj1mrWjjB1Xt6Xwp554QwHE5fppGSxbk4GzAtEW"),
  nonce: 254,
  authority: new PublicKey("8UYN675AJn5htWydDs724xqintBZ4XzsCWqMozUSDU8m"),
  poolTokenMint: new PublicKey("FZ8x1LCRSPDeHBDoAc3Gc6Y7ETCynuHEr5q5YWV7uRCJ"),
  poolTokenDecimals: 6,
  feeAccount: new PublicKey("CFN4DQ2p3qroX92pPNy3mov3Dw1aCNGLrU5AXHpHxbko"),
  tokenIds: [Tokens.atlasToken.mint.toString(), Tokens.usdcToken.mint.toString()],
  tokens: {
    [Tokens.atlasToken.mint.toString()]: {
      ...Tokens.atlasToken,
      addr: new PublicKey("xotXsNCx4tBhnwhrajGTaVgKq1sfuMkeYHc77ZegCqE"),
    },
    [Tokens.usdcToken.mint.toString()]: {
      ...Tokens.usdcToken,
      addr: new PublicKey("8YswVYsTi66umBF2Bnkh4LB2VWMKPssDpe54VAgiuJZQ"),
    },
  },
  curveType: CurveType.ConstantProduct,
  feeStructure: {
    traderFee: Percentage.fromFraction(25, 10000),
    ownerFee: Percentage.fromFraction(5, 10000),
  },
});

export const polisUsdcPool: OrcaPoolParams = Object.freeze({
  address: new PublicKey("CdKPtCb5fBRaGFS4bJgytfReeHuFyhpe9YUyWHPnEWZG"),
  nonce: 251,
  authority: new PublicKey("8XB9V3VuHtPBzHqvxzcmpkpaoXNXjZMD8VBHC79SxcEL"),
  poolTokenMint: new PublicKey("GteBdo9sqE7T41G8AJsaG9WHW48uXBwsLLznmu2TBdgy"),
  poolTokenDecimals: 6,
  feeAccount: new PublicKey("3gZQ2YnrXbnRwJj5poffLirF7CwacatvtfGCNRFrbJdr"),
  tokenIds: [Tokens.polisToken.mint.toString(), Tokens.usdcToken.mint.toString()],
  tokens: {
    [Tokens.polisToken.mint.toString()]: {
      ...Tokens.polisToken,
      addr: new PublicKey("EbXNEUiKxSU1vwwhrbVNVk3qX4o1yU3p75SQUUMfc1zH"),
    },
    [Tokens.usdcToken.mint.toString()]: {
      ...Tokens.usdcToken,
      addr: new PublicKey("CLCj9b1vdPutrkvZS8ACTM5q42SXB2Q7khnMLVxDMGEK"),
    },
  },
  curveType: CurveType.ConstantProduct,
  feeStructure: {
    traderFee: Percentage.fromFraction(25, 10000),
    ownerFee: Percentage.fromFraction(5, 10000),
  },
});

export const bopUsdcPool: OrcaPoolParams = Object.freeze({
  address: new PublicKey("9pheQ8EX2wDKHZYm75G9haEbTyAcg8F2gFWybw2w6Vyc"),
  nonce: 253,
  authority: new PublicKey("3rxJPYuiRijipJbciewUDacab2Wo3yAe1yWBGzmqn5f1"),
  poolTokenMint: new PublicKey("2gXDJZ7XAtQEtf4PRSQZKoq1WMuu1H44tQanbMA3YVpu"),
  poolTokenDecimals: 6,
  feeAccount: new PublicKey("2bei4349W8FUcu5gvP5Zt8yhkpwqcCngZxUkb3xRMJZJ"),
  tokenIds: [Tokens.bopToken.mint.toString(), Tokens.usdcToken.mint.toString()],
  tokens: {
    [Tokens.bopToken.mint.toString()]: {
      ...Tokens.bopToken,
      addr: new PublicKey("HkHjLSaP9yyWTzMGD1DKyoc1Dfvhvw4vakRhyjcVUCKs"),
    },
    [Tokens.usdcToken.mint.toString()]: {
      ...Tokens.usdcToken,
      addr: new PublicKey("CqRoKMF4kh2o568nFdDNHs7cszBjrkQME4RtCuTqcjCe"),
    },
  },
  curveType: CurveType.ConstantProduct,
  feeStructure: {
    traderFee: Percentage.fromFraction(25, 10000),
    ownerFee: Percentage.fromFraction(5, 10000),
  },
});

export const samoUsdcPool: OrcaPoolParams = Object.freeze({
  address: new PublicKey("Epvp7qMYAF21VVjacdB3VfKn6nnXQSF4rGYu8sD6Bkow"),
  nonce: 252,
  authority: new PublicKey("AB4rTE2JiKFhnfynUQCovbW75CUxT9LxcJX2SDTbY9gy"),
  poolTokenMint: new PublicKey("6VK1ksrmYGMBWUUZfygGF8tHRGpNxQEWv8pfvzQHdyyc"),
  poolTokenDecimals: 6,
  feeAccount: new PublicKey("9U8UF7d8kBvsS25XoZnjmVQ9vGkP4BUnHJgfc615BvG1"),
  tokenIds: [Tokens.samoToken.mint.toString(), Tokens.usdcToken.mint.toString()],
  tokens: {
    [Tokens.samoToken.mint.toString()]: {
      ...Tokens.samoToken,
      addr: new PublicKey("7jwHW4Lw3nVaSJXskN5pUoKU6YB9RBVfZtGBp3VbR43U"),
    },
    [Tokens.usdcToken.mint.toString()]: {
      ...Tokens.usdcToken,
      addr: new PublicKey("G7Gqjxk9EaJMeFfoFTSy9WfH8uurgQkbNQCREWAc56DZ"),
    },
  },
  curveType: CurveType.ConstantProduct,
  feeStructure: {
    traderFee: Percentage.fromFraction(25, 10000),
    ownerFee: Percentage.fromFraction(5, 10000),
  },
});

export const ninjaSolPool: OrcaPoolParams = Object.freeze({
  address: new PublicKey("3ECUtPokme1nimJfuAkMtcm7QYjDEfXRQzmGC16LuYnz"),
  nonce: 255,
  authority: new PublicKey("H8f9n2PfehUc73gRWSRTPXvqUhUHVywdAxcfEtYmmyAo"),
  poolTokenMint: new PublicKey("4X1oYoFWYtLebk51zuh889r1WFLe8Z9qWApj87hQMfML"),
  poolTokenDecimals: 6,
  feeAccount: new PublicKey("43ViAbUVujnYtJyzGP4AhabMYCbLsExenT3WKsZjqJ7N"),
  tokenIds: [Tokens.ninjaToken.mint.toString(), Tokens.solToken.mint.toString()],
  tokens: {
    [Tokens.ninjaToken.mint.toString()]: {
      ...Tokens.ninjaToken,
      addr: new PublicKey("6Y9VyEYHgxVahiixzphNh4HAywpab9zVoD4S8q1sfuL8"),
    },
    [Tokens.solToken.mint.toString()]: {
      ...Tokens.solToken,
      addr: new PublicKey("9SxzphwrrDVDkwkyvmtag9NLgpjSkTw35cRwg9rLMYWk"),
    },
  },
  curveType: CurveType.ConstantProduct,
  feeStructure: {
    traderFee: Percentage.fromFraction(25, 10000),
    ownerFee: Percentage.fromFraction(5, 10000),
  },
});

export const slimUsdcPool: OrcaPoolParams = Object.freeze({
  address: new PublicKey("8JPid6GtND2tU3A7x7GDfPPEWwS36rMtzF7YoHU44UoA"),
  nonce: 255,
  authority: new PublicKey("749y4fXb9SzqmrLEetQdui5iDucnNiMgCJ2uzc3y7cou"),
  poolTokenMint: new PublicKey("BVWwyiHVHZQMPHsiW7dZH7bnBVKmbxdeEjWqVRciHCyo"),
  poolTokenDecimals: 6,
  feeAccount: new PublicKey("E6aTzkZKdCECgpDtBZtVpqiGjxRDSAFh1SC9CdSoVK7a"),
  tokenIds: [Tokens.slimToken.mint.toString(), Tokens.usdcToken.mint.toString()],
  tokens: {
    [Tokens.slimToken.mint.toString()]: {
      ...Tokens.slimToken,
      addr: new PublicKey("ErcxwkPgLdyoVL6j2SsekZ5iysPZEDRGfAggh282kQb8"),
    },
    [Tokens.usdcToken.mint.toString()]: {
      ...Tokens.usdcToken,
      addr: new PublicKey("EFYW6YEiCGpavuMPS1zoXhgfNkPisWkQ3bQz1b4UfKek"),
    },
  },
  curveType: CurveType.ConstantProduct,
  feeStructure: {
    traderFee: Percentage.fromFraction(25, 10000),
    ownerFee: Percentage.fromFraction(5, 10000),
  },
});

export const whapiUsdcPool: OrcaPoolParams = Object.freeze({
  address: new PublicKey("2Y1Jmpkf5wt1X5zcFHNBDoHxqjTXbMJfj1UFtrYQwUbG"),
  nonce: 254,
  authority: new PublicKey("8K4eRHeyPhBGB9zCjKtyBHoPPZ75zLN64oxBF6GyF4Qg"),
  poolTokenMint: new PublicKey("ELfBngAgvLEHVBuJQhhE7AW6eqLX7id2sfrBngVNVAUW"),
  poolTokenDecimals: 6,
  feeAccount: new PublicKey("Bx3ZhEBFedDqCBzuzKVS4eMKTtW1MmHkcMGU45FcyxRT"),
  tokenIds: [Tokens.whapiToken.mint.toString(), Tokens.usdcToken.mint.toString()],
  tokens: {
    [Tokens.whapiToken.mint.toString()]: {
      ...Tokens.whapiToken,
      addr: new PublicKey("DRYADMQevoJHDFCYbDQeS4p551MpsDN2d7CJU3LxfNHa"),
    },
    [Tokens.usdcToken.mint.toString()]: {
      ...Tokens.usdcToken,
      addr: new PublicKey("HzsECCX6RZ2ccbR3FarRSEfc5rkuETfywXJnRZut5JzU"),
    },
  },
  curveType: CurveType.ConstantProduct,
  feeStructure: {
    traderFee: Percentage.fromFraction(25, 10000),
    ownerFee: Percentage.fromFraction(5, 10000),
  },
});

export const copeUsdcPool: OrcaPoolParams = Object.freeze({
  address: new PublicKey("DhGTKyT6RVkpvPxXAJodi4Z41RSvQZxV1f5eRvJ5bE4r"),
  nonce: 254,
  authority: new PublicKey("Hu8AWoRBa7ZaYQFdHQyRHeEZGB16Me86fA5vAZzjVUmv"),
  poolTokenMint: new PublicKey("HsauTv9s52Zv12eaDuSp6y7BEm4e4BHEyAsbdjyyWzPK"),
  poolTokenDecimals: 6,
  feeAccount: new PublicKey("JEGcxfGxWJpRkGtvA6J6kEgTBebDz6kxURoeB3SX8vaW"),
  tokenIds: [Tokens.copeToken.mint.toString(), Tokens.usdcToken.mint.toString()],
  tokens: {
    [Tokens.copeToken.mint.toString()]: {
      ...Tokens.copeToken,
      addr: new PublicKey("6N3P3etaUYGeBs2C67ZQTDRqHsExNsfj85dDWPwHtQBS"),
    },
    [Tokens.usdcToken.mint.toString()]: {
      ...Tokens.usdcToken,
      addr: new PublicKey("36VVz3eY8YmWBGskQVjvGGBfyUKHHCEDBgkFtzMpFqeU"),
    },
  },
  curveType: CurveType.ConstantProduct,
  feeStructure: {
    traderFee: Percentage.fromFraction(25, 10000),
    ownerFee: Percentage.fromFraction(5, 10000),
  },
});

export const sunnyUsdcPool: OrcaPoolParams = Object.freeze({
  address: new PublicKey("3Ukqqshh3kZ8UPbcYYFSRaeJcsgttcmShtNNn12F1rj2"),
  nonce: 255,
  authority: new PublicKey("7NP8DTzPdpbQofhNyhLW3j2khutmfy1kuFp2AjaD8rrp"),
  poolTokenMint: new PublicKey("GHuoeq9UnFBsBhMwH43eL3RWX5XVXbSRYJymmyMYpT7n"),
  poolTokenDecimals: 6,
  feeAccount: new PublicKey("CCuSVbnnq8SUj7cpPe7BbHLuKanyxfvfrwypzCBnaDdf"),
  tokenIds: [Tokens.sunnyToken.mint.toString(), Tokens.usdcToken.mint.toString()],
  tokens: {
    [Tokens.sunnyToken.mint.toString()]: {
      ...Tokens.sunnyToken,
      addr: new PublicKey("F6nCAMYEFxsyRDVonQXLNufXgAHsgAa1Br8DhBoX3KAV"),
    },
    [Tokens.usdcToken.mint.toString()]: {
      ...Tokens.usdcToken,
      addr: new PublicKey("HWCTHmQppFSsKQEk1bHUqPC2WLaidgnfTG9MQGD4XKEt"),
    },
  },
  curveType: CurveType.ConstantProduct,
  feeStructure: {
    traderFee: Percentage.fromFraction(25, 10000),
    ownerFee: Percentage.fromFraction(5, 10000),
  },
});

export const grapeUsdcPool: OrcaPoolParams = Object.freeze({
  address: new PublicKey("6MxUhBLXHCqpdYaFPTmw1D9fQ7zYnm9grZyJvpGiqr15"),
  nonce: 255,
  authority: new PublicKey("SvWmpVVUkv8cwoRnBQ5Gqt2FFYjdpWLS665gE2ZLNQp"),
  poolTokenMint: new PublicKey("EorFh8siFyLF1QTZ7cCXQaPGqyo7eb4SAgKtRH8Jcxjd"),
  poolTokenDecimals: 6,
  feeAccount: new PublicKey("6vWYnRDEHu7kRLbA2dnBgEfbdba72iDMDD9k3munyPaP"),
  tokenIds: [Tokens.grapeToken.mint.toString(), Tokens.usdcToken.mint.toString()],
  tokens: {
    [Tokens.grapeToken.mint.toString()]: {
      ...Tokens.grapeToken,
      addr: new PublicKey("686KiYDMMkbredNoWx8yqvAdKSiHuWSG3dnbL6yWYmZp"),
    },
    [Tokens.usdcToken.mint.toString()]: {
      ...Tokens.usdcToken,
      addr: new PublicKey("9i14ZKzaDmzKCAQb8hCv4h5GCo2Xiq83JcL7bofk4Ddj"),
    },
  },
  curveType: CurveType.ConstantProduct,
  feeStructure: {
    traderFee: Percentage.fromFraction(25, 10000),
    ownerFee: Percentage.fromFraction(5, 10000),
  },
});

export const abrUsdcPool: OrcaPoolParams = Object.freeze({
  address: new PublicKey("rxwsjytcEBvXpXrXBL1rpsjhoh78imBn8WbxjKmLRge"),
  nonce: 252,
  authority: new PublicKey("AcaxutE6Rh9vRxipTLdqinEdRK6R4ayUAAv2bZPh6UU9"),
  poolTokenMint: new PublicKey("GMzPbaCuQmeMUm1opH3oSCgKUjVgJUW14myq99RVPGX5"),
  poolTokenDecimals: 6,
  feeAccount: new PublicKey("7pPJGwd8Vq7aYmHaocQpQSfTn3UWYGKUgFkFhpMmRdDF"),
  tokenIds: [Tokens.abrToken.mint.toString(), Tokens.usdcToken.mint.toString()],
  tokens: {
    [Tokens.abrToken.mint.toString()]: {
      ...Tokens.abrToken,
      addr: new PublicKey("6FRxhbY7bvSiDojPiqoidjTyDjxaUyCoPQk3ifEdfFbm"),
    },
    [Tokens.usdcToken.mint.toString()]: {
      ...Tokens.usdcToken,
      addr: new PublicKey("8aTapFecZRZmC2bTeKr2voHFW2twNvbrh8nWYdXYQWkZ"),
    },
  },
  curveType: CurveType.ConstantProduct,
  feeStructure: {
    traderFee: Percentage.fromFraction(25, 10000),
    ownerFee: Percentage.fromFraction(5, 10000),
  },
});

export const kuroUsdcPool: OrcaPoolParams = Object.freeze({
  address: new PublicKey("HdeYs4bpJKN2oTb7PHxbqq4kzKiLr772A5N2gWjY57ZT"),
  nonce: 250,
  authority: new PublicKey("2KRcBDQJWEPygxcMMFMvR6dMTVtMkJV6kbxr5e9Kdj5Q"),
  poolTokenMint: new PublicKey("DRknxb4ZFxXUTG6UJ5HupNHG1SmvBSCPzsZ1o9gAhyBi"),
  poolTokenDecimals: 6,
  feeAccount: new PublicKey("5XuLrZqpX9gW3pJw7274EYwAft1ciTXndU4on96ERi9J"),
  tokenIds: [Tokens.kuroToken.mint.toString(), Tokens.usdcToken.mint.toString()],
  tokens: {
    [Tokens.kuroToken.mint.toString()]: {
      ...Tokens.kuroToken,
      addr: new PublicKey("DBckbD9CoRBFE8WdbbnFLDz6WdDDSZ7ReEeqdjL62fpG"),
    },
    [Tokens.usdcToken.mint.toString()]: {
      ...Tokens.usdcToken,
      addr: new PublicKey("B252w7ZkUX4WyLUJKLEymEpRkYMqJhgv2PSj2Z2LWH34"),
    },
  },
  curveType: CurveType.ConstantProduct,
  feeStructure: {
    traderFee: Percentage.fromFraction(25, 10000),
    ownerFee: Percentage.fromFraction(5, 10000),
  },
});

export const mediaUsdcPool: OrcaPoolParams = Object.freeze({
  address: new PublicKey("5L2aVMnNsmrnkxU4B25ajb2pR5AJWBRfUa73wjasjyaB"),
  nonce: 255,
  authority: new PublicKey("HX3JKg5HtboRw9nQRWm47rSJkBHczdcXwBgWASyHi3Wk"),
  poolTokenMint: new PublicKey("2toFgkQDoPrTJYGDEVoCasPXuL9uQnjvXJaDwa9LHyTx"),
  poolTokenDecimals: 6,
  feeAccount: new PublicKey("5BkyYnBWnzBWQKnU9AcUaDrmyhjLpAcFxCvVTTnRGyYk"),
  tokenIds: [Tokens.mediaToken.mint.toString(), Tokens.usdcToken.mint.toString()],
  tokens: {
    [Tokens.mediaToken.mint.toString()]: {
      ...Tokens.mediaToken,
      addr: new PublicKey("BFAyLvCbMhgF7CQ9fsWWK46jD9mPXfBMDWvXgk5LTgsT"),
    },
    [Tokens.usdcToken.mint.toString()]: {
      ...Tokens.usdcToken,
      addr: new PublicKey("7CvBsWsfEif4sAo9dnsf1JKVAfBGcZUVTktqtxBSkgwB"),
    },
  },
  curveType: CurveType.ConstantProduct,
  feeStructure: {
    traderFee: Percentage.fromFraction(25, 10000),
    ownerFee: Percentage.fromFraction(5, 10000),
  },
});

export const tulipUsdcPool: OrcaPoolParams = Object.freeze({
  address: new PublicKey("BNwrRN23RCoq5MAneJ6Cot7iN2FLtyt9rtcjaVfAXTLt"),
  nonce: 253,
  authority: new PublicKey("EFZs7veYVdWBHt7RcAPvXQc46gDzccpZTxAcEm6NyXFg"),
  poolTokenMint: new PublicKey("4SBx8GXu8HhcVHWydQv1vsDdZs3G93XSL9CtMBny6hS5"),
  poolTokenDecimals: 6,
  feeAccount: new PublicKey("8BiqDTCBQ77qjGpED2was7C4iHJrQx9bXhzRt3Wz9xJG"),
  tokenIds: [Tokens.tulipToken.mint.toString(), Tokens.usdcToken.mint.toString()],
  tokens: {
    [Tokens.tulipToken.mint.toString()]: {
      ...Tokens.tulipToken,
      addr: new PublicKey("5CKd5M2nXdPM1TMXxqK6Up6GZehKL5uU9Z9Ytm2sFCiz"),
    },
    [Tokens.usdcToken.mint.toString()]: {
      ...Tokens.usdcToken,
      addr: new PublicKey("HjMQnuxjVRodoaAg9WcNXb9TAssDaFNpgwcUUKNjWdh5"),
    },
  },
  curveType: CurveType.ConstantProduct,
  feeStructure: {
    traderFee: Percentage.fromFraction(25, 10000),
    ownerFee: Percentage.fromFraction(5, 10000),
  },
});

export const mngoUsdcPool: OrcaPoolParams = Object.freeze({
  address: new PublicKey("Hk9ZCvmqVT1FHNkWJMrtMkkVnH1WqssWPAvmio5Vs3se"),
  nonce: 254,
  authority: new PublicKey("5RyiYaHFDVupwnwxzKCRk7JY1CKhsczZXefMs3UUmx4Z"),
  poolTokenMint: new PublicKey("H9yC7jDng974WwcU4kTGs7BKf7nBNswpdsP5bzbdXjib"),
  poolTokenDecimals: 6,
  feeAccount: new PublicKey("FWKcKaMfaVezLRFr946MdgmpTZHG4A2GgqehAxjTyDAB"),
  tokenIds: [Tokens.mngoToken.mint.toString(), Tokens.usdcToken.mint.toString()],
  tokens: {
    [Tokens.mngoToken.mint.toString()]: {
      ...Tokens.mngoToken,
      addr: new PublicKey("J8bQnhcNyixFGBskQoJ2aSPXPWjvSzaaxF4YPs96XHDJ"),
    },
    [Tokens.usdcToken.mint.toString()]: {
      ...Tokens.usdcToken,
      addr: new PublicKey("5yMoAhjfFaCPwEwKM2VeFFh2iBs5mHWLTJ4LuqZifsgN"),
    },
  },
  curveType: CurveType.ConstantProduct,
  feeStructure: {
    traderFee: Percentage.fromFraction(25, 10000),
    ownerFee: Percentage.fromFraction(5, 10000),
  },
});

export const stsolWstethPool: OrcaPoolParams = Object.freeze({
  address: new PublicKey("B32UuhPSp6srSBbRTh4qZNjkegsehY9qXTwQgnPWYMZy"),
  nonce: 255,
  authority: new PublicKey("EtwQJxu8wih29vMpdTa74K9W9tgtL4LT6hbWBkhHwvU5"),
  poolTokenMint: new PublicKey("Eswigpwm3xsipkTqahGi2PEJsJcULQBwZgxhQpr6yBEa"),
  poolTokenDecimals: 6,
  feeAccount: new PublicKey("74b9j23njRpt3PYPxoze2XS29ZgGmucziLB7WrsDpBdD"),
  tokenIds: [Tokens.stsolToken.mint.toString(), Tokens.wstethToken.mint.toString()],
  tokens: {
    [Tokens.stsolToken.mint.toString()]: {
      ...Tokens.stsolToken,
      addr: new PublicKey("CeSEpgqc3zV8xDr7Q6PiwJju6a6e92wpAv7Kg6QyFfQB"),
    },
    [Tokens.wstethToken.mint.toString()]: {
      ...Tokens.wstethToken,
      addr: new PublicKey("Fb3XpEJgghTURUGd1wphWr93ruX5egnesfdZtjWCxJFy"),
    },
  },
  curveType: CurveType.ConstantProduct,
  feeStructure: {
    traderFee: Percentage.fromFraction(25, 10000),
    ownerFee: Percentage.fromFraction(5, 10000),
  },
});

export const sypUsdcPool: OrcaPoolParams = Object.freeze({
  address: new PublicKey("5DnwMqYAGEKekYXJdN8Bue6vN1p5zrEnBpmd53jEK61S"),
  nonce: 255,
  authority: new PublicKey("4NfadURWeSDPJBGcKQRt39mPhbG9M7EJx6FZDwwcFB9f"),
  poolTokenMint: new PublicKey("qJxKN9BhxbYvRNbjfK2uAVWboto6sonj8XC1ZEW5XTB"),
  poolTokenDecimals: 6,
  feeAccount: new PublicKey("57L2bEFecsAv4jnaM2PBaeAVyPZEYtTmXBi7eaG2xWXw"),
  tokenIds: [Tokens.sypToken.mint.toString(), Tokens.usdcToken.mint.toString()],
  tokens: {
    [Tokens.sypToken.mint.toString()]: {
      ...Tokens.sypToken,
      addr: new PublicKey("6d19CQA1FP2MLLAzA7XoZEc9Agc32FaKUS175UVWLGtv"),
    },
    [Tokens.usdcToken.mint.toString()]: {
      ...Tokens.usdcToken,
      addr: new PublicKey("HpPnUHyo19VjmXbP6FbbKXu7WQCUEn6h7be76fZdHVmf"),
    },
  },
  curveType: CurveType.ConstantProduct,
  feeStructure: {
    traderFee: Percentage.fromFraction(25, 10000),
    ownerFee: Percentage.fromFraction(5, 10000),
  },
});

export const stsolWldoPool: OrcaPoolParams = Object.freeze({
  address: new PublicKey("CqwyVxWeaiikQ3VhvEZSEmupmG1Wmc2FeaUjsCV492Sx"),
  nonce: 255,
  authority: new PublicKey("213QoNt5dR56Ye2sx9cwPwpR3NpJUEStQXn8EbbWKkfJ"),
  poolTokenMint: new PublicKey("74B9aMS7SA832xKngt5VLKmWAP3pa3qkUzWncTmQSsGF"),
  poolTokenDecimals: 6,
  feeAccount: new PublicKey("D4kH4fcwwDtGMj4LpcynB977YVnmvDUcuDQoo5sqAgRz"),
  tokenIds: [Tokens.stsolToken.mint.toString(), Tokens.wldoToken.mint.toString()],
  tokens: {
    [Tokens.stsolToken.mint.toString()]: {
      ...Tokens.stsolToken,
      addr: new PublicKey("GDprNAcXeR5GVGnCtkS5UqyPGMm2Sy5Lk15qqN36faMT"),
    },
    [Tokens.wldoToken.mint.toString()]: {
      ...Tokens.wldoToken,
      addr: new PublicKey("VCgdcsExfmxUDQwusLP2xqZ3ap7VuYyQMMHDPSva2hx"),
    },
  },
  curveType: CurveType.ConstantProduct,
  feeStructure: {
    traderFee: Percentage.fromFraction(25, 10000),
    ownerFee: Percentage.fromFraction(5, 10000),
  },
});

export const whethSolPool: OrcaPoolParams = Object.freeze({
  address: new PublicKey("FcEro2uFpHcb7Z785CBs6q12KMJqUJKa8VTXPi4TTBMf"),
  nonce: 252,
  authority: new PublicKey("HMxZz8fv2uR9suzAPRbJGNB3wZL1eT3eKL3cpYWUbM8K"),
  poolTokenMint: new PublicKey("7aYnrdmdCRodDy2Czn6keUquUhjF1jPEmfwZPh488z8U"),
  poolTokenDecimals: 6,
  feeAccount: new PublicKey("YCVJDKdHNi1mhJtWz7QGbBRreMmw1soeipz7wZbQKEK"),
  tokenIds: [Tokens.whethToken.mint.toString(), Tokens.solToken.mint.toString()],
  tokens: {
    [Tokens.whethToken.mint.toString()]: {
      ...Tokens.whethToken,
      addr: new PublicKey("3uQytDKNd5H6XK8FhTei4wCUmj2eTbLTbiLAtWk2SmbA"),
    },
    [Tokens.solToken.mint.toString()]: {
      ...Tokens.solToken,
      addr: new PublicKey("GR3g8Wej3jmv92hYM1t22kaXog2xjkGjQ7V1XzLd1efT"),
    },
  },
  curveType: CurveType.ConstantProduct,
  feeStructure: {
    traderFee: Percentage.fromFraction(25, 10000),
    ownerFee: Percentage.fromFraction(5, 10000),
  },
});

export const whethUsdcPool: OrcaPoolParams = Object.freeze({
  address: new PublicKey("4reGGLbesqpAeAZdAJv9hhgA2tgj45oGcyRuEvhATdMm"),
  nonce: 252,
  authority: new PublicKey("8uLtzZ1iTLTCPsm3b4QttRmDXcFjhVHRuMS9VTVEwo7E"),
  poolTokenMint: new PublicKey("7NPtjjAP7vhp4t5NCLyY4DY5rurvyc8cgZ2a2rYabRia"),
  poolTokenDecimals: 6,
  feeAccount: new PublicKey("AVw52spXtzFh4bb5ghhpJaDbLx3XWuY85eQNDEo3X1yN"),
  tokenIds: [Tokens.whethToken.mint.toString(), Tokens.usdcToken.mint.toString()],
  tokens: {
    [Tokens.whethToken.mint.toString()]: {
      ...Tokens.whethToken,
      addr: new PublicKey("9KpjcpKwhoFPbixvKDfcAhBQcVXk1CSBTGsJdzojDPRv"),
    },
    [Tokens.usdcToken.mint.toString()]: {
      ...Tokens.usdcToken,
      addr: new PublicKey("5HaG31FQS4McBVcHxVfwaKaWXE3VCGqvJ1ZDkTxs94cQ"),
    },
  },
  curveType: CurveType.ConstantProduct,
  feeStructure: {
    traderFee: Percentage.fromFraction(25, 10000),
    ownerFee: Percentage.fromFraction(5, 10000),
  },
});

export const mndeMsolPool: OrcaPoolParams = Object.freeze({
  address: new PublicKey("vjHagYsgZwG9icyFLHu2xWHWdtiS5gfeNzRhDcPt5xq"),
  nonce: 255,
  authority: new PublicKey("3HWcojnC1ruEMmsE92Ez1BoebdDXzYQa4USaeWX7eTuM"),
  poolTokenMint: new PublicKey("5PHS5w6hQwFNnLz1jJFe7TVTxSQ98cDYC3akmiAoFMXs"),
  poolTokenDecimals: 6,
  feeAccount: new PublicKey("46mdANZ2DCA2sTFchvD7WwbffbLQa4jCFkkRL23WuYG8"),
  tokenIds: [Tokens.mndeToken.mint.toString(), Tokens.msolToken.mint.toString()],
  tokens: {
    [Tokens.mndeToken.mint.toString()]: {
      ...Tokens.mndeToken,
      addr: new PublicKey("2LferrWvYWtHFfdkmixzt9g3aKa3yBNfgbRrP1CcWMMp"),
    },
    [Tokens.msolToken.mint.toString()]: {
      ...Tokens.msolToken,
      addr: new PublicKey("GimsuZjYqMXM6xK6S3e9JpGvX6jaMPuNeR6s2piDESmy"),
    },
  },
  curveType: CurveType.ConstantProduct,
  feeStructure: {
    traderFee: Percentage.fromFraction(25, 10000),
    ownerFee: Percentage.fromFraction(5, 10000),
  },
});

export const wagUsdcPool: OrcaPoolParams = Object.freeze({
  address: new PublicKey("B76e3wtCDTKBgKQjvx87EBkDLPGcCY9w1SGiwjD5kaK7"),
  nonce: 254,
  authority: new PublicKey("FRUmMZDiZrDrwioiUYi3tdqF7SEBeT219bBu54PGxoCo"),
  poolTokenMint: new PublicKey("Df6XNHMF3uRVZnz7LCEGiZVax6rXgz76owtVkBHEjSb6"),
  poolTokenDecimals: 6,
  feeAccount: new PublicKey("BCuRKfsM99LJFCchKUBLBZ26UuziDewJDRkkKMwx2qnd"),
  tokenIds: [Tokens.wagToken.mint.toString(), Tokens.usdcToken.mint.toString()],
  tokens: {
    [Tokens.wagToken.mint.toString()]: {
      ...Tokens.wagToken,
      addr: new PublicKey("8voSogytL9jLgE73GS3WuujBinKFRQJjvUFsVGYexWZd"),
    },
    [Tokens.usdcToken.mint.toString()]: {
      ...Tokens.usdcToken,
      addr: new PublicKey("HEP7mACuN13cT95eDAYTNjgwriqJnMQVhnyRctqnBRe4"),
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
export const orcaPoolConfigs: Record<string, OrcaPoolParams> = {
  APDFRM3HMr8CAGXwKHiu2f5ePSpaiEJhaURwhsRrUUt9: solUsdcPool,
  FZthQCuYHhcfiDma7QrX7buDHwrZEd7vL8SjS6LQa3Tx: solUsdtPool,
  "71FymgN2ZUf7VvVTLE8jYEnjP3jSK1Frp2XT1nHs8Hob": ethSolPool,
  "3e1W6Aqcbuk2DfHUwRiRcyzpyYRRjg6yhZZcyEARydUX": ethUsdcPool,
  "5kimD5W6yJpHRHCyPtnEyDsQRdiiJKivu5AqN3si82Jc": raySolPool,
  ADrvfPBsRcJfGsN6Bs385zYddH52nuM5FA8UaAkX9o2V: ropeSolPool,
  "8nTzqDXHriG2CXKbybeuEh1EqDQMtrbYMFWcP7AkiDaP": stepSolPool,
  "9tf8rBSEQYG7AqL896fN2nZi1iYPqpWaLEdpbeQaC1Vy": srmSolPool,
  EsYaDKJCmcJtJHFuJYwQZwqohvVMCrFzcg8yo3i328No: fttSolPool,
  CzieDbGRdN1QGaGDNpSqzEA18bi881ccvkkGZi51pe1k: copeSolPool,
  "7tYCdLN84EnTMkxM7HNamWJx7F4xgKe9KiiWvLyWjbgT": oxySolPool,
  Acxs19v6eUMTEfdvkvWkRB4bwFCHm3XV9jABCy7c1mXe: btcSolPool,
  HiwRobjfHZ4zsPtqCC4oBS24pSmy4t8GGkXRbQj4yU6L: merSolPool,
  EYsNdtyu4gGTaGz8N5m5iQ3G1N6rDyMbR72B3CqbWW4W: fidaSolPool,
  "99pfC8fWymXgbq3CvrExhx3UxQDC1fMWEWLbNT83F45e": mapsSolPool,
  H2uzgruPvonVpCRhwwdukcpXK8TG17swFNzYFr2rtPxy: usdcUsdtPool,
  "2uVjAuRXavpM6h1scGQaxqb6HVaNRn6T2X7HHXTabz25": orcaSolPool,
  n8Mpu28RjeYD7oUX3LG1tPxzhRZh3YYLRSHcHRdS3Zx: orcaUsdcPool,
  HEvnD66WcBfTajS9adUYnGRBMDehFtLySiFHSD6kEBWs: kinSolPool,
  D6N9j8F2DhtzDtrdpT74y3u2YmYAzcggiLc3nTjqux9M: samoSolPool,
  "3PD9SZFwXKkXr4akLf4ofo37ZUMycwML89R2P3qxcbZG": liqUsdcPool,
  AZpo4BJHHRetF96v6SGinFZBMXM4yWMo4RA8C4PriDLk: snyUsdcPool,
  "8PSfyiTVwPb6Rr2iZ8F3kNpbg65BCfJM9v8LfB916r44": msolUsdcPool,
  AtB4nUmdyQfuWWJ9xAHw9xyVnJFfSjSuVWkiYan8y86w: slrsUsdcPool,
  F8gPSpwVHj8FdAJAYULDuZBxFEJut87hUbARYYx3471w: portUsdcPool,
  CS7fA5n4c2D82dUoHrYzS3gAqgqaoVSfgsr18kitp2xo: sbrUsdcPool,
  Dkr8B675PGnNwEr9vTKXznjjHke5454EQdz3iaSbparB: socnUsdcPool,
  C2YzN6MymD5HM2kPaH7bzcbqciyjfmpqyVaR3KA5V6z1: psolUsdcPool,
  "29cdoMgu6MS2VXpcMo1sqRdWEzdUR9tjvoh8fcK8Z87R": msolSolPool,
  C7TH2jEJJaxVwwuvkbcDGfHUiZvEkkeYjyAcdTMi5ujb: orcaPaiPool,
  CVapmQn7HaU1yMDW3q6oUV4hx6XoYv54T4zfGXkuJqkA: orcaMsolPool,
  APNpzQvR91v1THbsAyG3HHrUEwvexWYeNCFLQuVnxgMc: socnSolPool,
  FZ8x1LCRSPDeHBDoAc3Gc6Y7ETCynuHEr5q5YWV7uRCJ: atlasUsdcPool,
  GteBdo9sqE7T41G8AJsaG9WHW48uXBwsLLznmu2TBdgy: polisUsdcPool,
  "2gXDJZ7XAtQEtf4PRSQZKoq1WMuu1H44tQanbMA3YVpu": bopUsdcPool,
  "6VK1ksrmYGMBWUUZfygGF8tHRGpNxQEWv8pfvzQHdyyc": samoUsdcPool,
  "4X1oYoFWYtLebk51zuh889r1WFLe8Z9qWApj87hQMfML": ninjaSolPool,
  BVWwyiHVHZQMPHsiW7dZH7bnBVKmbxdeEjWqVRciHCyo: slimUsdcPool,
  ELfBngAgvLEHVBuJQhhE7AW6eqLX7id2sfrBngVNVAUW: whapiUsdcPool,
  HsauTv9s52Zv12eaDuSp6y7BEm4e4BHEyAsbdjyyWzPK: copeUsdcPool,
  GHuoeq9UnFBsBhMwH43eL3RWX5XVXbSRYJymmyMYpT7n: sunnyUsdcPool,
  EorFh8siFyLF1QTZ7cCXQaPGqyo7eb4SAgKtRH8Jcxjd: grapeUsdcPool,
  GMzPbaCuQmeMUm1opH3oSCgKUjVgJUW14myq99RVPGX5: abrUsdcPool,
  DRknxb4ZFxXUTG6UJ5HupNHG1SmvBSCPzsZ1o9gAhyBi: kuroUsdcPool,
  "2toFgkQDoPrTJYGDEVoCasPXuL9uQnjvXJaDwa9LHyTx": mediaUsdcPool,
  "4SBx8GXu8HhcVHWydQv1vsDdZs3G93XSL9CtMBny6hS5": tulipUsdcPool,
  H9yC7jDng974WwcU4kTGs7BKf7nBNswpdsP5bzbdXjib: mngoUsdcPool,
  Eswigpwm3xsipkTqahGi2PEJsJcULQBwZgxhQpr6yBEa: stsolWstethPool,
  qJxKN9BhxbYvRNbjfK2uAVWboto6sonj8XC1ZEW5XTB: sypUsdcPool,
  "74B9aMS7SA832xKngt5VLKmWAP3pa3qkUzWncTmQSsGF": stsolWldoPool,
  "7aYnrdmdCRodDy2Czn6keUquUhjF1jPEmfwZPh488z8U": whethSolPool,
  "7NPtjjAP7vhp4t5NCLyY4DY5rurvyc8cgZ2a2rYabRia": whethUsdcPool,
  "5PHS5w6hQwFNnLz1jJFe7TVTxSQ98cDYC3akmiAoFMXs": mndeMsolPool,
  Df6XNHMF3uRVZnz7LCEGiZVax6rXgz76owtVkBHEjSb6: wagUsdcPool,
};
