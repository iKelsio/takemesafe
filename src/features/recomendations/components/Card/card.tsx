import { CardProps } from "./card.types";
import { Card as MantineCard, Image, Text, Badge, Button, Group } from "@mantine/core";

export function Card({}: CardProps) {
  return (
    <MantineCard shadow="md" p="lg" radius="md" miw={250} w={250}>
      <MantineCard.Section bg="blue">
        <Badge variant="filled" sx={{ zIndex: 1 }} pos="absolute" top={10} right={10}>
          Praia
        </Badge>
        <Image src={null} height={120} alt="Norway" withPlaceholder />
      </MantineCard.Section>

      <Text weight={500} mt="md" mb="xs">
        Praiou
      </Text>

      <Text size="sm" color="dimmed">
        Recife, Brasil
      </Text>

      <Button variant="outline" fullWidth mt="md" radius="md">
        Buy Tickets
      </Button>
    </MantineCard>
  );
}
