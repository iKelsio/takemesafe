import { Box, Stack, Title, Text, Chip, Radio } from "@mantine/core";
import { useId } from "@mantine/hooks";
import { useContext, useState } from "react";
import { Context } from "../../../../pages/itineraries";

export function Budget() {
  const id = useId();
  const [data, setData] = useContext(Context);

  return (
    <Stack>
      <Stack mb={30} mt={20}>
        <Title order={4}>Seleciona seu orçamento disponivel</Title>
        <Text opacity={0.4} size="xs">
          Quanto podemos investir nessa aventura?
        </Text>
      </Stack>
      <Radio.Group value={data.budget} onChange={(value) => setData("budget", value)}>
        <Stack spacing={30}>
          {[
            {
              title: "Alto",
              description: "Ideal",
              price: "€ 1000-1500",
              per: "Por Semana",
            },
            { title: "Médio", description: "Economico", price: "€ 700-1300", per: "Por Semana" },
            { title: "Baixo", description: "Sustentavel", price: "€ 500-1000", per: "Por Semana" },
          ].map((text) => (
            <Radio
              key={id.concat(text.title)}
              color="primary"
              size="md"
              p={16}
              bg={text.title === data.budget ? "primary.9" : ""}
              sx={{ borderRadius: 12 }}
              label={
                <Box
                  display="flex"
                  sx={{
                    justifyContent: "space-between",
                    alignItems: "center",
                    gap: 95,
                  }}>
                  <Stack>
                    <Title order={5}>{text.title}</Title>
                    <Text>{text.description}</Text>
                  </Stack>
                  <Stack>
                    <Title order={5}>{text.price}</Title>
                    <Text>{text.per}</Text>
                  </Stack>
                </Box>
              }
              value={text.title}
            />
          ))}
        </Stack>
      </Radio.Group>
    </Stack>
  );
}
