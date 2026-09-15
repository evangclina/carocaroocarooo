import { getTranslations } from "next-intl/server";

export default async function Contact() {
  const t= await getTranslations("Navbar")
  return (
    <div>
      <h1 className="text-2xl font-bold mb-5 text-15">{t("contact")}</h1>
      <div className="flex-col space-x-2 font-roboto-mono text-11">
        <p className="flex">carocaroocarooo@gmail.com </p>
      </div>
    </div>
  );
}