"use client"
import { Link, usePathname, useRouter } from "@/i18n/navigation";

export default function LanguageBtn() {
    const router = useRouter();
    const pathname = usePathname();

  const changeLanguage =(locale: "es" | "en") => {
    router.replace(pathname, { locale })
  }
  
  return (
    <div className="fixed top-0 right-0 z-200">
      <div className="pt-5 pr-5 md:pt-10 md:pr-10 font-roboto-mono text-13 space-x-1">
        <button 
        onClick={() => changeLanguage("es")} 
        className="cursor-pointer hover:font-bold transition-all duration-300 ease-in-out">
          ESP
        </button>
        <span>|</span>
        <button 
        onClick={() => changeLanguage("en")} 
        className="cursor-pointer hover:font-bold transition-all duration-300 ease-in-out">
          ENG
        </button>
      </div>
    </div>
  );
}