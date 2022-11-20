import {
  Button,
  PasswordInput,
  Text,
  TextInput,
  Title,
  Anchor,
  Divider,
  Group,
  Stack,
} from "@mantine/core";
import Link from "next/link";
import { Icon, IconName } from "../components";
import styles from "../styles/Login.module.scss";

export default function Login({ data }: any) {
  return (
    <main>
      <div className={styles.image} />
      <Stack py={40} px={24}>
        <Title order={1}>Bem vindo!</Title>
        <TextInput placeholder="Seu Email" radius={12} size="lg" />
        <PasswordInput placeholder="Senha" type="password" size="lg" radius={12} />
        <Button variant="filled" size="lg" radius={12}>
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
