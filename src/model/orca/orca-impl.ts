import { Connection } from "@solana/web3.js";
import { Orca, OrcaFarm, OrcaPool, OrcaPoolConfig, OrcaFarmConfig, Network } from "../../public";
import { OrcaFactory } from "../orca-factory";

export class OrcaImpl implements Orca {
  private connection: Connection;
  private network: Network;
  private factory: OrcaFactory;

  constructor(connection: Connection, network: Network) {
    this.connection = connection;
    this.network = network;
    this.factory = new OrcaFactory();
  }

  getPool(pool: OrcaPoolConfig): OrcaPool {
    return this.factory.getPool(this.connection, this.network, pool);
  }

  getFarm(farm: OrcaFarmConfig): OrcaFarm {
    return this.factory.getFarm(this.connection, this.network, farm);
  }
}
