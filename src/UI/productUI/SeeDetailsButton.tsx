// "use client";
import { Product } from "@/src/lib/types/product";
import { MoveRight } from "lucide-react";
import Link from "next/link";

export default function SeeDetailsButton(product: Product) {
  return (
    <Link href={`/product-details/${product.id}`}>
      <div
        // onClick={() => console.log("product", product)}
        className={`
        text-[0.8rem] px-5
        flex gap-x-2 justify-between items-center
        py-2 
        outline-1 outline-gray-800 
        rounded cursor-pointer hover:transition-transform duration-200 hover:bg-[#c9a96e] hover:text-[#523602]`}
      >
        Voir détails
        <MoveRight size={10} />
      </div>
    </Link>
  );
}
