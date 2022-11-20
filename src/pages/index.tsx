import { Box, Button, Group, Image, Stack, Text, Title } from "@mantine/core";
import { IconPlus } from "@tabler/icons";
import { Card } from "../features";
export default function Home({}: any) {
  const has = false;

  return (
    <Stack spacing={40} px={16} pb={10}>
      <Title pt={24}>Oie, Matheus</Title>
      <Stack mb={40}>
        <Title order={5}>Recomendados</Title>
        <Group noWrap sx={{ overflowX: "scroll" }}>
          {Array.from(Array(10)).map((_, i) => (
            <Card key={i ** 2} />
          ))}
        </Group>
      </Stack>
      <Stack spacing={16}>
        <Title order={5}>Seus Roteiros</Title>
        {has ? (
          <></>
        ) : (
          <>
            <Image
              height={116}
              src={null}
              caption={
                <>
                  <Text size="sm">Você ainda não possui Roteiros</Text>
                  <Text opacity={0.4}>Crie Já suas aventuras</Text>
                </>
              }
              alt=""
              withPlaceholder
            />
            <Button leftIcon={<IconPlus />} color="blue" variant="subtle">
              Criar novo roteiro
            </Button>
          </>
        )}
      </Stack>
      <Stack>
        <Title order={5}>Nas suas proximidades</Title>
        <Group noWrap sx={{ overflowX: "scroll" }}>
          {Array.from(Array(10)).map((_, i) => (
            <Card key={i ** 2} />
          ))}
        </Group>
      </Stack>
    </Stack>
  );
}
