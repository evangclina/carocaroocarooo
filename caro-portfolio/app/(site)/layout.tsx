import Nav from "@/components/Header/nav";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <div className={`bg-[#F1EEE6] font-roboto-mono`}>
        <header className="md:h-screen md:fixed md:top-0 md:left-0">
          <Nav />
        </header>
        <main className="md:ml-55">
          <div className="mx-10 mt-20 md:mt-19">{children}</div>
        </main>
      </div>
    </>
  );
}
