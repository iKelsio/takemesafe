import { Anchor, Button, Group, Stack, Stepper, Title } from "@mantine/core";
import { useId } from "@mantine/hooks";
import { useState } from "react";
import { Budget } from "./Budget";
import { Checklist } from "./Checklist";
import { Insurance } from "./Insurance";
import { Place } from "./Place";
import { Time } from "./Time";

export function Itineraries() {
  const id = useId("Itineraries");
  const [active, setActive] = useState(0);
  const nextStep = () => setActive((current) => (current < 3 ? current + 1 : current));
  const prevStep = () => setActive((current) => (current > 0 ? current - 1 : current));

  return (
    <Stack>
      <Group spacing={97.5} p={24}>
        <Anchor>Cancelar</Anchor>
        <Title order={5} align="center">
          Roteiro
        </Title>
      </Group>
      <Stepper active={active} onStepClick={setActive} px={24}>
        {[Place, Budget, Time, Insurance, Checklist].map((Component, i) => (
          <Stepper.Step
            size="xs"
            iconPosition="right"
            key={id.concat(String(i))}
            // allowStepSelect={false}
            allowStepClick={false}>
            <Component />
          </Stepper.Step>
        ))}
      </Stepper>
      {active !== 3 && (
        <Group position="center" mt="xl" px={24}>
          <Button radius={12} onClick={nextStep} fullWidth>
            Proximo
          </Button>
        </Group>
      )}
    </Stack>
  );
}
