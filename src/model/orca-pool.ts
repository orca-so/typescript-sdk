import { Connection, PublicKey } from "@solana/web3.js";

import { OrcaPool } from "../public/types";
import { OrcaPoolConfig } from "../public/pools";
import { OrcaPoolParams } from "./types";
import { orcaPoolConfigs } from "./pools";
import { findAssociatedTokenAddress } from "../utils/find-associated-token-address";
import { deserializeAccount } from "../utils/deserialize-account";
import { shiftByDecimal } from "../utils/decimal-utils";
import { u64 } from "@solana/spl-token";

export class OrcaPoolFactory {
  getPool(connection: Connection, config: OrcaPoolConfig): OrcaPool {
    return new OrcaPoolImpl(connection, orcaPoolConfigs[config]);
  }
}

class OrcaPoolImpl implements OrcaPool {
  private connection: Connection;
  private poolParams: OrcaPoolParams;

  constructor(connection: Connection, config: OrcaPoolParams) {
    this.connection = connection;
    this.poolParams = config;
  }

  public async getLPBalance(user: PublicKey): Promise<number> {
    const address = await findAssociatedTokenAddress(
      user,
      this.poolParams.poolTokenMint
    );

    // TODO: SOL account handling

    const accountInfo = await this.connection.getAccountInfo(address);

    // User does not have a balance for this account
    if (accountInfo == undefined) {
      return 0;
    }

    const result = deserializeAccount(accountInfo?.data);
    if (result == undefined) {
      throw new Error("Failed to parse user account for LP token.");
    }

    return shiftByDecimal(
      result.amount,
      this.poolParams.poolTokenDecimals
    ).toNumber();
  }

  public async getLPSupply(): Promise<number> {
    const context = await this.connection.getTokenSupply(
      this.poolParams.poolTokenMint
    );
    const amt = new u64(context.value.amount);
    return shiftByDecimal(amt, this.poolParams.poolTokenDecimals).toNumber();
  }
}
