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
          {collections.map((collection) => (
            <li key={collection._id}>
              <Link href={`/${collection.slug}`}>01 ___ {collection.name}</Link>
            </li>
          ))}
          <li>
            <Link href={"/contact"}>03 ___ contact</Link>
          </li>
        </ul>
      </nav>
    </div>
  );
}
