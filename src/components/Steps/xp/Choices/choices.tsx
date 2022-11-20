import { Chip, Progress, Stack, Text, Title, createStyles } from "@mantine/core";
import { useId } from "@mantine/hooks";
import { useState } from "react";

export const useStyles = createStyles((theme, _params, getRef) => ({
  label: {
    "&": {
      border: "none",
      boxShadow: theme.shadows.xs,
    },
    "&[data-checked]": {
      "&, &:hover": {
        backgroundColor: theme.colors.primary[9],
        color: theme.black,
      },

      [`& .${getRef("iconWrapper")}`]: {
        color: theme.white,
      },
    },
  },

  iconWrapper: {
    ref: getRef("iconWrapper"),
  },
}));

export function Choices() {
  const id = useId("Choice");
  const { classes } = useStyles();
  const [value, setValue] = useState<string[]>([]);

  return (
    <Stack p={24} mb={50}>
      <Progress value={50} />
      <Stack my={30}>
        <Title order={2}>Personalize sua experiência</Title>
        <Text size="xs" opacity={0.4}>
          Escolha seus interesses
        </Text>
      </Stack>
      <Chip.Group value={value} onChange={setValue} multiple w="100%" grow align="center">
        <Stack>
          {["Montanhas", "Praia", "Aventuras", "Natureza", "Frio", "Cultura", "Comida"].map(
            (text, i) => (
              <Chip
                key={id.concat(`${i}`)}
                classNames={classes}
                color="primary"
                width="100%"
                radius={12}
                size="xl"
                value={text}>
                {text}
              </Chip>
            )
          )}
        </Stack>
      </Chip.Group>
    </Stack>
  );
}
