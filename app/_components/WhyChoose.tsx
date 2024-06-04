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

export function WhyChoose() {
  return (
    <Box bgGradient={"linear(to-b, #ffffff, #edeff)"} pt={50} pb={150}>
      <SimpleGrid alignItems={"center"} columns={12} ps={{ base: 7, md: 14 }}>
        <GridItem colSpan={4}>
          <Stack gap={10}>
            <Heading fontSize={"6xl"}>Why Choose Zwilt?</Heading>
            <Text fontSize={"2xl"}>
              We take complex hiring processes - and simplify them. Connecting
              you to the world's highly qualified talent pool.
            </Text>
          </Stack>
        </GridItem>
        <GridItem colSpan={8} overflow={"scroll"}>
          <Flex minWidth={"1300px"}>
            <Flex shadow={"lg"} rounded={20} p={10} gap={10}>
              <Stack gap={10} flexGrow={1}>
                <Heading fontSize={"6xl"}>Onboard without the risk</Heading>
                {[
                  "We pick the best for you to select.",
                  "Thousands of vetted candidates in dozens of categories.",
                  "Risk-free resource swapping for the best fit.",
                ].map((item) => (
                  <Flex key={item} alignItems={"center"} gap={2}>
                    <Box width={18} height={7} rounded={21} bg={"#50589F"} />
                    <Text fontSize={"2xl"}>{item}</Text>
                  </Flex>
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
                    px={5}
                    py={7}
                  />
                  <Text fontWeight={"medium"} fontSize={"2xl"}>
                    Learn More
                  </Text>
                </Flex>
              </Stack>
              <Image
                src="/images/wcu-1.webp"
                width={"100%"}
                alt="Why Choose Zwilt"
              />
            </Flex>
          </Flex>
        </GridItem>
      </SimpleGrid>
    </Box>
  );
}
