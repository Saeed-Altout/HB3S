import { redirect } from "next/navigation";

import { db } from "@/lib/db";
import { currentUser } from "@/lib/auth";

import { Navbar } from "./_components/navbar";
import { Footer } from "./_components/footer";

export interface Route {
  label: string;
  href: string;
}

export default async function DashboardLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: { personId: string };
}) {
  const { id: userId } = await currentUser();

  if (!userId) {
    redirect("/auth/login");
  }

  const person = await db.person.findUnique({
    where: {
      id: params.personId,
      userId,
    },
  });

  if (!person) {
    redirect("/");
  }

  const routes = [
    {
      label: "home",
      href: `/${person.id}`,
    },
    {
      label: "settings",
      href: `/${person.id}/settings`,
    },
  ];

  return (
    <div className="h-full">
      <Navbar routes={routes} />
      <main className="px-4 overflow-y-auto pt-20 pb-12">{children}</main>
      <Footer />
    </div>
  );
}
