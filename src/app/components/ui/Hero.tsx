import React from "react";
import Image from "next/image";

const Hero = () => {
  return (
    <section className="bg-[#7C4EE4] flex px-4 py-12 sm:px-[25px] md:px-[120px] items-center gap-24 justify-between 2xl:px-60 3xl:px-[300px] xl:px-[150px] lg:px-[100px]">
      <div className="text-white flex flex-col gap-11 flex-1">
        <p className="text-[18px] font-bold tracking-widest uppercase">
          Featured Post
        </p>
        <p className="font-bold text-[56px] leading-tight">
          How AI will Change the Future
        </p>
        <p>
          The future of AI will see home robots having enhanced intelligence,
          increased capabilities, and becoming more personal and possibly cute.
          For example, home robots will overcome navigation, direction
        </p>
        <button className="self-start bg-white text-[#373737] font-bold px-8 py-3 rounded-lg">
          Read more
        </button>
      </div>

        <Image
          alt="Illustration of AI impact"
          width={425}
          height={400}
          src="/utils/Container.png"
          className="object-contain"
        />
    </section>
  );
};

export default Hero;
