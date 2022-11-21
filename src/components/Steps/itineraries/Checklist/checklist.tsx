import { Stack, Title, Text, Image, Checkbox, Group, Textarea, Button } from "@mantine/core";
import { Card } from "../../../../features";
import { FormEventHandler, useContext } from "react";
import { Context } from "../../../../pages/itineraries";
import { useCallback } from "react";
import { useRouter } from "next/router";

export function Checklist({ activities }: any) {
  const router = useRouter();
  const [data, setData] = useContext(Context);

  const handleSubmit: FormEventHandler = useCallback(
    async (event) => {
      event.preventDefault();
      const submit = await fetch("/api/v1/data", {
        method: "POST",
        body: JSON.stringify(data),
      }).then(async (res) => res.json());
      router.push("/");
    },
    [data, router]
  );

  return (
    <Stack>
      <Stack mb={30} mt={20}>
        <Title order={4}>Confira seu checklist de viagem</Title>
        <Text opacity={0.4} size="xs">
          Listamos as informçoes mais importante pra você!
        </Text>
      </Stack>

      <Image
        src="/city.png"
        withPlaceholder
        alt=""
        radius={16}
        caption={
          <Stack align="flex-start" mt={24}>
            <Title order={4} color="black">
              Sobre {data.place}
            </Title>
            <Text align="left">
              Contamos um pouco sobre a experiência de nossos viajantes em {data.place}, a cidade é
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
        <Image alt="" src="/clouds.png" withPlaceholder my={24} />
      </Stack>
      <Stack mb={30} mt={20}>
        <Title order={4}>Cheklist de documentos importantes</Title>
        <Text opacity={0.4} size="xs">
          Não esqueca de levar os seguintes documentos para sua viagem:
        </Text>
      </Stack>
      <Checkbox.Group value={data.docs} onChange={(value) => setData("docs", value)}>
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
          {(activities as Array<Record<"name" | "description", string>>).map((activity) => (
            <Card key={activity.name} noImg name={activity.name} txtBtn="Salvar Evento" />
          ))}
        </Group>
      </Stack>
      <form onSubmit={handleSubmit}>
        <Stack>
          <Title order={4}>Adicione observações para lembrar</Title>
          <Textarea
            placeholder="Não se esqueça de...."
            radius={12}
            value={data.obs}
            onChange={(input) => setData("obs", input.target.value)}
          />
          <Button type="submit">Concluir Roteiro</Button>
        </Stack>
      </form>
    </Stack>
  );
}
