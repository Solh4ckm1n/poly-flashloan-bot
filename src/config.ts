import { ERC20Token } from "./constants/addresses";

export const renderInterval = 1 * 1000;

// interval of price check (ms)
export const interval = 10 * 1000;

export const loanAmount = 10000;
export const diffAmount = 10; // Not enough amount to return loan

//export const chainId = 1;// Ethereum
//export const chainId = 56;// Binance Smart Chain
export const chainId = 137; // Polygon

export const explorerURL = "https://polygonscan.com";

// Token pair the bot trading
export const baseTokens = [
  ERC20Token.DAI,
  //ERC20Token.WETH,
  ERC20Token.USDC,
  ERC20Token.USDT,
  //ERC20Token.WMATIC,
];

export const tradingTokens = [
  ERC20Token.DAI,
  ERC20Token.WETH,
  ERC20Token.USDC,
  ERC20Token.USDT,
  ERC20Token.WMATIC,
  //ERC20Token.WBTC,
  //ERC20Token.LINK,
  //ERC20Token.COMP,
  //ERC20Token.CEL,
  //ERC20Token.CRV,
];

/**
 * @type {string} public flashloan contract address
 * Polyscan: https://polygonscan.com/address/0x8aa2bCAF11b388C501F16FC46Fce2f5f86FFb481
 * if you have deployed your own contract, you can use it instead of the default one
 */
export const flashloanAddress: string =
  "0x8aa2bCAF11b388C501F16FC46Fce2f5f86FFb481";

// protocols the bot will use
export const protocols =
  "POLYGON_SUSHISWAP,POLYGON_QUICKSWAP,POLYGON_APESWAP,POLYGON_JETSWAP,POLYGON_WAULTSWAP,POLYGON_UNISWAP_V3";

export const gasLimit = 15000000;
export const gasPrice = 30; // gwei

export const routeParts = [
  [10000],
  [8000, 2000],
  [5000, 4000, 1000],
  [5000, 3000, 1000, 1000],
  [3000, 2000, 2000, 2000, 1000],
  [2000, 2000, 2000, 2000, 1000, 1000],
];
