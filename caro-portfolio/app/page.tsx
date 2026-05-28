import Nav from "@/components/Header/nav";
import { getCollections } from "@/sanity/sanity-utils";

export default async function Home() {
  const collections = await getCollections();
  console.log(collections);

  return (
    <div>
      <Nav />
      {collections.map((collection) => (
        <div key={collection._id}>{collection.name}</div>
      ))}
    </div>
  );
}
