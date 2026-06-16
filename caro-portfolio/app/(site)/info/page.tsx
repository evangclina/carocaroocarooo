import { getInfoImage } from "@/sanity/sanity-utils";
import { ImageType } from "@/types/ImageType";
import Image from "next/image";

type infoImageType = {
  _id: string;
  portrait: ImageType;
};

export default async function Info() {
  const infoImage: infoImageType = await getInfoImage();
  console.log(infoImage.portrait.url);

  return (
    <div className="md:flex">
      <div className="relative hidden md:flex mb-5 h-80 w-auto">
        {/* image */}
        <Image
          src={infoImage.portrait.url}
          height={infoImage.portrait.height}
          width={infoImage.portrait.width}
          alt="Photo of Carolina Vega"
          className="w-full object-cover"
        />
      </div>

      <div className="max-w-87.5 md:ml-5">
        {/* info */}
        <h1 className="mb-2.5 font-bold text-15">info</h1>
        <div className="space-y-5 text-11">
          <p>
            Carolina Vega es diseñadora de producto & artista. Su trabajo se
            expresa a traves de la arcilla, la porcelana y el metal dando vida
            tanto a su imaginario y a su consiente. Reflejando vivencias,
            emociones y sueños.{" "}
          </p>
          <p>
            Su proceso creativo es experimental. Desde su pequeño estudio en
            Guadalajara; utiliza cenizas, metales preciosos como la plata,
            conchas, piedras y plantas para dar acabados en sus esmaltes. Cursó
            formulacion de esmaltes en Casa Ceniza (2025 Gdl. Mx.)
          </p>
          <p>
            Como diseñadora de producto, mobiliario e interiores trabaja para
            Huber Design Studio. Actualmente liderando su linea de objetos en
            colaboración con artesanos de la region. (2026 Gdl. Mx)
          </p>
        </div>
      </div>
    </div>
  );
}
