import { Connection, Keypair } from "@solana/web3.js";
import Decimal from "decimal.js";
import { getOrca, OrcaPoolConfig } from "../src";
import { readFile } from "mz/fs";

async function getKeypair(path: string): Promise<Keypair> {
  const buffer = await readFile(path, "utf-8");
  const data = JSON.parse(buffer.toString());
  return Keypair.fromSecretKey(Buffer.from(data));
}

async function run() {
  const connection = new Connection("https://orca.rpcpool.com", "singleGossip");
  const orca = getOrca(connection);

  const owner = await getKeypair("/home/rawfalafel/.config/solana/id.json");

  const pool = orca.getPool(OrcaPoolConfig.SOL_USDC);

  const ethUsdcLPBalance = await pool.getLPBalance(owner.publicKey);

  console.log("ethUsdcLPBalance", ethUsdcLPBalance.toNumber());

  const ethUsdcLPSupply = await pool.getLPSupply();

  console.log("ethUsdcLPSupply", ethUsdcLPSupply.toNumber());

  const usdcToken = pool.getTokenB();
  const tradeValue = new Decimal(1.1);
  const quote = await pool.getQuote(usdcToken, tradeValue, new Decimal(0.1));

  console.log("rate", quote.getRate());

  const txId = await (
    await pool.swap(owner, usdcToken, tradeValue, quote.getMinOutputAmount())
  ).execute();
}

run()
  .then(() => {
    console.log("success");
  })
  .catch(() => {
    console.log("error");
  });
