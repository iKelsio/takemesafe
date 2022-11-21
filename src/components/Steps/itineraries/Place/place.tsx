import { Stack, Title, Text, Radio } from "@mantine/core";
import { useId } from "@mantine/hooks";
import { useContext } from "react";
import { Context } from "../../../../pages/itineraries";

export function Place() {
  const id = useId();
  const [data, setData] = useContext(Context);

  return (
    <Stack>
      <Stack mb={30} mt={20}>
        <Title order={4}>Escolha um dos locais abaixo</Title>
        <Text opacity={0.4} size="xs">
          Defina onde ira começar seu próximo sonho
        </Text>
      </Stack>
      <Radio.Group
        value={data.place}
        onChange={(value) => {
          setData("place", value);
        }}
        w="100%">
        <Stack spacing={30}>
          {["Barcelona", "Paris", "Lisboa", "Londres"].map((text) => (
            <Radio key={id.concat(text)} color="primary" size="md" value={text} label={text} />
          ))}
        </Stack>
      </Radio.Group>
    </Stack>
  );
}
