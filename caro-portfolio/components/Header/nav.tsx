import { getCollections } from "@/sanity/sanity-utils";
import BurgerMenu from "./burgermenu";
import NavLinks from "./navlinks";

export default async function Nav() {
  const collections = await getCollections();

  return (
    <nav>
      {/* Desktop navegation */}
      <div className="hidden md:flex">
        <NavLinks collections={collections} />
      </div>
      {/* Mobile navegation */}
      <BurgerMenu collections={collections} />
    </nav>
  );
}
