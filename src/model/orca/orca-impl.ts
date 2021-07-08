import { Connection } from "@solana/web3.js";
import { OrcaPoolConfig } from "../../public/pools";
import { Orca, OrcaPool } from "../../public/types";
import { OrcaPoolFactory } from "../orca-pool";

export class OrcaImpl implements Orca {
  private connection: Connection;
  private poolFactory: OrcaPoolFactory;

  constructor(connection: Connection) {
    this.connection = connection;
    this.poolFactory = new OrcaPoolFactory();
  }

  getPool(pool: OrcaPoolConfig): OrcaPool {
    return this.poolFactory.getPool(this.connection, pool);
  }
}
