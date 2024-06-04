import {
  Box,
  Container,
  Flex,
  GridItem,
  Heading,
  IconButton,
  Image,
  SimpleGrid,
  Stack,
  Text,
  Tooltip,
} from "@chakra-ui/react";
import { brands, ratings } from "@/app/_constants";
import Link from "next/link";
import Icon from "./Icon";

export function Marketplace() {
  return (
    <Box
      bg={"#EDEFFF"}
      position={"relative"}
      className="divider-before"
      mt={{ base: 10, md: 5 }}
      pt={{ base: 0, lg: 20 }}
      pb={20}
    >
      <Container maxW={"container.xl"} p={{ base: 7, md: 14 }}>
        <Heading
          fontSize={{ base: "3xl", md: "4xl", lg: "6xl" }}
          py={{ base: 10, lg: 20 }}
          px={{ base: 0, lg: 20 }}
          textAlign={"center"}
        >
          Your one-stop marketplace for finding the talent your business needs.
        </Heading>
        <SimpleGrid
          alignItems={"center"}
          columns={{ base: 1, md: 6 }}
          spacingX={{ lg: 20 }}
          spacingY={{ base: 10, md: 6 }}
        >
          <GridItem colSpan={{ md: 2 }}>
            <Stack spacing={{ base: 6, md: 10 }}>
              <Heading
                fontSize={{ base: "xl", md: "3xl" }}
                fontWeight={"medium"}
              >
                Find Dev and IT professionals to scale your business.
              </Heading>
              <SimpleGrid
                columns={{ base: 2, md: 1, lg: 2 }}
                gap={{ base: 1, md: 6 }}
              >
                {ratings.map(({ data, image }, index) => (
                  <GridItem key={index}>
                    <Flex gap={2} alignItems={"center"}>
                      <Image src={`/images/${image}`} />
                      <Text color={"#202229CC"} fontSize={"lg"}>
                        {data}
                      </Text>
                    </Flex>
                  </GridItem>
                ))}
              </SimpleGrid>
            </Stack>
          </GridItem>
          <GridItem colSpan={{ md: 4 }} ps={{ md: 20 }}>
            <Stack bg={"white"} rounded={7} p={6}>
              <Text fontSize={"lg"} fontWeight={"medium"}>
                IT & Development
              </Text>
              <SimpleGrid
                columns={{ base: 3, md: 4, lg: 6 }}
                spacing={{ base: 10, md: 5, lg: 10 }}
              >
                {brands
                  .filter(({ category }) => category === "development")
                  .map(({ name, image }, index) => (
                    <GridItem key={index} as={Stack} spacing={3}>
                      <Image src={`/images/brands/${image}`} />
                      <Text fontWeight={"semibold"} textAlign={"center"}>
                        {name}
                      </Text>
                    </GridItem>
                  ))}
                <Tooltip label="View All">
                  <IconButton
                    as={Link}
                    href={"#!"}
                    aria-label="View More"
                    icon={<Icon color="black" />}
                    bg={"#f6f6f6"}
                    rounded={30}
                    height={{ base: "70px", md: "80px" }}
                  />
                </Tooltip>
              </SimpleGrid>
            </Stack>
          </GridItem>
          <GridItem colSpan={{ md: 2 }}>
            <Stack spacing={{ base: 6, md: 10 }}>
              <Heading
                fontSize={{ base: "xl", md: "3xl" }}
                fontWeight={"medium"}
              >
                Explore Creative individuals with a keen eye for detail.
              </Heading>
              <SimpleGrid
                columns={{ base: 2, md: 1, lg: 2 }}
                gap={{ base: 1, md: 6 }}
              >
                {ratings.map(({ data, image }, index) => (
                  <GridItem key={index}>
                    <Flex gap={2} alignItems={"center"}>
                      <Image src={`/images/${image}`} />
                      <Text fontSize={"lg"}>{data}</Text>
                    </Flex>
                  </GridItem>
                ))}
              </SimpleGrid>
              <Flex
                display={{ base: "none", lg: "flex" }}
                as={Link}
                href={"#!"}
                gap={2}
                alignItems={"center"}
              >
                <IconButton
                  aria-label="Explore More"
                  icon={<Icon color="white" />}
                  rounded={30}
                  px={6}
                  py={10}
                  bg={"black"}
                />
                <Text fontSize={"2xl"} fontWeight={"medium"}>
                  Explore More
                </Text>
              </Flex>
            </Stack>
          </GridItem>
          <GridItem colSpan={{ md: 4 }} ps={{ md: 20 }}>
            <Stack bg={"white"} rounded={7} p={6}>
              <Text fontSize={"lg"} fontWeight={"medium"}>
                Design & Creative
              </Text>
              <SimpleGrid
                columns={{ base: 3, md: 4, lg: 6 }}
                spacing={{ base: 10, md: 5, lg: 10 }}
              >
                <Tooltip label="View All">
                  <IconButton
                    as={Link}
                    href={"#!"}
                    aria-label="View More"
                    icon={<Icon color="black" rotate={"-180deg"} />}
                    bg={"#f6f6f6"}
                    rounded={30}
                    height={"80px"}
                    display={{ base: "none", lg: "inline-flex" }}
                  />
                </Tooltip>
                {brands
                  .filter(({ category }) => category === "design")
                  .map(({ name, image }, index) => (
                    <GridItem key={index} as={Stack} spacing={3}>
                      <Image src={`/images/brands/${image}`} />
                      <Text fontWeight={"semibold"} textAlign={"center"}>
                        {name}
                      </Text>
                    </GridItem>
                  ))}
                <Tooltip label="View All">
                  <IconButton
                    as={Link}
                    href={"#!"}
                    aria-label="View More"
                    icon={<Icon color="black" rotate={"-180deg"} />}
                    bg={"#f6f6f6"}
                    rounded={30}
                    display={{ base: "inline-flex", lg: "none" }}
                    height={{ base: "70px", md: "80px" }}
                  />
                </Tooltip>
              </SimpleGrid>
            </Stack>
            <Text
              my={{ base: 3, md: 6 }}
              display={"inline-block"}
              as={Link}
              href={"#!"}
              fontSize={{ base: "xl", lg: "2xl" }}
            >
              <Text as={"span"} fontWeight={"bold"}>
                30 more
              </Text>
              &nbsp; to explore
            </Text>
          </GridItem>
        </SimpleGrid>
      </Container>
    </Box>
  );
}
