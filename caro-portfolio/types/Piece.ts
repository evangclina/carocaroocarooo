export type PieceStatus = "sold" | "available";

export type Piece = {
  name: string;
  slug: string;
  description: string;
  image: string;
  status: PieceStatus;
};
