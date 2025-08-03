import { ClaimNft } from "@/components/claim-nft";
import prisma from "../../../scripts/prisma.mjs";

interface NFT {
  id: string;
  // Add all other NFT properties here
}

export default async function ClaimPage({
  searchParams,
}: {
  searchParams: { id: string };
}) {
  if (!searchParams?.id) {
    return <div>Error: Missing NFT ID</div>;
  }

  try {
    const nft = await prisma.nFT.findUnique({
      where: { id: searchParams.id },
    });

    if (!nft) {
      throw new Error('NFT not found');
    }

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