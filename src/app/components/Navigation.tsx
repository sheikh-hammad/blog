"use client";
import React, { useState } from "react";
import Link from "next/link";
import { links } from "./data/types";
import { GiHamburgerMenu } from "react-icons/gi";
import { AiOutlineClose } from "react-icons/ai";
import { usePathname } from "next/navigation";

const Navigation = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const currentPath = usePathname();

  return (
    <nav className="flex py-5 justify-between px-4 sm:px-6 md:px-12 items-center bg-white shadow-md">
      {/* Logo */}
      <p className="text-[#333333] font-extrabold text-[22px] sm:text-[26px]">
        Muhammad Hammad
      </p>

      <div
        className="md:hidden cursor-pointer text-2xl"
        onClick={() => setIsMenuOpen(!isMenuOpen)}
      >
        {isMenuOpen ? <AiOutlineClose /> : <GiHamburgerMenu />}
      </div>

      <ul
        className={`${
          isMenuOpen ? "block" : "hidden"
        } md:flex md:flex-row flex-col absolute md:static top-16 left-0 w-full md:w-auto bg-white md:bg-transparent z-10 md:z-auto shadow-md md:shadow-none md:gap-10 gap-4 md:items-center px-4 md:px-0`}
      >
        {links.map((link, index) => {
          const isActive = currentPath === link.path;
          return (
            <li key={index} className="text-center my-3">
              <Link
                className={`block md:inline-block hover:text-[#7C4EE4] ${
                  isActive ? "text-[#7C4EE4]" : "text-[#333]"
                }`}
                href={link.path}
              >
                {link.name}
              </Link>
            </li>
          );
        })}
        <li className="text-center md:text-left">
          <Link
            className="px-8 py-3 bg-[#7C4EE4] text-white rounded-lg inline-block"
            href="/contact"
          >
            Contact Us
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navigation;
