import { OrcaPoolConfig, OrcaFarmConfig } from "..";
import { OrcaFarmConfig as OrcaDevnetFarmConfig } from "./farms/config";
import { OrcaPoolConfig as OrcaDevnetPoolConfig } from "./pools/config";

export function getDevnetPool(config: OrcaPoolConfig): OrcaDevnetPoolConfig {
  const entry = Object.entries(OrcaPoolConfig).find((arr) => arr[1] === config);
  if (!entry) {
    throw new Error("Invalid OrcaPoolConfig");
  }

  const key = entry[0];
  if (!isOrcaDevnetPoolConfig(key)) {
    throw new Error(`${key} does not exist in devnet`);
  }

  return OrcaDevnetPoolConfig[key];
}

export function getDevnetFarm(config: OrcaFarmConfig): OrcaDevnetFarmConfig {
  const entry = Object.entries(OrcaFarmConfig).find((arr) => arr[1] === config);
  if (!entry) {
    throw new Error("Invalid OrcaFarmConfig");
  }

  const key = entry[0];
  if (!isOrcaDevnetFarmConfig(key)) {
    throw new Error(`${key} does not exist in devnet`);
  }

  return OrcaDevnetFarmConfig[key];
}

/*** Type guards ***/

function isOrcaDevnetPoolConfig(key: string): key is keyof typeof OrcaDevnetPoolConfig {
  return OrcaDevnetPoolConfig[key as keyof typeof OrcaDevnetPoolConfig] !== undefined;
}

function isOrcaDevnetFarmConfig(key: string): key is keyof typeof OrcaDevnetFarmConfig {
  return OrcaDevnetFarmConfig[key as keyof typeof OrcaDevnetFarmConfig] !== undefined;
}
