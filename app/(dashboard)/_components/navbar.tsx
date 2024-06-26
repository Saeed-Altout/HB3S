"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Package2, PanelLeft } from "lucide-react";

import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";

import { routes } from "@/config/site";
import { cn } from "@/lib/utils";

export const Navbar = () => {
  const pathname = usePathname();

  return (
    <header className="sticky top-0 z-30 flex h-14 items-center gap-4 border-b bg-background px-4 sm:static sm:h-auto sm:border-0 sm:bg-transparent sm:px-6">
      <Sheet>
        <SheetTrigger asChild>
          <Button size="icon" variant="outline" className="sm:hidden">
            <PanelLeft className="h-5 w-5" />
            <span className="sr-only">Toggle Menu</span>
          </Button>
        </SheetTrigger>
        <SheetContent side="left" className="sm:max-w-xs">
          <nav className="grid gap-6 text-lg font-medium">
            <Link
              href="/"
              className="group flex h-10 w-10 shrink-0 items-center justify-center gap-2 rounded-full bg-primary text-lg font-semibold text-primary-foreground md:text-base"
            >
              <Package2 className="h-5 w-5 transition-all group-hover:scale-110" />
              <span className="sr-only">HB3S</span>
            </Link>
            {routes.map(({ label, href, icon: Icon }, index) => (
              <Link
                key={index}
                href={href}
                className={cn(
                  "flex items-center gap-4 px-2.5 text-muted-foreground hover:text-foreground",
                  pathname === href && "text-foreground"
                )}
              >
                <Icon className="h-5 w-5" />
                {label}
              </Link>
            ))}
          </nav>
        </SheetContent>
      </Sheet>
      <div>
        <Breadcrumb className="flex">
          <BreadcrumbList>
            {pathname.split("")[0] === "/" && (
              <BreadcrumbItem>
                <BreadcrumbLink asChild>
                  <Link href="/" className="capitalize">
                    home
                  </Link>
                </BreadcrumbLink>
              </BreadcrumbItem>
            )}
            {pathname.split("/")[1] && (
              <BreadcrumbItem>
                <BreadcrumbLink asChild>
                  <Link
                    href={`/${pathname.split("/")[1]}`}
                    className="capitalize"
                  >
                    {pathname.split("/")[1] || ""}
                  </Link>
                </BreadcrumbLink>
              </BreadcrumbItem>
            )}
            {pathname.split("/")[2] && (
              <>
                <BreadcrumbSeparator />
                <BreadcrumbItem>
                  <BreadcrumbLink asChild>
                    <Link
                      className="capitalize"
                      href={`/${pathname.split("/")[1]}/${
                        pathname.split("/")[2]
                      }`}
                    >
                      {pathname.split("/")[2] || ""}
                    </Link>
                  </BreadcrumbLink>
                </BreadcrumbItem>
              </>
            )}
            {pathname.split("/")[3] && (
              <>
                <BreadcrumbSeparator />
                <BreadcrumbItem>
                  <BreadcrumbPage className="capitalize">
                    {pathname.split("/")[3] || ""}
                  </BreadcrumbPage>
                </BreadcrumbItem>
              </>
            )}
          </BreadcrumbList>
        </Breadcrumb>
      </div>
    </header>
  );
};
