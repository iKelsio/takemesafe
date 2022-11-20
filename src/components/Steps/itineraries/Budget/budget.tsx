import { Box, Stack, Title, Text, Chip } from "@mantine/core";
import { useId } from "@mantine/hooks";
import { useState } from "react";
import { useStyles } from "../../xp/Choices";

export function Budget() {
  const id = useId();
  const { classes } = useStyles();
  const [value, setValue] = useState<string[]>([]);

  return (
    <Stack>
      <Stack mb={30} mt={20}>
        <Title order={4}>Seleciona seu orçamento disponivel</Title>
        <Text opacity={0.4} size="xs">
          Quanto podemos investir nessa aventura?
        </Text>
      </Stack>
      <Chip.Group value={value} onChange={setValue} multiple w="100%" grow align="center">
        <Stack spacing={30}>
          {["Alto", "Médio", "Baixo"].map((text, i) => (
            <Chip
              key={id.concat(`${i}`)}
              classNames={classes}
              color="primary"
              radius={12}
              size="xl"
              value={text}>
              <Text>{text.toUpperCase()}</Text>
              {text}
            </Chip>
          ))}
        </Stack>
      </Chip.Group>
    </Stack>
  );
}
