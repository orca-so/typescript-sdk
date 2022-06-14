# Orca Typescript SDK

The Orca SDK contains a set of simple to use APIs to allow developers to integrate with the Orca exchange platform.

Learn more Orca [here](https://docs.orca.so).

### Trading Orca Liquidity Pools

- Get detailed quotes and make swaps between trading pairs in an Orca Pool
- Check your Orca Pool LP token balance and total supply

**Supported Orca Pools**

- The SDK supports all pools currently listed on [Orca](https://www.orca.so/pools)

### Provide Liquidity to Orca Pools

- Deposit liquidity to supported Orca Pools
  - Deposit a trading pair, and receive LP token
- Withdraw liquidity from supported Orca Pools
  - Withdraw a trading pair in exchange for LP token

**Aquafarm Support**

- After depositing liquidtiy to a pool, the LP token can be deposited into
  the corresponding farm to receive an equivalent amount of farm token
- Remember to withdraw the LP token in exchange for farm token before
  withdrawing liquidity from Orca Pool

**DoubleDip Support**

- For farms with double-dip, the aquafarm tokens can be deposited into
  double-dip farm to receive double-dip rewards

**Features Coming Soon**

- More trader information (APY, Volume)

# Installation

Use your environment's package manager to install @orca-so/sdk and other related packages into your project.

```bash
yarn add @orca-so/sdk @solana/web3.js decimal.js
```

```bash
npm install @orca-so/sdk @solana/web3.js decimal.js
```

# Usage

```typescript
import { readFile } from "mz/fs";
import { Connection, Keypair } from "@solana/web3.js";
import { getOrca, OrcaFarmConfig, OrcaPoolConfig } from "@orca-so/sdk";
import Decimal from "decimal.js";

const main = async () => {
  /*** Setup ***/
  // 1. Read secret key file to get owner keypair
  const secretKeyString = await readFile("/Users/scuba/my-wallet/my-keypair.json", {
    encoding: "utf8",
  });
  const secretKey = Uint8Array.from(JSON.parse(secretKeyString));
  const owner = Keypair.fromSecretKey(secretKey);

  // 2. Initialzie Orca object with mainnet connection
  const connection = new Connection("https://api.mainnet-beta.solana.com", "singleGossip");
  const orca = getOrca(connection);

  try {
    /*** Swap ***/
    // 3. We will be swapping 0.1 SOL for some ORCA
    const orcaSolPool = orca.getPool(OrcaPoolConfig.ORCA_SOL);
    const solToken = orcaSolPool.getTokenB();
    const solAmount = new Decimal(0.1);
    const quote = await orcaSolPool.getQuote(solToken, solAmount);
    const orcaAmount = quote.getMinOutputAmount();

    console.log(`Swap ${solAmount.toString()} SOL for at least ${orcaAmount.toNumber()} ORCA`);
    const swapPayload = await orcaSolPool.swap(owner, solToken, solAmount, orcaAmount);
    const swapTxId = await swapPayload.execute();
    console.log("Swapped:", swapTxId, "\n");

    /*** Pool Deposit ***/
    // 4. Deposit SOL and ORCA for LP token
    const { maxTokenAIn, maxTokenBIn, minPoolTokenAmountOut } = await orcaSolPool.getDepositQuote(
      orcaAmount,
      solAmount
    );

    console.log(
      `Deposit at most ${maxTokenBIn.toNumber()} SOL and ${maxTokenAIn.toNumber()} ORCA, for at least ${minPoolTokenAmountOut.toNumber()} LP tokens`
    );
    const poolDepositPayload = await orcaSolPool.deposit(
      owner,
      maxTokenAIn,
      maxTokenBIn,
      minPoolTokenAmountOut
    );
    const poolDepositTxId = await poolDepositPayload.execute();
    console.log("Pool deposited:", poolDepositTxId, "\n");

    /*** Farm Deposit ***/
    // 5. Deposit some ORCA_SOL LP token for farm token
    const lpBalance = await orcaSolPool.getLPBalance(owner.publicKey);
    const orcaSolFarm = orca.getFarm(OrcaFarmConfig.ORCA_SOL_AQ);
    const farmDepositPayload = await orcaSolFarm.deposit(owner, lpBalance);
    const farmDepositTxId = await farmDepositPayload.execute();
    console.log("Farm deposited:", farmDepositTxId, "\n");
    // Note 1: for double dip, repeat step 5 but with the double dip farm
    // Note 2: to harvest reward, orcaSolFarm.harvest(owner)
    // Note 3: to get harvestable reward amount, orcaSolFarm.getHarvestableAmount(owner.publicKey)

    /*** Farm Withdraw ***/
    // 6. Withdraw ORCA_SOL LP token, in exchange for farm token
    const farmBalance = await orcaSolFarm.getFarmBalance(owner.publicKey); // withdraw the entire balance
    const farmWithdrawPayload = await orcaSolFarm.withdraw(owner, farmBalance);
    const farmWithdrawTxId = await farmWithdrawPayload.execute();
    console.log("Farm withdrawn:", farmWithdrawTxId, "\n");

    /*** Pool Withdraw ***/
    // 6. Withdraw SOL and ORCA, in exchange for ORCA_SOL LP token
    const withdrawTokenAmount = await orcaSolPool.getLPBalance(owner.publicKey);
    const withdrawTokenMint = orcaSolPool.getPoolTokenMint();
    const { maxPoolTokenAmountIn, minTokenAOut, minTokenBOut } = await orcaSolPool.getWithdrawQuote(
      withdrawTokenAmount,
      withdrawTokenMint
    );

    console.log(
      `Withdraw at most ${maxPoolTokenAmountIn.toNumber()} ORCA_SOL LP token for at least ${minTokenAOut.toNumber()} ORCA and ${minTokenBOut.toNumber()} SOL`
    );
    const poolWithdrawPayload = await orcaSolPool.withdraw(
      owner,
      maxPoolTokenAmountIn,
      minTokenAOut,
      minTokenBOut
    );
    const poolWithdrawTxId = await poolWithdrawPayload.execute();
    console.log("Pool withdrawn:", poolWithdrawTxId, "\n");
  } catch (err) {
    console.warn(err);
  }
};

main()
  .then(() => {
    console.log("Done");
  })
  .catch((e) => {
    console.error(e);
  });
```

# Devnet Testing

The example code above can be run on devnet by updating the import statement:
```typescript
import { getOrca, OrcaFarmConfig, OrcaPoolConfig, Network } from "@orca-so/sdk";
```

And changing two lines of code like so:

```typescript
const connection = new Connection("https://api.devnet.solana.com", "singleGossip");
const orca = getOrca(connection, Network.DEVNET);
```

One caveat to note is that there are only a few devnet pools available, so if you try to access pools that are only
available on mainnet, the code will throw an error. The example code uses ORCA_SOL, which exists on the devnet.

# Technical Notes

**Decimals & OrcaU64**

The SDK relies on the use of [Decimal](https://github.com/MikeMcl/decimal.js/) for number inputs and Decimal/[OrcaU64](https://github.com/orca-so/typescript-sdk/blob/main/src/public/utils/orca-u64.ts) for token-value inputs. If a Decimal instance is provided for a token-value input, it will be automatically transformed to the token's scale.

**Stability of the Public Util Functions**

We hope you find the tools we used to build our API useful in the public/utils folder. Due to our on-going development of the Orca platform, we cannot guarrantee the stability of the util APIs. The trading APIs can only be upgraded on major version updates.

# Support

**Integration Questions**

Have problems integrating with the SDK? Pop by over to our [Discord](https://discord.gg/nSwGWn5KSG) #integrations channel and chat with one of our engineers.

**Issues / Bugs**

If you found a bug, open up an issue on github with the prefix [ISSUE]. To help us be more effective in resolving the problem, be specific in the steps it took to reproduce the problem (ex. when did the issue occur, code samples, debug logs etc).

**Feedback**

Got ideas on how to improve the system? Open up an issue on github with the prefix [FEEDBACK] and let's brainstorm more about it together!

# License

[MIT](https://choosealicense.com/licenses/mit/)
