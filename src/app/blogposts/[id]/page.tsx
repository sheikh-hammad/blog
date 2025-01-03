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
  const product = Prods.find((product) => product.id === parseInt(params.id));

  if (!product) {
    return <p>not found</p>;
  }

  return (
    <div className="pt-[57px] pb-[173px] px-4 sm:px-[25px] md:px-[120px]  2xl:px-60 3xl:px-[265px] xl:px-[150px] lg:px-[100px]">
      {/* {Prods.map((blog) => ( */}
        <div key={params.id}>
          <Post desc3={product.desc3} desc2={product.desc2} quote={product.quote} alt={product.alt} desc1={product.desc1} src={product.src} title={product.title} date={product.date} heading={product.heading} />
        </div>
      {/* ))} */}
      <CommentSection/>
    </div>
  );
}

export default ProductPage;
