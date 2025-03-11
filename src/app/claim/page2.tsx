import { FC } from "react";

interface PageProps {
  searchParams: Record<string, string | string[] | undefined>;
}

const ClaimPage: FC<PageProps> = ({ searchParams }) => {
  const id = searchParams.id as string | undefined;

  if (!id) {
    return <div>Invalid or missing ID</div>;
  }

  return <div>Claiming asset with ID: {id}</div>;
};

export default ClaimPage;
