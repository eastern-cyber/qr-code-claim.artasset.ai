import { getContract } from "thirdweb";
import { chain } from "@/app/chain";
import { client } from "@/app/client";

export const contractAddress = "0xB13606ac5F0EC5683b5a17270220844163425DCF";
export const tokenContractAddress = "0x5F53924aE42b8DaC8D5605423a5B432c627A8365";
export const contract = getContract({
    client: client,
    chain: chain,
    address: contractAddress
});

export const tokenContract = getContract({
    client: client,
    chain: chain,
    address: tokenContractAddress
});