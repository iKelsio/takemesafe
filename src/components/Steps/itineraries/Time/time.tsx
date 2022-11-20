import { Box, Stack, Title, Text, Radio, Slider, Group } from "@mantine/core";
import { useId } from "@mantine/hooks";
import { useState } from "react";

export function Time() {
  const id = useId();
  const [value, setValue] = useState<string>();
  const [days, setDays] = useState<number>(1);

  return (
    <Stack>
      <Stack mb={30} mt={20}>
        <Title order={4}>Mostre quanto tempo quer passar</Title>
        <Text opacity={0.4} size="xs">
          Quanto tempo quer passar de ferias?
        </Text>
      </Stack>
      <Group>
        <Slider step={1} max={15} min={1} value={days} onChange={setDays} w="75%" />
        <Text>
          {days} dia{days > 1 ? "s" : ""}
        </Text>
      </Group>
      <Title order={4}>Em qual temporada tem preferência?</Title>

      <Radio.Group value={value} onChange={setValue} w="100%">
        <Stack spacing={30}>
          {["Verão", "Inverno", "Outono", "Primavera"].map((text, i) => (
            <Radio key={id.concat(`${i}`)} color="primary" size="md" label={text} value={text} />
          ))}
        </Stack>
      </Radio.Group>
    </Stack>
  );
}
