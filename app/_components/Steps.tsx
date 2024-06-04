"use client";

import {
  Accordion,
  AccordionButton,
  AccordionItem,
  AccordionPanel,
  Box,
  Container,
  Flex,
  GridItem,
  Heading,
  IconButton,
  SimpleGrid,
  Stack,
  Text,
} from "@chakra-ui/react";
import { steps } from "@/app/_constants";

export function Steps() {
  return (
    <Box bg={"#ffffff"} position={"relative"} className="divider-before">
      <Container maxW={"container.xl"} p={{ base: 7, md: 14 }}>
        <SimpleGrid columns={{ md: 2 }}>
          <GridItem as={Stack} spacing={6}>
            <Heading fontSize={"6xl"} pt={20}>
              How we ensure you're in good hands.
            </Heading>
            <Text fontSize={"2xl"}>
              With our comprehensive screening process, we hand-pick highly
              skilled candidates so you can onboard them in a matter of days.
            </Text>
            <Accordion allowToggle>
              {steps.map(({ index, title, body }) => (
                <AccordionItem
                  key={index}
                  border={"1px solid #f0f0f0"}
                  rounded={7}
                  my={2}
                >
                  {({ isExpanded }) => (
                    <Box shadow={isExpanded ? "lg" : "none"}>
                      <AccordionButton>
                        <Flex w={"full"} alignItems={"center"} gap={10}>
                          <IconButton
                            isRound
                            aria-label="Open Icon"
                            bg={isExpanded ? "#8BA4FD" : "#ececec"}
                            px={6}
                            py={8}
                            icon={
                              <svg
                                width="16"
                                height="15"
                                viewBox="0 0 16 15"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                              >
                                <path
                                  d="M0 0.822115C0 0.368429 0.391439 1.52588e-05 0.873481 1.52588e-05H14.96C15.4421 1.52588e-05 15.8335 0.368429 15.8335 0.822115V14.08C15.8333 14.298 15.7412 14.507 15.5774 14.6611C15.4136 14.8152 15.1916 14.9019 14.96 14.9021H0.873481C0.641891 14.9019 0.419853 14.8152 0.256094 14.6611C0.0923348 14.507 0.000232871 14.298 0 14.08V0.822115ZM6.70461 4.48307C6.65167 4.44982 6.59014 4.43072 6.52657 4.42778C6.46301 4.42485 6.39979 4.43819 6.34364 4.4664C6.2875 4.4946 6.24053 4.53661 6.20775 4.58795C6.17496 4.63929 6.15759 4.69803 6.15747 4.75793V10.1442C6.15759 10.2041 6.17496 10.2629 6.20775 10.3142C6.24053 10.3655 6.2875 10.4075 6.34364 10.4358C6.39979 10.464 6.46301 10.4773 6.52657 10.4744C6.59014 10.4714 6.65167 10.4523 6.70461 10.4191L10.9964 7.72676C11.0446 7.69653 11.0842 7.65555 11.1116 7.60745C11.139 7.55935 11.1533 7.50564 11.1533 7.45107C11.1533 7.39651 11.139 7.34279 11.1116 7.29469C11.0842 7.2466 11.0446 7.20561 10.9964 7.17538L6.70373 4.48307H6.70461Z"
                                  fill={isExpanded ? "white" : "black"}
                                />
                              </svg>
                            }
                          />
                          <Text fontSize={"lg"}>
                            <Text as={"span"} fontWeight={"bold"}>
                              Step {index}:&nbsp;
                            </Text>
                            {title}
                          </Text>
                        </Flex>
                      </AccordionButton>
                      <AccordionPanel>
                        <Text fontSize={"lg"} color={"#202229"}>
                          {body}
                        </Text>
                      </AccordionPanel>
                    </Box>
                  )}
                </AccordionItem>
              ))}
            </Accordion>
          </GridItem>
        </SimpleGrid>
      </Container>
    </Box>
  );
}
