import { Agbalumo } from "next/font/google";
import { Font } from "../lib/types/font";
import { fontStyle } from "../font/font";
import { products } from "../lib/data/product";
import ProductCard from "../UI/productUI/ProductCard";
import Divider from "../UI/Divider";

const s = Agbalumo({
  subsets: ["latin"],
  weight: ["400"],
});

export default function Home() {
  return (
    <div className={"p-8"}>
      <div className="w-[50%] ">
        <p className="pt-5 font-serif lg:text-7xl md:text-2xl">Tech Premium,</p>
        <p
          className={`pt-3 text-[#c9a96e] font-serif lg:text-7xl md:text-2xl ${s.className}`}
        >
          Prix Exclusifs.
        </p>
        <p
          className="py-8 text-start sm:text-balance md:text-base"
          style={fontStyle({
            font: Font.SANS_SERIF,
            letterSpacing: "0.0rem",
          })}
        >
          Découvrez notre sélection des meilleures technologies. Chaque produit
          est soigneusement choisi pour vous offrir le meilleur de linnovation.
        </p>
      </div>

      <p className="text-[1.2rem]"> 7 product </p>
      <Divider padding="pt-8" />
      <ProductCard {...products[0]} />
    </div>
  );
}
