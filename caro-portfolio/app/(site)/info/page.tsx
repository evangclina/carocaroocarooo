import Image from "next/image";

export default function Info() {
  return (
    <div className="md:flex">
      <div className="mb-5">
        {/* image */}
        <Image
          src="https://images.pexels.com/photos/8532968/pexels-photo-8532968.jpeg"
          height={100}
          width={200}
          alt="Photo of Carolina Vega"
        />
      </div>

      <div className="max-w-87.5 md:ml-5">
        {/* info */}
        <h1 className="mb-2.5 font-bold text-13">info</h1>
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
