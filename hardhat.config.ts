require('dotenv').config();
require("@nomiclabs/hardhat-ethers");
require("@fhevm/hardhat-plugin");

const { API_URL, PRIVATE_KEY } = process.env;

module.exports = {
  solidity: "0.8.24",
  defaultNetwork: "hardhat",
  networks: {
    hardhat: {},
    sepolia: {
      url: API_URL || "https://ethereum-sepolia-rpc.publicnode.com",
      accounts: PRIVATE_KEY && PRIVATE_KEY !== "your-private-key-here" ? [`0x${PRIVATE_KEY}`] : [],
      chainId: 11155111
    },
    // Zama testnet configuration (you may need to update this based on current Zama testnet details)
    zama: {
      url: "https://sepolia.rpc.zama.ai", // Update this URL based on current Zama testnet
      accounts: PRIVATE_KEY && PRIVATE_KEY !== "your-private-key-here" ? [`0x${PRIVATE_KEY}`] : [],
      chainId: 8009 // Update this chain ID based on current Zama testnet
    }
  },
  paths: {
    sources: "./contracts",
    tests: "./test",
    cache: "./cache",
    artifacts: "./artifacts"
  },
  mocha: {
    timeout: 40000
  }
};
