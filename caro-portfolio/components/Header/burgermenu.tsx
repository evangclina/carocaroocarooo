"use client";
import { Collection } from "@/types/Collection";
import { Menu, X } from "lucide-react";
import Link from "next/link";
import { useState } from "react";
import NavLinks from "./navlinks";

export default function BurgerMenu({
  collections,
}: {
  collections: Collection[];
}) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div>
      {/* Burger Menu */}
      <div className="fixed top-0 left-0 z-25 w-full pl-10 py-2.5 bg-[#F1EEE6] flex justify-start items-center gap-2.5">
        <Menu
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden size-10"
          strokeWidth={1}
        />
        <Link href={"/"} className="md:hidden font-arial font-bold">
          carocaroocaroo ‧˚₊⊹˙
        </Link>
      </div>

      {/* Mobile Open Menu */}
      <div
        className={`fixed top-0 h-screen w-screen max-w-192.5 bg-white z-50 transition-transform duration-300 md:hidden ${isOpen ? "translate-y-0" : "-translate-y-full"}`}
      >
        <div>
          <X
            className="absolute top-4 left-4 size-10"
            onClick={() => setIsOpen(false)}
            strokeWidth={1}
          />
          <div className="h-screen grid place-items-center">
            <NavLinks
              collections={collections}
              onLinkClick={() => setIsOpen(false)}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
