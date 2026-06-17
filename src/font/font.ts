import { Style } from "../lib/types/style";

export const fontStyle = ({
  letterSpacing = "0.15rem",
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
