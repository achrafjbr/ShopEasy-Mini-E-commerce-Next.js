"use client";
import { Quantity } from "@/src/lib/types/product";

interface QuantityButton {
  onClick: () => void;
  quantityType: Quantity;
}

function QuantityButton({ onClick, quantityType }: QuantityButton) {
  return (
    <div
      onClick={onClick}
      className="bg-gray-50 cursor-pointer text-2xl flex justify-center 
    items-center size-6 rounded text-gray-800"
    >
      {quantityType === Quantity.INCREMENT ? "+" : "-"}
    </div>
  );
}

export default QuantityButton;
