"use client";

import { fontStyle } from "@/src/font/font";
import { Font } from "@/src/lib/types/font";
import { ProductContext } from "@/src/states/context";
import { useContext } from "react";
import ProductCartCard from "./ProductCartCard";

export default function ProductCartList() {
  const productConsumer = useContext(ProductContext);
  return (
    <div>
      <p className="text-[0.8rem] text-gray-400 tracking-widest">
        {`${productConsumer!.products.length}`} ARTICLES
      </p>
      <p
        className="lg:text-3xl text-[1rem]"
        style={fontStyle({ font: Font.SANS_SERIF })}
      >
        Mon Panier
      </p>
      <ProductCartCard />
    </div>
  );
}
