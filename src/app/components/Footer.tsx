"use client";
import React from "react";
import { links, socialLinks } from "./data/types";
import { usePathname } from "next/navigation";
import Link from "next/link";

const Footer = () => {
  const currentPath = usePathname();
  return (
    <footer className="shadow-2xl gap-5 py-5 flex flex-col justify-between px-4 sm:px-[25px] md:px-[120px] items-center  2xl:px-60 3xl:px-[300px] xl:px-[150px] lg:px-[100px]">
      <p className=" text-[#333333] font-extrabold text-[26px] leading-[auto]">
        Muhammad Hammad
      </p>
      <ul className="text-[12px] flex gap-10 items-center">
        {links.map((link, index) => {
          const isActive = currentPath === link.path;
          return (
            <li key={index} className="hover:text-[#7C4EE4] text-[16px]">
              <Link
                className={isActive ? "text-[#7C4EE4]" : "text-[#333]"}
                href={link.path}
              >
                {link.name}
              </Link>
            </li>
          );
        })}
      </ul>
      <ul className="flex gap-3">
        {socialLinks.map((link, index) => {
          return (
            <li className="flex justify-center items-center" key={index}>
              <Link
                href={link.path}
                className="bg-[#7C4EE4] [line-height:150%] rounded-full font-bold w-[50px] h-[50px] text-white justify-center items-center flex"
              >
                {link.name}
              </Link>
            </li>
          );
        })}
      </ul>
      <hr className="w-full border-t-1 border-[#7C4EE4] my-4" />
      <p>Copyright Muhammad Hammad Inc © 2023. All Right Reserved</p>
    </footer>
  );
};

export default Footer;
