import Link from "next/link";
import MaxWidthWrapper from "../components/custom/MaxWidthWrapper";
import ConnectRoninWalletButton from "../components/ConnectWallet";
import { auth } from "@/lib/auth";
import { SignIn, SignOut } from "@/components/custom/Auth";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarImage } from "@radix-ui/react-avatar";
import { DropdownMenu, DropdownMenuTrigger, DropdownMenuContent, DropdownMenuLabel, DropdownMenuItem } from "@radix-ui/react-dropdown-menu";

const Navbar = async () => {
  const session = await auth();
  if (!session?.user) return <SignIn />;
  return (
    <div className="flex gap-2 items-center">
      <span className="hidden text-sm sm:inline-flex">
        {session.user.email}
      </span>
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
