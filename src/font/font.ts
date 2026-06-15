import { Aboreto } from "next/font/google";
import { Style } from "../lib/types/style";

export const alberto = Aboreto({
  subsets: ["latin"],
  weight: ["400"],
});

export const fontStyle = ({
  letterSpacing = "0.18rem",
  color,
  font,
  fontSize,
}: Style) => {
  return {
    fontFamily: font,
    letterSpacing: letterSpacing,
    color: color,
    fontSize: fontSize,
  };
};
