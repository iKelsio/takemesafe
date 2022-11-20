import { MantineThemeOverride } from "@mantine/core";

export type Palette = Pick<MantineThemeOverride, "white" | "black" | "primaryColor" | "colors">;

export type Typography = Pick<
  MantineThemeOverride,
  "fontFamily" | "lineHeight" | "fontSizes" | "spacing" | "radius" | "headings"
>;
