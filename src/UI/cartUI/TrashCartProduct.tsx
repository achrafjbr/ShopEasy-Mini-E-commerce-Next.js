"use client";
import { ProductContext } from "@/src/states/context";
import { Trash2 } from "lucide-react";
import { useContext } from "react";

export default function TrashCartProduct({ id }: { id: number }) {
  const productConsumer = useContext(ProductContext);
  return (
    <div
      onClick={() => productConsumer!.deleteProduct(id)}
      className=" text-gray-500 hover:text-red-400 transition duration-150"
    >
      <Trash2 size={18} />
    </div>
  );
}
