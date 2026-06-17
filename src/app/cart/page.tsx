import { shoppingCart } from "@/src/lib/data/product";
import EmtyCart from "@/src/UI/cartUI/EmtyCart";
import ProductsCart from "@/src/UI/cartUI/ProductsCart";
import { Agbalumo } from "next/font/google";

const s = Agbalumo({
  subsets: ["latin"],
  weight: ["400"],
});

export default function Card() {
  return <ProductsCart />;
}
