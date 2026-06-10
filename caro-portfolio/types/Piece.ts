import { ImageType } from "./ImageType";

export type PieceStatus = "sold" | "available";

export type Dimensions = {
  width: number;
  height: number;
};

export type Piece = {
  name: string;
  slug: string;
  images: ImageType[];
  status: PieceStatus;
  description: string;
  material: string;
  dimensions: Dimensions;
};
