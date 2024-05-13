import { redirect } from "next/navigation";

import { ModalProvider } from "@/providers/modal-provider";

import { db } from "@/lib/db";
import { currentUser } from "@/lib/auth";

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const { id: userId } = await currentUser();

  if (!userId) {
    redirect("/auth/login");
  }

  const person = await db.person.findFirst({
    where: {
      userId,
    },
  });

  if (person) {
    redirect(`/${person.id}`);
  }

  return (
    <div className="h-full bg-slate-100">
      <ModalProvider />
      {children}
    </div>
  );
}
