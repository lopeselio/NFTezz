/* test/sample-test.js */
describe("Market", function() {
  it("Should create and execute market sales", async function() {
    /* deploy the marketplace */
    const Marketplace = await ethers.getContractFactory("NFTezz")
    const market = await Marketplace.deploy()
    await market.deployed()

    const auctionPrice = ethers.utils.parseUnits('1', 'ether')

    /* create two tokens */
    await market.createToken("https://www.mytokenlocation.com", auctionPrice)
    await market.createToken("https://www.mytokenlocation2.com", auctionPrice)

    const [_, buyerAddress] = await ethers.getSigners()

    /* execute sale of token to another user */
    await market.connect(buyerAddress).createMarketSale(1, { value: auctionPrice })

    /* query for and return the unsold items */
    items = await market.fetchMarketItems()
    items = await Promise.all(items.map(async i => {
      const tokenUri = await market.tokenURI(i.tokenId)
      let item = {
        price: i.price.toString(),
        tokenId: i.tokenId.toString(),
        seller: i.seller,
        owner: i.owner,
        tokenUri
      }
      return item
    }))
    console.log('items: ', items)
  })
})
