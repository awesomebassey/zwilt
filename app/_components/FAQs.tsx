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
    <Box bg={"#f3f3f3"} position={"relative"} className="divider-before" pb={40}>
      <Heading textAlign={"center"} fontSize={"6xl"} mt={20}>
        Frequently asked questions
      </Heading>
      <Accordion my={20} allowToggle>
        {faqs.map(({ question, answer, title, subtitle }) => (
          <AccordionItem key={question}>
            {({ isExpanded }) => (
              <>
                <AccordionButton
                  borderBottom={isExpanded ? "1px solid #d6d6d6" : "none"}
                  py={0}
                >
                  <SimpleGrid
                    px={{ base: 7, md: 14 }}
                    alignItems={"center"}
                    columns={12}
                    minW={"full"}
                  >
                    <GridItem
                      colSpan={2}
                    >
                      <Text
                        fontWeight={"semibold"}
                        fontSize={"2xl"}
                        borderEnd={title ? "1px solid #d6d6d6" : "none"}
                        py={6}
                        pe={20}
                      >
                        {title ?? <Spacer width={"80px"} height={30} />}
                      </Text>
                    </GridItem>
                    <GridItem colSpan={2}>
                      <Text
                        fontWeight={"semibold"}
                        fontSize={"2xl"}
                        borderEnd={subtitle ? "1px solid #d6d6d6" : "none"}
                        textAlign={"center"}
                        py={6}
                      >
                        {subtitle ?? <Spacer width={"80px"} height={30} />}
                      </Text>
                    </GridItem>
                    <GridItem colSpan={7}>
                      <Text
                        fontWeight={isExpanded ? "semibold" : "normal"}
                        fontSize={"2xl"}
                        textAlign={"start"}
                        ps={20}
                        color={"#202229"}
                        opacity={0.8}
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
                    columns={12}
                  >
                    <GridItem colSpan={2}>
                      <Spacer width={"full"} height={30} />
                    </GridItem>
                    <GridItem colSpan={2}>
                      <Spacer width={"full"} height={30} />
                    </GridItem>
                    <GridItem colSpan={7}>
                      <Text fontSize={"lg"} color={"#202229"} ps={20}>
                        {answer}
                      </Text>
                    </GridItem>
                    <GridItem colSpan={1}>
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
