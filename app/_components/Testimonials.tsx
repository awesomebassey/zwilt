import {
  Box,
  Button,
  ButtonGroup,
  Container,
  Flex,
  GridItem,
  Heading,
  IconButton,
  Image,
  SimpleGrid,
  Stack,
  Text,
} from "@chakra-ui/react";
import Icon from "./Icon";

export function Testimonials() {
  return (
    <Box bg={"#202229"} position={"relative"} className="divider-before">
      <Image
        src="/images/quotes.svg"
        position={"absolute"}
        alt="Quotes"
        top={{ base: "-62px", md: "-70px", lg: "-78px" }}
        right={5}
        transform={"SkewY(-2deg)"}
      />
      <Container maxW={"container.xl"} p={{ base: 7, md: 14 }}>
        <SimpleGrid
          columns={{ base: 1, lg: 6 }}
          gap={{ base: 10, lg: 20 }}
          pt={{ base: 10, lg: 40 }}
          pb={40}
          alignItems={"center"}
        >
          <GridItem colSpan={3}>
            <Stack spacing={10} pe={{ md: 20 }}>
              <Heading
                as={Flex}
                alignItems={"center"}
                flexWrap={"wrap"}
                fontSize={{ base: "4xl", md: "6xl" }}
                color={"white"}
                zIndex={1}
              >
                <Text as={"span"}>
                  How it worked <br />
                </Text>
                <Text as={"span"}>&nbsp;for Jason&nbsp;</Text>
                <Image
                  src="/images/jason.jpg"
                  rounded={"full"}
                  width={{ base: "40px", md: 50 }}
                  height={{ base: "40px", md: 50 }}
                />
                <Text as={"span"}>
                  &nbsp;at&nbsp;<br />
                </Text>
                <Image
                  src="/images/groovehq.svg"
                  alt="Groove HQ"
                  mt={2}
                  width={{ base: "140px", md: "180px" }}
                />
              </Heading>
              <Text
                color={"white"}
                fontSize={{ base: "xl", md: "2xl" }}
                opacity={0.8}
              >
                Zwilt enabled us to deliver on time and they've been heavy
                hitters in our corner since.
              </Text>
              <ButtonGroup>
                <Button
                  as={IconButton}
                  aria-label="Prev Button"
                  icon={
                    <Icon
                      width={17}
                      height={10}
                      rotate={"-180deg"}
                      color="#50589F"
                    />
                  }
                  bg={"white"}
                  rounded={20}
                  px={4}
                  py={6}
                />
                <Button
                  as={IconButton}
                  aria-label="Next Button"
                  icon={<Icon width={17} height={10} color="#50589F" />}
                  bg={"white"}
                  rounded={20}
                  px={4}
                  py={6}
                />
              </ButtonGroup>
            </Stack>
          </GridItem>
          <GridItem colSpan={3} display={{ base: "none", md: "block" }}>
            <Stack spacing={10}>
              <Flex alignItems={"center"} gap={4}>
                <Image src="/images/groove-logo.svg" alt="Groove Logo" />
                <Stack spacing={0}>
                  <Heading fontSize={"4xl"} color={"white"}>
                    Jason Makki
                  </Heading>
                  <Text
                    fontWeight={"medium"}
                    fontSize={"lg"}
                    color={"#c6c4c4"}
                    opacity={0.4}
                  >
                    Engineer at GROOVE
                  </Text>
                  <Text
                    fontWeight={"medium"}
                    fontSize={"lg"}
                    color={"#ffffff"}
                    opacity={0.4}
                  >
                    San Francisco
                  </Text>
                </Stack>
              </Flex>
              <Text opacity={0.8} fontSize={"2xl"} color={"white"}>
                Zwilt enabled us to deliver on time and they've been heavy
                hitters in our corner since. Zwilt enabled us to deliver on time
                and they've been heavy hitters in our corner since. Zwilt
                enabled us to deliver on time and they've been heavy hitters.
              </Text>
            </Stack>
          </GridItem>
        </SimpleGrid>
      </Container>
    </Box>
  );
}
