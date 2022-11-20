import { Stack, TextInput, Title } from "@mantine/core";

export function NameForm() {
  return (
    <Stack pt={269} px={24}>
      <Title align="center">Logo</Title>
      <Title order={2} align="center">
        Digite Seu Nome
      </Title>
      <TextInput size="lg" placeholder="Insira seu nome" />
    </Stack>
  );
}
