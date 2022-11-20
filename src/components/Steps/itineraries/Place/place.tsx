import { Box, Stack, Title, Text, Chip } from "@mantine/core";
import { useId } from "@mantine/hooks";
import { useState } from "react";
import { useStyles } from "../../xp/Choices";

export function Place() {
  const id = useId();
  const { classes } = useStyles();
  const [value, setValue] = useState<string[]>([]);

  return (
    <Stack>
      <Stack mb={30} mt={20}>
        <Title order={4}>Escolha um dos locais abaixo</Title>
        <Text opacity={0.4} size="xs">
          Defina onde ira começar seu próximo sonho
        </Text>
      </Stack>
      <Chip.Group value={value} onChange={setValue} multiple w="100%" grow align="center">
        <Stack spacing={30}>
          {["Montanhas", "Praia", "Aventuras", "Natureza"].map((text, i) => (
            <Chip
              key={id.concat(`${i}`)}
              classNames={classes}
              color="primary"
              width="100%"
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
