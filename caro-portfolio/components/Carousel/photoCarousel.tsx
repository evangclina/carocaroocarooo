"use client";

import { ImageType } from "@/types/ImageType";
import { useState } from "react";
import CollectionCarousel from "./collectionCarousel";
import FullscreenCarousel from "./fullscreenCarousel";

export default function PhotoCarousel({ images }: { images: ImageType[] }) {
  const [open, setOpen] = useState(false);
  const [selectedIndex, setSelectedIndex] = useState(0);

  return (
    <>
      <CollectionCarousel
        images={images}
        onImageClick={(index) => {
          setOpen(true);
          setSelectedIndex(index);
        }}
      />
      <FullscreenCarousel
        images={images}
        open={open}
        onOpenChange={setOpen}
        selectedIndex={selectedIndex}
      />
    </>
  );
}
