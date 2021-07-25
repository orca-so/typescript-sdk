import { Connection } from "@solana/web3.js";
import { OrcaPoolConfig, OrcaPool } from "../..";
import { Orca } from "../../public";
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
}
