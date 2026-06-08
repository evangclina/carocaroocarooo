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
    <div className="mx-7.5 mt-1.5">
      <h1 className="font-arial text-2xl flex justify-center">
        {collection.name}
      </h1>
      {collection.pieces.map((piece) => (
        <div key={piece.slug} className="mb-10">
          <div>
            <h2 className="text-sm">{piece.name}</h2>
          </div>
          <div className="md:flex">
            <div className="w-full">
              <Image
                src={piece.coverImage.url}
                width={piece.coverImage.width}
                height={piece.coverImage.height}
                alt={piece.name}
                className="w-full object-cover h-auto"
              />
            </div>
            <div className="grid grid-row-2 items-center w-full ml-5">
              <div className="mt-2 md:mt-0 text-justify text-md">
                {piece.description}
              </div>
              <button
                className={`${piece.status === "available" ? "" : "disabled:opacity-50 hover:block"} border  w-25 h-15 cursor-pointer justify-self-end `}
              >
                {piece.status === "available" ? "Inquire" : "Sold"}
              </button>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
