import {
  Box,
  Flex,
  GridItem,
  Heading,
  IconButton,
  Image,
  SimpleGrid,
  Stack,
  Text,
} from "@chakra-ui/react";
import Link from "next/link";
import Icon from "./Icon";
import { whyChooseUs } from "@/app/_constants";

export function WhyChoose() {
  return (
    <Box
      bg={"#EDEFFF"}
      bgGradient="linear(to-b, #FFFFFF, #EDEFFF)"
      pt={50}
      pb={150}
    >
      <SimpleGrid
        alignItems={"center"}
        columns={12}
        ps={{ base: 7, md: 14 }}
        gap={7}
      >
        <GridItem colSpan={{ base: 12, lg: 4 }}>
          <Stack gap={10}>
            <Heading fontSize={{ base: "4xl", md: "6xl" }}>
              Why Choose Zwilt?
            </Heading>
            <Text fontSize={{ base: "xl", md: "2xl" }}>
              We take complex hiring processes - and simplify them. Connecting
              you to the world's highly qualified talent pool.
            </Text>
          </Stack>
        </GridItem>
        <GridItem
          as={Flex}
          w={"full"}
          p={{ base: 2, md: 10 }}
          gap={10}
          colSpan={{ base: 12, lg: 8 }}
          overflowX={"auto"}
        >
          {whyChooseUs.map(({ heading, points, pointsColor, image }, index) => (
            <Flex
              w={"full"}
              minW={{ base: "280px", md: "950px" }}
              bg={"white"}
              shadow={"lg"}
              rounded={20}
              key={index}
            >
              <SimpleGrid columns={12} px={10} py={6} gap={5}>
                <GridItem colSpan={{ base: 12, md: 6 }}>
                  <Stack gap={7}>
                    <Heading fontSize={{ base: "3xl", md: "5xl" }}>
                      {heading}
                    </Heading>
                    {points.map((item) => (
                      <SimpleGrid
                        columns={12}
                        key={item}
                        alignItems={"center"}
                        gap={{ base: 1, md: 5 }}
                      >
                        <GridItem colSpan={{ base: 12, md: 1 }}>
                          <Box
                            width={"18px"}
                            height={"7px"}
                            rounded={21}
                            bg={pointsColor}
                          />
                        </GridItem>
                        <GridItem colSpan={{ base: 12, md: 11 }}>
                          <Text fontSize={"xl"}>{item}</Text>
                        </GridItem>
                      </SimpleGrid>
                    ))}
                    <Flex
                      alignItems={"center"}
                      as={Link}
                      href={"#!"}
                      mb={10}
                      gap={2}
                    >
                      <IconButton
                        aria-label={"Learn More"}
                        icon={<Icon color="white" />}
                        bg={"black"}
                        rounded={20}
                        px={{ base: 2, md: 5 }}
                        py={{ base: 4, md: 7 }}
                      />
                      <Text
                        fontWeight={"medium"}
                        fontSize={{ base: "xl", md: "2xl" }}
                      >
                        Learn More
                      </Text>
                    </Flex>
                  </Stack>
                </GridItem>
                <GridItem
                  colSpan={{ base: 12, md: 6 }}
                  display={{ base: "none", md: "block" }}
                >
                  <Image src={image} alt={heading} />
                </GridItem>
              </SimpleGrid>
            </Flex>
          ))}
        </GridItem>
      </SimpleGrid>
    </Box>
  );
}
