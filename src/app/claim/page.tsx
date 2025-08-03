import { ClaimNft } from "@/components/claim-nft";
import prisma from "../../../scripts/prisma.mjs";

async function getData(id: string) {
    const nft = await prisma.nFT.findUnique({
        where: {
            id: id
        }
    });

    if (!nft) {
        throw new Error('NFT not found');
    }

    return nft; // Return the nft object directly instead of stringifying
}

export default async function ClaimPage({
  searchParams,
}: {
  searchParams: { id: string }
}) {
  if (!searchParams.id) {
    return <div>Error: Missing NFT ID</div>;
  }

  try {
    const nft = await getData(searchParams.id);
    
    return (
      <div>
        <ClaimNft nft={nft} />
      </div>
    );
  } catch (error) {
    console.error(error);
    return <div>Error: {error instanceof Error ? error.message : 'Failed to load NFT'}</div>;
  }
}