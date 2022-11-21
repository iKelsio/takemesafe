import { CardProps } from "./card.types";
import { Card as MantineCard, Image, Text, Badge, Button, Group, Stack } from "@mantine/core";

export function Card({
  noImg,
  name,
  type,
  txtBtn = "Buy Tickets",
  it,
  place = "Barcelona, Espanha",
}: CardProps) {
  return (
    <MantineCard shadow="md" p="lg" radius="md" miw={!it ? 250 : "100%"} w={250}>
      {!noImg && (
        <MantineCard.Section bg="blue">
          <Badge variant="filled" sx={{ zIndex: 1 }} pos="absolute" top={10} right={10}>
            {type?.toLocaleLowerCase() || "praia"}
          </Badge>
          <Image src="/Cidademock.png" height={120} alt="Norway" withPlaceholder />
        </MantineCard.Section>
      )}
      <Stack>
        <Text weight={500} mt="md" mb="xs">
          {name}
        </Text>

        <Text size="sm" color="dimmed">
          {place}
        </Text>
      </Stack>
      {!it && (
        <Button variant="outline" fullWidth mt="md" radius="md">
          {txtBtn}
        </Button>
      )}
    </MantineCard>
  );
}
