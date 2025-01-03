import React from "react";
import Image from "next/image";

interface PropsTypes {
  heading: string;
  date: string;
  title: string;
  src: string;
  alt: string;
  desc1: string;
  desc2: string;
  desc3: string;
  quote: string;
}

const Click = ({
  heading,
  date,
  title,
  quote,
  src,
  alt,
  desc1,
  desc3,
  desc2,
}: PropsTypes) => {
  return (
    <>
      <div className="mx-20">
        <div className="flex gap-4">
          <p className="font-bold [line-height:150%] font-roboto uppercase text-[13px]">
            {heading}
          </p>
          <p className="text-[#999999] font-roboto [line-height:150%] font-medium text-[13px]">
            {date}
          </p>
        </div>
        <h1 className="font-bold text-[34px] [line-height:45px] text-[#333333]">
          {title}
        </h1>
      </div>
      <div className="w-full py-10">
        <Image src={src} alt={alt} width={99999} height={60} />
      </div>
      <div className="mx-20">
        <div className="text-[#666666] text-roboto [line-height:150%]">
          <p className="mb-5">{desc1}</p>
          <p>{desc2}</p>
          <div className="py-14 gap-8 flex items-center mx-10">
            <div className="border-l-[6px] h-32 border-[#7C4EE4]"></div>
            <div className="flex flex-col gap-2 ">
              <p className="italic [line-height:39.5px]  text-[20px]  flex items-center">
                {quote}
              </p>
              <p className="font-roboto font-medium text-[#333333] [line-height:150%]">
                – Pedro Domingos
              </p>
            </div>
          </div>
          <p>{desc3}</p>
        </div>
      </div>
    </>
  );
};

export default Click;
