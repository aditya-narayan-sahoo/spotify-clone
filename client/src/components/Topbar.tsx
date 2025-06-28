import { Link } from "react-router-dom";
import { LayoutDashboardIcon } from "lucide-react";

import { cn } from "@/lib/utils";
import { useAuthStore } from "@/store/useAuthStore";
import { SignedOut, UserButton } from "@clerk/clerk-react";

import { buttonVariants } from "./ui/button";
import SignInOAuthButtons from "./SignInOAuthButtons";

const Topbar = () => {
  const { isAdmin } = useAuthStore();

  return (
    <div className="flex items-center justify-between p-4 sticky top-0 bg-zinc-900/75 backdrop-blur-md z-10">
      <div className="flex gap-2 items-center">
        <img src="/spotify.png" alt="spotify" className="size-8" />
        Spotify
      </div>
      <div className="flex items-center gap-4">
        {isAdmin && (
          <Link
            to={"/admin"}
            className={cn(buttonVariants({ variant: "outline" }))}
          >
            <LayoutDashboardIcon className="size-4 mr-2" />
            Admin Dashboard
          </Link>
        )}
        <SignedOut>
          <SignInOAuthButtons />
        </SignedOut>
        <UserButton />
      </div>
    </div>
  );
};

export default Topbar;
