# Orca SDK

** Insert Blob about SDK here **

# Installation

Use your environment's package manager to install @orca-so/sdk in your project.

```bash
yarn add @orca-so/sdk
```
```bash
npm install @orca-so/sdk
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

# Contribution
** Insert Contribution Blob here **

# License
[MIT](https://choosealicense.com/licenses/mit/)

