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
    <div className="shadow rounded-2xl w-fit bg-black/5 outline outline-orange-950 ">
      <Image
        objectFit="cover"
        className="rounded-t-2xl"
        alt={imageAlt}
        src={image}
        width={width}
        height={height}
        loading="eager"
      />
      <div className="p-3 h-40 flex flex-col justify-between">
        <div className="">
          <p>{category}</p>
          <Divider padding="pt-2" />
          <p
            className="font-semibold md:text-base lg:text-[1.2rem]"
            style={fontStyle({ font: Font.SERIF })}
          >
            {name}
          </p>
        </div>
        <div className="flex justify-between items-center">
          <p className="text-[1.3rem] text-[#c9a96e]">{`${price} DH`}</p>
          <SeeDetailsButton />
        </div>
      </div>
    </div>
  );
}
