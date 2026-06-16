import Link from "next/link";

export default function notFound() {
  return (
    <div className="flex flex-col justify-center items-center h-screen w-full">
      <h2 className="mb-2.5">Page Not Found :c</h2>
      <Link href={"/"} className="bg-[#CDC6B0] rounded-sm h-8 p-1.5 text-13">
        volver al incio
      </Link>
    </div>
  );
}
