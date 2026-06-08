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
  // const coverImage = images[0];
  console.log(images);

  return (
    <Carousel className="w-full max-w-[12rem] sm:max-w-xs">
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
        {/* {Array.from({ length: 5 }).map((_, index) => (
          <CarouselItem key={index}>
            <div className="p-1">
              <Card>
                <CardContent className="flex aspect-square items-center justify-center p-6">
                  <span className="text-4xl font-semibold">{index + 1}</span>
                </CardContent>
              </Card>
            </div>
          </CarouselItem>
        ))} */}
      </CarouselContent>
      <CarouselPrevious />
      <CarouselNext />
    </Carousel>
  );
}
