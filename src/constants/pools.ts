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
};
