import { Collection } from "@/types/Collection";
import Link from "next/link";

type NavLinkProps = {
  collections: Collection[];
  onLinkClick?: () => void;
};

export default function NavLinks({ collections, onLinkClick }: NavLinkProps) {
  return (
    <ul className="flex-col space-y-5 md:space-y-3 md:text-sm">
      <li>
        <Link href={"/"} onClick={onLinkClick}>
          00 ___ info
        </Link>
      </li>
      {collections.map((collection, index) => (
        <li key={collection._id}>
          <Link href={`/${collection.slug}`} onClick={onLinkClick}>
            {String(index + 1).padStart(2, "0")}___ {collection.name}
          </Link>
        </li>
      ))}
      <li>
        <Link href={"/contact"} onClick={onLinkClick}>
          {String(collections.length + 1).padStart(2, "0")} ___ contact
        </Link>
      </li>
    </ul>
  );
}
