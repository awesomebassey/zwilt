"use client";

import {
  Accordion,
  AccordionButton,
  AccordionItem,
  AccordionPanel,
  Box,
  Divider,
  Flex,
  GridItem,
  Heading,
  SimpleGrid,
  Spacer,
  Stack,
  Text,
} from "@chakra-ui/react";
import { faqs } from "@/app/_constants";
import Icon from "./Icon";

export function FAQs() {
  return (
    <Box
      bg={"#f3f3f3"}
      position={"relative"}
      className="divider-before"
      pb={{ base: 20, md: 40 }}
    >
      <Heading
        textAlign={"center"}
        fontSize={{ base: "4xl", md: "6xl" }}
        mt={{ base: 14, md: 20 }}
      >
        Frequently asked questions
      </Heading>
      <Accordion my={20} allowToggle>
        {faqs.map(({ question, answer, title, subtitle }, index) => (
          <AccordionItem key={index}>
            {({ isExpanded }) => (
              <>
                <AccordionButton
                  borderBottom={isExpanded ? "1px solid #d6d6d6" : "none"}
                  py={0}
                >
                  <SimpleGrid
                    px={{ base: 0, md: 14 }}
                    alignItems={"center"}
                    columns={12}
                    minW={"full"}
                  >
                    <GridItem
                      colSpan={{ base: 6, md: 2 }}
                      borderBottom={{ base: "1px solid #d6d6d6", md: "none" }}
                      display={{ base: title ? "block" : "none", md: "block" }}
                    >
                      <Text
                        fontWeight={"semibold"}
                        fontSize={"2xl"}
                        borderEnd={{
                          base: subtitle ? "1px solid #d6d6d6" : "none",
                          md: title ? "1px solid #d6d6d6" : "none",
                        }}
                        py={6}
                        pe={{ md: 7, lg: 20 }}
                      >
                        {title ?? <Spacer width={"80px"} height={30} />}
                      </Text>
                    </GridItem>
                    <GridItem
                      colSpan={{ base: 6, md: 2 }}
                      borderBottom={{ base: "1px solid #d6d6d6", md: "none" }}
                      display={{ base: title ? "block" : "none", md: "block" }}
                    >
                      <Text
                        fontWeight={"semibold"}
                        fontSize={"2xl"}
                        borderEnd={{
                          base: "none",
                          md: subtitle ? "1px solid #d6d6d6" : "none",
                        }}
                        textAlign={"center"}
                        py={6}
                      >
                        {subtitle ?? <Spacer width={"80px"} height={"32px"} />}
                      </Text>
                    </GridItem>
                    <GridItem colSpan={{ base: 11, md: 7 }}>
                      <Text
                        fontWeight={isExpanded ? "semibold" : "normal"}
                        fontSize={{ base: "xl", md: "2xl" }}
                        textAlign={"start"}
                        ps={{ md: 20 }}
                        color={"#202229"}
                        opacity={0.8}
                        p={7}
                      >
                        {question}
                      </Text>
                    </GridItem>
                    <GridItem colSpan={1}>
                      {isExpanded && (
                        <Box pe={10}>
                          <Icon color="#FFBE2E" />
                        </Box>
                      )}
                    </GridItem>
                  </SimpleGrid>
                </AccordionButton>
                <AccordionPanel>
                  <SimpleGrid
                    px={{ base: 7, md: 14 }}
                    alignItems={"center"}
                    w={"full"}
                    columns={{ base: 1, md: 12 }}
                  >
                    <GridItem
                      colSpan={2}
                      display={{ base: "none", md: "block" }}
                    >
                      <Spacer width={"full"} height={30} />
                    </GridItem>
                    <GridItem
                      colSpan={2}
                      display={{ base: "none", md: "block" }}
                    >
                      <Spacer width={"full"} height={30} />
                    </GridItem>
                    <GridItem colSpan={{ base: 1, md: 7 }}>
                      <Text
                        fontSize={{ md: "lg" }}
                        color={"#202229"}
                        ps={{ md: 20 }}
                      >
                        {answer}
                      </Text>
                    </GridItem>
                    <GridItem
                      colSpan={1}
                      display={{ base: "none", md: "block" }}
                    >
                      <Spacer width={"full"} height={30} />
                    </GridItem>
                  </SimpleGrid>
                </AccordionPanel>
              </>
            )}
          </AccordionItem>
        ))}
      </Accordion>
    </Box>
  );
}
