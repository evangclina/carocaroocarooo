import Nav from "@/components/Header/nav";
import LanguageBtn from "@/components/languageBtn";
import { NextIntlClientProvider } from "next-intl";
import { getMessages } from "next-intl/server";
import { notFound } from "next/navigation";
import { routing } from "@/i18n/routing";

export default async function RootLayout({
  children,
  params
}: Readonly<{
  children: React.ReactNode;
  params: Promise<{ locale: string }>
}>) {
  const {locale} = await params; 

  if(!routing.locales.includes(locale as "es" | "en")){
    notFound()
  }

  const messages = await getMessages()

  return (
    <>
    <NextIntlClientProvider messages={messages} locale={locale}>
      <div className={`bg-[#F1EEE6] font-roboto-mono`}>
        <header className="md:h-screen md:fixed md:top-0 md:left-0">
          <Nav />
        </header>
        <LanguageBtn /> 
        <main className="md:ml-55">
          <div className="mx-10 mt-20 md:mt-19">{children}</div>
        </main>
      </div>
    </NextIntlClientProvider>
    </>
  );
}
