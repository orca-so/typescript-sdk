import { Connection } from '@solana/web3.js'
import { OrcaPoolFactory } from './orca-pool'
import { OrcaPoolConfig } from '../public/pools'
import { Orca, OrcaPool } from '../public/types'

export class OrcaImpl implements Orca {

    private connection: Connection;
    private poolFactory: OrcaPoolFactory;

    constructor(connection: Connection) {
        this.connection = connection
        this.poolFactory = new OrcaPoolFactory()
    }

    getPool(pool: OrcaPoolConfig): OrcaPool {
        return this.poolFactory.getPool(this.connection, pool)
    }
}
