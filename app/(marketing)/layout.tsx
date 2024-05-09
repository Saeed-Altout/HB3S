import { Navbar } from "./_components/navbar";
import { Footer } from "./_components/footer";

export default async function MarketingLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="h-full bg-slate-100">
      <Navbar />
      <main className="pt-40 pb-20">{children}</main>
      <Footer />
    </div>
  );
}
