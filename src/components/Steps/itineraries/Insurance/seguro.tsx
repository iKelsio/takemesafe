import {
  Badge,
  Card,
  Checkbox,
  Group,
  Title,
  Text,
  Button,
  Stack,
  Radio,
  Box,
} from "@mantine/core";
import { IconStar } from "@tabler/icons";

export function Seguro() {
  return (
    <Card shadow="sm" p="md" radius="md" withBorder>
      <Card.Section p="md" bg="primary.9">
        <Box display="flex" sx={{ justifyContent: "space-between", alignItems: "center" }}>
          <Group>
            <Radio />
            <Stack spacing={2}>
              <Title order={5}>Seguro Total</Title>
              <Text size="xs">10% de desconto</Text>
            </Stack>
          </Group>
          <Box>
            <Stack spacing={2}>
              <Title order={5}>€ 94.80l</Title>
              <Text size="xs">Por semana</Text>
            </Stack>
          </Box>
        </Box>
      </Card.Section>

      <Group position="apart" mt="md" mb="xs" p={24}>
        <Title order={4}>Esta opção inclui:</Title>
        <Group color="primary">
          <IconStar fill="#057044" color="#057044" size={10} />
          <Text>Emergências médicas</Text>
        </Group>
      </Group>
    </Card>
  );
}
