import { getInfoImage } from "@/sanity/sanity-utils";
import { ImageType } from "@/types/ImageType";
import Image from "next/image";
import { getTranslations } from "next-intl/server";

type infoImageType = {
  _id: string;
  portrait: ImageType;
};

export default async function Info() {
  const infoImage: infoImageType = await getInfoImage();
  console.log(infoImage.portrait.url);

  const t= await getTranslations("Info")

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
          <p> {t("p1")}</p>
          <p> {t("p2")}</p>
          <p> {t("p3")}</p>
        </div>
      </div>
    </div>
  );
}
