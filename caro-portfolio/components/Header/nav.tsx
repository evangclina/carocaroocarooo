import { getCollections } from "@/sanity/sanity-utils";
import BurgerMenu from "./burgermenu";
import NavLinks from "./navlinks";
import { getTranslations } from "next-intl/server";
import { getLocale } from "next-intl/server";

type Locale = "es" | "en";

export default async function Nav() { 

  const locale = await getLocale()
  const collections = await getCollections(locale as Locale);
  const translations = await getTranslations()

  return (
    <nav>
      {/* Desktop navegation */}
      <div className="hidden md:flex mt-18 ml-10">
        <NavLinks collections={collections}/>
      </div>
      {/* Mobile navegation */}
      <BurgerMenu collections={collections}/>
    </nav>
  );
}
