"use client";

import Link from "next/link";
import { ArrowRight, Hospital } from "lucide-react";

import { useCurrentUser } from "@/hooks/use-current-user";

import { LoginButton } from "@/components/auth/login-button";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

export const Header = () => {
  const user = useCurrentUser();

  return (
    <div className="flex items-center justify-center flex-col max-w-md  md:max-w-2xl lg:max-w-4xl gap-y-5">
      <div className="flex items-center">
        <Hospital className="h-12 w-12 mr-2 " />
        <h1 className="text-5xl font-bold text-center">HB3S</h1>
      </div>
      <p className="text-center text-lg">
        Measuring Blood Glucose by A Non-Invasive method
      </p>
      {!user && (
        <LoginButton>
          <Button>Login</Button>
        </LoginButton>
      )}
      {user && (
        <Button asChild>
          <Link href="/settings">
            Get Started <ArrowRight className="h-4 w-4 ml-2" />
          </Link>
        </Button>
      )}
    </div>
  );
};
