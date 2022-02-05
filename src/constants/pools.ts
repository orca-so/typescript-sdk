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

export const scnsolUsdcPool: OrcaPoolParams = Object.freeze({
  address: new PublicKey("6Gh36sNXrGWYiWr999d9iZtqgnipJbWuBohyHBN1cJpS"),
  nonce: 255,
  authority: new PublicKey("GXWEpRURaQZ9E62Q23EreTUfBy4hfemXgWFUWcg7YFgv"),
  poolTokenMint: new PublicKey("Dkr8B675PGnNwEr9vTKXznjjHke5454EQdz3iaSbparB"),
  poolTokenDecimals: 6,
  feeAccount: new PublicKey("HsC1Jo38jK3EpoNAkxfoUJhQVPa28anewZpLfeouUNk7"),
  tokenIds: [Tokens.scnsolToken.mint.toString(), Tokens.usdcToken.mint.toString()],
  tokens: {
    [Tokens.scnsolToken.mint.toString()]: {
      ...Tokens.scnsolToken,
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

export const scnsolSolPool: OrcaPoolParams = Object.freeze({
  address: new PublicKey("2q6UMko5kTnv866W9MTeAFau94pLpsdeNjDdSYSgZUXr"),
  nonce: 255,
  authority: new PublicKey("Gyd77CwV23qq937x9UDa4TDkxEeQF9tp8ifotYxqW3Kd"),
  poolTokenMint: new PublicKey("APNpzQvR91v1THbsAyG3HHrUEwvexWYeNCFLQuVnxgMc"),
  poolTokenDecimals: 6,
  feeAccount: new PublicKey("42Xzazs9EvjtidvEDrj3JXbDtf6fpTq5XHh96mPctvBV"),
  tokenIds: [Tokens.scnsolToken.mint.toString(), Tokens.solToken.mint.toString()],
  tokens: {
    [Tokens.scnsolToken.mint.toString()]: {
      ...Tokens.scnsolToken,
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

export const msolUsdtPool: OrcaPoolParams = Object.freeze({
  address: new PublicKey("Afofkb7JTc32rdpqiyc3RDmGF5s9N6W1ujcdYVfGZ5Je"),
  nonce: 251,
  authority: new PublicKey("8vrC1FAnW6hQMwJuU5waZdRrBbDJTULqjpdc4GjDtKR6"),
  poolTokenMint: new PublicKey("9cMWe4UYRPGAUUsTkjShJWVM7bk8DUBgxtwwH8asFJoV"),
  poolTokenDecimals: 6,
  feeAccount: new PublicKey("7GPvi21QbwMyBoXU5Zqf8VhnuEh7VH4A1SRPgHJ36eE7"),
  tokenIds: [Tokens.msolToken.mint.toString(), Tokens.usdtToken.mint.toString()],
  tokens: {
    [Tokens.msolToken.mint.toString()]: {
      ...Tokens.msolToken,
      addr: new PublicKey("RTXKRxghfWJpE344UG7UhKnCwN2Gyv6KnNSTFDnaASF"),
    },
    [Tokens.usdtToken.mint.toString()]: {
      ...Tokens.usdtToken,
      addr: new PublicKey("J15KntYr6iout4ce2kcD2QEdkVbLN4EHHFLfCtke3f6Y"),
    },
  },
  curveType: CurveType.ConstantProduct,
  feeStructure: {
    traderFee: Percentage.fromFraction(25, 10000),
    ownerFee: Percentage.fromFraction(5, 10000),
  },
});

export const msolWhethPool: OrcaPoolParams = Object.freeze({
  address: new PublicKey("A71DQffTzgxBSzXjPL3tmf8XXTNtS5mR2D78Y8rmV2hk"),
  nonce: 250,
  authority: new PublicKey("FPWpe7QEQnDMivnHksQW2uvcw9tvX1oxejKBX136WRkr"),
  poolTokenMint: new PublicKey("5qoTq3qC4U7vFxo3iCzbXcaD1UEmDeCD63Dsuoct71oV"),
  poolTokenDecimals: 6,
  feeAccount: new PublicKey("FSqUYVzF3XZzLcnj132eT6ed3bK95G1yG4MazcHZi99Q"),
  tokenIds: [Tokens.msolToken.mint.toString(), Tokens.whethToken.mint.toString()],
  tokens: {
    [Tokens.msolToken.mint.toString()]: {
      ...Tokens.msolToken,
      addr: new PublicKey("Fcp5u8bL3V24MXjA4noSfMpcEAP2vSj1WTaA1ZNxACZL"),
    },
    [Tokens.whethToken.mint.toString()]: {
      ...Tokens.whethToken,
      addr: new PublicKey("DuBCBX3y2FjDWUn2ncK5EKQh229JiJ7HTCjYJhNC87K8"),
    },
  },
  curveType: CurveType.ConstantProduct,
  feeStructure: {
    traderFee: Percentage.fromFraction(25, 10000),
    ownerFee: Percentage.fromFraction(5, 10000),
  },
});

export const btcMsolPool: OrcaPoolParams = Object.freeze({
  address: new PublicKey("8DRw5wQE1pyg6RB1UwypGNFgb2Pzp2hpyDDNwo76Lcc8"),
  nonce: 255,
  authority: new PublicKey("3X1aLdyvcQNc8TvBMPiucMsRCnGMBnGsjJHpZEyCf3pn"),
  poolTokenMint: new PublicKey("8nKJ4z9FSw6wrVZKASqBiS9DS1CiNsRnqwCCKVQjqdkB"),
  poolTokenDecimals: 6,
  feeAccount: new PublicKey("AqiLHbUAy4UWWKGVVgbHsaUVCMg1zemNkgsYBPSirT92"),
  tokenIds: [Tokens.btcToken.mint.toString(), Tokens.msolToken.mint.toString()],
  tokens: {
    [Tokens.btcToken.mint.toString()]: {
      ...Tokens.btcToken,
      addr: new PublicKey("6D3sxC6yEe84FUnF5Kpbgx6gN57N9poJCKAtrCeCWdJo"),
    },
    [Tokens.msolToken.mint.toString()]: {
      ...Tokens.msolToken,
      addr: new PublicKey("EPoVJLhi9QtVPVo8n31M5k5Knvb48j8zbYyRrUbrHwC5"),
    },
  },
  curveType: CurveType.ConstantProduct,
  feeStructure: {
    traderFee: Percentage.fromFraction(25, 10000),
    ownerFee: Percentage.fromFraction(5, 10000),
  },
});

export const ivnSolPool: OrcaPoolParams = Object.freeze({
  address: new PublicKey("CFCivUWXBuULVNfJezj1fAhX6hdwVFi2BsCtpu6m96bR"),
  nonce: 255,
  authority: new PublicKey("JGhNs5r7YNnJokzzXZWE3REKV8x4GiUvn2xSg7XGg59"),
  poolTokenMint: new PublicKey("DfgCnzaiTXfPkAH1C1Z441b5MzjjTCEh134ioxqRZxYf"),
  poolTokenDecimals: 6,
  feeAccount: new PublicKey("HwwgrSjJGFBtRN8h2daWnVLBciwoo79wNeKi6b5SZmE2"),
  tokenIds: [Tokens.ivnToken.mint.toString(), Tokens.solToken.mint.toString()],
  tokens: {
    [Tokens.ivnToken.mint.toString()]: {
      ...Tokens.ivnToken,
      addr: new PublicKey("C5yDeB3jBz5yZPa6FgP6b7HNoFxLP63Pyzpaosnkikis"),
    },
    [Tokens.solToken.mint.toString()]: {
      ...Tokens.solToken,
      addr: new PublicKey("CCm846T6xj9VAhSAifuUJAXYCR3kaGp5KqhXFHCaeWUh"),
    },
  },
  curveType: CurveType.ConstantProduct,
  feeStructure: {
    traderFee: Percentage.fromFraction(25, 10000),
    ownerFee: Percentage.fromFraction(5, 10000),
  },
});

export const larixUsdcPool: OrcaPoolParams = Object.freeze({
  address: new PublicKey("DaNULZAv2VyLk75pW3QD5szVzx5dT6iNvoih94Bttqf5"),
  nonce: 255,
  authority: new PublicKey("FUVkG7fM3i8T49qV7WsJd68rBaYKvqTkAQCdftqTWWNj"),
  poolTokenMint: new PublicKey("8sfThep3io4gvcGeuoAg1Rs8GDwKJjtcdAFHqQSSNAVE"),
  poolTokenDecimals: 6,
  feeAccount: new PublicKey("AVb9Bvu4rjFYNCHygEnAYCjwnkgtC8C6UmJ7at3dsfdz"),
  tokenIds: [Tokens.larixToken.mint.toString(), Tokens.usdcToken.mint.toString()],
  tokens: {
    [Tokens.larixToken.mint.toString()]: {
      ...Tokens.larixToken,
      addr: new PublicKey("AAjjSJsZM3AKK4h9cbGTHkquEZ2fWjgo9A9Pmrj2ynTH"),
    },
    [Tokens.usdcToken.mint.toString()]: {
      ...Tokens.usdcToken,
      addr: new PublicKey("82Fs8dSpMxPPfN1ULsXGFREHWz3JizREpTxwz2MaZ1n1"),
    },
  },
  curveType: CurveType.ConstantProduct,
  feeStructure: {
    traderFee: Percentage.fromFraction(25, 10000),
    ownerFee: Percentage.fromFraction(5, 10000),
  },
});

export const prtUsdcPool: OrcaPoolParams = Object.freeze({
  address: new PublicKey("CRm5uRBsVmUVHVqKfCCvCUX1RLUkjfcBWAeMQ5D9VuCM"),
  nonce: 255,
  authority: new PublicKey("A9eqdCXYys7jeoroMFEnkGLoYLa2q5gGbg8RSKHkR2ne"),
  poolTokenMint: new PublicKey("6jCERp5hKj37PCXP3VTjCDJeoPuSpnMDMz5A6jWQv3yS"),
  poolTokenDecimals: 6,
  feeAccount: new PublicKey("FHVidN2ZdGnVaCjYwLjLXrimPbVsaqsUEEiGcVZ6WAPq"),
  tokenIds: [Tokens.prtToken.mint.toString(), Tokens.usdcToken.mint.toString()],
  tokens: {
    [Tokens.prtToken.mint.toString()]: {
      ...Tokens.prtToken,
      addr: new PublicKey("3oL2GjsUnQLjHw77p78CsRr7t94AVrtsCnW5uf6NYQ3g"),
    },
    [Tokens.usdcToken.mint.toString()]: {
      ...Tokens.usdcToken,
      addr: new PublicKey("2EiVwvsH5cvyk4W243zKoywkaEQb9Bwe9WGphRgBSqaP"),
    },
  },
  curveType: CurveType.ConstantProduct,
  feeStructure: {
    traderFee: Percentage.fromFraction(25, 10000),
    ownerFee: Percentage.fromFraction(5, 10000),
  },
});

export const jetUsdcPool: OrcaPoolParams = Object.freeze({
  address: new PublicKey("ErWwp9HKjk5ZPLDt8SrHKH5PvSKTwFDdFo5E3zDuE5Be"),
  nonce: 253,
  authority: new PublicKey("GYY1t5d4pZnJC4rMXGY9yKMyCzLqxRqbtSguD2KkxghH"),
  poolTokenMint: new PublicKey("GBijunwxa4Ni3JmYC6q6zgaVhSUJU6hVX5qTyJDRpNTc"),
  poolTokenDecimals: 6,
  feeAccount: new PublicKey("6NhybmW42rdWj5TcobNKQT6JaZispgngcfTDrCsgVq4Q"),
  tokenIds: [Tokens.jetToken.mint.toString(), Tokens.usdcToken.mint.toString()],
  tokens: {
    [Tokens.jetToken.mint.toString()]: {
      ...Tokens.jetToken,
      addr: new PublicKey("GEtZSc8188t2cCAv21UGCyjvxCeyU5Co99GtRtyTkpdh"),
    },
    [Tokens.usdcToken.mint.toString()]: {
      ...Tokens.usdcToken,
      addr: new PublicKey("Bi95f8H7o7zHWuYysxDHEubPv4c3NhsHWhaesXJu91NC"),
    },
  },
  curveType: CurveType.ConstantProduct,
  feeStructure: {
    traderFee: Percentage.fromFraction(25, 10000),
    ownerFee: Percentage.fromFraction(5, 10000),
  },
});

export const stsolUsdcPool: OrcaPoolParams = Object.freeze({
  address: new PublicKey("EfK84vYEKT1PoTJr6fBVKFbyA7ZoftfPo2LQPAJG1exL"),
  nonce: 252,
  authority: new PublicKey("8PSN1CQxfyZ7T4sM3HM3RAgF2Y6VCf4tKSc8xY73Tnq5"),
  poolTokenMint: new PublicKey("GtQ1NT7R5aaTiST7K6ZWdMhwDdFxsSFvVFhBo8vyHGAq"),
  poolTokenDecimals: 6,
  feeAccount: new PublicKey("CJhL3UGesECFt6fvLB3csrGMuHf3M3G78pUzTopUiV8T"),
  tokenIds: [Tokens.stsolToken.mint.toString(), Tokens.usdcToken.mint.toString()],
  tokens: {
    [Tokens.stsolToken.mint.toString()]: {
      ...Tokens.stsolToken,
      addr: new PublicKey("9SEBxqhP8sTAzmfiQfCPim1MqQXuDPb6fkGzJF7Z339i"),
    },
    [Tokens.usdcToken.mint.toString()]: {
      ...Tokens.usdcToken,
      addr: new PublicKey("G45yhM5mZ5RXZpLxGWLk3PVzdAp33z8aH6F9mLW8fQj3"),
    },
  },
  curveType: CurveType.ConstantProduct,
  feeStructure: {
    traderFee: Percentage.fromFraction(25, 10000),
    ownerFee: Percentage.fromFraction(5, 10000),
  },
});

export const wstethUsdcPool: OrcaPoolParams = Object.freeze({
  address: new PublicKey("v51xWrRwmFVH6EKe8eZTjgK5E4uC2tzY5sVt5cHbrkG"),
  nonce: 254,
  authority: new PublicKey("3Kk8rpjxpc9qv2pJPr1CbmyQqrTDPntpryXActLogQeD"),
  poolTokenMint: new PublicKey("5a6Y1ephcbKSoyLMQyD1JWbtqawCy8p2FtRL9v3zhaG5"),
  poolTokenDecimals: 6,
  feeAccount: new PublicKey("ACKiRmbiMaPEc73pz4dVMuJGPaa74Vx9sfYADjnHuzvo"),
  tokenIds: [Tokens.wstethToken.mint.toString(), Tokens.usdcToken.mint.toString()],
  tokens: {
    [Tokens.wstethToken.mint.toString()]: {
      ...Tokens.wstethToken,
      addr: new PublicKey("5c4tzhRVaCxpmu8o3HrEZ8PWBDKSR6QNkBdQrUo9oe3e"),
    },
    [Tokens.usdcToken.mint.toString()]: {
      ...Tokens.usdcToken,
      addr: new PublicKey("AFNaWHH7ZGFjB7y7jmPM7jVs7QBAciffu7Z5tZidRHPR"),
    },
  },
  curveType: CurveType.ConstantProduct,
  feeStructure: {
    traderFee: Percentage.fromFraction(25, 10000),
    ownerFee: Percentage.fromFraction(5, 10000),
  },
});

export const auryUsdcPool: OrcaPoolParams = Object.freeze({
  address: new PublicKey("6HSguUukDH9zqJBm6oAAmFkg1WK9dJ5iLgnppTCM6jHm"),
  nonce: 255,
  authority: new PublicKey("9T1koZp2PNJgspcx3G22yLiChBUfYzAjs2dhj2kgw2LZ"),
  poolTokenMint: new PublicKey("6mJqqT5TMgveDvxzBt3hrjGkPV5VAj7tacxFCT3GebXh"),
  poolTokenDecimals: 6,
  feeAccount: new PublicKey("JCqbv7r3mtYhzruNFjc21X14fndDVBLMiaNQrsHVpWui"),
  tokenIds: [Tokens.auryToken.mint.toString(), Tokens.usdcToken.mint.toString()],
  tokens: {
    [Tokens.auryToken.mint.toString()]: {
      ...Tokens.auryToken,
      addr: new PublicKey("413s6jiRbayD9didA4VnY8kQVgVBgkYNpYB2tyNf8sbh"),
    },
    [Tokens.usdcToken.mint.toString()]: {
      ...Tokens.usdcToken,
      addr: new PublicKey("GdPeogNxRWAZtUj7ZHc7fUpBuGHJosdbukiT2krFtXm8"),
    },
  },
  curveType: CurveType.ConstantProduct,
  feeStructure: {
    traderFee: Percentage.fromFraction(25, 10000),
    ownerFee: Percentage.fromFraction(5, 10000),
  },
});

export const avaxUsdcPool: OrcaPoolParams = Object.freeze({
  address: new PublicKey("7c2CLgatf2TU36PgpS65WLmvWk94rmaHVf1Z1peZ7mcA"),
  nonce: 251,
  authority: new PublicKey("Mq46N9EknnxHL9fRkJhS4Eg9YXRifHiWzFJTD11ePWC"),
  poolTokenMint: new PublicKey("Hmfrtmo93DpSDmVNLQKcBS5D1ia5JatiRSok9ososubz"),
  poolTokenDecimals: 6,
  feeAccount: new PublicKey("7JH76Kw4dHyC5szRXkx6MFkJ3BEViodfNy15uFJst1cX"),
  tokenIds: [Tokens.avaxToken.mint.toString(), Tokens.usdcToken.mint.toString()],
  tokens: {
    [Tokens.avaxToken.mint.toString()]: {
      ...Tokens.avaxToken,
      addr: new PublicKey("5rU6M2jAXQMSmgrsn14BPoVVhoBdCU6y5cP7XMjN4ZYy"),
    },
    [Tokens.usdcToken.mint.toString()]: {
      ...Tokens.usdcToken,
      addr: new PublicKey("D28rzq246bcXBrYiCeALY86y8NwvCUmuJGNggvKsh4WR"),
    },
  },
  curveType: CurveType.ConstantProduct,
  feeStructure: {
    traderFee: Percentage.fromFraction(25, 10000),
    ownerFee: Percentage.fromFraction(5, 10000),
  },
});

export const fttUsdcPool: OrcaPoolParams = Object.freeze({
  address: new PublicKey("8npdwWX2BR39kcFLtTJABbcjNq7NWQvipfqxgsfk9mTX"),
  nonce: 255,
  authority: new PublicKey("8zU13KiLb1e87skt4rf8q1LhamEKKecyu6Xxb4Hqnm7e"),
  poolTokenMint: new PublicKey("FwCombynV2fTVizxPCNA2oZKoWXLZgdJThjE4Xv9sjxc"),
  poolTokenDecimals: 6,
  feeAccount: new PublicKey("C8D52rGuZcsBENhWtR9aqJVRU62cL7jyyEhxesKwc1k8"),
  tokenIds: [Tokens.fttToken.mint.toString(), Tokens.usdcToken.mint.toString()],
  tokens: {
    [Tokens.fttToken.mint.toString()]: {
      ...Tokens.fttToken,
      addr: new PublicKey("SasuKsATA2ATrMfFfSJr86wAGVgdS69PkQT3jFASBB8"),
    },
    [Tokens.usdcToken.mint.toString()]: {
      ...Tokens.usdcToken,
      addr: new PublicKey("3wADiuUqoakdoYYYxKqwoA4VN3uWZy5UwvLePox1mEsK"),
    },
  },
  curveType: CurveType.ConstantProduct,
  feeStructure: {
    traderFee: Percentage.fromFraction(25, 10000),
    ownerFee: Percentage.fromFraction(5, 10000),
  },
});

export const rayUsdcPool: OrcaPoolParams = Object.freeze({
  address: new PublicKey("2R2VhohRc5WoNHtRdwnjovAQaZRAmr1DE3QFW5jfgb6v"),
  nonce: 252,
  authority: new PublicKey("9B9ZcYT8jDQ6XLe6gRLDCFv1zz3uHVKdbZT9DFhsYSQW"),
  poolTokenMint: new PublicKey("4cXw2MYj94TFBXLL73fEpMCr8DPrW68JvrV8mzWgktbD"),
  poolTokenDecimals: 6,
  feeAccount: new PublicKey("HURhvCRsrwwR5TiG75Hn274WwL76kaKgjgC6n9h4FEHj"),
  tokenIds: [Tokens.rayToken.mint.toString(), Tokens.usdcToken.mint.toString()],
  tokens: {
    [Tokens.rayToken.mint.toString()]: {
      ...Tokens.rayToken,
      addr: new PublicKey("9ASj9zDg7cT6wtvn4euSUiZte8yN2U3Tn6cTVZvMHbU7"),
    },
    [Tokens.usdcToken.mint.toString()]: {
      ...Tokens.usdcToken,
      addr: new PublicKey("HGTxSWbb62nxk4oGkLkHUvrEzR5D4GKYRb8ZDcA2dpki"),
    },
  },
  curveType: CurveType.ConstantProduct,
  feeStructure: {
    traderFee: Percentage.fromFraction(25, 10000),
    ownerFee: Percentage.fromFraction(5, 10000),
  },
});

export const slndUsdcPool: OrcaPoolParams = Object.freeze({
  address: new PublicKey("GhosXH9yZPxqSyTHqJtXQt6w65YfiGjKXcEXciX1P3z8"),
  nonce: 255,
  authority: new PublicKey("ChmSHndtXRsYnFjYA2F7yRRsnyZ8kCpxSogTsCUgCEsh"),
  poolTokenMint: new PublicKey("F59gkD7NnsdJbFKrRZsiBC8PAooN4c56T8QmahfW1iXN"),
  poolTokenDecimals: 6,
  feeAccount: new PublicKey("GMipxN5pu6F6wwUrq6RhpqgcMjcKLTsnDTeNFCuUm5n7"),
  tokenIds: [Tokens.slndToken.mint.toString(), Tokens.usdcToken.mint.toString()],
  tokens: {
    [Tokens.slndToken.mint.toString()]: {
      ...Tokens.slndToken,
      addr: new PublicKey("9RcdfprKxbTzp3erTJMwXKznNCLmbCUaKhibaTMXhToi"),
    },
    [Tokens.usdcToken.mint.toString()]: {
      ...Tokens.usdcToken,
      addr: new PublicKey("6wEh8r3Czc3nKkN6JXobShnLG7ZqA5Y5DREGzkirYR36"),
    },
  },
  curveType: CurveType.ConstantProduct,
  feeStructure: {
    traderFee: Percentage.fromFraction(25, 10000),
    ownerFee: Percentage.fromFraction(5, 10000),
  },
});

export const gofxUsdcPool: OrcaPoolParams = Object.freeze({
  address: new PublicKey("C3b5AWQJiyar5g8EWu75zgDE26F55ZJWpqtFVCCVDQQQ"),
  nonce: 253,
  authority: new PublicKey("3SphkwoHx3d13Eu9RehVVg4gGMZv7FEaDXvPqWbQF9bm"),
  poolTokenMint: new PublicKey("7vnps4VE5RTGAr5fmPZu7fSrk2VnM4Up838grZfqmxqE"),
  poolTokenDecimals: 6,
  feeAccount: new PublicKey("CT95CSNqi4nttNW84dDuA8Um7FLAC52PVUvuVRKeCHVK"),
  tokenIds: [Tokens.gofxToken.mint.toString(), Tokens.usdcToken.mint.toString()],
  tokens: {
    [Tokens.gofxToken.mint.toString()]: {
      ...Tokens.gofxToken,
      addr: new PublicKey("5AhPVbtyiTV3SiNRJuq5z9xeaqqwoHQWqohR9HvjJkKS"),
    },
    [Tokens.usdcToken.mint.toString()]: {
      ...Tokens.usdcToken,
      addr: new PublicKey("6mtcbtTAadVEdnWJZmsq8woqLea7ef7k5WumVXSHr5KQ"),
    },
  },
  curveType: CurveType.ConstantProduct,
  feeStructure: {
    traderFee: Percentage.fromFraction(25, 10000),
    ownerFee: Percentage.fromFraction(5, 10000),
  },
});

export const woofUsdcPool: OrcaPoolParams = Object.freeze({
  address: new PublicKey("HY6iq1dp7pHwstfmLFu8m2iEvRQtjX3N751jcN6KrQXU"),
  nonce: 255,
  authority: new PublicKey("8JuHyxYBpemmryQq4bcA1GTuKaub9JJuLPoNNJpwX9aP"),
  poolTokenMint: new PublicKey("9EjcYfHcG8f1mccpHyaAwpoxaUPiheC6KgLQjyD9aTb6"),
  poolTokenDecimals: 6,
  feeAccount: new PublicKey("886Yu2fd1x8xpb4icdrhxZemdD8PN9RLdrq6Mn89wR4k"),
  tokenIds: [Tokens.woofToken.mint.toString(), Tokens.usdcToken.mint.toString()],
  tokens: {
    [Tokens.woofToken.mint.toString()]: {
      ...Tokens.woofToken,
      addr: new PublicKey("8ju56eRfs9wg3GtoSFVoQoR6NnQn6gsWr6FkQyZ1EeBg"),
    },
    [Tokens.usdcToken.mint.toString()]: {
      ...Tokens.usdcToken,
      addr: new PublicKey("5WcqVktXr3Rr78MGGfcuwgB6azoN9EDCZLP4werGnfi4"),
    },
  },
  curveType: CurveType.ConstantProduct,
  feeStructure: {
    traderFee: Percentage.fromFraction(25, 10000),
    ownerFee: Percentage.fromFraction(5, 10000),
  },
});

export const sdogeUsdcPool: OrcaPoolParams = Object.freeze({
  address: new PublicKey("8GoFKVkoxPyQKWXhoXs3ycGmp9rXYM8hz7eq1EUM1MJe"),
  nonce: 252,
  authority: new PublicKey("DSuxdCkHQy6rAjFsL75tRu2UpHVQDoYsYFeZt15sVDYL"),
  poolTokenMint: new PublicKey("CHTKUJGYRtBDqnxCFjxe5KEkZgxV98udbhuYYyzGxup5"),
  poolTokenDecimals: 6,
  feeAccount: new PublicKey("2gCRgQEySFTXA5v99vRUJHAGhQPTPtHx16Rdgipz7Q1y"),
  tokenIds: [Tokens.sdogeToken.mint.toString(), Tokens.usdcToken.mint.toString()],
  tokens: {
    [Tokens.sdogeToken.mint.toString()]: {
      ...Tokens.sdogeToken,
      addr: new PublicKey("ABQfmExcxJt2wE9JeLUxvhkpA2VkoQVvWKDvfusjq226"),
    },
    [Tokens.usdcToken.mint.toString()]: {
      ...Tokens.usdcToken,
      addr: new PublicKey("EDBXkzwxu6UXqBDnzb9AJ6Eggjyyct7SmYVoR8PYJkHd"),
    },
  },
  curveType: CurveType.ConstantProduct,
  feeStructure: {
    traderFee: Percentage.fromFraction(25, 10000),
    ownerFee: Percentage.fromFraction(5, 10000),
  },
});

export const catoUsdcPool: OrcaPoolParams = Object.freeze({
  address: new PublicKey("GumfURfQvPaJ2E5ueCEKYJmymNQbV34gU9TmiKZYRkiv"),
  nonce: 255,
  authority: new PublicKey("EjoLNSDggfWWE7BxwoL4tJHBEg1cFpdiyKeYTYCec2o2"),
  poolTokenMint: new PublicKey("55r9txzQtmjTykmTXmBYZCVMg5z9squB8b5cSw2AhxA4"),
  poolTokenDecimals: 6,
  feeAccount: new PublicKey("F6xCTe256cA6HTX5CYBkDtXoruHvjfbxeHNeqR9kR7oJ"),
  tokenIds: [Tokens.catoToken.mint.toString(), Tokens.usdcToken.mint.toString()],
  tokens: {
    [Tokens.catoToken.mint.toString()]: {
      ...Tokens.catoToken,
      addr: new PublicKey("AGNHgSQuPd4EqjLTLJrXEVb3KCkjRxGVDTaag4drV1XX"),
    },
    [Tokens.usdcToken.mint.toString()]: {
      ...Tokens.usdcToken,
      addr: new PublicKey("FESKk2kj9oqdYR4dcaP4LyqDyWZt3NttgypRVFoyUQNs"),
    },
  },
  curveType: CurveType.ConstantProduct,
  feeStructure: {
    traderFee: Percentage.fromFraction(25, 10000),
    ownerFee: Percentage.fromFraction(5, 10000),
  },
});

export const oogiUsdcPool: OrcaPoolParams = Object.freeze({
  address: new PublicKey("9tK2LaapwjxaUmfcAzY9zgC39M3wnaFX558y2Bb4oxWG"),
  nonce: 255,
  authority: new PublicKey("EGuBsx6HAgAtf1ogzF1uXTUQgwRex61hnhvuZcMwQKUJ"),
  poolTokenMint: new PublicKey("DSiHyHDn96bUQSZtizyCRLcQzrwohZeMpVu8rYJN1HzG"),
  poolTokenDecimals: 6,
  feeAccount: new PublicKey("Acom6ebnmbFKQk3XeX5VHPiz8bd7kzfpUMsqHKJDJnry"),
  tokenIds: [Tokens.oogiToken.mint.toString(), Tokens.usdcToken.mint.toString()],
  tokens: {
    [Tokens.oogiToken.mint.toString()]: {
      ...Tokens.oogiToken,
      addr: new PublicKey("GgfTGZ5DnAotnXKFM86vqffKQZ9nGgHaX1PDS7RTcKjQ"),
    },
    [Tokens.usdcToken.mint.toString()]: {
      ...Tokens.usdcToken,
      addr: new PublicKey("A3rzsPGtqowjKXfscYrPo1jvv2EVYpJwXQPGKxgvvStf"),
    },
  },
  curveType: CurveType.ConstantProduct,
  feeStructure: {
    traderFee: Percentage.fromFraction(25, 10000),
    ownerFee: Percentage.fromFraction(5, 10000),
  },
});

export const sonarUsdcPool: OrcaPoolParams = Object.freeze({
  address: new PublicKey("Dzp3ZWyUZGXZYWfodXdLdXfiW7gwVZBdWBwQ28eB6cTH"),
  nonce: 253,
  authority: new PublicKey("3HJw5YCXr69DzUcLSif4BicrMrXjC2jrEMpjQhQ3AwmB"),
  poolTokenMint: new PublicKey("5MvQHx8eftU39JTucFsT315JFnQASuDQg3FqxTw7xcvN"),
  poolTokenDecimals: 6,
  feeAccount: new PublicKey("J8tqP1N2fEgMTGhX2PTgRyj5ZFsFWsXneJpXyRjekKWA"),
  tokenIds: [Tokens.sonarToken.mint.toString(), Tokens.usdcToken.mint.toString()],
  tokens: {
    [Tokens.sonarToken.mint.toString()]: {
      ...Tokens.sonarToken,
      addr: new PublicKey("DxGfntMLqAjtB287GkPPcfotUGcWdhtpzR6KukdBo39H"),
    },
    [Tokens.usdcToken.mint.toString()]: {
      ...Tokens.usdcToken,
      addr: new PublicKey("EVymxW4gFtxw7qjMYGFq4EupxHc1RteffwETa5MKTDPR"),
    },
  },
  curveType: CurveType.ConstantProduct,
  feeStructure: {
    traderFee: Percentage.fromFraction(25, 10000),
    ownerFee: Percentage.fromFraction(5, 10000),
  },
});

export const aptUsdcPool: OrcaPoolParams = Object.freeze({
  address: new PublicKey("Fg3UabVqnfycMtkiTVoaia9eNafehtT9Y4TicH2iBtvK"),
  nonce: 255,
  authority: new PublicKey("JDEYn1JsacdxoB4v4mbctFSVrSUPttacX3gxWphFHJKZ"),
  poolTokenMint: new PublicKey("HNrYngS1eoqkjWro9D3Y5Z9sWBDzPNK2tX4rfV2Up177"),
  poolTokenDecimals: 6,
  feeAccount: new PublicKey("41H5mWwsZKewJeV4wWiNjQ3U4VYBnwqCpzvAWt86baHd"),
  tokenIds: [Tokens.aptToken.mint.toString(), Tokens.usdcToken.mint.toString()],
  tokens: {
    [Tokens.aptToken.mint.toString()]: {
      ...Tokens.aptToken,
      addr: new PublicKey("636crNdZTf46gFUKuedaBCZDBMLahf7KGud2LyTMskU5"),
    },
    [Tokens.usdcToken.mint.toString()]: {
      ...Tokens.usdcToken,
      addr: new PublicKey("DGEYFkEHyiuHWtHeCGiQGn1JbkGHqYrNwaP44miRbgxu"),
    },
  },
  curveType: CurveType.ConstantProduct,
  feeStructure: {
    traderFee: Percentage.fromFraction(25, 10000),
    ownerFee: Percentage.fromFraction(5, 10000),
  },
});

export const dflUsdcPool: OrcaPoolParams = Object.freeze({
  address: new PublicKey("59wJQz25rr38YnD69eXsntbdE4LB7m39KjHqZUUaoyZ3"),
  nonce: 255,
  authority: new PublicKey("E2kEN96wSW5bYML8qYLgxKM4pvdLjqhCRMyCvqYyVrXt"),
  poolTokenMint: new PublicKey("AWrtTWG4Zgxw8D92bb3L3sQtGLD3zDztMPWsXSph8iBP"),
  poolTokenDecimals: 6,
  feeAccount: new PublicKey("bZxTKZNF5gwnuXQ3xt8huUtsLAyFoh2NnQwmDDgbVxd"),
  tokenIds: [Tokens.dflToken.mint.toString(), Tokens.usdcToken.mint.toString()],
  tokens: {
    [Tokens.dflToken.mint.toString()]: {
      ...Tokens.dflToken,
      addr: new PublicKey("EXZdhy56TjvArQRfDakjuQdT7DffwFEYdY5F39vn3Wbr"),
    },
    [Tokens.usdcToken.mint.toString()]: {
      ...Tokens.usdcToken,
      addr: new PublicKey("Bhch1NY65RNA8uFaj2s8Fzxu36SFMQiniyZidq4jzsTt"),
    },
  },
  curveType: CurveType.ConstantProduct,
  feeStructure: {
    traderFee: Percentage.fromFraction(25, 10000),
    ownerFee: Percentage.fromFraction(5, 10000),
  },
});

export const dflSolPool: OrcaPoolParams = Object.freeze({
  address: new PublicKey("GxkXvW6dJP3KUNWuXi64V99uRsPFEFnuuasNTq6fvZfP"),
  nonce: 255,
  authority: new PublicKey("H196f95DHGfhNkF3W9h4bjBqpL8g3qesEENHRsDqJshj"),
  poolTokenMint: new PublicKey("9Y1vPaAsMz8X65DebMMnmBjbMo8i4jh4mcgiggZUUS3M"),
  poolTokenDecimals: 6,
  feeAccount: new PublicKey("7L7kjeEo5oE9SCZ9vacmyJvfKKmjAevVpdktBGyxBxaF"),
  tokenIds: [Tokens.dflToken.mint.toString(), Tokens.solToken.mint.toString()],
  tokens: {
    [Tokens.dflToken.mint.toString()]: {
      ...Tokens.dflToken,
      addr: new PublicKey("BpjpdhuMkPPW3HPx4U9tRmNAXdUeb49jxwFGy2PrSNCp"),
    },
    [Tokens.solToken.mint.toString()]: {
      ...Tokens.solToken,
      addr: new PublicKey("HcXqJthqq1UeGHA8xPeDLnWVJFcndoUnKnpULRCjyTzi"),
    },
  },
  curveType: CurveType.ConstantProduct,
  feeStructure: {
    traderFee: Percentage.fromFraction(25, 10000),
    ownerFee: Percentage.fromFraction(5, 10000),
  },
});

export const frktUsdcPool: OrcaPoolParams = Object.freeze({
  address: new PublicKey("DXNct3MfHDuhKiXHY3AUXPtj5sQVY3feuDxkDRfCw1rL"),
  nonce: 254,
  authority: new PublicKey("JBCdhgkmW6xHdZUZdKdf56qov9LtHixf47JpoCWm4qcn"),
  poolTokenMint: new PublicKey("FnDxJPNk7pPmGHUbR4XUHmHevrkXHdna5D3sQKcAtjBL"),
  poolTokenDecimals: 6,
  feeAccount: new PublicKey("DRn2F5MsWzLihtqsheuJmugJuHQGDR23cvqCLy7eCucw"),
  tokenIds: [Tokens.frktToken.mint.toString(), Tokens.usdcToken.mint.toString()],
  tokens: {
    [Tokens.frktToken.mint.toString()]: {
      ...Tokens.frktToken,
      addr: new PublicKey("AUSeFBvVtLiZRppRu8Uvd8NjzCkQzaCi5Si8WWyko9p"),
    },
    [Tokens.usdcToken.mint.toString()]: {
      ...Tokens.usdcToken,
      addr: new PublicKey("C3RzSoNiBfTNbAZMyyuV2aLfwGQRyjvkjL3pf9iuvU3R"),
    },
  },
  curveType: CurveType.ConstantProduct,
  feeStructure: {
    traderFee: Percentage.fromFraction(25, 10000),
    ownerFee: Percentage.fromFraction(5, 10000),
  },
});

export const tttUsdcPool: OrcaPoolParams = Object.freeze({
  address: new PublicKey("HD6pqxyqj4S7eS3orAyQyan5RpwpMPjKEDWgTyYXcfr1"),
  nonce: 254,
  authority: new PublicKey("Gh1QqgpKGd6zhicNvBh1VLbycpoq6P7QBCZT8MdhWzN1"),
  poolTokenMint: new PublicKey("FGgP1npQTsC5Q4xBmQtNYSh51NKqNwdxBZy8JCo3igcu"),
  poolTokenDecimals: 6,
  feeAccount: new PublicKey("AFjaSrdgNJsFDSQTDbkBoBMLHt2qCt5GuPHWDTUV4nHt"),
  tokenIds: [Tokens.tttToken.mint.toString(), Tokens.usdcToken.mint.toString()],
  tokens: {
    [Tokens.tttToken.mint.toString()]: {
      ...Tokens.tttToken,
      addr: new PublicKey("HbrvwSnL11K5EALN21FdjmWvG16VNcq5iyHEKjdHtyJe"),
    },
    [Tokens.usdcToken.mint.toString()]: {
      ...Tokens.usdcToken,
      addr: new PublicKey("CQvyngoqxCdgFQYjbT8EKved6hTDzmzdp8Xxxv5FkXmd"),
    },
  },
  curveType: CurveType.ConstantProduct,
  feeStructure: {
    traderFee: Percentage.fromFraction(25, 10000),
    ownerFee: Percentage.fromFraction(5, 10000),
  },
});

export const upsUsdcPool: OrcaPoolParams = Object.freeze({
  address: new PublicKey("G67ZSkxE5N67x6A1WhcTaHiFHqRtRQUb3QHwjtPge1Xr"),
  nonce: 250,
  authority: new PublicKey("Hj3vg6P2DBfJ6hhvCoucaGvL9cwsvUgeJWZRzuXTZ6hi"),
  poolTokenMint: new PublicKey("E1U63VXhNiWoUkVvjrfLDdV1oJrwE6zLde3bohr6jCqz"),
  poolTokenDecimals: 6,
  feeAccount: new PublicKey("Cu8SFyZKsHcUYhxECpt5Wr97CeHSXeDyNjs9kyDWtVJm"),
  tokenIds: [Tokens.upsToken.mint.toString(), Tokens.usdcToken.mint.toString()],
  tokens: {
    [Tokens.upsToken.mint.toString()]: {
      ...Tokens.upsToken,
      addr: new PublicKey("CNw37MJdV6gBChtEtUgGrx3zWXz8t3bYxD7u5axPrwdJ"),
    },
    [Tokens.usdcToken.mint.toString()]: {
      ...Tokens.usdcToken,
      addr: new PublicKey("5iLVx3LwhWiqjaRyLaiVNsLbYBqy48fvs2sTY6q96nNy"),
    },
  },
  curveType: CurveType.ConstantProduct,
  feeStructure: {
    traderFee: Percentage.fromFraction(25, 10000),
    ownerFee: Percentage.fromFraction(5, 10000),
  },
});

export const fantUsdcPool: OrcaPoolParams = Object.freeze({
  address: new PublicKey("95aDcNzL8tL17jzHAUQXnRwuCmYBWKUr4xfjV6AMVJY1"),
  nonce: 255,
  authority: new PublicKey("GeTZHdp1sYgX6J73CBeqS5pjb7xfY8D9Rzf4E615oGMt"),
  poolTokenMint: new PublicKey("GjG7JjTQfQpDxw4hWx4etP9oTaYCuCbPjsU8WaUT3xHB"),
  poolTokenDecimals: 6,
  feeAccount: new PublicKey("AdSQYnzmJ4j2hbqT5aumXAf4a3T2AxmGHbCgHER8rf6K"),
  tokenIds: [Tokens.fantToken.mint.toString(), Tokens.usdcToken.mint.toString()],
  tokens: {
    [Tokens.fantToken.mint.toString()]: {
      ...Tokens.fantToken,
      addr: new PublicKey("CyLaJ6Y382czGE75yFDg2fneKni6PjZHH9Jh4GZN2Nyo"),
    },
    [Tokens.usdcToken.mint.toString()]: {
      ...Tokens.usdcToken,
      addr: new PublicKey("7wHMKRPVsacb3JcBsUxLKLZkAPbX81VNc6Z6J9uvJ2J8"),
    },
  },
  curveType: CurveType.ConstantProduct,
  feeStructure: {
    traderFee: Percentage.fromFraction(25, 10000),
    ownerFee: Percentage.fromFraction(5, 10000),
  },
});

export const blockUsdcPool: OrcaPoolParams = Object.freeze({
  address: new PublicKey("ExeW62iy4xEUo5b5XnDru5oQCDRDUmBaFNqE4V4u7uvm"),
  nonce: 255,
  authority: new PublicKey("2fSbre92FnmkeUP5iT7jdFKNB3nfx5yQ5GEW2mjVigMi"),
  poolTokenMint: new PublicKey("D8WjqtwC9CzBrQKfSf2ccCHFQuPYwyLv5KAy8WjT5vnf"),
  poolTokenDecimals: 6,
  feeAccount: new PublicKey("BGSDZoQyH8QGJDvQ8toms4Pk4HWHaFEXSUvJ3AAYXxmF"),
  tokenIds: [Tokens.blockToken.mint.toString(), Tokens.usdcToken.mint.toString()],
  tokens: {
    [Tokens.blockToken.mint.toString()]: {
      ...Tokens.blockToken,
      addr: new PublicKey("7uJ5SFRGzrnbspUThix8M2wFJNnS8vvSKbCEhKmqMjNm"),
    },
    [Tokens.usdcToken.mint.toString()]: {
      ...Tokens.usdcToken,
      addr: new PublicKey("4e5ZVp7u6YWEibveHscZmbmHpujtbJNUHFj14tqtAZKv"),
    },
  },
  curveType: CurveType.ConstantProduct,
  feeStructure: {
    traderFee: Percentage.fromFraction(25, 10000),
    ownerFee: Percentage.fromFraction(5, 10000),
  },
});

export const runUsdcPool: OrcaPoolParams = Object.freeze({
  address: new PublicKey("9j4FdbK68xUDQVynTWHbNzBRAj7Q7Lywiqb82en4JzZs"),
  nonce: 253,
  authority: new PublicKey("9RUMuXequVtf9UVYHoKJxwWfqyod478nBfX8H3DvSaKV"),
  poolTokenMint: new PublicKey("34Ppq6R8NfYBwWwPY4cBK4Afyb8hHaASQFukCzH6cV4n"),
  poolTokenDecimals: 6,
  feeAccount: new PublicKey("pPH4mFHFu1c3ZR59Zaun5jSCBRn6pU1GWSoVHD4LKUs"),
  tokenIds: [Tokens.runToken.mint.toString(), Tokens.usdcToken.mint.toString()],
  tokens: {
    [Tokens.runToken.mint.toString()]: {
      ...Tokens.runToken,
      addr: new PublicKey("tg7YMVac4S2ZpVrbaDqrZgURyTBBrZCQUkQ6Fn6nnrX"),
    },
    [Tokens.usdcToken.mint.toString()]: {
      ...Tokens.usdcToken,
      addr: new PublicKey("G2fZDZKa5Y599xzqP1jVQ3EMCfiG6f4dMS6G1f7BKoQe"),
    },
  },
  curveType: CurveType.ConstantProduct,
  feeStructure: {
    traderFee: Percentage.fromFraction(25, 10000),
    ownerFee: Percentage.fromFraction(5, 10000),
  },
});

export const uxpUsdcPool: OrcaPoolParams = Object.freeze({
  address: new PublicKey("eKuTPdMHmnVzLP63oWwdUH6bBAVcdvBfg4zvH2nWWCj"),
  nonce: 255,
  authority: new PublicKey("DYwCP16u5pmLMspCb8tdTQaaF2rBvM2qvgzm5uYvPUHT"),
  poolTokenMint: new PublicKey("HjR8JgqNKQVMvdryqJw5RJ4PCE9WGk8sgbEF7S9S3obv"),
  poolTokenDecimals: 6,
  feeAccount: new PublicKey("HoaPae92LswzSbvnVbdkBAYFNanrvK3kFvWtYyUhpC2o"),
  tokenIds: [Tokens.uxpToken.mint.toString(), Tokens.usdcToken.mint.toString()],
  tokens: {
    [Tokens.uxpToken.mint.toString()]: {
      ...Tokens.uxpToken,
      addr: new PublicKey("BWL9ocg8VEBSfrS7zjUBUidE9T8p95J3p5wF6C4Vaqrs"),
    },
    [Tokens.usdcToken.mint.toString()]: {
      ...Tokens.usdcToken,
      addr: new PublicKey("GQC4fM5E6dr9MsXvtMzAR4Z8iCduhyFvYCLdMAAHGCM2"),
    },
  },
  curveType: CurveType.ConstantProduct,
  feeStructure: {
    traderFee: Percentage.fromFraction(25, 10000),
    ownerFee: Percentage.fromFraction(5, 10000),
  },
});

export const btcUsdcPool: OrcaPoolParams = Object.freeze({
  address: new PublicKey("2dwHmCoAGxCXvTbLTMjqAhvEFAHWUt9kZaroJJJdmoD4"),
  nonce: 253,
  authority: new PublicKey("BwJ1vMtJiBy7dJaVToR1KUwVbBsGUTNN4QdKVSf8EEh1"),
  poolTokenMint: new PublicKey("J3kvcay3N16FBdawgnqoJ9v9p6XCvyCLE2Z9F5RLvGkj"),
  poolTokenDecimals: 6,
  feeAccount: new PublicKey("HR7c67SkeLvCpHrVSu7MiiAERQh6iD1NrCJsj3kWiZnK"),
  tokenIds: [Tokens.btcToken.mint.toString(), Tokens.usdcToken.mint.toString()],
  tokens: {
    [Tokens.btcToken.mint.toString()]: {
      ...Tokens.btcToken,
      addr: new PublicKey("D3Wv78j9STkfJx3vhzoCzpMZ4RqCg8oaTNGzi1rZpdJg"),
    },
    [Tokens.usdcToken.mint.toString()]: {
      ...Tokens.usdcToken,
      addr: new PublicKey("HMFLg2GtbWSSEe92Vuf2LQdUpCacGj2m2PwvMqzwQFNi"),
    },
  },
  curveType: CurveType.ConstantProduct,
  feeStructure: {
    traderFee: Percentage.fromFraction(25, 10000),
    ownerFee: Percentage.fromFraction(5, 10000),
  },
});

export const mndeUsdcPool: OrcaPoolParams = Object.freeze({
  address: new PublicKey("2yNwARmTmc3NzYMETCZQjAE5GGCPgviH6hiBsxaeikTK"),
  nonce: 253,
  authority: new PublicKey("2ZzxuHxvPQtPU48Tffs8LD8sy17rgjBRQviRVxQ54fR6"),
  poolTokenMint: new PublicKey("12Uj74zgUUoBe4yeackwQ4qYtFMr9fk1xL6q5Nha6t2N"),
  poolTokenDecimals: 6,
  feeAccount: new PublicKey("6AvWhLSuAqTWUdpo4jF84s4gfgAjbRQv5vLf7mYNCgd8"),
  tokenIds: [Tokens.mndeToken.mint.toString(), Tokens.usdcToken.mint.toString()],
  tokens: {
    [Tokens.mndeToken.mint.toString()]: {
      ...Tokens.mndeToken,
      addr: new PublicKey("AfF3SJFpyfU7iw9KtrwPyi6corJbyiC24JyVis7oxNVr"),
    },
    [Tokens.usdcToken.mint.toString()]: {
      ...Tokens.usdcToken,
      addr: new PublicKey("FT4GQqs5sEvqhsWm845VF1vmHjdQkrB1jdsGPJbzB4oB"),
    },
  },
  curveType: CurveType.ConstantProduct,
  feeStructure: {
    traderFee: Percentage.fromFraction(25, 10000),
    ownerFee: Percentage.fromFraction(5, 10000),
  },
});

export const chicksUsdcPool: OrcaPoolParams = Object.freeze({
  address: new PublicKey("3abwmh8LDUsXMoDgNzZLq9QvKqKbhYND9N5aXh9yz7Dm"),
  nonce: 255,
  authority: new PublicKey("HmNqp8F5Bp16dUTUihhL3TnyQxfzJ2GtTo9VEQx6bjB3"),
  poolTokenMint: new PublicKey("71CBZeJ4tw38L9pSPoCz4fRsuWE64Fipyzotte7haoCS"),
  poolTokenDecimals: 6,
  feeAccount: new PublicKey("4zRJg9Kod7bd9tR3mxQhxzAQUPqQmUGJbmrWpQ4XDGT4"),
  tokenIds: [Tokens.chicksToken.mint.toString(), Tokens.usdcToken.mint.toString()],
  tokens: {
    [Tokens.chicksToken.mint.toString()]: {
      ...Tokens.chicksToken,
      addr: new PublicKey("84Ha1dXH8YAWXt3AC15RstnUCoWT3hg24tUGD1GtqGSm"),
    },
    [Tokens.usdcToken.mint.toString()]: {
      ...Tokens.usdcToken,
      addr: new PublicKey("GkonWV6urvzsnKwVmPXe89fTX1zBfv4xrAhx9JnxV9Nq"),
    },
  },
  curveType: CurveType.ConstantProduct,
  feeStructure: {
    traderFee: Percentage.fromFraction(25, 10000),
    ownerFee: Percentage.fromFraction(5, 10000),
  },
});

export const onesolUsdcPool: OrcaPoolParams = Object.freeze({
  address: new PublicKey("CKKuMECwW75NBNRKtYJz1svCycRHt4KpXmcNnHXiHY73"),
  nonce: 253,
  authority: new PublicKey("2TSCMpjN6ToLJy8baiFTc9UdB1PuHFsr24mos98Zp57v"),
  poolTokenMint: new PublicKey("6MF5CHWAj5mS7FhpxiKz37CzR2eYTu236XpBKKMXCrGg"),
  poolTokenDecimals: 6,
  feeAccount: new PublicKey("9Rw29Mvx6b2RMAbdZoqs3gBRMcfYjBYRyiegNZoaYrWS"),
  tokenIds: [Tokens.onesolToken.mint.toString(), Tokens.usdcToken.mint.toString()],
  tokens: {
    [Tokens.onesolToken.mint.toString()]: {
      ...Tokens.onesolToken,
      addr: new PublicKey("2meoejmWQno2q6cbFMRytu7UMqMA8FTx651feSUHfTtC"),
    },
    [Tokens.usdcToken.mint.toString()]: {
      ...Tokens.usdcToken,
      addr: new PublicKey("n5CtiZDLm2xNxVU1o4KC98dNGiFb1sbuCazDihahbMy"),
    },
  },
  curveType: CurveType.ConstantProduct,
  feeStructure: {
    traderFee: Percentage.fromFraction(25, 10000),
    ownerFee: Percentage.fromFraction(5, 10000),
  },
});

export const wmpUsdcPool: OrcaPoolParams = Object.freeze({
  address: new PublicKey("Cqy7PRGRx2QeTLZM3QmLGN68uHxEd9euj2eEeeZWnuvQ"),
  nonce: 255,
  authority: new PublicKey("9vkbzRnjd9qpmunBUHqS8Fnt9DUEX5akJPm9movtfNxZ"),
  poolTokenMint: new PublicKey("HDgxKmiA8Pv82fNguhVeMkZqQkos2YksFPoP1KttWxX8"),
  poolTokenDecimals: 6,
  feeAccount: new PublicKey("Bfr66xExhYijJzc732abX7znkFnj4v3otQDFbHaz7RkK"),
  tokenIds: [Tokens.wmpToken.mint.toString(), Tokens.usdcToken.mint.toString()],
  tokens: {
    [Tokens.wmpToken.mint.toString()]: {
      ...Tokens.wmpToken,
      addr: new PublicKey("3WubbpV7W82H6FERR62Bd8Z4fXFGaihtBNqnT1zkGr6f"),
    },
    [Tokens.usdcToken.mint.toString()]: {
      ...Tokens.usdcToken,
      addr: new PublicKey("8MxcExnMniQEDs361cZseukEau9Rmd3CmrCXxasmNM1x"),
    },
  },
  curveType: CurveType.ConstantProduct,
  feeStructure: {
    traderFee: Percentage.fromFraction(25, 10000),
    ownerFee: Percentage.fromFraction(5, 10000),
  },
});

export const unqUsdcPool: OrcaPoolParams = Object.freeze({
  address: new PublicKey("3a3G1RjJe826EB1toShvPPWnyi2jXR53HP4vYb936kwj"),
  nonce: 254,
  authority: new PublicKey("94V4mU6bWzU86tdzFbBCjkFngqXvf5MwXKhVLgJA83vL"),
  poolTokenMint: new PublicKey("2VuGzaMrDnDyZfYvDwSXk38s7M2wpud7LDY3dGA1J9sy"),
  poolTokenDecimals: 6,
  feeAccount: new PublicKey("9iHGnquXmnJnSATN4ijGj7Niz4StxXEMC8KqB1pT51uW"),
  tokenIds: [Tokens.unqToken.mint.toString(), Tokens.usdcToken.mint.toString()],
  tokens: {
    [Tokens.unqToken.mint.toString()]: {
      ...Tokens.unqToken,
      addr: new PublicKey("Hf4gYkKNAPhm2RYrXrcP9YVL44VbYnsRsyUuBnZGzqPr"),
    },
    [Tokens.usdcToken.mint.toString()]: {
      ...Tokens.usdcToken,
      addr: new PublicKey("BZ9oTLGDL6tsvoooQ9qEBSM3sYKJB1v2e9b4en5ix1Mp"),
    },
  },
  curveType: CurveType.ConstantProduct,
  feeStructure: {
    traderFee: Percentage.fromFraction(25, 10000),
    ownerFee: Percentage.fromFraction(5, 10000),
  },
});

export const basisUsdcPool: OrcaPoolParams = Object.freeze({
  address: new PublicKey("9wb29L97MmPp7Nw8oaqiAGkXceETGNQurhySiUNLv5wh"),
  nonce: 251,
  authority: new PublicKey("786ezhfHqkmJUBmjrWYGpzPnVWR8zhy2V71qNws7D89z"),
  poolTokenMint: new PublicKey("GoaAiajubRgeCFEz9L6mLnSmT2QFegoJDH5tpLfivpj"),
  poolTokenDecimals: 6,
  feeAccount: new PublicKey("4FjEd37W9FExXq85nLeuNWuhUaTwkFdnqewt3E3qoYAh"),
  tokenIds: [Tokens.basisToken.mint.toString(), Tokens.usdcToken.mint.toString()],
  tokens: {
    [Tokens.basisToken.mint.toString()]: {
      ...Tokens.basisToken,
      addr: new PublicKey("7QM71YvJm86bN9RLFoEvyDX8dBgLh2xjnabcHf4d1Q1y"),
    },
    [Tokens.usdcToken.mint.toString()]: {
      ...Tokens.usdcToken,
      addr: new PublicKey("AmP22dYrTsG2LrkQX9cLg79jUrzDJcmWqGEWmM3Mdn46"),
    },
  },
  curveType: CurveType.ConstantProduct,
  feeStructure: {
    traderFee: Percentage.fromFraction(25, 10000),
    ownerFee: Percentage.fromFraction(5, 10000),
  },
});

export const gstUsdcPool: OrcaPoolParams = Object.freeze({
  address: new PublicKey("87E4KtN7F4LivKhjqXaoQAvS3a8HnM4DnMUrbMrkVvXY"),
  nonce: 244,
  authority: new PublicKey("CwwMfXPXfRT5H5JUatpBctASRGhKW2SqLWWGU3eX5Zgo"),
  poolTokenMint: new PublicKey("E6FUnQHGHJVJg7oExVr5Moeaj1QpdpZQF5odYjHXWPZb"),
  poolTokenDecimals: 6,
  feeAccount: new PublicKey("BynpQprCNjcY2KHeffDKzquyKWvJxikty3donrMT4ZPU"),
  tokenIds: [Tokens.gstToken.mint.toString(), Tokens.usdcToken.mint.toString()],
  tokens: {
    [Tokens.gstToken.mint.toString()]: {
      ...Tokens.gstToken,
      addr: new PublicKey("9r39vqrJuubgafaJ5aQyDWYAUQVJeyZyveBXeRqp7xev"),
    },
    [Tokens.usdcToken.mint.toString()]: {
      ...Tokens.usdcToken,
      addr: new PublicKey("7LFnr5YgUyEgPMCLGNQ9N7wM5MFRNqCuRawLZTe5q4c7"),
    },
  },
  curveType: CurveType.ConstantProduct,
  feeStructure: {
    traderFee: Percentage.fromFraction(25, 10000),
    ownerFee: Percentage.fromFraction(5, 10000),
  },
});

export const meanUsdcPool: OrcaPoolParams = Object.freeze({
  address: new PublicKey("4jhCSYuGkLCiB8uvCaS34QCtPycBjayxEk27YCartTuW"),
  nonce: 255,
  authority: new PublicKey("Fawkj9g4s1M26uZDF6QczEviyib2Ge3FaPdCG9TJLYcm"),
  poolTokenMint: new PublicKey("F5BTnwuMA6rxftTdbZ33VWKr2wrr6DuQHnd4guKmPSYQ"),
  poolTokenDecimals: 6,
  feeAccount: new PublicKey("EqhWQbxsa36o7YSrCNvJTV1yoTRTWxCiLKcG9pzafprc"),
  tokenIds: [Tokens.meanToken.mint.toString(), Tokens.usdcToken.mint.toString()],
  tokens: {
    [Tokens.meanToken.mint.toString()]: {
      ...Tokens.meanToken,
      addr: new PublicKey("5KSCuA99i7PSF6KvvbvV5hDveGse7isqF6e7tFXPeMyn"),
    },
    [Tokens.usdcToken.mint.toString()]: {
      ...Tokens.usdcToken,
      addr: new PublicKey("13PtHDhQzswoFWg8Gr4yVrTmUEW4CWxeKFkLVERCmypB"),
    },
  },
  curveType: CurveType.ConstantProduct,
  feeStructure: {
    traderFee: Percentage.fromFraction(25, 10000),
    ownerFee: Percentage.fromFraction(5, 10000),
  },
});

export const aartUsdcPool: OrcaPoolParams = Object.freeze({
  address: new PublicKey("8wVYTnchy3WbhJvKn4NhTbgtVm6Bfd6yvxR33DsSftse"),
  nonce: 255,
  authority: new PublicKey("GAWAD19LVUgKmkWWfB4Xg92KMXuVR7M1gUpQPiFAAtxR"),
  poolTokenMint: new PublicKey("HCtyJzFUtYecXrA52s4Y9atq4J1fhT3cYsTX17XVSFag"),
  poolTokenDecimals: 6,
  feeAccount: new PublicKey("FmZkn9xAwpZULmF6rSrcz1pHiqqNnAXCUFWs1z5t9LSX"),
  tokenIds: [Tokens.aartToken.mint.toString(), Tokens.usdcToken.mint.toString()],
  tokens: {
    [Tokens.aartToken.mint.toString()]: {
      ...Tokens.aartToken,
      addr: new PublicKey("Hy3FDHpTfzqtooUARjgUvYuRcFnjGH5WLftu77DyEnKJ"),
    },
    [Tokens.usdcToken.mint.toString()]: {
      ...Tokens.usdcToken,
      addr: new PublicKey("J4Cd9u1WuY1WnCScENuRyL2jGh7qD6vpRsWJG6ZsC5z9"),
    },
  },
  curveType: CurveType.ConstantProduct,
  feeStructure: {
    traderFee: Percentage.fromFraction(25, 10000),
    ownerFee: Percentage.fromFraction(5, 10000),
  },
});

export const shdwUsdcPool: OrcaPoolParams = Object.freeze({
  address: new PublicKey("25bQ6UzZpgFgnU7MqZdqM9Axi6oJunytRL2LgXruDWZB"),
  nonce: 254,
  authority: new PublicKey("BjnfpyU3Verx99dKcEJZpL1AqLTPrkAUcd44LpXcXVvn"),
  poolTokenMint: new PublicKey("DJqqvzSuPaWThfzwMjXx7H2ZmHDdwxza6NtFudtuXcpc"),
  poolTokenDecimals: 6,
  feeAccount: new PublicKey("9wmHbXURZ4zTPSj1KqoRSCdBRGUF7jrURzf7BB39cxM4"),
  tokenIds: [Tokens.shdwToken.mint.toString(), Tokens.usdcToken.mint.toString()],
  tokens: {
    [Tokens.shdwToken.mint.toString()]: {
      ...Tokens.shdwToken,
      addr: new PublicKey("8ZVaNyNZQkcMzF7esuZoRgRo7Rc9eKEN18v4zw7Ng8JZ"),
    },
    [Tokens.usdcToken.mint.toString()]: {
      ...Tokens.usdcToken,
      addr: new PublicKey("H8A2xivBXr1RMCYmuhJ7dyEXJqPxaGDyQaaim8WucU7c"),
    },
  },
  curveType: CurveType.ConstantProduct,
  feeStructure: {
    traderFee: Percentage.fromFraction(25, 10000),
    ownerFee: Percentage.fromFraction(5, 10000),
  },
});

export const shdwSolPool: OrcaPoolParams = Object.freeze({
  address: new PublicKey("E3fxkJGNNAWf5xXDfMdq5qofBVkQtLKxkP7gG6Up21Ts"),
  nonce: 253,
  authority: new PublicKey("ByC5idkRdo2XdU5U6tSoSQmfq6spztUYMaSs2rrcJRPh"),
  poolTokenMint: new PublicKey("2ws7g3LBPdctfKn42Di9qxzQtUJ8ZL1aEAX2rGEQMNqh"),
  poolTokenDecimals: 6,
  feeAccount: new PublicKey("G9HR4sFJufdUovMGn4qc97r7fhgJCkTDnn4BT2wPWYar"),
  tokenIds: [Tokens.shdwToken.mint.toString(), Tokens.solToken.mint.toString()],
  tokens: {
    [Tokens.shdwToken.mint.toString()]: {
      ...Tokens.shdwToken,
      addr: new PublicKey("9LQEB2SZQJxtLQStgXVNzgWU3LVkc4szK22iDHcSr4K9"),
    },
    [Tokens.solToken.mint.toString()]: {
      ...Tokens.solToken,
      addr: new PublicKey("F2qtMkEy3L78wpw64bckvRx5M4w12Zi7bimuPBnYzto1"),
    },
  },
  curveType: CurveType.ConstantProduct,
  feeStructure: {
    traderFee: Percentage.fromFraction(25, 10000),
    ownerFee: Percentage.fromFraction(5, 10000),
  },
});

export const scyUsdcPool: OrcaPoolParams = Object.freeze({
  address: new PublicKey("Ci2T7KY8xXc3NmSr4JmbhZ2V7SfjZ7Fn2q6VxJsDD1Dg"),
  nonce: 255,
  authority: new PublicKey("fmoBkLez7cSLnG1XNn6PTf6UH5Vq2hSAPrZ1NbvRppL"),
  poolTokenMint: new PublicKey("99ZHUQsgxL7K6PHrGNi1gSwawwPr7UA5fbWrYoHQ6qhX"),
  poolTokenDecimals: 6,
  feeAccount: new PublicKey("HHhxxFKyVt4xrYnJqAiywHCzuoCu45S4itkLKvop2fAe"),
  tokenIds: [Tokens.scyToken.mint.toString(), Tokens.usdcToken.mint.toString()],
  tokens: {
    [Tokens.scyToken.mint.toString()]: {
      ...Tokens.scyToken,
      addr: new PublicKey("Hfa6kPY27pgnbXHMd1bKBaYMBoF8RRxUm2AmWHBWudcn"),
    },
    [Tokens.usdcToken.mint.toString()]: {
      ...Tokens.usdcToken,
      addr: new PublicKey("CYKEhyhe9JZqLzaM29o8urMu8riDNBE6ycZP6bLQtkbF"),
    },
  },
  curveType: CurveType.ConstantProduct,
  feeStructure: {
    traderFee: Percentage.fromFraction(25, 10000),
    ownerFee: Percentage.fromFraction(5, 10000),
  },
});

export const slcUsdcPool: OrcaPoolParams = Object.freeze({
  address: new PublicKey("ByfDbpLVNVQHzU6E5dmLE1kcAKWAYRr9LPSGcVxxSRFF"),
  nonce: 255,
  authority: new PublicKey("7G6i4eQxiJvXg7hPn5kMrso8AHQNsdfPZZdJM3NNJuYz"),
  poolTokenMint: new PublicKey("E5kSBqTDxFLbLNQaVVtPtnhEYVLMCK2fVSEKoMKL98qR"),
  poolTokenDecimals: 6,
  feeAccount: new PublicKey("CtBP4cFDLzm3KQCQRKXwwsMgYG9f6hbwuUswUZBzYvvY"),
  tokenIds: [Tokens.slcToken.mint.toString(), Tokens.usdcToken.mint.toString()],
  tokens: {
    [Tokens.slcToken.mint.toString()]: {
      ...Tokens.slcToken,
      addr: new PublicKey("EnvNSVK9JRQ5jmsz7nvbhYmR3MHSeMvB8Mf1e4VwoyRe"),
    },
    [Tokens.usdcToken.mint.toString()]: {
      ...Tokens.usdcToken,
      addr: new PublicKey("CHuUSo3EMCqtGWvUGRj4crmDzV5YKdYvqrhHSEitAP8V"),
    },
  },
  curveType: CurveType.ConstantProduct,
  feeStructure: {
    traderFee: Percentage.fromFraction(25, 10000),
    ownerFee: Percentage.fromFraction(5, 10000),
  },
});

export const wustSolPool: OrcaPoolParams = Object.freeze({
  address: new PublicKey("M3DfDvKZ9WEWYWcBuguvt3rYSbKqj66PgjW69DoEq9C"),
  nonce: 249,
  authority: new PublicKey("5mYWcs7n1JqDVeYby897eEUNeEJsp2PNMg2Y2VMD5Jrf"),
  poolTokenMint: new PublicKey("6c13xsmyk7UaHUWZ2rm1MM3ZdrQRSBkQ9waaG25ridVs"),
  poolTokenDecimals: 6,
  feeAccount: new PublicKey("BSoUBwfNgXSHX8QoZUnjfu8wWKyBmjNyDXwsgW3UEff9"),
  tokenIds: [Tokens.wustToken.mint.toString(), Tokens.solToken.mint.toString()],
  tokens: {
    [Tokens.wustToken.mint.toString()]: {
      ...Tokens.wustToken,
      addr: new PublicKey("3T7UL3ixF9S8XPjW7SEr9yYY8A5YWTDc7omgjKD2ULhb"),
    },
    [Tokens.solToken.mint.toString()]: {
      ...Tokens.solToken,
      addr: new PublicKey("91NfC8SunFRWF6BqEKnbnJCursfiDB2U3H6GGCqsFVxc"),
    },
  },
  curveType: CurveType.ConstantProduct,
  feeStructure: {
    traderFee: Percentage.fromFraction(25, 10000),
    ownerFee: Percentage.fromFraction(5, 10000),
  },
});

export const wustUsdcPool: OrcaPoolParams = Object.freeze({
  address: new PublicKey("Awp1hdAi5xi3CTDsXxiZsygSacpZV2a3L8rNNvpNRVn4"),
  nonce: 255,
  authority: new PublicKey("EtdLVaBnKzfKPqp8E2swCyQcjp8XjoT5FE72kqGxWCkq"),
  poolTokenMint: new PublicKey("J1KfRtP5y2warpD7LdJhfBLPKoWwSqYuovdArSv1mpQ7"),
  poolTokenDecimals: 6,
  feeAccount: new PublicKey("2onwniiH5fapr1EPsCDBnY92HGzoQpiHnNPWTmxngKbd"),
  tokenIds: [Tokens.wustToken.mint.toString(), Tokens.usdcToken.mint.toString()],
  tokens: {
    [Tokens.wustToken.mint.toString()]: {
      ...Tokens.wustToken,
      addr: new PublicKey("GZWYWkbZ63teAW3tUaThq7k4NMp67TqwF94TqAMRSPx4"),
    },
    [Tokens.usdcToken.mint.toString()]: {
      ...Tokens.usdcToken,
      addr: new PublicKey("DMuVdnkRsqP7v8exbrdHNn7WoViNLjf4PVanEQtwgFZ6"),
    },
  },
  curveType: CurveType.Stable,
  amp: 100,
  feeStructure: {
    traderFee: Percentage.fromFraction(6, 10000),
    ownerFee: Percentage.fromFraction(1, 10000),
  },
});

export const msolWustPool: OrcaPoolParams = Object.freeze({
  address: new PublicKey("BpiM8jnpbha2TnTKp4AogyLYYA99Ks73GfDGueUWLakT"),
  nonce: 255,
  authority: new PublicKey("DVSsnD9fid2o6nzqbET1LctDmNMHBthf8LS1u9ZPyebr"),
  poolTokenMint: new PublicKey("68YVjgPnTUPcBqZyghqvD2WPNsrLKsjYTmBKJzHRr4qd"),
  poolTokenDecimals: 6,
  feeAccount: new PublicKey("ETX7csSJYTMYFwLAC6oPDKXnYWdpkzsNXyG2JuxVV4tJ"),
  tokenIds: [Tokens.msolToken.mint.toString(), Tokens.wustToken.mint.toString()],
  tokens: {
    [Tokens.msolToken.mint.toString()]: {
      ...Tokens.msolToken,
      addr: new PublicKey("8SuMMuDbSGVpWjp3fW5kzpMWuMhxcdQwGgLJiviP25UD"),
    },
    [Tokens.wustToken.mint.toString()]: {
      ...Tokens.wustToken,
      addr: new PublicKey("FL5QM8K2AYrqN52ssqr9GA3goYGkUiXQQxXfFFc9xD4f"),
    },
  },
  curveType: CurveType.ConstantProduct,
  feeStructure: {
    traderFee: Percentage.fromFraction(25, 10000),
    ownerFee: Percentage.fromFraction(5, 10000),
  },
});

export const wlunaWustPool: OrcaPoolParams = Object.freeze({
  address: new PublicKey("C9NcP1mx51DLZVX8VtAk2Ldip5v6xCxZGmhx7Bxtqnz8"),
  nonce: 255,
  authority: new PublicKey("CAsASHduARHrb6pFFYrD9vcqXWhEEj7Z6AatKYVG3dbA"),
  poolTokenMint: new PublicKey("8Mh7drLbt3jFJYwp948XyvQscGLaLkChNcaH5wwaAoWA"),
  poolTokenDecimals: 6,
  feeAccount: new PublicKey("J43pVTNEB3AQEeXopMWTEozjPeMHBkwETXQWr4YZDzn3"),
  tokenIds: [Tokens.wlunaToken.mint.toString(), Tokens.wustToken.mint.toString()],
  tokens: {
    [Tokens.wlunaToken.mint.toString()]: {
      ...Tokens.wlunaToken,
      addr: new PublicKey("97aVH3M9cjZmfA5HVu9iJ9AnE41inBG1Sxqj8UQhR2jo"),
    },
    [Tokens.wustToken.mint.toString()]: {
      ...Tokens.wustToken,
      addr: new PublicKey("Av3RXECkvPCehJTJNbkWmUj3LmP63c4btzMYjbcYLkpm"),
    },
  },
  curveType: CurveType.ConstantProduct,
  feeStructure: {
    traderFee: Percentage.fromFraction(25, 10000),
    ownerFee: Percentage.fromFraction(5, 10000),
  },
});

export const stsolWustPool: OrcaPoolParams = Object.freeze({
  address: new PublicKey("9F3J6RY7PTkDb3SUUpg725uXyCceBGCpZrtmYGJwgMwF"),
  nonce: 253,
  authority: new PublicKey("wJydc21tAMxYDif8uvy5rWNGWDFNZnPPmqCvegyZRod"),
  poolTokenMint: new PublicKey("HTZd53fYwYQRyAjiaPsZy9Gf41gobFdqkF4oKe3XLi95"),
  poolTokenDecimals: 6,
  feeAccount: new PublicKey("5rCbmppxMBHwBjCkLUP6fireQ12cL8LRa26QRUimoxN6"),
  tokenIds: [Tokens.stsolToken.mint.toString(), Tokens.wustToken.mint.toString()],
  tokens: {
    [Tokens.stsolToken.mint.toString()]: {
      ...Tokens.stsolToken,
      addr: new PublicKey("GFso9SAGakm8ZFa3rmuonuerbcQ8ZbACNZN7idkKR5nw"),
    },
    [Tokens.wustToken.mint.toString()]: {
      ...Tokens.wustToken,
      addr: new PublicKey("EZ7pJskN2a4pDknrdkLzGDHpzjbfgdBj3Tt594K9HZbL"),
    },
  },
  curveType: CurveType.ConstantProduct,
  feeStructure: {
    traderFee: Percentage.fromFraction(25, 10000),
    ownerFee: Percentage.fromFraction(5, 10000),
  },
});

export const jsolUsdcPool: OrcaPoolParams = Object.freeze({
  address: new PublicKey("5pki97N9a6yEB3YQL3y8gvf4nSWnvEL9V6yms8Amnd9Z"),
  nonce: 255,
  authority: new PublicKey("BqBc47X3wgrVzi8zPUMUvsaKWsj6JN4wKJ4ArGRKn2QG"),
  poolTokenMint: new PublicKey("AzEoVuNJyo9ByoLRZ5t6vav2Zg24vULNVJM41PgCKUqR"),
  poolTokenDecimals: 6,
  feeAccount: new PublicKey("9Qkje8PCpu4LrGwpudcN3sunWLVP6ZP61zNupaPKNRnr"),
  tokenIds: [Tokens.jsolToken.mint.toString(), Tokens.usdcToken.mint.toString()],
  tokens: {
    [Tokens.jsolToken.mint.toString()]: {
      ...Tokens.jsolToken,
      addr: new PublicKey("D4Am1hMwzQqULAvmEjwJLDGwoyTgakRXrn7ayWHMhiB7"),
    },
    [Tokens.usdcToken.mint.toString()]: {
      ...Tokens.usdcToken,
      addr: new PublicKey("GznbQjBy2KKYYVLaJ6bM59GgekRsKT5QRi2NFMYNRcmf"),
    },
  },
  curveType: CurveType.ConstantProduct,
  feeStructure: {
    traderFee: Percentage.fromFraction(25, 10000),
    ownerFee: Percentage.fromFraction(5, 10000),
  },
});

export const daosolUsdcPool: OrcaPoolParams = Object.freeze({
  address: new PublicKey("6TwZgp6ABN7pbXbxvaZriHbbxeSAcEgxhKYnqGwphiRD"),
  nonce: 255,
  authority: new PublicKey("5jFXPUF5mN83WZkT5MJQFpFcZrP5zPZy1ZZwD29Le2Kh"),
  poolTokenMint: new PublicKey("CCyDxjdW3G7hPTthTMPTZ4bnhFF19XG6rx2fNiKeRQww"),
  poolTokenDecimals: 6,
  feeAccount: new PublicKey("JCnNHppa7kp9bRc3zfvfnwGqoVR8Li6sJT9pMztgwE9j"),
  tokenIds: [Tokens.daosolToken.mint.toString(), Tokens.usdcToken.mint.toString()],
  tokens: {
    [Tokens.daosolToken.mint.toString()]: {
      ...Tokens.daosolToken,
      addr: new PublicKey("EZf2tVoxVgGaBz6ir5iBppxiqFSqBUob2dNpiEuXMYiJ"),
    },
    [Tokens.usdcToken.mint.toString()]: {
      ...Tokens.usdcToken,
      addr: new PublicKey("3v29nJzrWebKv3DefSY5WVq4kgHWykF7fdYVaCpohwks"),
    },
  },
  curveType: CurveType.ConstantProduct,
  feeStructure: {
    traderFee: Percentage.fromFraction(25, 10000),
    ownerFee: Percentage.fromFraction(5, 10000),
  },
});

export const orcaUsdtPool: OrcaPoolParams = Object.freeze({
  address: new PublicKey("4YnaUPeZ2fYqpoLrCyprSai8LaDWZxmgb6cGfNHJmyP6"),
  nonce: 255,
  authority: new PublicKey("35d4qNQiMtNV9Yb2kqk4tSd5M1yEqozWSQaYtjGHCA7b"),
  poolTokenMint: new PublicKey("Gx4PoxenyQwhGGnKagAT35iVg4im1iKhJxDWqVhgu6tk"),
  poolTokenDecimals: 6,
  feeAccount: new PublicKey("ABuGLBFTwcbLsqNsiCpZsFuNmHYwHEzfQR9SNpr4y3bP"),
  tokenIds: [Tokens.orcaToken.mint.toString(), Tokens.usdtToken.mint.toString()],
  tokens: {
    [Tokens.orcaToken.mint.toString()]: {
      ...Tokens.orcaToken,
      addr: new PublicKey("D91z1TewbTQ3AVc9RThtTjiMVRqr94CP73XrsbHEhej8"),
    },
    [Tokens.usdtToken.mint.toString()]: {
      ...Tokens.usdtToken,
      addr: new PublicKey("Fy4AwXwAwitVdFwgWBdYkqRVv8QjigU86ssL6rqzgp8S"),
    },
  },
  curveType: CurveType.ConstantProduct,
  feeStructure: {
    traderFee: Percentage.fromFraction(25, 10000),
    ownerFee: Percentage.fromFraction(5, 10000),
  },
});

export const orcaWhethPool: OrcaPoolParams = Object.freeze({
  address: new PublicKey("D67u6UEuFp9Q4Fu2gnu5thxBoVj2eRgDDDirdWsMVsgm"),
  nonce: 255,
  authority: new PublicKey("4kwchkCnCaZPkBdnk85j9bJ9F1P883rwjbvsXGV7H5rM"),
  poolTokenMint: new PublicKey("GsfyYHkSgC3Ta6aWR9MjB2sxoBrkGGeR2tAwXbpphf3"),
  poolTokenDecimals: 6,
  feeAccount: new PublicKey("GdHXLai5M8FKedXUsECSzrV72nb1RTCCooFyTWT8WYmT"),
  tokenIds: [Tokens.orcaToken.mint.toString(), Tokens.whethToken.mint.toString()],
  tokens: {
    [Tokens.orcaToken.mint.toString()]: {
      ...Tokens.orcaToken,
      addr: new PublicKey("EMxDw1NjdddQjPk9gCUN4iDMy8HJ5siKYMVjGbjuUCrh"),
    },
    [Tokens.whethToken.mint.toString()]: {
      ...Tokens.whethToken,
      addr: new PublicKey("DQyhcuEvE1K9DSd51agcNLg4CDrgthnKMVhU7q6R55LV"),
    },
  },
  curveType: CurveType.ConstantProduct,
  feeStructure: {
    traderFee: Percentage.fromFraction(25, 10000),
    ownerFee: Percentage.fromFraction(5, 10000),
  },
});

export const geneUsdcPool: OrcaPoolParams = Object.freeze({
  address: new PublicKey("PQ1sBpkZYTkXo2aDRqWU2sEJGUj7yaeJ3GePoCRYU4V"),
  nonce: 253,
  authority: new PublicKey("DvbTrW3tUfdgBDU5TFxfXjBpGUYivQP8MiSA5YmXHZGF"),
  poolTokenMint: new PublicKey("7cuu94swKL5PtFQohKMAzyd1mjj65rgMW3GzLY31HCnK"),
  poolTokenDecimals: 6,
  feeAccount: new PublicKey("AsR18ERwBhmTkjNpav9NDWdeUzvmDH2TXCwfy2kinat"),
  tokenIds: [Tokens.geneToken.mint.toString(), Tokens.usdcToken.mint.toString()],
  tokens: {
    [Tokens.geneToken.mint.toString()]: {
      ...Tokens.geneToken,
      addr: new PublicKey("LiM9qAQi7ud4fCkAcGcJJzmY47od7vzzeqKBejATbJm"),
    },
    [Tokens.usdcToken.mint.toString()]: {
      ...Tokens.usdcToken,
      addr: new PublicKey("APQyCmCvyVFreK2JjFHinmja24jTHdwm4umNJo67Nu2v"),
    },
  },
  curveType: CurveType.ConstantProduct,
  feeStructure: {
    traderFee: Percentage.fromFraction(25, 10000),
    ownerFee: Percentage.fromFraction(5, 10000),
  },
});

export const cmfiUsdcPool: OrcaPoolParams = Object.freeze({
  address: new PublicKey("AaJERSYSMtWxhRqZzBZ9JFr1gJkfSPgPEd3mBDT2AknQ"),
  nonce: 255,
  authority: new PublicKey("ERMNbmKrBKk3e8ZBbVWNUTkrqamZYxnRFXvgsPUSLT5j"),
  poolTokenMint: new PublicKey("85krvT9DxdYgoFLQDHTAGdvtNuLdAsc4xE5FkVLpN2aR"),
  poolTokenDecimals: 6,
  feeAccount: new PublicKey("3HXU5ABkghqJ3iMEGWsGe88kvZtiEyDJ24ihgFTytRNx"),
  tokenIds: [Tokens.cmfiToken.mint.toString(), Tokens.usdcToken.mint.toString()],
  tokens: {
    [Tokens.cmfiToken.mint.toString()]: {
      ...Tokens.cmfiToken,
      addr: new PublicKey("HEqNExFgmyZ4Es53pL2bfBi5pKcZwGzbvwm1UknYLD9s"),
    },
    [Tokens.usdcToken.mint.toString()]: {
      ...Tokens.usdcToken,
      addr: new PublicKey("GbK7B7ZGQNZYrEhADC8aV5HdPhYgMZ35f6c8Decie224"),
    },
  },
  curveType: CurveType.ConstantProduct,
  feeStructure: {
    traderFee: Percentage.fromFraction(25, 10000),
    ownerFee: Percentage.fromFraction(5, 10000),
  },
});

export const acceloUsdcPool: OrcaPoolParams = Object.freeze({
  address: new PublicKey("H2bkwBwizcotpWHbruYFKXfHvh29hhoZn52qHq2YZumW"),
  nonce: 254,
  authority: new PublicKey("E812K73QyqSsGBeU3MLodqVs3gCKJjka4p4gP34hXtns"),
  poolTokenMint: new PublicKey("HVLyX8mD8YvKgZJ4oB6rXJiCYMLpHKwB6iCiCjE1XwdT"),
  poolTokenDecimals: 6,
  feeAccount: new PublicKey("35HW4HcFDzVnVsxBhPKptYfwX3HyJWEosv5T9sdBSu8t"),
  tokenIds: [Tokens.acceloToken.mint.toString(), Tokens.usdcToken.mint.toString()],
  tokens: {
    [Tokens.acceloToken.mint.toString()]: {
      ...Tokens.acceloToken,
      addr: new PublicKey("H6tFXr3BnF3r21Sv2ykLSbiE7wLxWpDcXroyxBReoXou"),
    },
    [Tokens.usdcToken.mint.toString()]: {
      ...Tokens.usdcToken,
      addr: new PublicKey("GnKnjXsmZKVhduVyLiR9Ngsxwo8spfxtruiPtqDqHLNJ"),
    },
  },
  curveType: CurveType.ConstantProduct,
  feeStructure: {
    traderFee: Percentage.fromFraction(25, 10000),
    ownerFee: Percentage.fromFraction(5, 10000),
  },
});

export const afftmUsdcPool: OrcaPoolParams = Object.freeze({
  address: new PublicKey("4RCU8SoBzvYysNaQBAFpQMmt7LPQgxbto9uiuRjAJPpq"),
  nonce: 255,
  authority: new PublicKey("HC6aGC7RsgVGonWs1MVy5Qit5R5ruEXZmeywpFwSCmdY"),
  poolTokenMint: new PublicKey("Gpzd833qSmv3kXpQmxEaqkrZTXZaRjhNAoqhf61qAhTG"),
  poolTokenDecimals: 6,
  feeAccount: new PublicKey("2cA9XLcSFJ9jgnYViJr5JtnhSpGNrPhebS4RaGm7DHmu"),
  tokenIds: [Tokens.afftmToken.mint.toString(), Tokens.usdcToken.mint.toString()],
  tokens: {
    [Tokens.afftmToken.mint.toString()]: {
      ...Tokens.afftmToken,
      addr: new PublicKey("EULHGNmuJWcRHm5Xen9CiG4uqVZoemLorLvAQ7vR9vCi"),
    },
    [Tokens.usdcToken.mint.toString()]: {
      ...Tokens.usdcToken,
      addr: new PublicKey("71rJZyRkxxupdqZeLrNQnHjus11C1yEVwsrKgQax6TSx"),
    },
  },
  curveType: CurveType.ConstantProduct,
  feeStructure: {
    traderFee: Percentage.fromFraction(25, 10000),
    ownerFee: Percentage.fromFraction(5, 10000),
  },
});

export const btcOrcaPool: OrcaPoolParams = Object.freeze({
  address: new PublicKey("CqXRyZ23dFwdbMLGEQLhQQRJrzkFB3wBsuH92rp7d3yw"),
  nonce: 255,
  authority: new PublicKey("Fixb6XBzoSRJ4iCkHNX3xbr61yWXUh6SYyu5Jweg36VF"),
  poolTokenMint: new PublicKey("DFpLFcQZqDKykyDePgip4r6MExVmBKWqTa12ezq6qxUY"),
  poolTokenDecimals: 6,
  feeAccount: new PublicKey("47pxL1vidAiARAF45SoVnpqSet8EPckF9pB4d9zT1S3N"),
  tokenIds: [Tokens.btcToken.mint.toString(), Tokens.orcaToken.mint.toString()],
  tokens: {
    [Tokens.btcToken.mint.toString()]: {
      ...Tokens.btcToken,
      addr: new PublicKey("8dbqoSTALCCshdKXX8Nb6AskytydXtHLyPoqu9Nb2ig3"),
    },
    [Tokens.orcaToken.mint.toString()]: {
      ...Tokens.orcaToken,
      addr: new PublicKey("7UAHjQQjYBrSKdtgbJK1SaUVgmBxcmMJKshvEiEhLheP"),
    },
  },
  curveType: CurveType.ConstantProduct,
  feeStructure: {
    traderFee: Percentage.fromFraction(25, 10000),
    ownerFee: Percentage.fromFraction(5, 10000),
  },
});

export const hbbUsdcPool: OrcaPoolParams = Object.freeze({
  address: new PublicKey("Fpwa7a1r7kjax1nW25TVP3uiQc7XH9dv9n9UXMJRSTEx"),
  nonce: 254,
  authority: new PublicKey("9odZioXkQTCZERzQXbDTfirMfbP9FtKqsP9LvHgm6wJr"),
  poolTokenMint: new PublicKey("cL5WhffCYFRLM4We8VS2W684kM4pHyuvEDwp8Ddw48k"),
  poolTokenDecimals: 6,
  feeAccount: new PublicKey("3nyqxtRPnYrwEHneWgbN1197aZoEaemnSNQ7rgJLv8hS"),
  tokenIds: [Tokens.hbbToken.mint.toString(), Tokens.usdcToken.mint.toString()],
  tokens: {
    [Tokens.hbbToken.mint.toString()]: {
      ...Tokens.hbbToken,
      addr: new PublicKey("2vq1vt98xBPUmvbTC5nH4GtsjJVeA64kwv6CZc7xSAf6"),
    },
    [Tokens.usdcToken.mint.toString()]: {
      ...Tokens.usdcToken,
      addr: new PublicKey("B7f4A1Pp6RCjWYv5Lsrf4MecmZQDMekXh4MFQasCQuRB"),
    },
  },
  curveType: CurveType.ConstantProduct,
  feeStructure: {
    traderFee: Percentage.fromFraction(25, 10000),
    ownerFee: Percentage.fromFraction(5, 10000),
  },
});

export const hbbSolPool: OrcaPoolParams = Object.freeze({
  address: new PublicKey("2aCJ1VTwfvLej1PJJAmiVCzuLGtjQ5bEo9DYkbwwe1C6"),
  nonce: 255,
  authority: new PublicKey("8GRweHBrpXfeYpmryfkvEsW3DmoJKGDQLpcVfeNUqn8x"),
  poolTokenMint: new PublicKey("FkKzu2HeMJZf4oHwoYPxLGVy3net5Jq8HAfnA5VqETgk"),
  poolTokenDecimals: 6,
  feeAccount: new PublicKey("2Y1xXr1j6xg5r5Qz8LDqnU7N8T4GGu3Ju4AHGsfU2nXS"),
  tokenIds: [Tokens.hbbToken.mint.toString(), Tokens.solToken.mint.toString()],
  tokens: {
    [Tokens.hbbToken.mint.toString()]: {
      ...Tokens.hbbToken,
      addr: new PublicKey("5k1Nj2TvG51p7s2ambWpmX6FraiSchoYS1wJgVw5f9Af"),
    },
    [Tokens.solToken.mint.toString()]: {
      ...Tokens.solToken,
      addr: new PublicKey("2s2vbHk4XzKQ9SQdPRyirY8JmBemhZ67EBx7xgF6tzq5"),
    },
  },
  curveType: CurveType.ConstantProduct,
  feeStructure: {
    traderFee: Percentage.fromFraction(25, 10000),
    ownerFee: Percentage.fromFraction(5, 10000),
  },
});

export const sbUsdcPool: OrcaPoolParams = Object.freeze({
  address: new PublicKey("GPxcR4ci8RbLh4bVPi88mKwTEDeVxEKs3nBkKayghuuL"),
  nonce: 255,
  authority: new PublicKey("6poTLvmbRU9FAJAnM5RmXMRTVFf2xWRKooCkStZQJf6U"),
  poolTokenMint: new PublicKey("2Reqt4Sw9xNY8BoJ3EZLpFu5yVgNxFrbw8M3KiJpPn6o"),
  poolTokenDecimals: 6,
  feeAccount: new PublicKey("EVRpMUxUGZGH15SB1hGhLzzz15XNopLZjSuTZSpcwMmt"),
  tokenIds: [Tokens.sbToken.mint.toString(), Tokens.usdcToken.mint.toString()],
  tokens: {
    [Tokens.sbToken.mint.toString()]: {
      ...Tokens.sbToken,
      addr: new PublicKey("EoV9ub5aojyBFdYGhPQPQ6cDeesgsENrNYGN6L8CB6Nh"),
    },
    [Tokens.usdcToken.mint.toString()]: {
      ...Tokens.usdcToken,
      addr: new PublicKey("7kRmDjSorwKqqLAFupgGW8fEp6hywkt2bntw2gCrV5Sh"),
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
  Dkr8B675PGnNwEr9vTKXznjjHke5454EQdz3iaSbparB: scnsolUsdcPool,
  C2YzN6MymD5HM2kPaH7bzcbqciyjfmpqyVaR3KA5V6z1: psolUsdcPool,
  "29cdoMgu6MS2VXpcMo1sqRdWEzdUR9tjvoh8fcK8Z87R": msolSolPool,
  C7TH2jEJJaxVwwuvkbcDGfHUiZvEkkeYjyAcdTMi5ujb: orcaPaiPool,
  CVapmQn7HaU1yMDW3q6oUV4hx6XoYv54T4zfGXkuJqkA: orcaMsolPool,
  APNpzQvR91v1THbsAyG3HHrUEwvexWYeNCFLQuVnxgMc: scnsolSolPool,
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
  "9cMWe4UYRPGAUUsTkjShJWVM7bk8DUBgxtwwH8asFJoV": msolUsdtPool,
  "5qoTq3qC4U7vFxo3iCzbXcaD1UEmDeCD63Dsuoct71oV": msolWhethPool,
  "8nKJ4z9FSw6wrVZKASqBiS9DS1CiNsRnqwCCKVQjqdkB": btcMsolPool,
  DfgCnzaiTXfPkAH1C1Z441b5MzjjTCEh134ioxqRZxYf: ivnSolPool,
  "8sfThep3io4gvcGeuoAg1Rs8GDwKJjtcdAFHqQSSNAVE": larixUsdcPool,
  "6jCERp5hKj37PCXP3VTjCDJeoPuSpnMDMz5A6jWQv3yS": prtUsdcPool,
  GBijunwxa4Ni3JmYC6q6zgaVhSUJU6hVX5qTyJDRpNTc: jetUsdcPool,
  GtQ1NT7R5aaTiST7K6ZWdMhwDdFxsSFvVFhBo8vyHGAq: stsolUsdcPool,
  "5a6Y1ephcbKSoyLMQyD1JWbtqawCy8p2FtRL9v3zhaG5": wstethUsdcPool,
  "6mJqqT5TMgveDvxzBt3hrjGkPV5VAj7tacxFCT3GebXh": auryUsdcPool,
  Hmfrtmo93DpSDmVNLQKcBS5D1ia5JatiRSok9ososubz: avaxUsdcPool,
  FwCombynV2fTVizxPCNA2oZKoWXLZgdJThjE4Xv9sjxc: fttUsdcPool,
  "4cXw2MYj94TFBXLL73fEpMCr8DPrW68JvrV8mzWgktbD": rayUsdcPool,
  F59gkD7NnsdJbFKrRZsiBC8PAooN4c56T8QmahfW1iXN: slndUsdcPool,
  "7vnps4VE5RTGAr5fmPZu7fSrk2VnM4Up838grZfqmxqE": gofxUsdcPool,
  "9EjcYfHcG8f1mccpHyaAwpoxaUPiheC6KgLQjyD9aTb6": woofUsdcPool,
  CHTKUJGYRtBDqnxCFjxe5KEkZgxV98udbhuYYyzGxup5: sdogeUsdcPool,
  "55r9txzQtmjTykmTXmBYZCVMg5z9squB8b5cSw2AhxA4": catoUsdcPool,
  DSiHyHDn96bUQSZtizyCRLcQzrwohZeMpVu8rYJN1HzG: oogiUsdcPool,
  "5MvQHx8eftU39JTucFsT315JFnQASuDQg3FqxTw7xcvN": sonarUsdcPool,
  HNrYngS1eoqkjWro9D3Y5Z9sWBDzPNK2tX4rfV2Up177: aptUsdcPool,
  AWrtTWG4Zgxw8D92bb3L3sQtGLD3zDztMPWsXSph8iBP: dflUsdcPool,
  "9Y1vPaAsMz8X65DebMMnmBjbMo8i4jh4mcgiggZUUS3M": dflSolPool,
  FnDxJPNk7pPmGHUbR4XUHmHevrkXHdna5D3sQKcAtjBL: frktUsdcPool,
  FGgP1npQTsC5Q4xBmQtNYSh51NKqNwdxBZy8JCo3igcu: tttUsdcPool,
  E1U63VXhNiWoUkVvjrfLDdV1oJrwE6zLde3bohr6jCqz: upsUsdcPool,
  GjG7JjTQfQpDxw4hWx4etP9oTaYCuCbPjsU8WaUT3xHB: fantUsdcPool,
  D8WjqtwC9CzBrQKfSf2ccCHFQuPYwyLv5KAy8WjT5vnf: blockUsdcPool,
  "34Ppq6R8NfYBwWwPY4cBK4Afyb8hHaASQFukCzH6cV4n": runUsdcPool,
  HjR8JgqNKQVMvdryqJw5RJ4PCE9WGk8sgbEF7S9S3obv: uxpUsdcPool,
  J3kvcay3N16FBdawgnqoJ9v9p6XCvyCLE2Z9F5RLvGkj: btcUsdcPool,
  "12Uj74zgUUoBe4yeackwQ4qYtFMr9fk1xL6q5Nha6t2N": mndeUsdcPool,
  "71CBZeJ4tw38L9pSPoCz4fRsuWE64Fipyzotte7haoCS": chicksUsdcPool,
  "6MF5CHWAj5mS7FhpxiKz37CzR2eYTu236XpBKKMXCrGg": onesolUsdcPool,
  HDgxKmiA8Pv82fNguhVeMkZqQkos2YksFPoP1KttWxX8: wmpUsdcPool,
  "2VuGzaMrDnDyZfYvDwSXk38s7M2wpud7LDY3dGA1J9sy": unqUsdcPool,
  GoaAiajubRgeCFEz9L6mLnSmT2QFegoJDH5tpLfivpj: basisUsdcPool,
  E6FUnQHGHJVJg7oExVr5Moeaj1QpdpZQF5odYjHXWPZb: gstUsdcPool,
  F5BTnwuMA6rxftTdbZ33VWKr2wrr6DuQHnd4guKmPSYQ: meanUsdcPool,
  HCtyJzFUtYecXrA52s4Y9atq4J1fhT3cYsTX17XVSFag: aartUsdcPool,
  DJqqvzSuPaWThfzwMjXx7H2ZmHDdwxza6NtFudtuXcpc: shdwUsdcPool,
  "2ws7g3LBPdctfKn42Di9qxzQtUJ8ZL1aEAX2rGEQMNqh": shdwSolPool,
  "99ZHUQsgxL7K6PHrGNi1gSwawwPr7UA5fbWrYoHQ6qhX": scyUsdcPool,
  E5kSBqTDxFLbLNQaVVtPtnhEYVLMCK2fVSEKoMKL98qR: slcUsdcPool,
  "6c13xsmyk7UaHUWZ2rm1MM3ZdrQRSBkQ9waaG25ridVs": wustSolPool,
  J1KfRtP5y2warpD7LdJhfBLPKoWwSqYuovdArSv1mpQ7: wustUsdcPool,
  "68YVjgPnTUPcBqZyghqvD2WPNsrLKsjYTmBKJzHRr4qd": msolWustPool,
  "8Mh7drLbt3jFJYwp948XyvQscGLaLkChNcaH5wwaAoWA": wlunaWustPool,
  HTZd53fYwYQRyAjiaPsZy9Gf41gobFdqkF4oKe3XLi95: stsolWustPool,
  AzEoVuNJyo9ByoLRZ5t6vav2Zg24vULNVJM41PgCKUqR: jsolUsdcPool,
  CCyDxjdW3G7hPTthTMPTZ4bnhFF19XG6rx2fNiKeRQww: daosolUsdcPool,
  Gx4PoxenyQwhGGnKagAT35iVg4im1iKhJxDWqVhgu6tk: orcaUsdtPool,
  GsfyYHkSgC3Ta6aWR9MjB2sxoBrkGGeR2tAwXbpphf3: orcaWhethPool,
  "7cuu94swKL5PtFQohKMAzyd1mjj65rgMW3GzLY31HCnK": geneUsdcPool,
  "85krvT9DxdYgoFLQDHTAGdvtNuLdAsc4xE5FkVLpN2aR": cmfiUsdcPool,
  HVLyX8mD8YvKgZJ4oB6rXJiCYMLpHKwB6iCiCjE1XwdT: acceloUsdcPool,
  Gpzd833qSmv3kXpQmxEaqkrZTXZaRjhNAoqhf61qAhTG: afftmUsdcPool,
  DFpLFcQZqDKykyDePgip4r6MExVmBKWqTa12ezq6qxUY: btcOrcaPool,
  cL5WhffCYFRLM4We8VS2W684kM4pHyuvEDwp8Ddw48k: hbbUsdcPool,
  FkKzu2HeMJZf4oHwoYPxLGVy3net5Jq8HAfnA5VqETgk: hbbSolPool,
  "2Reqt4Sw9xNY8BoJ3EZLpFu5yVgNxFrbw8M3KiJpPn6o": sbUsdcPool,
};
