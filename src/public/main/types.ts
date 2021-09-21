import { OrcaFarm, OrcaPool, OrcaPoolConfig, OrcaFarmConfig } from "..";

export type Orca = {
  /**
   * Get an instance of an Orca pool.
   * @param pool a pool config targeting an Orca pool
   */
  getPool: (pool: OrcaPoolConfig) => OrcaPool;

  /**
   * Get an instance of an Orca farm.
   * @param farm a farm config targeting an Orca farm
   */
  getFarm: (farm: OrcaFarmConfig) => OrcaFarm;
};
