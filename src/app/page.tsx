import { Agbalumo } from "next/font/google";

const s = Agbalumo({
  subsets: ["latin"],
  weight: ["400"],
});

export default function Home() {
  return (
    <div className={"p-8"}>
      <div className="w-[50%] py-10 ">
        <p className="p-1 font-serif lg:text-7xl md:text-2xl">Tech Premium,</p>
        <p
          className={`p-1 text-[#c9a96e] font-serif lg:text-7xl md:text-2xl ${s.className}`}
        >
          Prix Exclusifs.
        </p>
        <p className="pt-10 text-start sm:text-balance md:text-base">
          Découvrez notre sélection des meilleures technologies. Chaque produit
          est soigneusement choisi pour vous offrir le meilleur de linnovation.
        </p>
      </div>
    </div>
  );
}
