import { MantineThemeOverride } from "@mantine/core";

import { palette } from "./palette";
import { typography } from "./typography";

export const theme: MantineThemeOverride = {
  dir: "ltr",
  loader: "bars",
  dateFormat: "DD/MM/YYYY",
  datesLocale: "en",
  focusRing: "auto",
  respectReducedMotion: true,
  cursorType: "pointer",
  defaultRadius: "sm",
  transitionTimingFunction: "ease-out",
  ...typography,
  ...palette,
  breakpoints: {
    xs: 576,
    sm: 768,
    md: 992,
    lg: 1200,
    xl: 1400,
  },
  components: {},
  other: {},
};
