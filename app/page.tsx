import {
  Header,
  Hero,
  Marketplace,
  Steps,
  Testimonials,
  FAQs,
  Footer,
  StartJourney,
  WhyChoose,
} from "@/app/_components";
import { Image, Stack } from "@chakra-ui/react";

export default function Home() {
  return (
    <Stack gap={10}>
      <Header />
      <Hero />
      <Image src="/images/divider.svg" width={"100%"} height={"100%"} />
      <Marketplace />
      <Testimonials />
      <Steps />
      <StartJourney />
      <WhyChoose />
      <FAQs />
      <Footer />
    </Stack>
  );
}
