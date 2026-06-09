"use client";
import { ImageType } from "@/types/ImageType";
import Image from "next/image";
import { useEffect, useState } from "react";
import {
  Carousel,
  CarouselApi,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "../ui/carousel";
import { Dialog, DialogContent, DialogTitle } from "../ui/dialog";

type Props = {
  images: ImageType[];
  open: boolean;
  selectedIndex: number;
  onOpenChange: (open: boolean) => void;
};

export default function FullscreenCarousel({
  images,
  open,
  onOpenChange,
  selectedIndex,
}: Props) {
  const [api, setApi] = useState<CarouselApi>();

  useEffect(() => {
    if (open && api) {
      if (!api) return;

      api?.scrollTo(selectedIndex);
    }
  }, [open, api, selectedIndex]);

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogTitle className="hidden">Photo</DialogTitle>
      <DialogContent className="w-full h-screen p-0 border-none">
        <Carousel setApi={setApi} opts={{ loop: true }}>
          <CarouselContent>
            {images.map((image, index) => (
              <CarouselItem key={index}>
                <div className="h-screen relative">
                  <Image src={image.url} fill alt={`${index + 1}`} />
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious />
          <CarouselNext />
        </Carousel>
      </DialogContent>
    </Dialog>
  );
}
