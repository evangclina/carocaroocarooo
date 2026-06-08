"use client";
import { Collection } from "@/types/Collection";
import Link from "next/link";
import { usePathname } from "next/navigation";

type NavLinkProps = {
  collections: Collection[];
  onLinkClick?: () => void;
};

export default function NavLinks({ collections, onLinkClick }: NavLinkProps) {
  const pathname = usePathname();

  return (
    <ul className="flex-col space-y-5 md:space-y-3 font-roboto-mono md:text-13">
      <li className="font-arial font-bold flex-col space-y-2.5">
        <h2 className="text-center md:text-left">⋆⊱༻𖥸༺⊰⋆</h2>
        <Link
          href={"/"}
          onClick={onLinkClick}
          className={pathname === "/" ? "font-bold" : " "}
        >
          <h2 className="text-center md:text-left md:text-15 text-[20px]">
            carocaroocarooo
          </h2>
        </Link>
      </li>
      <li>
        <Link
          href={"/info"}
          onClick={onLinkClick}
          className={pathname === "/info" ? "font-bold" : "font-normal"}
        >
          00 ___ info
        </Link>
      </li>
      {collections.map((collection, index) => (
        <li key={collection._id}>
          <Link
            href={`/${collection.slug}`}
            onClick={onLinkClick}
            className={
              pathname === `/${collection.slug}` ? "font-bold" : "font-normal"
            }
          >
            {String(index + 1).padStart(2, "0")}___ {collection.name}
          </Link>
        </li>
      ))}
      <li>
        <Link
          href={"/contact"}
          onClick={onLinkClick}
          className={pathname === "/contact" ? "font-bold" : "font-normal"}
        >
          {String(collections.length + 1).padStart(2, "0")} ___ contact
        </Link>
      </li>
    </ul>
  );
}
