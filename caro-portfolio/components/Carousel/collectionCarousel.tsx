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
  onImageClick: (index: number) => void;
};

export default function CollectionCarousel({ images, onImageClick }: Props) {
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
                className="object-cover w-full h-auto cursor-zoom-in"
                onClick={() => onImageClick(index)}
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
