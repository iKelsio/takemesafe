import { Carousel } from "@mantine/carousel";
import { Stack, Title, Button, Image, Text, Transition } from "@mantine/core";
import Autoplay from "embla-carousel-autoplay";
import { useRef } from "react";

export function Intro() {
  const autoplay = useRef(Autoplay({ delay: 3000 }));

  return (
    <Stack>
      <Carousel
        mx="auto"
        w="100%"
        h="auto"
        loop
        plugins={[autoplay.current]}
        onMouseEnter={autoplay.current.stop}
        onMouseLeave={autoplay.current.reset}
        styles={{
          control: {
            "&[data-inactive]": {
              opacity: 0,
              cursor: "default",
            },
          },
        }}>
        {["/Onboarding 1", "/Onboarding 2", "/Onboarding 3"].map((url, i) => (
          <Carousel.Slide key={`${i}:`}>
            <Image src={url.concat(".png")} withPlaceholder alt="" height={506} />
          </Carousel.Slide>
        ))}
      </Carousel>
      <Stack px={24} mt={72}>
        <Title order={2}>Faça viagens mais seguras</Title>
        <Text size="xs" opacity={0.4}>
          Faça o planejamento das suas proximas aventuras com segurança e conforto.
        </Text>
      </Stack>
    </Stack>
  );
}
