import { Connection, PublicKey } from "@solana/web3.js";
import { u64 } from "@solana/spl-token";
import Decimal from "decimal.js";
import { OrcaPoolConfig, OrcaPool, Quote } from "..";
import { defaultSlippagePercentage } from "../constants/orca-defaults";
import { orcaPoolConfigs } from "../constants/pools";
import { deserializeAccount } from "../utils/web3/deserialize-account";
import { findAssociatedTokenAddress } from "../utils/web3/find-associated-token-address";
import {
  getTokens,
  PoolTokenCount,
  getTokenCount,
} from "../utils/web3/get-token-count";
import { OrcaPoolParams } from "./orca/orca-types";
import { QuotePoolParams, QuoteBuilderFactory } from "./quote/quote-builder";
import { DecimalUtil } from "../utils/decimal-utils";
import { PercentageUtils } from "./utils/percentage";

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

  public getTokenAId(): string {
    return this.poolParams.tokenIds[0];
  }

  public getTokenBId(): string {
    return this.poolParams.tokenIds[1];
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

    return DecimalUtil.fromU64(
      result.amount,
      this.poolParams.poolTokenDecimals
    ).toNumber();
  }

  public async getLPSupply(): Promise<number> {
    const context = await this.connection.getTokenSupply(
      this.poolParams.poolTokenMint
    );

    const amt = new u64(context.value.amount);

    return DecimalUtil.fromU64(
      amt,
      this.poolParams.poolTokenDecimals
    ).toNumber();
  }

  public async getQuote(
    inputTokenId: string,
    inputAmount: Decimal,
    slippage?: number
  ): Promise<Quote> {
    const slippageTolerance =
      slippage === undefined
        ? defaultSlippagePercentage
        : PercentageUtils.fromNumber(slippage);

    const feeStructure = this.poolParams.feeStructure;

    const [inputPoolToken, outputPoolToken] = getTokens(
      this.poolParams,
      inputTokenId
    );

    const poolTokenCount: PoolTokenCount = await getTokenCount(
      this.connection,
      this.poolParams,
      inputPoolToken,
      outputPoolToken
    );

    const quoteParams: QuotePoolParams = {
      ...poolTokenCount,
      inputToken: inputPoolToken,
      outputToken: outputPoolToken,
      feeStructure: feeStructure,
      slippageTolerance: slippageTolerance,
    };

    const quoteBuilder = QuoteBuilderFactory.getBuilder(
      this.poolParams.curveType
    );

    const quote = quoteBuilder?.buildQuote(
      quoteParams,
      DecimalUtil.toU64(inputAmount, inputPoolToken.decimals)
    );

    if (quote == undefined) {
      throw new Error("Failed to get quote!");
    }

    return quote;
  }
}
