import { getCollections } from "@/sanity/sanity-utils";
import Link from "next/link";

export default async function Nav() {
  const collections = await getCollections();

  return (
    <div>
      <nav>
        <ul>
          <li>
            <Link href={"/"}>00 ___ info</Link>
          </li>
          {collections.map((collection, index) => (
            <li key={collection._id}>
              <Link href={`/${collection.slug}`}>
                {String(index + 2).padStart(2, "0")}___ {collection.name}
              </Link>
            </li>
          ))}
          <li>
            <Link href={"/contact"}>
              {String(collections.length + 2).padStart(2, "0")} ___ contact
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  );
}
