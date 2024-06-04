import { Container, Flex, Heading, Image, Stack, Text } from "@chakra-ui/react";
import { TypedForm } from "./TypedForm";
import { CareerSections } from "./CareerSections";

export function Hero() {
  return (
    <Container
      maxW={"container.md"}
      mt={{ md: 20, lg: 40 }}
      px={{ base: 7, md: 14 }}
    >
      <Stack gap={6}>
        <Heading
          as={Flex}
          textAlign={"center"}
          alignItems={"center"}
          justifyContent={"center"}
          w={"full"}
          fontSize={{ base: "4xl", md: "6xl" }}
          flexWrap={"wrap"}
        >
          <Text as={"span"}>Finding the right fit</Text>
          <Image
            src="/gifs/home.gif"
            alt="Home GIF"
            width={{ base: "44px", md: 68 }}
            height={{ base: "30px", md: 43 }}
          />
          <Text as={"span"}>has&nbsp;</Text>
          <Text as={"span"}>never been easier</Text>
        </Heading>
        <Text
          w={{ md: "80%" }}
          mx={"auto"}
          color={"#202229"}
          textAlign={"center"}
          fontSize={{ base: "xl", md: "2xl" }}
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
