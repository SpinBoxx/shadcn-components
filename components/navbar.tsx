"use client";

import MainNav from "@/components/main-nav";
import Image from "next/image";
import MimoIcon from "../public/mimo.svg";
import { Sun, MoonStar } from "lucide-react";
import { ThemeToggle } from "./theme-toggle";

const Navbar = () => {
  return (
    <div className="border-b">
      <div className="flex h-16 items-center px-10">
        <div className="text-[2.6rem] font-medium">
          <span>𐤀</span>
        </div>
        <div className="flex items-center">
          <MainNav className="mx-10" />
        </div>
        <div className="ml-auto flex items-center gap-x-4">
          <ThemeToggle />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
