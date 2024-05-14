"use client";

import Link from "next/link";
import { Menu } from "lucide-react";

import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";

import { cn } from "@/lib/utils";
import { Route } from "../layout";

export const Navbar = ({ routes }: { routes: Route[] }) => {
  return (
    <div className="fixed top-0 z-20 bg-background w-full h-16 border-b flex justify-between items-center">
      <div className="flex items-center justify-start w-full px-4">
        <div className="font-semibold tracking-wider">HB3S 🚀⚡</div>
        <NavigationMenu className="hidden md:block">
          <NavigationMenuList>
            {routes.map(({ label, href }, index) => (
              <NavigationMenuItem key={index}>
                <Link href={href} legacyBehavior passHref>
                  <NavigationMenuLink
                    className={cn("capitalize", navigationMenuTriggerStyle())}
                  >
                    {label}
                  </NavigationMenuLink>
                </Link>
              </NavigationMenuItem>
            ))}
          </NavigationMenuList>
        </NavigationMenu>

        <Sheet>
          <Button size="icon" variant="outline" asChild>
            <SheetTrigger className="block md:hidden">
              <span className="sr-only">Menu</span>
              <Menu className="h-5 w-5" />
            </SheetTrigger>
          </Button>
          <SheetContent>
            <NavigationMenu className="flex flex-col justify-between h-full items-start">
              <NavigationMenuList className="flex-col space-x-0 items-start space-y-2">
                {routes.map(({ label, href }, index) => (
                  <NavigationMenuItem key={index}>
                    <Link href={href} legacyBehavior passHref>
                      <NavigationMenuLink
                        className={cn(
                          "capitalize",
                          navigationMenuTriggerStyle()
                        )}
                      >
                        {label}
                      </NavigationMenuLink>
                    </Link>
                  </NavigationMenuItem>
                ))}
              </NavigationMenuList>
            </NavigationMenu>
          </SheetContent>
        </Sheet>
      </div>
    </div>
  );
};
