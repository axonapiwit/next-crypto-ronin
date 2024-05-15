"use client";

import Link from "next/link";
import MaxWidthWrapper from "../components/custom/MaxWidthWrapper";
import ConnectRoninWalletButton from "../components/ConnectWallet";
import { useSession, signIn, signOut } from "next-auth/react";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarImage } from "@radix-ui/react-avatar";

const Navbar = () => {
  const { data: session } = useSession();
  if (!session?.user)
    return (
      <div>
        <p>Not Signed In</p>
        <button onClick={() => signIn("google")}>Sign in with google</button>
      </div>
    );
  return (
    <div className="flex gap-2 items-center">
      <p>Welcome {session.user?.name}. Signed In As</p>
      <p>{session.user?.email}</p>
      <button onClick={() => signOut()}>Sign out</button>
    </div>
    // <header className="fixed z-50 left-0 top-0 inset-x-0 backdrop-blur">
    //   <MaxWidthWrapper>
    //     <div className="flex h-16 items-center justify-between">
    //       <Link href="/" className="text-secondary">Crypto</Link>
    //       <div>
    //         <Link href="/collection" className="hover:text-white">Collection</Link>
    //       </div>
    //       <ConnectRoninWalletButton />
    //     </div>
    //   </MaxWidthWrapper>
    // </header>
  );
};

export default Navbar;
