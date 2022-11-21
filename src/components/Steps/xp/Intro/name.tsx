import { Image, Stack, TextInput, Title } from "@mantine/core";

export function NameForm() {
  return (
    <Stack pt={269} px={24}>
      <Image src="/favicon.ico" alt="logo" width={67} fit="contain" m="0 auto" />
      <Title order={2} align="center">
        Digite Seu Nome
      </Title>
      <TextInput
        size="lg"
        placeholder="Insira seu nome"
        onChange={(input) => {
          window.localStorage.setItem("username", input.target.value);
        }}
      />
    </Stack>
  );
}
