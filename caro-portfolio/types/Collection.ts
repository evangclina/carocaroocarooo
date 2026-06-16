import { Piece } from "./Piece";

export type Collection = {
  _id: string;
  _createdAt: Date;
  name: string;
  slug: string;
  pieces: Piece[];
};
