import { ModalProvider } from "@/providers/modal-provider";

export default async function DashboardLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="h-full bg-slate-100">
      <ModalProvider />
      {children}
    </div>
  );
}
