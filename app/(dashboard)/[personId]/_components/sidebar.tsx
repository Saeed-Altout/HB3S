"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useMediaQuery } from "usehooks-ts";

import { Home, Settings, Bell, Hospital, Heart } from "lucide-react";

import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";

export const Sidebar = () => {
  const isMobil = useMediaQuery("(max-width:768px)");

  const routes = [
    {
      label: "home",
      href: "/",
      icon: Home,
    },
    {
      label: "notification",
      href: "/notification",
      icon: Bell,
    },
    {
      label: "Healthy",
      href: "/healthy",
      icon: Heart,
    },
    {
      label: "Hospitals",
      href: "/hospitals",
      icon: Hospital,
    },
    {
      label: "settings",
      href: "/settings",
      icon: Settings,
    },
  ];

  return (
    <div className="w-16 md:w-60 border-r flex flex-col">
      <div className="h-16 flex justify-center items-center px-2 md:px-4">
        <p className="block md:hidden">💪</p>
        <p className="hidden md:block">HB3S 🚀</p>
      </div>
      <div className="px-2 md:px-4 flex-1">
        <div className="flex flex-col gap-5">
          {routes.map(({ label, href, icon: Icon }, index) => (
            <Button
              asChild
              key={index}
              className="flex justify-start items-center"
              variant="ghost"
              size={isMobil ? "icon" : "default"}
            >
              <Link
                href={href}
                key={index}
                className="flex items-center justify-center md:justify-start"
              >
                <Icon className="h-5 w-5 md:mr-2" />
                <p className="hidden md:block capitalize">{label}</p>
              </Link>
            </Button>
          ))}
        </div>
      </div>
    </div>
  );
};
