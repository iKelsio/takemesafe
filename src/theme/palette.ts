import { Palette } from "./theme.types";

export const palette: Palette = {
  white: "#F9F9F9",
  black: "#000",
  primaryColor: "primary",
  colors: {
    primary: Array.from(Array(9))
      .map((_) => "#057044")
      .concat(["#D6F3E0"]) as any,
  },
};
