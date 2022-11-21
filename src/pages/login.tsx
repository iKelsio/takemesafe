import { Button, PasswordInput, Text, TextInput, Title, Anchor, Stack, Image } from "@mantine/core";
import Link from "next/link";
import { useRouter } from "next/router";

export default function Login({ data }: any) {
  const router = useRouter();
  return (
    <main>
      <Image src="/Login.png" withPlaceholder alt="" height={312} fit="contain" />
      <Stack py={40} px={24}>
        <Title order={1}>Bem vindo!</Title>
        <TextInput placeholder="Seu Email" radius={12} size="lg" />
        <PasswordInput placeholder="Senha" type="password" size="lg" radius={12} />
        <Button
          variant="filled"
          onClick={() => {
            router.push("/");
          }}
          size="lg"
          radius={12}>
          Login
        </Button>
        <Text size="xs" align="center">
          Não tem conta?{" "}
          <Link href="/">
            <Anchor weight="bold" component="span">
              Faça o cadastro
            </Anchor>
          </Link>
        </Text>
      </Stack>
    </main>
  );
}
