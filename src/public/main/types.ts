import { OrcaPool, OrcaPoolConfig } from "..";

export type Orca = {
  /**
   * Get an instance of an Orca pool.
   * @param pool a pool config targeting an Orca pool
   */
  getPool: (pool: OrcaPoolConfig) => OrcaPool;
};
