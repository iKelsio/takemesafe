import { Button, Group, Stepper } from "@mantine/core";
import { useId } from "@mantine/hooks";
import { useState } from "react";
import { Choices } from "../components/Steps/xp/Choices";
import { Intro, NameForm } from "../components/Steps/xp/Intro";

export default function XP() {
  const id = useId("Stepper");
  const [active, setActive] = useState(0);
  const nextStep = () => setActive((current) => (current < 3 ? current + 1 : current));
  const prevStep = () => setActive((current) => (current > 0 ? current - 1 : current));

  return (
    <main>
      <Stepper active={active} onStepClick={setActive}>
        {[Intro, NameForm, Choices].map((Component, i) => (
          <Stepper.Step key={id.concat(String(i))} hidden>
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
    </main>
  );
}
