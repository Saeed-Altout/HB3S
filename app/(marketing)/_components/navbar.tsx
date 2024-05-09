"use client";

import Link from "next/link";
import { Hospital } from "lucide-react";

import { useCurrentUser } from "@/hooks/use-current-user";

import { LoginButton } from "@/components/auth/login-button";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

export const Navbar = () => {
  const user = useCurrentUser();

  return (
    <header className="fixed top-0 w-full h-16 px-4 border-b shadow-sm bg-white flex items-center">
      <nav className="md:max-w-screen-2xl mx-auto flex items-center w-full justify-between">
        <Link href="/" className="flex items-center font-semibold text-lg">
          <Hospital className="h-5 w-5 mr-1" /> HB3S
        </Link>
        {!user && (
          <LoginButton>
            <Button size="sm" variant="outline">
              Login
            </Button>
          </LoginButton>
        )}
        {user && (
          <Avatar className="h-8 w-8">
            <AvatarImage src={user.image || "/doctor.png"} />
            <AvatarFallback className="uppercase">
              {user.name?.split("")[0]}
              {user.name?.split("")[1]}
            </AvatarFallback>
          </Avatar>
        )}
      </nav>
    </header>
  );
};
