import { getCollectionBySlug } from "@/sanity/sanity-utils";

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
          <div>{piece.name}</div>
          <div>{piece.description}</div>
        </div>
      ))}
    </div>
  );
}
