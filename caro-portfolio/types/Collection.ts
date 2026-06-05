import { Image } from "./Image";
import { Piece } from "./Piece";

export type Collection = {
  _id: string;
  _createdAt: Date;
  name: string;
  slug: string;
  image: Image;
  description: string;
  pieces: Piece[];
};
