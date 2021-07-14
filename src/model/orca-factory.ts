import { Connection } from "@solana/web3.js";
import { OrcaPoolConfig, OrcaPool } from "..";
import { orcaPoolConfigs } from "../constants/pools";
import { OrcaPoolImpl } from "./orca-pool";

export class OrcaFactory {
  getPool(connection: Connection, config: OrcaPoolConfig): OrcaPool {
    return new OrcaPoolImpl(connection, orcaPoolConfigs[config]);
  }
}
