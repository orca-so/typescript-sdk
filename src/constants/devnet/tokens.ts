import { PublicKey } from "@solana/web3.js";
import { OrcaToken } from "../..";

/**
 * The following content is auto-generated.
 */

export const ethToken: OrcaToken = Object.freeze({
  tag: "ETH",
  name: "Ethereum",
  mint: new PublicKey("Ff5JqsAYUD4vAfQUtfRprT4nXu9e28tTBZTDFMnJNdvd"),
  scale: 9,
});

export const orcaToken: OrcaToken = Object.freeze({
  tag: "ORCA",
  name: "Orca",
  mint: new PublicKey("orcarKHSqC5CDDsGbho8GKvwExejWHxTqGzXgcewB9L"),
  scale: 6,
});

export const solToken: OrcaToken = Object.freeze({
  tag: "SOL",
  name: "Solana",
  mint: new PublicKey("So11111111111111111111111111111111111111112"),
  scale: 9,
});

export const usdcToken: OrcaToken = Object.freeze({
  tag: "USDC",
  name: "USD Coin",
  mint: new PublicKey("EmXq3Ni9gfudTiyNKzzYvpnQqnJEMRw2ttnVXoJXjLo1"),
  scale: 6,
});

export const usdtToken: OrcaToken = Object.freeze({
  tag: "USDT",
  name: "Tether USD",
  mint: new PublicKey("6PE3Mwjzx9h8kCoBp5YPed9TFoG7du8L98yucBP5ps3x"),
  scale: 6,
});
