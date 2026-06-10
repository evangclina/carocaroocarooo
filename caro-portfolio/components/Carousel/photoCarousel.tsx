"use client";

import { ImageType } from "@/types/ImageType";
import Image from "next/image";
import { useState } from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "../ui/carousel";

export default function PhotoCarousel({ images }: { images: ImageType[] }) {
  const [open, setOpen] = useState(false);

  return (
    <>
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
                  onClick={() => setOpen(open)}
                />
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        <div className="flex items-center justify-center gap-2.5">
          <CarouselPrevious className="static" />
          <CarouselNext className="static" />
        </div>
      </Carousel>
    </>
  );
}
