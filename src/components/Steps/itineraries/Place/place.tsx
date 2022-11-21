import { Box, Stack, Title, Text, Radio, Checkbox } from "@mantine/core";
import { useId } from "@mantine/hooks";
import { useState } from "react";

export function Place() {
  const id = useId();
  const [value, setValue] = useState("");

  return (
    <Stack>
      <Stack mb={30} mt={20}>
        <Title order={4}>Escolha um dos locais abaixo</Title>
        <Text opacity={0.4} size="xs">
          Defina onde ira começar seu próximo sonho
        </Text>
      </Stack>
      <Radio.Group value={value} onChange={setValue} w="100%">
        <Stack spacing={30}>
          {["Barcelona", "Paris", "Lisboa", "Londres"].map((text) => (
            <Radio key={id.concat(text)} color="primary" size="md" value={text} label={text} />
          ))}
        </Stack>
      </Radio.Group>
    </Stack>
  );
}
