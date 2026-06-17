"use client";
import { useContext } from "react";
import EmtyCart from "./EmtyCart";
import { ProductContext } from "@/src/states/context";

export default function ProductsCart() {
  const productConsumer = useContext(ProductContext);
  return productConsumer!.products.length == 0 ? <EmtyCart /> : <div>Card</div>;
}
