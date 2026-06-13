import PhotoCarousel from "@/components/Carousel/photoCarousel";
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
      {collection.pieces.map((piece) => (
        <div key={piece.slug} className="mb-5 md:mb-10">
          <div className="md:flex">
            <div className="max-w-100 xl:max-w-125">
              <PhotoCarousel images={piece.images} />
            </div>

            {/* Piece content */}
            <div className="md:ml-5 flex flex-col md:items-start md:justify-between md:max-w-md w-full">
              <div className="self-start">
                <h2 className="mb-5 font-bold text-15">{piece.name}</h2>
                <p className="mb-10 md:mb-15 text-11">{piece.description}</p>
                <h3 className="text-13">material</h3>
                <h4 className="mb-5 text-11">{piece.material}</h4>
                <h3 className="text-13">dimensiones</h3>
                <h4 className="text-11 mb-5 md:mb-0">
                  {piece.dimensions.width}W x {piece.dimensions.height}H
                </h4>
              </div>

              <div className="self-end md:self-auto">
                <button
                  className={`${piece.status === "available" ? "cursor-pointer" : "disabled:opacity-50"}  bg-[#CDC6B0] md:mb-8 text-11 inline-grid grid-cols-1 grid-rows-1 place-items-center py-2.5 px-5 mb-10`}
                >
                  <span className="[grid-area:1/1]">
                    {piece.status === "available" ? "inquiry" : "sold"}
                  </span>
                  <span className="[grid-area:1/1] invisible aria-hidden:*">
                    inquiry
                  </span>
                </button>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
