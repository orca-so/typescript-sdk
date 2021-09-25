import { Connection } from "@solana/web3.js";
import { OrcaPoolConfig, OrcaPool, OrcaFarmConfig, OrcaFarm } from "..";
import { orcaPoolConfigs, orcaFarmConfigs } from "../constants";
import { OrcaFarmImpl } from "./orca/farm/orca-farm";
import { OrcaPoolImpl } from "./orca/pool/orca-pool";

export class OrcaFactory {
  getPool(connection: Connection, config: OrcaPoolConfig): OrcaPool {
    return new OrcaPoolImpl(connection, orcaPoolConfigs[config]);
  }

  getFarm(connection: Connection, config: OrcaFarmConfig): OrcaFarm {
    return new OrcaFarmImpl(connection, orcaFarmConfigs[config]);
  }
}
