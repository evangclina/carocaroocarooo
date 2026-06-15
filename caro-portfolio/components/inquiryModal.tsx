"use client";
import { PieceStatus } from "@/types/Piece";
import { useState } from "react";
import InquiryForm from "./inquiryForm";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "./ui/dialog";

type Props = {
  status: PieceStatus;
  name: string;
};

export default function InquiryModal({ status, name }: Props) {
  const [open, setOpen] = useState(false);
  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger
        disabled={status === "sold"}
        className={`${status === "available" ? "cursor-pointer" : "disabled:opacity-50"}  bg-[#CDC6B0] md:mb-8 text-11 inline-grid grid-cols-1 grid-rows-1 place-items-center py-2.5 px-5 mb-10
        shadow 
        transition-all 
        duration-100
        ease-in-out
        active:scale-95
        active:shadow-inner`}
      >
        <span className="[grid-area:1/1]">
          {status === "available" ? "inquiry" : "sold"}
        </span>
        <span className="[grid-area:1/1] invisible aria-hidden:*">inquiry</span>
      </DialogTrigger>
      <DialogContent className="bg-[#F1EEE6]">
        <DialogHeader>
          <DialogTitle></DialogTitle>
          <DialogDescription></DialogDescription>
        </DialogHeader>
        <InquiryForm pieceTitle={name} onSuccess={() => setOpen(false)} />
      </DialogContent>
    </Dialog>
  );
}
