const { ethers } = require("hardhat");

async function main() {
  console.log("Starting FHEVM deployment to Zama testnet...");

  // Get the ContractFactory and Signers here.
  const [deployer] = await ethers.getSigners();

  console.log("Deploying contracts with the account:", deployer.address);
  console.log("Account balance:", (await deployer.provider.getBalance(deployer.address)).toString());

  // Deploy the ZamaTestnetContract
  const ZamaTestnetContract = await ethers.getContractFactory("ZamaTestnetContract");
  const zamaContract = await ZamaTestnetContract.deploy("Hello Zama Testnet!");

  await zamaContract.waitForDeployment();

  console.log("ZamaTestnetContract deployed to:", await zamaContract.getAddress());
  console.log("Deployment completed successfully!");
  console.log("Network: Sepolia (Zama FHEVM)");
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
