"use client";
import { useState } from "react";
import { logo } from "@/constant";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { AlignJustify, X } from "lucide-react";

const Navbar = () => {
  const [toggleNav, settoggleNav] = useState(false);

  const handleMenuClick = () => {
    settoggleNav((prev) => !prev);
  };

  const navLinks = [
    { link: "Home", path: "/" },
    { link: "Explore", path: "/explore" },
    { link: "About us", path: "about" },
    { link: "Invest in Shorlets", path: "/invest" },
    { link: "Support", path: "/support" },
  ];
  return (
    <nav className="flex justify-center items-center px-4 py-6 relative">
      <div className="max-w-[1200px] w-full flex sm:flex-row justify-between items-center">
        <Link href={"/"} className="relative w-[167px] h-[36px]">
          <Image src={logo} layout="fill" alt="logo" />
        </Link>
        <div className="hidden sm:flex sm:flex-col">
          <ul className="hidden lg:flex lg:flex lg:flex-row items-center justify-between gap-12">
            {navLinks.map(({ link, path }) => (
              <Link key={link} href={path} className="text-sm text-slate-900">
                {link}
              </Link>
            ))}
          </ul>
        </div>
      </div>
      <button
        aria-label="Open menu"
        className="lg:hidden"
        onClick={handleMenuClick}>
        <AlignJustify size={30} />
      </button>

      {toggleNav && (
        <div className="absolute z-50 h-screen transition-transform w-full flex flex-col gap-6 -left-0 top-0 bg-white px-6 py-6">
          <div className="flex justify-between w-full py-4">
            <Link href={"/"} className="relative w-[167px] h-[36px]">
              <Image src={logo} layout="fill" alt="logo" />
            </Link>
            <button aria-label="Close menu" onClick={handleMenuClick}>
              <X size={30} />
            </button>
          </div>
          <ul className="flex flex-col gap-6 items-center -justify-start">
            {navLinks.map(({ link, path }) => (
              <Link
                key={link}
                onClick={handleMenuClick}
                href={path}
                className="text-sm text-slate-900">
                {link}
              </Link>
            ))}
          </ul>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
