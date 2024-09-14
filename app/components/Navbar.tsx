import { logo } from "@/constant";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const Navbar = () => {
  const navLinks = [
    "Home",
    "Explore",
    "Invest in Shortlet",
    "About us",
    "Support",
  ];
  return (
    <nav className="flex justify-center items-center px-1 py-6 ">
      <div className="max-w-1200px flex sm:flex-row justify-between items-center">
        <Link href={"/"} className="relative w-[167px] h-[36px]">
          <Image src={logo} layout="fill" alt="logo" />
        </Link>
        <div></div>
      </div>
    </nav>
  );
};

export default Navbar;
