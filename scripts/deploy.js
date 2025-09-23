const { ethers } = require("hardhat");

async function main() {
  console.log("Starting deployment...");

  // Get the ContractFactory and Signers here.
  const [deployer] = await ethers.getSigners();

  console.log("Deploying contracts with the account:", deployer.address);
  console.log("Account balance:", (await deployer.getBalance()).toString());

  // Deploy a simple contract for testing
  const Greeter = await ethers.getContractFactory("Greeter");
  const greeter = await Greeter.deploy("Hello, Zama Testnet!");

  await greeter.deployed();

  console.log("Greeter deployed to:", greeter.address);
  console.log("Deployment completed successfully!");
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
