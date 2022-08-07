require("@nomiclabs/hardhat-waffle");
require('dotenv').config();
const { ALCHEMY_RPC, PRIVATE_KEY } = process.env;
module.exports = {
  defaultNetwork: "hardhat",
  networks: {
    hardhat: {
    },
   
    mumbai: {
      url: ALCHEMY_RPC, 
      accounts: [`0x${PRIVATE_KEY}`],
    },

  },
  solidity: {
    version: "0.8.9",
    settings: {
      optimizer: {
        enabled: true,
        runs: 200
      }
    }
  }
};
