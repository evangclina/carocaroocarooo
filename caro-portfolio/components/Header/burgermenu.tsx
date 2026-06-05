"use client";
import { Collection } from "@/types/Collection";
import { Menu, X } from "lucide-react";
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
      <Menu
        onClick={() => setIsOpen(!isOpen)}
        className="fixed top-0 left-0 z-50 md:hidden size-8"
      />

      {/* Mobile Open Menu */}
      <div
        className={`fixed top-0 h-screen w-screen max-w-192.5 bg-white z-50 transition-transform duration-300 md:hidden ${isOpen ? "translate-y-0" : "translate-y-full"}`}
      >
        <div>
          <X
            className="absolute top-4 left-4 size-8"
            onClick={() => setIsOpen(false)}
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
