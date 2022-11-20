import { Stack, Title, Text, Image, Chip, Checkbox, Group, Textarea } from "@mantine/core";
import { Card } from "../../../../features";
import { useState } from "react";

export function Checklist() {
  const [value, setValue] = useState<string>();

  return (
    <Stack>
      <Stack mb={30} mt={20}>
        <Title order={4}>Confira seu checklist de viagem</Title>
        <Text opacity={0.4} size="xs">
          Listamos as informçoes mais importante pra você!
        </Text>
      </Stack>

      <Image
        src={null}
        withPlaceholder
        alt=""
        radius={16}
        caption={
          <Stack align="flex-start" mt={24}>
            <Title order={4} color="black">
              Sobre barcelona
            </Title>
            <Text align="left">
              Contamos um pouco sobre a experiência de nossos viajantes em Barcelona, a cidade é
              conhecida por sua arte e arquitetura.
            </Text>
          </Stack>
        }
      />
      <Stack mb={30} mt={20}>
        <Title order={4}>O tempo na sua viagem</Title>
        <Text opacity={0.4} size="xs">
          A previsão é de dia ensolarados repletos de aventuras!
        </Text>
        <Image alt="" src={null} withPlaceholder my={24} />
      </Stack>
      <Stack mb={30} mt={20}>
        <Title order={4}>Cheklist de documentos importantes</Title>
        <Text opacity={0.4} size="xs">
          Não esqueca de levar os seguintes documentos para sua viagem:
        </Text>
      </Stack>
      <Checkbox.Group>
        <Stack spacing={30}>
          {[
            "Documento de identificação",
            "Exame Covid Negativo",
            "Passaporte",
            "Visto do País",
            "Certificado de Direcção",
          ].map((text) => (
            <Checkbox label={text} value={text} key={text} />
          ))}
        </Stack>
      </Checkbox.Group>
      <Stack>
        <Title order={4}>Experiências pra viver</Title>
        <Group noWrap sx={{ overflowX: "scroll" }}>
          {Array.from(Array(10)).map((_, i) => (
            <Card key={i ** 2} noImg />
          ))}
        </Group>
      </Stack>
      <Stack>
        <Title order={4}>Adicione observações para lembrar</Title>
        <Textarea placeholder="Não se esqueça de...." radius={12} />
      </Stack>
    </Stack>
  );
}
