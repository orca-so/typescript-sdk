import { TOKEN_PROGRAM_ID, u64 } from "@solana/spl-token";
import { Connection, PublicKey } from "@solana/web3.js";
import Decimal from "decimal.js";
import { DecimalUtil, OrcaU64, SPL_ASSOCIATED_TOKEN_ACCOUNT_PROGRAM_ID, U64Utils } from "..";
import { OrcaPoolToken, TokenInAmount } from "../..";
import { solToken } from "../../../constants/tokens";
import { OrcaPoolParams } from "../../../model/orca/pool/pool-types";
import { deserializeAccount } from "./deserialize-account";

export type PoolTokenCount = {
  inputTokenCount: u64;
  outputTokenCount: u64;
};

export async function getTokenCount(
  connection: Connection,
  poolParams: OrcaPoolParams,
  inputPoolToken: OrcaPoolToken,
  outputPoolToken: OrcaPoolToken
): Promise<PoolTokenCount> {
  if (poolParams.tokens[inputPoolToken.mint.toString()] == undefined) {
    throw new Error("Input token not part of pool");
  }

  if (poolParams.tokens[outputPoolToken.mint.toString()] == undefined) {
    throw new Error("Output token not part of pool");
  }

  // TODO: Batch request?
  const accountInfos = await Promise.all([
    connection.getAccountInfo(inputPoolToken.addr),
    connection.getAccountInfo(outputPoolToken.addr),
  ]);

  const tokens = accountInfos.map((info) =>
    info != undefined ? deserializeAccount(info.data) : undefined
  );
  const inputTokenAccount = tokens[0],
    outputTokenAccount = tokens[1];

  if (inputTokenAccount === undefined || outputTokenAccount === undefined) {
    throw new Error("Unable to fetch accounts for specified tokens.");
  }

  return {
    inputTokenCount: new u64(inputTokenAccount.amount),
    outputTokenCount: new u64(outputTokenAccount.amount),
  };
}

async function getUserTokenCount(
  connection: Connection,
  ownerPublicKey: PublicKey,
  tokenMint: PublicKey
): Promise<Decimal> {
  // Special case: SOL doesn't have ATA
  if (tokenMint === solToken.mint) {
    const balance = await connection.getBalance(ownerPublicKey);
    return DecimalUtil.fromU64(new u64(balance), solToken.scale);
  }

  const ownerATAPublicKey = (
    await PublicKey.findProgramAddress(
      [ownerPublicKey.toBuffer(), TOKEN_PROGRAM_ID.toBuffer(), tokenMint.toBuffer()],
      SPL_ASSOCIATED_TOKEN_ACCOUNT_PROGRAM_ID
    )
  )[0];
  const accountInfo = await connection.getAccountInfo(ownerATAPublicKey);
  const tokenAccount = accountInfo && deserializeAccount(accountInfo.data);

  if (!tokenAccount) {
    throw new Error(`Unable to fetch user account for token with mint ${tokenMint}`);
  }

  return DecimalUtil.fromU64(tokenAccount.amount);
}

export async function getTokenInAmount(
  connection: Connection,
  token: OrcaPoolToken,
  tokenInAmount: TokenInAmount
): Promise<u64> {
  if (tokenInAmount.type === "count") {
    return U64Utils.toTokenU64(tokenInAmount.value, token, `tokenInAmount-${token.name}`);
  }

  const totalUserTokenCount = await getUserTokenCount(
    connection,
    tokenInAmount.ownerPublicKey,
    token.mint
  );
  const percentage =
    tokenInAmount.value instanceof OrcaU64 ? tokenInAmount.value.toDecimal() : tokenInAmount.value;
  return DecimalUtil.toU64(totalUserTokenCount.mul(percentage));
}

export async function getPoolTokenInAmount(
  connection: Connection,
  pool: OrcaPoolParams,
  tokenInAmount: TokenInAmount
): Promise<u64> {
  if (tokenInAmount.type === "count") {
    return U64Utils.toPoolU64(tokenInAmount.value, pool, `tokenInAmount`);
  }

  const totalUserTokenCount = await getUserTokenCount(
    connection,
    tokenInAmount.ownerPublicKey,
    pool.poolTokenMint
  );
  const percentage =
    tokenInAmount.value instanceof OrcaU64 ? tokenInAmount.value.toDecimal() : tokenInAmount.value;
  return DecimalUtil.toU64(totalUserTokenCount.mul(percentage));
}
