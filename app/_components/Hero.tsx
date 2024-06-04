import { Container, Flex, Heading, Image, Stack, Text } from "@chakra-ui/react";
import { TypedForm } from "./TypedForm";
import { CareerSections } from "./CareerSections";

export function Hero() {
  return (
    <Container maxW={"container.md"} mt={40}>
      <Stack gap={6}>
        <Heading
          as={Flex}
          textAlign={"center"}
          alignItems={"center"}
          justifyContent={"center"}
          w={"full"}
          fontSize={"6xl"}
          flexWrap={"wrap"}
        >
          <Text as={"span"}>Finding the right fit</Text>
          <Image src="/gifs/home.gif" alt="Home GIF" width={68} height={43} />
          <Text as={"span"}>has</Text>
          <br />
          <Text as={"span"}>never been easier.</Text>
        </Heading>
        <Text
          w={{ md: "80%" }}
          mx={"auto"}
          color={"#202229"}
          textAlign={"center"}
          fontSize={"2xl"}
        >
          With our rigorous pre-vetting process, you'll never have to worry
          about finding the ideal candidate ever again.
        </Text>
        <TypedForm />
        <CareerSections />
      </Stack>
    </Container>
  );
}
