import { MantineColor } from "@mantine/core";
import { TablerIconProps } from "@tabler/icons";
import { type icons } from "./icons";

export type IconName = keyof typeof icons;

export interface IconProps extends Omit<TablerIconProps, "name" | "color"> {
  name: IconName;
  color?: MantineColor;
}
