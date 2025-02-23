"use client";

import { Button } from "@/components/ui/button";
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem } from "@/components/ui/dropdown-menu";
import Link from "next/link";
import { lightTheme, useActiveAccount, useActiveWallet, useConnectModal, useDisconnect } from "thirdweb/react";
import { client } from "./client";
import { chain } from "./chain";
import { inAppWallet } from "thirdweb/wallets";

export default function Home() {
  const account = useActiveAccount();
  const { disconnect } = useDisconnect();
  const wallet = useActiveWallet();
  const { connect } = useConnectModal();

  const handleConnect = async () => {
    await connect ({
      client: client,
      size: "wide",
      theme: lightTheme(),
      chain: chain,
      wallets: [
        inAppWallet({
          auth: {
            options: [
              "email"
            ]
          }
        })
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
              <Link href="/dasboard" className="hidden sm:inline-block">
                <Button className="text-gray-900 border-gray-400" variant="outline" size="sm">
                  Dashboard
                </Button> 
              </Link>
              <DropdownMenu>
                <DropdownMenuContent align="end">
                  <DropdownMenuItem asChild>
                    <Link href="/dashboard">Dashboard</Link>
                  </DropdownMenuItem>
                  <DropdownMenuItem onClick={() => disconnect(wallet!)}>
                    Sign Out
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
