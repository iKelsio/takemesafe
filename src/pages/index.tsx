import { Button, Group, Image, Stack, Stepper, Text, Title } from "@mantine/core";
import { useId } from "@mantine/hooks";
import { Itinerary } from "@prisma/client";
import { IconPlus } from "@tabler/icons";
import { GetStaticProps } from "next";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { Choices } from "../components/Steps/xp/Choices";
import { Intro, NameForm } from "../components/Steps/xp/Intro";
import { client } from "../external/repos/prisma";
import { Card } from "../features";
import { amadeus } from "../services";

function HomeData({ pois, activities, itineraries }: any) {
  const router = useRouter();
  const [username, setUsername] = useState("");

  useEffect(() => {
    const name = window?.localStorage?.getItem("username") || "Convidado";
    setUsername(name);
  }, []);

  return (
    <Stack spacing={40} px={16} pb={10}>
      <Title pt={24} order={2}>
        Bem vindo, {username}!
      </Title>
      <Stack mb={40}>
        <Title order={5}>Recomendados</Title>
        <Group noWrap sx={{ overflowX: "scroll" }}>
          {(pois as { name: string; type: string }[]).map((data) => (
            <Card key={data.name} name={data.name} type={data.type} txtBtn="Ver Roteiro" />
          ))}
        </Group>
      </Stack>
      <Stack spacing={16}>
        <Title order={5}>Seus Roteiros</Title>
        {itineraries.count > 0 ? (
          <>
            {(itineraries.data as Itinerary[]).slice(0, 3).map((itinerary) => (
              <Card key={itinerary.id} name={username} noImg it place={itinerary.place} />
            ))}
          </>
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
            <Button
              leftIcon={<IconPlus />}
              onClick={() => {
                router.push("/itineraries");
              }}
              variant="subtle">
              Criar novo roteiro
            </Button>
          </>
        )}
      </Stack>
      <Stack>
        <Title order={5}>Nas suas proximidades</Title>
        <Group noWrap sx={{ overflowX: "scroll" }}>
          {(activities as Array<Record<"name" | "description", string>>).map((activity) => (
            <Card key={activity.name} noImg name={activity.name} txtBtn="Salvar Evento" />
          ))}
        </Group>
      </Stack>
    </Stack>
  );
}
export default function Home({ data }: any) {
  const id = useId("Stepper");
  const [active, setActive] = useState(0);
  useEffect(() => {
    const isDone = window?.sessionStorage?.getItem("done");
    if (Boolean(isDone)) setActive(3);
  }, []);
  const nextStep = () => setActive((current) => (current < 4 ? current + 1 : current));
  return (
    <main>
      <Stepper active={active} onStepClick={setActive}>
        {([Intro, NameForm, Choices, HomeData] as React.FC<any>[]).map((Component, i) => (
          <Stepper.Step key={id.concat(String(i))} hidden pt={0}>
            <Component
              pois={data.pois}
              activities={data.activities}
              itineraries={data.itineraries}
            />
          </Stepper.Step>
        ))}
      </Stepper>
      {active !== 3 && (
        <Group position="center" mt="xl" px={24}>
          <Button
            radius={12}
            onClick={() => {
              nextStep();
              if (active === 3) window.localStorage.setItem("done", "true");
            }}
            fullWidth>
            Proximo
          </Button>
        </Group>
      )}
    </main>
  );
}

export const getStaticProps: GetStaticProps = async (ctx) => {
  const pois = await amadeus.referenceData.locations.pointsOfInterest
    .get({
      latitude: 41.397158,
      longitude: 2.160873,
    })
    .then((response: any) => {
      return response.data.map((poi: any) => ({ name: poi.name, type: poi.type })).slice(0, 4);
    });

  const itineraries = await client.itinerary.findMany({
    select: {
      place: true,
      days: true,
    },
  });
  const activities = await amadeus.shopping.activities
    .get({
      latitude: 41.397158,
      longitude: 2.160873,
    })
    .then((response: any) => {
      return response.data
        .map((ativity: any) => ({
          name: (ativity.name as string).substring(0, 25),
          description: ativity.shortDescription || "",
        }))
        .slice(0, 4);
    });

  return {
    props: {
      data: { pois, activities, itineraries: { data: itineraries, count: itineraries.length } },
    },
  };
};
