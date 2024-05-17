import { Home, Settings, Code, Users } from "lucide-react";

export const siteConfig = {
  name: "HB3S",
  description: "Collaborate, manage projects.",
};

export const routes = [
  {
    label: "Home",
    href: "/",
    icon: Home,
  },
  {
    label: "Settings",
    href: "/settings",
    icon: Settings,
  },
  {
    label: "Patients",
    href: "/patients",
    icon: Users,
  },
];
