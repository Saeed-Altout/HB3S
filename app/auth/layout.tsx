export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <main className="h-full flex justify-center items-center bg-purple-700">
      {children}
    </main>
  );
}
