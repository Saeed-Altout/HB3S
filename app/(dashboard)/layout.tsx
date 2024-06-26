import { Sidebar } from "./_components/sidebar";
import { Navbar } from "./_components/navbar";
import { Footer } from "./_components/footer";

export default function DashboardLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <div className="flex min-h-screen w-full flex-col bg-background">
        <Sidebar />
        <div className="flex flex-col sm:gap-4 sm:py-4 sm:pl-14">
          <Navbar />
          <main className="grid flex-1 items-start gap-4 p-4 sm:px-6 sm:py-0 md:gap-8">
            {children}
          </main>
          {/* <Footer /> */}
        </div>
      </div>
    </>
  );
}
