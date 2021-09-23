# Orca Typescript SDK

The Orca SDK contains a set of simple to use APIs to allow developers to integrate with the Orca exchange platform.

Learn more Orca [here](https://docs.orca.so).

### Trading Orca Liquidity Pools

- Get detailed quotes and make swaps between trading pairs in an Orca Pool
- Check your Orca Pool LP token balance and total supply

**Supported Orca Pools**

- The SDK supports all pools currently listed on [Orca](https://www.orca.so/pools)

**Features Coming Soon**
- More trader information (APY, Volume)
- Deposit/Withdraw from OrcaPools


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
import { Connection, Keypair } from "@solana/web3.js";
import { getOrca, OrcaPoolConfig, OrcaU64 } from "@orca-so/sdk";

try {
  const connection = new Connection(url, "singleGossip");
  const orca = getOrca(connection);
  const owner: Keypair = getKeyPair();

  // Get an instance of the ETH-USDC orca pool
  let pool = orca.getPool(OrcaPoolConfig.ETH_USDC);

  // Get the number of ETH-USDC LP tokens in your wallet
  let ethUsdcLPBalance = await pool.getLPBalance(owner.publicKey);

  // Get the total supply of ETH-USDC LP tokens
  let ethUsdcLPSupply = await pool.getLPSupply();

  // Get a quote of exchanging 1.1 ETH to USDC with a slippage tolerance of 0.1%
  // From the quote, you can get the current rate, fees, expected output amount and minimum output amount
  let ethToken = pool.getTokenA();
  let tradeValue = new Decimal(1.1);
  let quote = await pool.getQuote(ethToken, tradeValue, new Decimal(0.1));

  // Perform a swap for 1USDC to the quoted minimum amount of ETH
  // If the user does not have the Associated Token Address(ATA) to receive the output token, the ATA 
  // instructions will be appended in the transaction.
  const txId = await pool.swap(owner, usdcToken, tradeValue, quote.getMinOutputAmount()).execute();
} catch (err) {
  // Handle errors
}
```

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
