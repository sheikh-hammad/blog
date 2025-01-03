import React from "react";
import Image from "next/image";
import { Blog } from "../data/types";

const Blogs = ({ src, heading, date, title, desc }: Blog) => {
  return (
    <div className="grid grid-cols-1 gap-y-4">
      <Image alt="" src={src} width={400} height={385} />
      <p className="text-[#333333] font-roboto uppercase font-bold [line-height:150%]">
        {heading}
        <span className="text-[#999999] font-medium">{date}</span>
      </p>
      <p className="font-bold  text-lg ">{title}</p>
      <p className="text-[#666666] text-sm [line-height:150%] text-roboto">
        {desc}
      </p>
      <button  className="text-[#7C4EE4] font-roboto text-left font-bold underline">
        Read More...
      </button>
    </div>
  );
};

export default Blogs;
