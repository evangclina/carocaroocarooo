import { Image } from "./Image";

export type PieceStatus = "sold" | "available";

export type Piece = {
  name: string;
  slug: string;
  description: string;
  image: Image;
  status: PieceStatus;
};
