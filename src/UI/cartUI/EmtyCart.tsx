import { ShoppingBagIcon } from "lucide-react";
import Link from "next/link";

export default function EmtyCart() {
  return (
    <div className="w-full h-full  flex flex-col justify-center items-center gap-4">
      <ShoppingBagIcon size={50} />
      <p className="text-[0.7rem] md:text-[0.9rem] lg:text-2xl">
        Votre panier est vide
      </p>
      <p className="text-[0.9rem] text-center tracking-tight text-gray-400">
        Découvrez notre catalogue et ajoutez vos produits préférés.
      </p>
      <Link href={"/"}>
        <div
          className={`
            py-2.5
            px-5
            text-[1rem]
        md:text-[0.9rem]
        outline-1 outline-gray-800 
        rounded cursor-pointer bg-[#c9a96e] 
        tracking-wider font-medium text-[#9a6505]`}
        >
          VOIR LE CATALOGUE
        </div>
      </Link>
    </div>
  );
}
