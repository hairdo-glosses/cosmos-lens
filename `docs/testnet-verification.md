## Testnet Validation Steps

### Network Details
- **Network**: Cosmos Testnet
- **Chain ID**: cosmos-testnet
- **RPC URL**: https://rpc.cosmos-testnet.network
- **Explorer**: https://testnet.cosmos.basescan.org

### Step 1 — Configuration Check
- [ ] Ensure that **Cosmos Testnet** is correctly listed in the `config/networks.json` file.
- [ ] Verify the **RPC URL** and **Explorer URL** for Cosmos Testnet are set correctly.
- [ ] Confirm that **Chain ID** is listed as `cosmos-testnet`.

### Step 2 — RPC Connectivity Test
- [ ] Fetch the **current block height** to ensure the RPC connection is live.
- [ ] Re-fetch the block height after a short delay and ensure it increments.
- [ ] If there are issues, switch to a backup RPC URL and confirm the issue resolves.

### Step 3 — Read-only Data Validation
- [ ] **Balance check**: Query the balance for a sample address on the Cosmos Testnet.
- [ ] **Account info**: Retrieve contract or account details for a known contract address.

### Step 4 — Explorer Verification
- [ ] Check the **address page** in the **Cosmos Testnet BaseScan** explorer to ensure it resolves correctly.
- [ ] Ensure **block heights** from the explorer match RPC results within an acceptable range.
- [ ] Confirm there are **no discrepancies** between the explorer data and the RPC query results.

---

## Test Results

- [ ] **Passed all validation steps** on **Cosmos Testnet**.
- [ ] **Ready for production** after final checks on Cosmos Mainnet.

_Last updated: initial scaffold_
