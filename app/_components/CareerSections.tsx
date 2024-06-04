"use client";

import { Box, Flex, GridItem, SimpleGrid, Stack, Text } from "@chakra-ui/react";
import { useState } from "react";

export function CareerSections() {
  const [selected, setSelected] = useState<
    "IT & Development" | "Design & Creative"
  >("IT & Development");
  const isSelected = (item: string) => {
    return selected === item;
  };

  return (
    <Box bg={"#F8F8F8"} rounded={15} p={6} my={10}>
      <Flex
        maxW={{ md: "50%" }}
        bg={"#D2D2D226"}
        mx={"auto"}
        justifyContent={"space-between"}
        rounded={15}
        alignItems={"center"}
        mb={6}
      >
        {["IT & Development", "Design & Creative"].map((item) => (
          <Box
            key={item}
            bg={isSelected(item) ? "#C7F4C2" : "transparent"}
            textAlign={"center"}
            cursor={"pointer"}
            p={3}
            rounded={15}
            width={"50%"}
            onClick={() =>
              setSelected(item as "IT & Development" | "Design & Creative")
            }
          >
            <Text
              fontWeight={isSelected(item) ? "semibold" : "medium"}
              fontSize={"lg"}
            >
              {item}
            </Text>
          </Box>
        ))}
      </Flex>
      <SimpleGrid columns={{ base: 1, md: 3 }} spacing={10} mx={10}>
        <GridItem>
          <Stack>
            {[
              "Python Developer",
              "Shopify Developer",
              "MERN Stack Developer",
              "Full Stack Developer",
            ].map((item) => (
              <Text
                key={item}
                _hover={{ color: "#202229" }}
                color={"#959595"}
                fontSize={"lg"}
                cursor={"pointer"}
              >
                {item}
              </Text>
            ))}
          </Stack>
        </GridItem>
        <GridItem>
          <Stack>
            {[
              "Data Scientist",
              "Frontend Developer",
              "Shopify Developer",
              "Python Developer",
            ].map((item) => (
              <Text
                key={item}
                _hover={{ color: "#202229" }}
                color={"#959595"}
                fontSize={"lg"}
                cursor={"pointer"}
              >
                {item}
              </Text>
            ))}
          </Stack>
        </GridItem>
        <GridItem>
          <Stack>
            {[
              "Shopify Developer",
              "Python Developer",
              "Full Stack Developer",
              "Explore More",
            ].map((item) => (
              <Text
                key={item}
                _hover={{ color: "#202229" }}
                color={"#959595"}
                fontSize={"lg"}
                cursor={"pointer"}
              >
                {item}
              </Text>
            ))}
          </Stack>
        </GridItem>
      </SimpleGrid>
    </Box>
  );
}
