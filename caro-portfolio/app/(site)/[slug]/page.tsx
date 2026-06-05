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
    <div className="mx-3">
      <h1>{collection.name}</h1>
      {collection.pieces.map((piece) => (
        <div key={piece.slug}>
          <h2>{piece.name}</h2>
          <Image
            src={piece.image.url}
            width={piece.image.width}
            height={piece.image.height}
            alt={piece.name}
          />
          <div>{piece.description}</div>
        </div>
      ))}
    </div>
  );
}
