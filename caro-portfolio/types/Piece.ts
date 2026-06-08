import { Image } from "./Image";

export type PieceStatus = "sold" | "available";

export type Dimensions = {
  width: number;
  height: number;
};

export type Piece = {
  _id: string;
  _createdAt: Date;
  name: string;
  slug: string;
  coverImage: Image;
  images: Image[];
  status: PieceStatus;
  description: string;
  material: string;
  dimensions: Dimensions;
};
