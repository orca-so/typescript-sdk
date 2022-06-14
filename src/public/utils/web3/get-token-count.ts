import { u64 } from "@solana/spl-token";
import { Connection } from "@solana/web3.js";
import { OrcaPoolToken } from "../..";
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

  const accountInfos = await connection.getMultipleAccountsInfo([
    inputPoolToken.addr,
    outputPoolToken.addr,
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
