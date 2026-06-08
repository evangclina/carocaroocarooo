import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { ImageType } from "@/types/ImageType";
import Image from "next/image";

export default function PhotoCarousel({ images }: { images: ImageType[] }) {
  return (
    <Carousel className="w-full max-w-48 sm:max-w-xs" opts={{ loop: true }}>
      <CarouselContent>
        {images.map((image, index) => (
          <CarouselItem key={index}>
            <Image
              src={image.url}
              width={image.width}
              height={image.height}
              alt="title"
            />
          </CarouselItem>
        ))}
      </CarouselContent>
      <div className="flex items-center justify-center gap-2.5 pt-4">
        <CarouselPrevious className="static hover:bg-[#CDC6B0]" />
        <CarouselNext className="static hover:bg-[#CDC6B0]" />
      </div>
    </Carousel>
  );
}
