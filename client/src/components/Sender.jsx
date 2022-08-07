/* eslint-disable no-use-before-define */
/* pages/index.js */
import { ethers } from "ethers";
import { useEffect, useState } from "react";
import axios from "axios";
// import { useNavigate } from "react-router-dom";
import Web3Modal from "web3modal";

import NFTezz from "../utils/NFTezz.json";
import { marketplaceAddress } from "../../config";

export default function Sender() {
//  const navigate = useNavigate();
  const [nfts, setNfts] = useState([]);
  const [loadingState, setLoadingState] = useState("not-loaded");
  useEffect(() => {
    // eslint-disable-next-line no-use-before-define
    loadMarket();
  }, []);
  const getIPFSGatewayURL = (ipfsURL) => {
    const urlArray = ipfsURL.split("/");
    const ipfsGateWayURL = `https://${urlArray[2]}.ipfs.nftstorage.link/${urlArray[3]}`;
    return ipfsGateWayURL;
  };

  

  async function loadMarket() {
   
    const provider = new ethers.providers.JsonRpcProvider("https://matic-mumbai.chainstacklabs.com");
    const contract = new ethers.Contract(marketplaceAddress, NFTezz.abi, provider);
    const data = await contract.fetchMarketItems();
    console.log("Market data fetched from contract", data);
    
    const items = await Promise.all(data.map(async i => {
      const tokenUri = await contract.tokenURI(i.tokenId);
      console.log("token Uri is ", tokenUri);
      const httpUri = getIPFSGatewayURL(tokenUri);
      console.log("Http Uri is ", httpUri);
      const meta = await axios.get(httpUri);
      const price = ethers.utils.formatUnits(i.price.toString(), "ether");

      const item = {
        price,
        tokenId: i.tokenId.toNumber(),
        image: getIPFSGatewayURL(meta.data.image),
        name: meta.data.name,
        description: meta.data.description,
        country: meta.data.properties.country,
      };
      console.log("item returned is ", item);
      return item;
    }));
    setNfts(items);
    setLoadingState("loaded");
  }
  async function buyArtwork(nft) {
    /* needs the user to sign the transaction, so will use Web3Provider and sign it */
    console.log("item id clicked is", nft.tokenId);
    const web3Modal = new Web3Modal();
    const connection = await web3Modal.connect();
    const provider = new ethers.providers.Web3Provider(connection);
    const signer = provider.getSigner();
    const contract = new ethers.Contract(marketplaceAddress, NFTEzz.abi, signer);

    /* user will be prompted to pay the asking proces to complete the transaction */
    const price = ethers.utils.parseUnits(nft.price.toString(), "ether");
    const transaction = await contract.createMarketSale(nft.tokenId, { value: price });
    await transaction.wait();
    console.log("item transaction completed, item should show in UI ");
    const token = nft.tokenId;
    console.log("token id is ", token);
    loadMarket();
    // navigate("/view", { state: token });
  }
  if (loadingState === "loaded" && !nfts.length) {
    return (
      <div>
        <h1 className="px-20 py-10 text-3xl">No Entries yet</h1>
      </div>
    );
  }
  return (
    <div className="flex justify-center bg-blue-500 mb-12">

      <div className="px-4" style={{ maxWidth: "1600px" }}>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 pt-4">
          {nfts.map((nft, i) => (

            <div key={i} className="border shadow rounded-xl overflow-hidden border-2 border-white-500">
              <iframe
                title="Item"
                frameBorder="0"
                scrolling="no"
                height="400px"
                width="100%"
                src={`${nft.image}#toolbar=0`}
                className="py-3 object-fill h-500"
              />
              <div className="p-1">
                <p style={{ height: "34px" }} className="text-xl text-blue-400 font-semibold">Category: {nft.name}</p>
                <div style={{ height: "40px", overflow: "hidden" }}>
                  <p className="text-blue-700">Description: {nft.description}</p>
                </div>
                <p style={{ height: "34px" }} className="text-xl font-semibold">Country : {nft.country}</p>
                <p className="text-xl font-bold text-black">Price : {nft.price} MATIC</p>
              </div>

              <div className="p-2 bg-black">
                <button type="button" className="mt-4 w-full bg-blue-500 text-white font-bold py-2 px-12 rounded" onClick={() => buyArtwork(nft)}>Buy Artwork</button>
              </div>
            </div>
          ))}
        </div>
      </div>

    </div>
  );
}
