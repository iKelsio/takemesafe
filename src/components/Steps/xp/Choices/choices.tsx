import { Chip, Progress, Stack, Text, Title, createStyles, Checkbox } from "@mantine/core";
import { useId } from "@mantine/hooks";
import { useState } from "react";

export function Choices() {
  const id = useId("Choice");
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
      <Checkbox.Group value={value} onChange={setValue} w="100%">
        <Stack>
          {["Montanhas", "Praia", "Aventuras", "Natureza", "Frio", "Cultura", "Comida"].map(
            (text, i) => (
              <Checkbox
                key={id.concat(`${i}`)}
                color="primary"
                size="md"
                value={text}
                label={text}
              />
            )
          )}
        </Stack>
      </Checkbox.Group>
    </Stack>
  );
}
