"use client";
import { ProductContext } from "@/src/states/context";
import Image from "next/image";
import { useContext } from "react";
import TrashCartProduct from "./TrashCartProduct";
import { fontStyle } from "@/src/font/font";
import { Font } from "@/src/lib/types/font";
import Divider from "../Divider";

export default function ProductCartCard() {
  const productConsumer = useContext(ProductContext);

  return (
    <div className="items-start grid sm:grid-cols-1 lg:grid-cols-[2fr_1fr]  mt-3 gap-4  ">
      <div className=" grid grid-cols-1 gap-y-3.5  ">
        {productConsumer!.products.map((product) => (
          <div
            key={product.item.id}
            className="p-3 rounded outline-1 outline-gray-400 gap-y-3.5 bg-gray-950/10"
          >
            <div className="flex justify-between">
              <div className="flex gap-x-2">
                <Image
                  className="object-cover rounded"
                  width={100}
                  height={100}
                  src={product.item.image}
                  alt={product.item.imageAlt}
                />
                <div className="flex flex-col justify-between">
                  <p className="font-semibold">{product.item.name}</p>
                  <p>{product.count}</p>
                </div>
              </div>

              <div className="flex flex-col justify-between items-end">
                <TrashCartProduct id={product.item.id} />
                <p className="text-[#c9a96e]">{`${product.item.price} DH`}</p>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Passer le commande */}
      <div className="p-3 self-start rounded outline-1  outline-gray-400  bg-gray-950/10 ">
        <p
          className="font-semibold"
          style={fontStyle({ font: Font.SERIF, fontSize: "14px" })}
        >
          Récapitulatif
        </p>
        <Divider padding="pt-4" />
        {productConsumer!.products.map((product) => (
          <div
            key={product.item.id}
            className="px-1 text-gray-400 flex justify-between"
          >
            <p
              className="font-light"
              style={fontStyle({ font: Font.SERIF, fontSize: "12px" })}
            >
              {`${product.item.name} X ${product.count}`}
            </p>
            <p
              className="font-extralight"
              style={fontStyle({ font: Font.SERIF, fontSize: "12px" })}
            >
              {`${product.item.price} DH`}
            </p>
          </div>
        ))}
        <Divider padding="pt-1" />
        <hr className=" bg-gray-600" />
        <Divider padding="pt-3" />
        <div className="flex justify-between ">
          <p>TOTAL</p>
          <p
            className="text-[#c9a96e] text-2xl "
            style={fontStyle({ font: Font.SANS_SERIF })}
          >{`${productConsumer!.totalArticles()} DH`}</p>
        </div>
        <Divider padding="pt-3" />
        <div
          className={` text-center py-2.5 px-5 text-[1rem] md:text-[0.9rem] outline-1 outline-gray-800 
            rounded cursor-pointer bg-[#c9a96e] 
        tracking-wider font-medium text-[#9a6505]`}
        >
          PASSER LA COMMAND
        </div>
      </div>
    </div>
  );
}
