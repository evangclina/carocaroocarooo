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
    <div className="">
      {collection.pieces.map((piece) => (
        <div key={piece.slug}>
          {piece.coverImage && (
            <Image
              src={piece.coverImage.url}
              width={piece.coverImage.width}
              height={piece.coverImage.height}
              alt={piece.name}
            />
          )}
        </div>
      ))}
    </div>
  );
}
