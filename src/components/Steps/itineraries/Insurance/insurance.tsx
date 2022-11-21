import {
  Box,
  Stack,
  Title,
  Text,
  Radio,
  Slider,
  Group,
  Badge,
  Card,
  Collapse,
  Button,
} from "@mantine/core";
import { useId } from "@mantine/hooks";
import { IconStar } from "@tabler/icons";
import { useContext, useState } from "react";
import { Context } from "../../../../pages/itineraries";

export function Insurance() {
  const id = useId();
  const [data, setData] = useContext(Context);
  const [days, setDays] = useState<number>(1);

  return (
    <Stack>
      <Stack mb={15} mt={20}>
        <div>
          <Badge variant="filled">Seguro Obrigatório no país</Badge>
        </div>
        <Title order={4}>Escolhe o seguro ideal pra você</Title>
        <Text opacity={0.4} size="xs">
          Escolha o seguro de acorco com sua necessidade?
        </Text>
      </Stack>

      <Radio.Group
        value={data.insurance}
        onChange={(value) => {
          setData("insurance", value);
        }}
        w="100%">
        <Stack spacing={30}>
          {[
            { name: "Total", discount: 10, price: "€ 94.80" },
            { name: "Parcial", discount: 5, price: "€ 70.90" },
            { name: "Mínimo", discount: 0, price: "€ 45.90" },
          ].map((text, i) => (
            <Card
              shadow="sm"
              p="md"
              key={id.concat(text.name)}
              radius="md"
              withBorder
              onClick={() => setData("insurance", text.name)}>
              <Card.Section p="md" bg={text.name === data.insurance ? "primary.9" : ""}>
                <Box display="flex" sx={{ justifyContent: "space-between", alignItems: "center" }}>
                  <Group>
                    <Radio value={text.name} />
                    <Stack spacing={2}>
                      <Title order={5}>Seguro {text.name}</Title>
                      <Text size="xs">
                        {text.discount > 0 ? `${text.discount}% de desconto` : ""}
                      </Text>
                    </Stack>
                  </Group>
                  <Box>
                    <Stack spacing={2}>
                      <Title order={5}>{text.price}</Title>
                      <Text size="xs">Por semana</Text>
                    </Stack>
                  </Box>
                </Box>
              </Card.Section>
              <Collapse in={text.name === data.insurance}>
                <Group position="apart" mt="md" mb="xs" p={24}>
                  <Title order={4}>Esta opção inclui:</Title>
                  {[
                    "Emergências médicas",
                    "Emergências odontológicas",
                    "Assistência jurídica",
                    "Auxílio no extravio de bagagens",
                  ].map((str) => (
                    <Group color="primary" key={str}>
                      <IconStar fill="#057044" color="#057044" size={10} />
                      <Text size="sm">{str}</Text>
                    </Group>
                  ))}
                </Group>
              </Collapse>
            </Card>
          ))}
        </Stack>
      </Radio.Group>
    </Stack>
  );
}
