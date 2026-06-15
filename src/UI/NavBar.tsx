import { ShoppingCart } from "lucide-react";
import { fontStyle } from "../font/font";
import { Font } from "../lib/types/font";
import Link from "next/link";

export default function NavBar() {
  return (
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
          <div className="flex gap-x-2.5 justify-center items-center">
            <ShoppingCart size={16} />
            <p
              className=""
              style={fontStyle({ font: Font.SANS_SERIF, fontSize: "13px" })}
            >
              PANIER
            </p>
          </div>
        </Link>
      </div>
    </div>
  );
}
