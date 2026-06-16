import { getProductById } from "@/src/actions/cart";
import { fontStyle } from "@/src/font/font";
import { Font } from "@/src/lib/types/font";
import Divider from "@/src/UI/Divider";
import AddToCartButton from "@/src/UI/productUI/AddToCartButton";
import { MoveLeft, Tag } from "lucide-react";
import { redirect } from "next/navigation";
import Image from "next/image";
import Link from "next/link";

type ProductDetailsParamsType = {
  params: Promise<{ id: number }>;
};

export default async function ProductDetails({
  params,
}: ProductDetailsParamsType) {
  const { id } = await params;

  const product = await getProductById(id);

  if (!product) {
    redirect("/");
  }

  return (
    <div>
      <Link href={"/"}>
        <div
          style={fontStyle({ font: Font.SANS_SERIF, fontSize: "10px" })}
          className="flex gap-x-1.5 justify-start items-center text-gray-400"
        >
          <MoveLeft size={16} />
          RETOUR
        </div>
      </Link>
      <Divider padding="pt-10" />

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-9">
        <div className="relative rounded-t-md w-full h-[80%] aspect-square">
          <Image
            fill
            src={product!.image}
            alt={product!.imageAlt}
            className="object-cover rounded-2xl"
          />
        </div>

        <div className="h-[80%]">
          <div className="h-[50%]">
            <div className="flex py-6 items-center gap-5 text-gray-400">
              <Tag size={15} />
              <p style={fontStyle({ font: Font.SANS_SERIF, fontSize: "12px" })}>
                {product?.category.toUpperCase()}
              </p>
            </div>

            <p
              className="sm:text-2xl lg:text-3xl"
              style={fontStyle({ font: Font.SANS_SERIF })}
            >
              {product?.name}
            </p>

            <Divider padding="pt-5" />

            <p
              className="sm:text-2xl lg:text-3xl text-[#c9a96e]"
              style={fontStyle({ font: Font.SERIF })}
            >
              {product?.price + " DH"}
            </p>
          </div>

          <div className="">
            <p className="text-[0.9rem] lg:text-[1rem] md:text-[0.9rem]">
              {product?.description}
            </p>

            <Divider padding="pt-7" />

            <AddToCartButton {...product!} />
          </div>
        </div>
      </div>
    </div>
  );
}
