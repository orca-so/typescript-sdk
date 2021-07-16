# Orca Typescript SDK

The Orca SDK contains a set of simple to use APIs to allow developers to integrate with the Orca exchange platform.

Learn more Orca [here](https://docs.orca.so).

## Orca Liquidity Pools

- Get detailed quotes and make swaps between trading pairs in an Orca Pool
- Check your Orca Pool LP token balance and total supply

**Supported Orca Pools**
- SOLUSDC, SOLUSDT, RAYSOL, ETHSOL, ETHUSDC
- More coming in the future!

# Installation

Use your environment's package manager to install @orca-so/sdk and other related packages into your project.

```bash
yarn add @orca-so/sdk
yarn add @solana/web3.js
```
```bash
npm install @orca-so/sdk
npm install @solana/web3.js
```

# Usage

```typescript
import { getOrca, OrcaPoolConfig, OrcaU64 } from "@orca-so/sdk";

try {
  const connection = new Connection(url, "singleGossip");
  const orca = getOrca(connection);
  
  // Get an instance of the ETH-USDC orca pool 
  let pool = orca.getPool(OrcaPoolConfig.ETH_USDC);

  // Get the number of ETH-USDC LP tokens
  let ethUsdcLPBalance = await pool?.getLPBalance(userFeeAddress.publicKey);
  
  // Get the number of ETH-USDC LP tokens
  let ethUsdcLPSupply = await pool?.getLPSupply();
  
  // Get a quote of exchanging 1 USDC to ETH with a slippage tolerance of 0.1%
  let usdcId = pool?.getTokenAId();
  let quote = await pool?.getQuote(tokenA, new Decimal(1), 0.1);
  const quote = {
    rate: quote.getRate(), 
    impact: quote.getPriceImpact(),
    fees: u64ToDecimal(quote.getFees()),
    expected: u64ToDecimal(quote.getExpectedOutputAmount()),
    min: u64ToDecimal(quote.getMinOutputAmount()),
  };
  
  // Perform a swap for 1USDC to a return of a minimum of 
  let owner = await getKeyPair("/Users/ottocheung/dev/solana/pub.json");
  const txId = await pool.swap(owner, usdcId, 1, quote.min);
  
} catch (err) {
  // Handle errors
}

```
# Support

**Integration Questions**

Have problems integrating with the SDK? Pop by over to our [Discord](https://discord.gg/nSwGWn5KSG) #integrations channel and chat with one of our engineers.

**Issues / Bugs** 

If you found a bug, open up an issue on github with the prefix [ISSUE]. To help us be more effective in resolving the problem, be specific in the steps it took to reproduce the problem (ex. when did the issue occur, code samples, debug logs etc).

**Feedback**

Got ideas on how to improve the system? Open up an issue on github with the prefix [FEEDBACK] and let's brainstorm more about it together!


# License
[MIT](https://choosealicense.com/licenses/mit/)

