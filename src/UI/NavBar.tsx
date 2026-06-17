"use client";
import { ShoppingCart } from "lucide-react";
import { fontStyle } from "../font/font";
import { Font } from "../lib/types/font";
import Link from "next/link";
import ProductsContextProvider from "../states/ProductsContextProvider";
import { useContext } from "react";
import { ProductContext } from "../states/context";

export default function NavBar() {
  const productConsumer = useContext(ProductContext);
  return (
    <ProductsContextProvider>
      <div className="flex items-center justify-between p-8 ">
        <div>
          <span className="" style={fontStyle({ font: Font.SANS_SERIF })}>
            Boutique
          </span>
          <span
            className="text-[#c9a96e]"
            style={{ ...fontStyle({ font: Font.SERIF, fontSize: "20px" }) }}
          >
            {" "}
            LUXE
          </span>
        </div>

        <div className="flex justify-center items-center gap-x-4">
          <Link href="/">
            <p
              className=""
              style={fontStyle({ font: Font.SANS_SERIF, fontSize: "13px" })}
            >
              CATALOGUE
            </p>
          </Link>

          {/* panier */}
          <Link href="/cart">
            <div className="flex gap-x-1 justify-center items-center">
              <ShoppingCart size={16} />
              <div className="relative">
                PANIER
                <div
                  className="
                  bg-[#c9a96e] text-black
                absolute -right-2.5 -top-2.5
                text-[0.6rem] rounded-full size-4 flex
                justify-center items-center text-center font-bold"
                >
                  {productConsumer?.productCartCount == null
                    ? 0
                    : productConsumer.productCartCount}
                </div>
              </div>
            </div>
          </Link>
        </div>
      </div>
    </ProductsContextProvider>
  );
}
