import { Box, Stack, Title, Text, Radio, Slider, Group } from "@mantine/core";
import { useId } from "@mantine/hooks";
import { useContext, useState } from "react";
import { Context } from "../../../../pages/itineraries";

export function Time() {
  const id = useId();
  const [data, setData] = useContext(Context);

  return (
    <Stack>
      <Stack mb={30} mt={20}>
        <Title order={4}>Mostre quanto tempo quer passar</Title>
        <Text opacity={0.4} size="xs">
          Quanto tempo quer passar de ferias?
        </Text>
      </Stack>
      <Group>
        <Slider
          step={1}
          max={15}
          min={1}
          value={data.days}
          onChange={(value) => setData("days", value)}
          w="75%"
        />
        <Text>
          {data.days} dia{data.days > 1 ? "s" : ""}
        </Text>
      </Group>
      <Title order={4}>Em qual temporada tem preferência?</Title>

      <Radio.Group value={data.weather} onChange={(value) => setData("weather", value)} w="100%">
        <Stack spacing={30}>
          {["Verão", "Inverno", "Outono", "Primavera"].map((text, i) => (
            <Radio key={id.concat(`${i}`)} color="primary" size="md" label={text} value={text} />
          ))}
        </Stack>
      </Radio.Group>
    </Stack>
  );
}
