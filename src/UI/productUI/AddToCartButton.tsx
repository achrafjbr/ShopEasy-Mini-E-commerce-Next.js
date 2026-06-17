"use client";
import { addToPanier } from "@/src/actions/cart";
import { Product, ProductState } from "@/src/lib/types/product";
import { MoveRight, ShoppingCart } from "lucide-react";
import { startTransition, useActionState, useContext, useState } from "react";
import Divider from "../Divider";
import { ProductContext } from "@/src/states/context";
import { useRouter } from "next/navigation";

export default function AddToCartButton(product: Product) {
  // const initialState: ProductState = {
  //   isAdded: false,
  // };

  // const [state, addProductToPanier, pending] = useActionState(
  //   addToPanier,
  //   initialState,
  // );
  const productConsumer = useContext(ProductContext);
  const router = useRouter();

  return (
    <div>
      <div
        onClick={() => {
          startTransition(() => {
            //addProductToPanier(product);
            productConsumer!.addProduct(product);
          });
        }}
        className={`
        text-[0.8rem] px-5
        flex gap-x-2 justify-center items-center
        py-5
        outline-1 outline-gray-800 
        rounded cursor-pointer bg-[#c9a96e] tracking-wider font-medium text-[#523602]`}
      >
        {productConsumer!.pending ? (
          "Loading..."
        ) : (
          <div className="flex gap-x-1 justify-center items-center">
            <ShoppingCart size={19} /> AJOUTER AU PANIER
          </div>
        )}
      </div>

      <Divider padding="pt-2" />
      {productConsumer!.isAdded && (
        <div
          onClick={() => router.push("/cart")}
          className={`
        text-[0.8rem] px-5
        flex gap-x-2 justify-center items-center
        py-5
        outline-1 outline-gray-800 
        rounded cursor-pointer hover:outline-[#c9a96e]
        tracking-wider font-medium text-white
      `}
        >
          VOIR LE PANIER
          <MoveRight size={19} />
        </div>
      )}
    </div>
  );
}
