import React from "react";
import { Prods, Params } from "../../data/type";
import Post from "../../components/ui/Post";
import CommentSection from "@/app/components/ui/CommentSection";

export async function generateStaticParams() {
  return Prods.map((product) => ({
    id: product.id.toString(),
  }));
}

export function ProductPage({ params }: Params) {
  const blog = Prods.find((prod) => prod.id === parseInt(params.id));
  console.log({ blog });

  if (!blog) {
    return <p>not found</p>;
  }

  return (
    <div className="pt-[57px] pb-[173px] px-4 sm:px-[25px] md:px-[120px]  2xl:px-60 3xl:px-[265px] xl:px-[150px] lg:px-[100px]">
      {/* {Prods.map((blog) => ( */}
        <div key={blog.id}>
          <Post desc3={blog.desc3} desc2={blog.desc2} quote={blog.quote} alt={blog.alt} desc1={blog.desc1} src={blog.src} title={blog.title} date={blog.date} heading={blog.heading} />
        </div>
      {/* ))} */}
      <CommentSection/>
    </div>
  );
}

export default ProductPage;
