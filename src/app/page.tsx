"use client";

import { Button } from "@/components/ui/button";
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem } from "@/components/ui/dropdown-menu";
import Link from "next/link";
import { darkTheme, lightTheme, useActiveAccount, useActiveWallet, useConnectModal, useDisconnect } from "thirdweb/react";
import { client } from "./client";
import { chain } from "./chain";
// import { inAppWallet } from "thirdweb/wallets";
import { inAppWallet, metamaskWallet, walletConnect, coinbaseWallet } from "@thirdweb-dev/react";


export default function Home() {
  const account = useActiveAccount();
  const { disconnect } = useDisconnect();
  const wallet = useActiveWallet();
  const { connect } = useConnectModal();

  const handleConnect = async () => {
    await connect ({
      client: client,
      size: "wide",
      theme: darkTheme(),
      chain: chain,
      wallets: [
        inAppWallet({
          auth: {
            options: ["email", "google", "passkey"]
          }
        }),
        metamaskWallet(),
        walletConnect(),
        coinbaseWallet(),
      ]
    })
  }

  return (
    <div className="flex flex-col min-h-screen bg-white">
      <header className="px-4 lg:px-6 h-14 flex items-center justify-between">
        <Link className="flex items-center justify-center" href="#">
        <span className="ml-2 text-lg font-bold text-gray-900"> NFT QR Scanner</span>
        </Link>
        <div className="flex itens-center space-x-2">
          {account ? (
            <>
              {/* <Link href="/dasboard" className="hidden sm:inline-block"> */}
                <Button className="text-gray-900 border-gray-400" variant="outline" size="sm" m-2>
                  <Link href="/dashboard">Dashboard</Link>
                </Button>
                <Button onClick={() => disconnect(wallet!)} className="text-gray-100 border-gray-400 bg-gray-800" variant="outline" size="sm" m-2>
                  Sign Out
                </Button>
              {/* </Link> */}
              <DropdownMenu>
                <DropdownMenuContent align="end">
                  <DropdownMenuItem onClick={() => disconnect(wallet!)}>
                    Sign Out
                  </DropdownMenuItem>
                  <DropdownMenuItem asChild>
                    <Link href="/dashboard">Dashboard</Link>
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            </>
          ) : (
            <>
              <Button onClick={handleConnect} variant="outline" className="rounded-4" asChild>
                <Link href="#" className="text-gray-900 font-medium">Sign In</Link>
              </Button>
            </>
          )}

        </div>
      </header>
    </div>
  );
}
