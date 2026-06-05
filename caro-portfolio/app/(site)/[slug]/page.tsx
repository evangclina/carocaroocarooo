import { getCollectionBySlug } from "@/sanity/sanity-utils";
import Image from "next/image";

export default async function CollectionPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;

  const collection = await getCollectionBySlug(slug);

  if (!collection) {
    return <div> Collection not Found</div>;
  }

  return (
    <div>
      <h1>{collection.name}</h1>
      {collection.pieces.map((piece) => (
        <div key={piece.slug}>
          <h2>{piece.name}</h2>
          <div>{piece.description}</div>
          <div>
            <Image
              src={piece.image}
              width={250}
              height={100}
              alt={piece.name}
            />
          </div>
        </div>
      ))}
    </div>
  );
}
