import { redirect } from "next/navigation";

import { db } from "@/lib/db";
import { currentUser } from "@/lib/auth";

import { Navbar } from "./_components/navbar";
import { Footer } from "./_components/footer";
import { Sidebar } from "./_components/sidebar";

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

  return (
    <div className="h-full flex">
      <Sidebar />
      <div className="flex-1 flex flex-col justify-between">
        <Navbar />
        <main className="flex-1 px-4 overflow-y-auto">{children}</main>
        <Footer />
      </div>
    </div>
  );
}
