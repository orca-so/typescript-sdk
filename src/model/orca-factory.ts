import { Connection } from "@solana/web3.js";
import { OrcaPoolConfig, OrcaPool, OrcaFarmConfig, OrcaFarm, Network } from "..";
import { orcaPoolConfigs, orcaFarmConfigs } from "../constants";
import { orcaDevnetFarmConfigs, orcaDevnetPoolConfigs } from "../constants/devnet";
import { getDevnetFarm, getDevnetPool } from "../public/devnet";
import { OrcaFarmImpl } from "./orca/farm/orca-farm";
import { OrcaPoolImpl } from "./orca/pool/orca-pool";

export class OrcaFactory {
  getPool(connection: Connection, network: Network, config: OrcaPoolConfig): OrcaPool {
    if (network === Network.DEVNET) {
      const devnetConfig = getDevnetPool(config);
      return new OrcaPoolImpl(connection, network, orcaDevnetPoolConfigs[devnetConfig]);
    }

    return new OrcaPoolImpl(connection, network, orcaPoolConfigs[config]);
  }

  getFarm(connection: Connection, network: Network, config: OrcaFarmConfig): OrcaFarm {
    if (network === Network.DEVNET) {
      const devnetConfig = getDevnetFarm(config);
      return new OrcaFarmImpl(connection, orcaDevnetFarmConfigs[devnetConfig]);
    }

    return new OrcaFarmImpl(connection, orcaFarmConfigs[config]);
  }
}
