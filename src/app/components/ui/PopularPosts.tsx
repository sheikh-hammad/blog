import React from "react";
import { blogPost } from "../data/types";
import Blogs from "./Blogs";
import Heading from "./Heading";
import Link from "next/link";

const PopularPosts = () => {
  return (
    <>
      <section className="bg-[#FAFAFA]  px-4 py-8 sm:px-[25px] md:px-[120px]  2xl:px-60 3xl:px-[300px] xl:px-[150px] lg:px-[100px]">
        <Heading />
        <div className="grid grid-cols-3 gap-4">
          {blogPost.map((product) => (
            <Link key={product.id} href={`/blogposts/${product.id}`}>
              <Blogs {...product} />
            </Link>
          ))}
        </div>
      </section>
    </>
  );
};

export default PopularPosts;
