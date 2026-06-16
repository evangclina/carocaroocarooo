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
      <div className="relative hidden md:flex mb-5 h-80 w-64">
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
            expresa a través de la arcilla, la porcelana y el metal, dando vida
            a piezas que nacen tanto de su imaginario y de su mundo consciente.
            Su obra refleja vivencias, emociones y sueños, traducidos en formas,
            texturas y materialidades.
          </p>
          <p>
            Su proceso creativo es experimental. Desde su pequeño estudio en
            Guadalajara, explora el uso de cenizas, metales preciosos como la
            plata, conchas, piedras y plantas para desarrollar acabados únicos
            en sus esmaltes. En 2025 cursó formulación de esmaltes en Casa
            Ceniza, Guadalajara, México.
          </p>
          <p>
            Como diseñadora de producto, mobiliario e interiores, colabora con
            Huber Design Studio, donde actualmente lidera la línea de objetos en
            colaboración con artesanos de la región. Guadalajara, México, 2026.
          </p>
        </div>
      </div>
    </div>
  );
}
