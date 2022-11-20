import { Button, Group, Stepper } from "@mantine/core";
import { useState } from "react";
import { Intro } from "../components/Steps/xp/Intro";

export default function XP() {
  const [active, setActive] = useState(0);
  const nextStep = () => setActive((current) => (current < 3 ? current + 1 : current));
  const prevStep = () => setActive((current) => (current > 0 ? current - 1 : current));

  return (
    <main>
      <Stepper active={active} onStepClick={setActive}>
        <Stepper.Step hidden>
          <Intro />
        </Stepper.Step>
      </Stepper>
      {active !== 3 && (
        <Group position="center" mt="xl" px={24}>
          <Button radius={12} onClick={nextStep} fullWidth>
            Proximo
          </Button>
        </Group>
      )}
    </main>
  );
}
