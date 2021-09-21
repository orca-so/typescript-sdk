import { Connection } from "@solana/web3.js";
import { Orca, OrcaFarm, OrcaPool, OrcaPoolConfig, OrcaFarmConfig } from "../../public";
import { OrcaFactory } from "../orca-factory";

export class OrcaImpl implements Orca {
  private connection: Connection;
  private factory: OrcaFactory;

  constructor(connection: Connection) {
    this.connection = connection;
    this.factory = new OrcaFactory();
  }

  getPool(pool: OrcaPoolConfig): OrcaPool {
    return this.factory.getPool(this.connection, pool);
  }

  getFarm(farm: OrcaFarmConfig): OrcaFarm {
    return this.factory.getFarm(this.connection, farm);
  }
}
