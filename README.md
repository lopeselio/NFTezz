# NFTezz

A platform for creators to tokenize, monetize, and build reputation with their artwork.

<h1 align="center">NFTezz</h1>

<p align="center">
   <a href="/">
    <img src="./client/src/assets/logo.png" alt="Logo" width="500" height="350">
  </a> 

  <h6>Built at ETHGlobal Metabolism'22 && Web3 Infinity Hackathon</h6>
  <img width="341" alt="image" src="https://user-images.githubusercontent.com/43913734/183289952-7fa9e7bd-842b-4383-83f9-b4eac29337ce.png">
  <img width="341" alt="image" src="https://user-images.githubusercontent.com/43913734/185115449-30d46436-b3ab-4c33-90b9-0de31d5ea931.png">

  </p>

  <p>View the project demo on <a href="https://youtu.be/BV7bS3qm4T0">YouTube</a></p>
</p>

Built with React, and powered by **Polygon, NFT.Storage, IPFS & Filecoin, Alchemy & Hardhat**
<img width="861" alt="image" src="https://user-images.githubusercontent.com/43913734/183290403-8b859c7b-d190-403e-baef-e3deb3c48a4d.png">

- Users connect to the Platform via metamask wallet.
- Users can select the type of artwork 'traditional' or 'digital'
- Decription of the NFT artwork
- Country/Region of the creator
- Price in Matic Token
- When the NFT is minted, the metadata is stored to the IPFS permanently using  `NFT.Storage`, and the produced hash is mapped to the NFT item in the smart contract. 
- These minted artworks are shown on the creators dashboard in the Explore Section, where users can buy artwork, for the listed price.
- The funds get deposited from the message.sender to the creator of the tokenised artwork.
- The metadata is fetched using a call via axios to `ipfsGateWayURL = `https://${urlArray[2]}.ipfs.nftstorage.link/${urlArray[3]}`, 
- to fetch the CID(content identifier) from the storage URL 

# Smart Contract & web3 & Technologies
1. `NFTeez.sol` - Solidity & Open Zeppelin
2. `NFT Storage` [Implemetation](https://github.com/lopeselio/NFTezz/blob/master/client/src/components/MintProfile.jsx#L42)
3. Harhat for deployment and testing
4. Alchemy for RPC Infrastructure
5. ReactJS, PostCSS, Axios


# Plans for the future
- Token Gated chat using Lit Protocol for members of the community (Users who mint on our marketplace)
- Carbon offset tokens to be issued for every NFT minted and sold along with a ReFi calendar to award CO2 offset certificates
- Aims to be a green marketplace on Polygon


Contract Addresses:
- Token Address `NFTeez.sol` on Polygon Numbai Testnet : `0x4D2D611a95A7e724F736028611BA95D1fdc9cE5D` View here: [Etherescan Explorer](https://mumbai.polygonscan.com/address/0x4D2D611a95A7e724F736028611BA95D1fdc9cE5D)

<img width="1440" alt="1" src="https://user-images.githubusercontent.com/43913734/185113461-c16e64b4-6c9b-4c42-b7bd-8935c18d3111.png">
<img width="1440" alt="2" src="https://user-images.githubusercontent.com/43913734/185113541-a637308c-7ec3-4e9c-b54f-f7b06fb52e0b.png">
<img width="1440" alt="3" src="https://user-images.githubusercontent.com/43913734/185113584-6f469bdb-bd1e-4d5e-8c80-e6336d8e3ad0.png">
<img width="1440" alt="4" src="https://user-images.githubusercontent.com/43913734/185113620-bf04e382-b82a-4dff-a632-d994428c9fa8.png">
<img width="1440" alt="5" src="https://user-images.githubusercontent.com/43913734/185113666-51a04fe1-8cd6-4a9f-ae1f-85c2918a39af.png">




