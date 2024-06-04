import {
  Box,
  Button,
  Container,
  Flex,
  GridItem,
  Heading,
  IconButton,
  Image,
  SimpleGrid,
  Spacer,
  Stack,
  Text,
} from "@chakra-ui/react";
import Icon from "./Icon";
import Link from "next/link";
import { journeySections } from "@/app/_constants";

export function StartJourney() {
  return (
    <Box my={30}>
      <Heading textAlign={"center"}>Start your journey today.</Heading>
      <Container maxW={"container.xl"} p={{ base: 7, md: 14 }}>
        <Stack>
          {journeySections.map(
            ({
              number,
              image,
              heading,
              description,
              bg,
              numberImage,
              button,
            }) => (
              <SimpleGrid
                key={number}
                columns={3}
                bg={bg}
                position={"relative"}
                className={`divider-before-sm ${
                  number === 3 ? "divider-after-sm" : ""
                }`}
              >
                <GridItem colSpan={1}>
                  <Flex position={"relative"}>
                    <Image
                      src={numberImage}
                      alt={`${number}`}
                      position={"absolute"}
                      left={6}
                      top={20}
                    />
                    <Stack mt={20} gap={6} ps={24}>
                      <Heading fontWeight={"semibold"} fontSize={"4xl"}>
                        {heading}
                      </Heading>
                      <Text fontSize={"lg"} color={"#202229"} opacity={0.8}>
                        {description}
                      </Text>
                      <Flex
                        alignItems={"center"}
                        as={Link}
                        href={"#!"}
                        mb={10}
                        gap={2}
                      >
                        <IconButton
                          aria-label={button}
                          icon={<Icon width={17} height={10} color="white" />}
                          bg={"black"}
                          rounded={20}
                          px={5}
                          py={7}
                        />
                        <Text fontWeight={"medium"}>{button}</Text>
                      </Flex>
                    </Stack>
                  </Flex>
                </GridItem>
                <GridItem colSpan={1}>
                  <Spacer width={"full"} />
                </GridItem>
                <GridItem>
                  <Image src={image} alt={heading} width={"full"} />
                </GridItem>
              </SimpleGrid>
            )
          )}
        </Stack>
      </Container>
    </Box>
  );
}
