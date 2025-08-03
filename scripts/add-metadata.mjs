import prisma from "./prisma.mjs"

const NFTs = [
  {
    name: "0x0042...2a3b",
    description: "3K NFT Coupon for 0x0042cDbBEE2E2c09Ce5D45F43f867E7A74022a3b",
    image:"https://i.seadn.io/s/raw/files/9d1ac97a44c746020c2b30840e985e96.png?auto=format&dpr=1&w=1000",
    attributes:{
        type: "NFT Coupon",
        series: "3K",
        group: "DProject",
    },
  },
  {
    name: "Moto",
    description: "ArtAsset Moto",
    image:"https://i.seadn.io/s/raw/files/17a5bfc38087f9f27e33b98029afbca6.png?auto=format&dpr=1&w=1000",
    attributes:{
      type: "AI Generated",
        series: "Sport",
        group: "Anime",
    },
  },
  {
    name: "Tropical Forest",
    description: "ArtAsset Tropical Forest",
    image:"https://d391b93f5f62d9c15f67142e43841acc.ipfscdn.io/ipfs/Qme26mswCUJqXRASKBqNGdvaBufHVrKUSEJdqsvZLdtShr/1.png",
    attributes:{
      type: "AI Generated",
        series: "Natural",
        group: "Forest",
    },
  },
  {
    name: "Warrior Princess",
    description: "ArtAsset Warrior Princess",
    image:"https://d391b93f5f62d9c15f67142e43841acc.ipfscdn.io/ipfs/QmeJ8kK85kHTV9PRiWJ6M8yBCyiXbGfTY9vkjbFjnECHJ2/2.png",
    attributes:{
      type: "AI Generated",
        series: "Human",
        group: "Realistic",
    },
  },
  {
    name: "Base Ball",
    description: "ArtAsset Base Ball",
    image:"https://d391b93f5f62d9c15f67142e43841acc.ipfscdn.io/ipfs/QmT8T3FHzzMRF1Z27612Dn3gjLqd49FcpKYjEgwfj93bDk/3.png",
    attributes:{
      type: "AI Generated",
        series: "Sport",
        group: "Anime",
    },
  },
  {
    name: "Sunset G",
    description: "ArtAsset Sunset G",
    image:"https://d391b93f5f62d9c15f67142e43841acc.ipfscdn.io/ipfs/QmbpRsZhBpuqXYH1YVuQwdjKHZN4TGZCJeZzurBSs3gG4h/4.png",
    attributes:{
      type: "AI Generated",
        series: "Life Style",
        group: "Anime",
    },
  },
  {
    name: "Sunset B",
    description: "ArtAsset Sunset B",
    image:"https://d391b93f5f62d9c15f67142e43841acc.ipfscdn.io/ipfs/Qmcx3ajMDKKxdSKTKXXNrN7wchCYCvqQEWaoFKLBJurQbG/5.png",
    attributes:{
      type: "AI Generated",
        series: "Life Style",
        group: "Anime",
    },
  },
  {
    name: "Buddha",
    description: "ArtAsset Buddha",
    image:"https://d391b93f5f62d9c15f67142e43841acc.ipfscdn.io/ipfs/QmZ3xddUv11jMZsrP5ugFGjE74gGRDWAhEm5p7N6XvksUe/6.png",
    attributes:{
      type: "AI Generated",
        series: "Cutural",
        group: "Realistic",
    },
  },
  {
    name: "Basketball",
    description: "ArtAsset Basketball",
    image:"https://d391b93f5f62d9c15f67142e43841acc.ipfscdn.io/ipfs/QmfKTrKn8M8Wg5y8SXsAth2wuZuUWCJ6ZkcAH4Zf3ymFEF/7.png",
    attributes:{
      type: "AI Generated",
        series: "Sport",
        group: "Anime",
    },
  },
  {
    name: "RainForest Jungle",
    description: "ArtAsset RainForest Jungle",
    image:"https://d391b93f5f62d9c15f67142e43841acc.ipfscdn.io/ipfs/QmSAaAsAuJgBtmHRSqj5BTKyoaCA1TNKYoFLC3fgyPgDLG/8.png",
    attributes:{
      type: "AI Generated",
        series: "Forest",
        group: "Realistic",
    },
  },
  {
    name: "Princess",
    description: "ArtAsset Princess",
    image:"https://d391b93f5f62d9c15f67142e43841acc.ipfscdn.io/ipfs/QmeD7MAXNZbX8Fp571hydaWBzo9VUKJwuRrFyqD6TJrzof/9.png",
    attributes:{
      type: "AI Generated",
        series: "Human",
        group: "Realistic",
    },
  }
];

const main = async () => {
    try {
        await prisma.nFT.createMany({
            data: NFTs.map((nft) => ({
                ...nft,
                minted: false,
        })),
    });

    } catch (e) {
        console.error("Error details:", e);
        console.error("Error name:", error.name);
        console.error("Error message:", e.message);
        if (e.code) console.error("Error code", e.code);
    }
}

main();