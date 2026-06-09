"use client";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { ImageType } from "@/types/ImageType";
import Image from "next/image";
import { useState } from "react";
import { Dialog, DialogContent } from "../ui/dialog";

export default function PhotoCarousel({ images }: { images: ImageType[] }) {
  const [open, setOpen] = useState(false);
  const [selectedIndex, setSelectedIndex] = useState(0);

  return (
    <>
      {/* Small carousel */}
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
                  onClick={() => {
                    setOpen(true);
                    setSelectedIndex(index);
                  }}
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

      {/* Fullscreen ModalCarousel */}
      <Dialog open={open} onOpenChange={setOpen}>
        <DialogContent className="w-full h-screen p-0 border-none">
          <Carousel opts={{ loop: true }}>
            <CarouselContent>
              {images.map((image, index) => (
                <CarouselItem key={index}>
                  <div className="h-screen relative">
                    <Image
                      src={image.url}
                      fill
                      alt={`${index + 1}`}
                      loading="eager"
                    />
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
          </Carousel>
        </DialogContent>
      </Dialog>
    </>
  );
}
