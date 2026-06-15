"use client";

import { ImageType } from "@/types/ImageType";
import Image from "next/image";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "../ui/carousel";

type Props = {
  images: ImageType[];
  name: string;
};

export default function PhotoCarousel({ images, name }: Props) {
  return (
    <>
      <Carousel opts={{ loop: true }}>
        <CarouselContent>
          {images.map((image, index) => (
            <CarouselItem key={index}>
              <div className="aspect-4/5 relative w-full">
                <Image
                  src={image.url}
                  width={image.width}
                  height={image.height}
                  alt={`Photo number ${index + 1} of ${name}`}
                  className="object-cover w-full h-full"
                  priority={index === 0}
                />
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        <div className="flex items-center justify-center gap-2.5">
          <CarouselPrevious
            className="relative left-auto top-auto translate-y-0 
          border-none
          shadow-none
          bg-transparent
          hover:bg-transparent
          focus:bg-transparent
          active:bg-transparent
          focus-visible:ring-0
          focus-visible:ring-offset-0
          cursor-pointer
          "
          />
          <CarouselNext
            className="relative right-auto top-auto translate-y-0
          border-none
          shadow-none
          bg-transparent
          hover:bg-transparent
          focus:bg-transparent
          active:bg-transparent
          focus-visible:ring-0
          focus-visible:ring-offset-0
          cursor-pointer"
          />
        </div>
      </Carousel>
    </>
  );
}
