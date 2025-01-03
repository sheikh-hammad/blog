import React from "react";
import Image from "next/image"
import Heading from "./Heading";

const RecentPosts = () => {
  return (
    <section className="bg-[#FAFAFA] px-4 py-20 sm:px-[25px] md:px-[120px]  2xl:px-60 3xl:px-[300px] xl:px-[150px] lg:px-[100px]">
   <Heading/>
      <div className="flex gap-9 mt-12">
        <Image src="/utils/COntainer (2).png" alt=""width={600} height={140}/>
        <div className="rounded-xl flex flex-col gap-5  p-6">
          <p className="font-roboto [line-height:150%] font-bold text-sm text-[#333333]">
            DEVELOPMENT
            <span className="text-[#999999] font-medium ml-2">
              16 March 2023
            </span>
          </p>
          <p className="font-bold [line-height:43.4px] -tracking-wider text-[#333333] text-[36px]">
            How to make a Game look more attractive with New VR & AI Technology
          </p>
          <p className="font-roboto text-[16px] text-[#666666] [line-height:150%]">
            Google has been investing in AI for many years and bringing its
            benefits to individuals, businesses and communities. Whether it’s
            publishing state-of-the-art research, building helpful products or
            developing tools and resources that enable others, we’re committed
            to making AI accessible to everyone.
          </p>
          <p className="border border-[#7C4EE4] text-[#7C4EE4] text-[14px] self-start rounded-md font-bold font-roboto px-6 py-2">
            Read More
          </p>
        </div>
      </div>
    </section>
  );
};

export default RecentPosts;
