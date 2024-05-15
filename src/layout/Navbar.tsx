"use client"

import Link from "next/link";
import MaxWidthWrapper from "../components/custom/MaxWidthWrapper";
import ConnectRoninWalletButton from "../components/ConnectWallet";
import { signIn } from "next-auth/react";
import { useSession } from "next-auth/react"
import { Button } from "@/components/ui/button";

const Navbar = () => {
  const { data: session, status } = useSession()

  return (
    <header className="fixed z-50 left-0 top-0 inset-x-0 backdrop-blur">
      <MaxWidthWrapper>
        <div className="flex h-16 items-center justify-between">
          <Link href="/" className="text-secondary">
            Crypto
          </Link>
          <div>
            <Link href="/collection" className="hover:text-white">
              Collection
            </Link>
          </div>
          <ConnectRoninWalletButton />
          <Button onClick={() => signIn("google")} >Google</Button>
        </div>
      </MaxWidthWrapper>
    </header>
  );
};

export default Navbar;
