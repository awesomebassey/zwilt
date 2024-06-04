import {
  Box,
  Container,
  Flex,
  Grid,
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
      mt={5}
      py={20}
    >
      <Container maxW={"container.xl"} p={{ base: 7, md: 14 }}>
        <Heading fontSize={"6xl"} p={20} textAlign={"center"}>
          Your one-stop marketplace for finding the talent your business needs.
        </Heading>
        <SimpleGrid
          alignItems={"center"}
          columns={6}
          spacingX={20}
          spacingY={6}
        >
          <GridItem colSpan={2}>
            <Stack spacing={10}>
              <Heading fontSize={"3xl"} fontWeight={"medium"}>
                Find Dev and IT professionals to scale your business.
              </Heading>
              <SimpleGrid columns={2} gap={6}>
                {ratings.map(({ data, image }) => (
                  <GridItem>
                    <Flex gap={2} alignItems={"center"}>
                      <Image src={`/images/${image}`} />
                      <Text color={"#202229CC"} fontSize={"lg"}>{data}</Text>
                    </Flex>
                  </GridItem>
                ))}
              </SimpleGrid>
            </Stack>
          </GridItem>
          <GridItem colSpan={4} ps={20}>
            <Stack bg={"white"} rounded={7} p={6}>
              <Text fontSize={"lg"} fontWeight={"medium"}>
                IT & Development
              </Text>
              <SimpleGrid columns={6} spacing={10}>
                {brands
                  .filter(({ category }) => category === "development")
                  .map(({ name, image }) => (
                    <GridItem as={Stack} spacing={3}>
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
                    height={"80px"}
                  />
                </Tooltip>
              </SimpleGrid>
            </Stack>
          </GridItem>
          <GridItem colSpan={2}>
            <Stack spacing={10}>
              <Heading fontSize={"3xl"} fontWeight={"medium"}>
                Explore Creative individuals with a keen eye for detail.
              </Heading>
              <SimpleGrid columns={2} gap={6}>
                {ratings.map(({ data, image }) => (
                  <GridItem>
                    <Flex gap={2} alignItems={"center"}>
                      <Image src={`/images/${image}`} />
                      <Text fontSize={"lg"}>{data}</Text>
                    </Flex>
                  </GridItem>
                ))}
              </SimpleGrid>
              <Flex as={Link} href={"#!"} gap={2} alignItems={"center"}>
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
          <GridItem colSpan={4} ps={20}>
            <Stack bg={"white"} rounded={7} p={6}>
              <Text fontSize={"lg"} fontWeight={"medium"}>
                Design & Creative
              </Text>
              <SimpleGrid columns={6} spacing={10}>
                <Tooltip label="View All">
                  <IconButton
                    as={Link}
                    href={"#!"}
                    aria-label="View More"
                    icon={<Icon color="black" rotate={"-180deg"} />}
                    bg={"#f6f6f6"}
                    rounded={30}
                    height={"80px"}
                  />
                </Tooltip>
                {brands
                  .filter(({ category }) => category === "design")
                  .map(({ name, image }) => (
                    <GridItem as={Stack} spacing={3}>
                      <Image src={`/images/brands/${image}`} />
                      <Text fontWeight={"semibold"} textAlign={"center"}>
                        {name}
                      </Text>
                    </GridItem>
                  ))}
              </SimpleGrid>
            </Stack>
            <Text
              my={6}
              display={"inline-block"}
              as={Link}
              href={"#!"}
              fontSize={"2xl"}
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
