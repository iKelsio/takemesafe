import { useMantineTheme } from "@mantine/core";
import { IconProps } from "./icon.types";
import { icons } from "./icons";

export function Icon({ name, ...props }: IconProps) {
  const Component = icons[name];

  return <Component {...props} />;
}
