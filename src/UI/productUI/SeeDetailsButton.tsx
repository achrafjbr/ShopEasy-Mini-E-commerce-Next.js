"use client";
import { MoveRight } from "lucide-react";

export default function SeeDetailsButton() {
  return (
    <div
      onClick={() => console.log("Hello")}
      className={`
        text-[0.8rem] px-5
        flex gap-x-2 justify-between items-center
        py-2 
        outline-1 outline-gray-800 
        rounded cursor-pointer hover:bg-[#c9a96e]`}
    >
      Voir détails
      <MoveRight size={10} />
    </div>
  );
}
