import { Product } from "@/src/lib/types/product";
import Image from "next/image";
import React from "react";
import Divider from "../Divider";
import { fontStyle } from "@/src/font/font";
import { Font } from "@/src/lib/types/font";
import SeeDetailsButton from "./SeeDetailsButton";

export default function ProductCard({
  category,
  description,
  height,
  id,
  image,
  imageAlt,
  name,
  price,
  slug,
  width,
}: Product) {
  return (
    <div className=" w-full min-w-0 shadow rounded-2xl bg-black/5 outline outline-gray-800">
      {" "}
      <div className="relative rounded-t-md w-full aspect-square overflow-hidden ">
        <Image
          src={image}
          alt={imageAlt}
          fill
          className="object-cover transition-transform duration-300 hover:scale-110"
        />
      </div>
      <div className="p-4 h-40 flex flex-col justify-between">
        <div className="">
          <p
            className=" text-gray-400"
            style={fontStyle({ font: Font.SANS_SERIF, fontSize: "14px" })}
          >
            {category}
          </p>

          <Divider padding="pt-2" />
          <p
            className="font-semibold md:text-base lg:text-[1.2rem]"
            style={fontStyle({ font: Font.SERIF })}
          >
            {name}
          </p>
        </div>

        <div className="flex justify-between items-center">
          <p className="text-[1.2rem] text-[#c9a96e]">{`${price} DH`}</p>
          <SeeDetailsButton
            category={category}
            description={description}
            id={id}
            image={image}
            imageAlt={imageAlt}
            name={name}
            price={price}
            slug={slug}
            width={0}
            height={0}
          />
        </div>
      </div>
    </div>
  );
}
