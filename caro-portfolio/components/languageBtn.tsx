"use client"
import { Link, usePathname, useRouter } from "@/i18n/navigation";
import { useLocale } from "next-intl";

export default function LanguageBtn() {
    const router = useRouter();
    const pathname = usePathname();
    const locale = useLocale()

  const changeLanguage =(newlocale: "es" | "en") => {
    router.replace(pathname, { locale: newlocale })
  }
  
  return (
    <div className="fixed top-0 right-0 z-26">
      <div className="pt-5 pr-5 md:pt-10 md:pr-10 font-roboto-mono text-13 space-x-1 active:font-bold">
        <button 
        onClick={() => changeLanguage("es")} 
        className={`cursor-pointer hover:font-bold transition-all duration-300 ease-in-out ${
            locale === "es" ? "font-bold" : "font-normal"
          }`}>
          ESP
        </button>
        <span>|</span>
        <button 
        onClick={() => changeLanguage("en")} 
        className={`cursor-pointer hover:font-bold transition-all duration-300 ease-in-out ${
            locale === "en" ? "font-bold" : "font-normal"
          }`}>
          ENG
        </button>
      </div>
    </div>
  );
}