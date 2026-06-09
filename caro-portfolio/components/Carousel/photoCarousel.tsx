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
  console.log(images);
  return (
    <Carousel className="w-full" opts={{ loop: true }}>
      <CarouselContent>
        {images.map((image, index) => (
          <CarouselItem key={index}>
            <div className="w-full">
              <Image
                src={image.url}
                width={image.width}
                height={image.height}
                alt={`${index + 1}`}
                className="object-cover w-full h-auto"
              />
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
      <div className="flex items-center justify-center gap-2.5">
        <CarouselPrevious className="static hover:bg-[#CDC6B0]" />
        <CarouselNext className="static hover:bg-[#CDC6B0]" />
      </div>
    </Carousel>
  );
}
