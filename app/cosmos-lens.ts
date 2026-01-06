// app/cosmos-lens.ts
import CoinbaseWalletSDK from "@coinbase/wallet-sdk";
import { createPublicClient, http, formatEther, isAddress } from "viem";
import { baseSepolia } from "viem/chains";

const RPC_URL = "https://sepolia.base.org";
const CHAIN_ID = 84532;
const EXPLORER = "https://sepolia.basescan.org";

const sdk = new CoinbaseWalletSDK({
  appName: "Cosmos Lens (Built for Base)",
});

const client = createPublicClient({
  chain: baseSepolia,
  transport: http(RPC_URL),
});

async function connectWallet() {
  const provider = sdk.makeWeb3Provider(RPC_URL, CHAIN_ID);
  const accounts = (await provider.request({
    method: "eth_requestAccounts",
  })) as string[];

  const address = accounts[0];
  const balance = await client.getBalance({ address });

  return { address, balance };
}

async function checkAddress(address: string) {
  if (!isAddress(address)) throw new Error("Invalid address");

  const balance = await client.getBalance({ address });
  return { address, balance: formatEther(balance) };
}

async function networkStatus() {
  const block = await client.getBlock();
  return {
    blockNumber: block.number,
    timestamp: block.timestamp,
    gasUsed: block.gasUsed,
  };
}

async function run() {
  const wallet = await connectWallet();
  const status = await networkStatus();

  console.log("Network: Base Sepolia");
  console.log("chainId:", CHAIN_ID);
  console.log("Wallet Address:", wallet.address);
  console.log("Balance:", wallet.balance, "ETH");
  console.log("Block:", status.blockNumber);
  console.log("Gas Used:", status.gasUsed);
  console.log("Explorer:", `${EXPLORER}/address/${wallet.address}`);
}

run().catch((err) => {
  console.error("Error:", err.message);
});
