import React from "react";
import Link from "next/link";
import Blogs from "./Blogs";
import { blogPost } from "../data/types";

const NewRecentPosts = () => {
  return (
    <section className="bg-[#FAFAFA] grid grid-cols-3 gap-4 px-4 py-8 sm:px-[25px] md:px-[120px]  2xl:px-60 3xl:px-[300px] xl:px-[150px] lg:px-[100px]">
      {blogPost.slice(0, 3).map((product) => (
        <Link key={product.id} href={`/blogposts/${product.id}`}>

        <Blogs key={product.id} {...product} />
        </Link>
      ))}
    </section>
  );
};

export default NewRecentPosts;
