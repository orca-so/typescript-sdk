import { OrcaPoolParams } from "../../model/orca/pool/pool-types";

export function getTokens(poolParams: OrcaPoolParams, inputTokenId: string) {
  if (poolParams.tokens[inputTokenId] == undefined) {
    throw new Error("Input token not part of pool");
  }

  const tokenAId = poolParams.tokenIds[0];
  const tokenBId = poolParams.tokenIds[1];

  const forward = tokenAId == inputTokenId;

  const inputOrcaToken = forward ? poolParams.tokens[tokenAId] : poolParams.tokens[tokenBId];
  const outputOrcaToken = forward ? poolParams.tokens[tokenBId] : poolParams.tokens[tokenAId];
  return { inputPoolToken: inputOrcaToken, outputPoolToken: outputOrcaToken };
}
