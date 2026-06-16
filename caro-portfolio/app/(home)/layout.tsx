import Nav from "@/components/Header/nav";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <header className="md:h-screen md:fixed md:top-0 md:left-0">
        <Nav />
      </header>
      <main className="md:ml-55">
        <div>{children}</div>
      </main>
    </>
  );
}
