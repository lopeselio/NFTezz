const hre = require("hardhat");
const fs = require('fs');

async function main() {
  const Marketplace = await hre.ethers.getContractFactory("NFTezz");
  const market = await Marketplace.deploy();
  await market.deployed();
  console.log("Marketplace deployed to:", market.address);

  fs.writeFileSync('./config.js', `
  export const marketplaceAddress = "${market.address}"
  `)
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
