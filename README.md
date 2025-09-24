# Zama Testnet Smart Contract Deployment

A complete development environment for deploying and managing smart contracts on the Zama Testnet, featuring FHEVM (Fully Homomorphic Encryption Virtual Machine) support for confidential computing applications.


## 🛠️ Technologies Used

- **Hardhat** - Ethereum development framework
- **Solidity** - Smart contract programming language
- **TypeScript** - Type-safe JavaScript development
- **FHEVM** - Zama's Fully Homomorphic Encryption Virtual Machine
- **Ethers.js** - Ethereum library for JavaScript/TypeScript
- **Sepolia Testnet** - Ethereum test network with Zama FHEVM support

## Prerequisites

- Node.js (LTS version)
- npm (comes with Node.js)
- A wallet (MetaMask recommended)
- Sepolia testnet ETH (available from faucets)

## Quick Start

```bash
# Clone the repository
git clone https://github.com/0xgordian/zama-testnet-contract.git
cd zama-testnet-contract

# Install dependencies
npm install

# Configure environment
cp env.template .env
# Edit .env with your private key

# Compile contracts
npx hardhat compile

# Deploy to Zama testnet
npx hardhat run scripts/deploy-fhevm.js --network sepolia
```

## Setup Instructions

1. **Install dependencies:**
   ```bash
   npm install
   ```

2. **Configure environment:**
   - Copy `env.template` to `.env`
   - Update the `.env` file with your actual values:
     ```bash
     cp env.template .env
     ```
   - Edit `.env` and replace `your-private-key-here` with your actual private key

3. **Verify setup:**
   ```bash
   # Check Hardhat installation
   npx hardhat --version
   
   # Compile contracts
   npx hardhat compile
   
   # Test deployment on local network
   npx hardhat run scripts/deploy.js
   ```

## Deployment

### Local Testing
```bash
npx hardhat run scripts/deploy.js
```

### Sepolia Testnet
```bash
npx hardhat run scripts/deploy.js --network sepolia
```

### Zama Testnet
```bash
npx hardhat run scripts/deploy.js --network zama
```

## Security Considerations

⚠️ **Important Security Notes:**

1. **Never commit `.env` file** - It contains sensitive information
2. **Use a separate wallet** for testnet activities
3. **Keep your private key secure**
4. **Test locally first** before deploying to testnets

## Project Structure

```
zama-contract/
├── contracts/          # Smart contracts
├── deployments/        # Deployment artifacts
├── scripts/           # Deployment and utility scripts
├── .env              # Environment variables (DO NOT COMMIT)
├── .gitignore        # Git ignore rules
├── hardhat.config.ts # Hardhat configuration
├── package.json      # Dependencies and scripts
└── README.md         # This file
```

## Getting Testnet ETH

- **Sepolia ETH:** Use faucets like [Alchemy Sepolia Faucet](https://sepoliafaucet.com/) or [Chainlink Faucet](https://faucets.chain.link/sepolia)
- **Zama Testnet:** Check [Zama documentation](https://docs.zama.ai/) for their specific faucet

## Troubleshooting

### Common Issues

1. **"Module not found" errors:** Run `npm install`
2. **Compilation errors:** Check your Solidity version
3. **Deployment errors:** Verify your RPC URL and private key
4. **Private key errors:** Ensure your private key is 64 characters long (without 0x prefix)

### NOTE

- Always use the latest stable versions of dependencies
- Keep your environment variables secure
- Test locally before deploying to testnet
- Use a separate wallet for testnet activities
- Keep your development environment updated
