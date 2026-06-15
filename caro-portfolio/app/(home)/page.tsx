import Image from "next/image";
import bgImage from "../../public/images/sfdfsdf 1.png";

export default async function Home() {
  return (
    <div className="absolute inset-0 -z-1 top-0 left-0">
      <Image
        src={bgImage}
        alt="background stars image"
        fill
        priority
        className="object-cover w-[80%] h-auto"
      />
    </div>
  );
}
