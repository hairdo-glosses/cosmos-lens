# Cosmos Lens (Built for Base)

Cosmos Lens is a compact, read-only utility designed for developers to inspect the Base Sepolia network. It allows you to quickly validate network configuration, check wallet balances, and verify contract deployments without changing any onchain data.

---

## Features

Cosmos Lens is perfect for tasks like:
- Ensuring your connection to Base Sepolia (chainId: 84532)  
- Inspecting wallet balances and transaction counts  
- Validating contract deployments using verified explorer links  
- Reviewing recent block data and gas usage  

Everything is read-only, making it a safe tool for checking network health without affecting blockchain state.

---

## Repository Structure

- **app/cosmos-lens.ts**  
  The main script that connects to Coinbase Wallet and queries Base Sepolia for blockchain data.

- **contracts/**  
  Solidity contracts deployed to Base Sepolia for testing:
  - `AddressBookFactory.sol`  
  - `ERC20.sol`  

- **docs/**  
  Documentation for understanding how Cosmos Lens works:
  - `usage.md`  
  - `testnet-verification.md`  

- **logs/**  
  Folder containing logs of network checks and testnet validations:
  - `execution.log`  
  - `debug.log`  

- **package.json**  
  Dependency management for the project.

- **README.md**  
  Project documentation.

---

## Supported Network

Base Sepolia  
chainId (decimal): 84532  
Explorer: [sepolia.basescan.org](https://sepolia.basescan.org)

---

## How It Works

Cosmos Lens connects to Coinbase Wallet using the Coinbase Wallet SDK and communicates with Base Sepolia via viem. It fetches data such as wallet balances, transaction counts, block info, and gas usage, then provides links to Basescan for verification.

No transactions are signed or broadcast.

---

## License

MIT License  
Copyright (c) 2025 YOUR_NAME

---

## Author

GitHub: [hairdo-glosses](https://github.com/hairdo-glosses)  

Email: hairdo06_glosses@icloud.com

---

## Testnet Deployment (Base Sepolia)

The following contracts were deployed to Base Sepolia for validation:

Network: Base Sepolia  
chainId (decimal): 84532  
Explorer: [sepolia.basescan.org](https://sepolia.basescan.org)

Contract AddressBookFactory.sol address:  
0x3Fa7C86758Bc27C8748B666A5256cE2E8194DafA

Deployment and verification:
- [Deployment Link](https://sepolia.basescan.org/address/0x3Fa7C86758Bc27C8748B666A5256cE2E8194DafA)
- [Code Verification](https://sepolia.basescan.org/0x3Fa7C86758Bc27C8748B666A5256cE2E8194DafA/0#code)

Contract ERC20.sol address:  
0xdC681Ebde646C718B93509b91D3598203be46fFD

Deployment and verification:
- [Deployment Link](https://sepolia.basescan.org/address/0xdC681Ebde646C718B93509b91D3598203be46fFD)
- [Code Verification](https://sepolia.basescan.org/0xdC681Ebde646C718B93509b91D3598203be46fFD/0#code)

These testnet deployments are used to validate Base Sepolia tooling and ensure everything works as expected before moving to mainnet.
