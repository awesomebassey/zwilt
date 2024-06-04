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
  VStack,
} from "@chakra-ui/react";
import Icon from "./Icon";
import Link from "next/link";
import { useMemo } from "react";
import { footerMenu } from "@/app/_constants";

type FooterMenuItem = {
  category: string;
  item: string;
  link: string;
};

type GroupedFooterMenu = {
  [category: string]: FooterMenuItem[];
};

export function Footer() {
  const groupByCategory = (items: FooterMenuItem[]): GroupedFooterMenu => {
    return items.reduce((acc: GroupedFooterMenu, item: FooterMenuItem) => {
      if (!acc[item.category]) {
        acc[item.category] = [];
      }
      acc[item.category].push(item);
      return acc;
    }, {} as GroupedFooterMenu);
  };

  const groupedMenu = useMemo(() => groupByCategory(footerMenu), [footerMenu]);

  return (
    <Box
      bg={"#0C0C0C"}
      bgGradient="linear(to-b, #0c0c0c, #202229)"
      position={"relative"}
      className="divider-before"
    >
      <Container maxW={"container.xl"} p={{ base: 7, md: 14 }} pb={{ md: 0 }}>
        <VStack
          position={"relative"}
          className="divider-before divider-after"
          bg={"#525AA0"}
          spacing={6}
          py={20}
        >
          <Heading
            color={"white"}
            textAlign={"center"}
            fontWeight={"semibold"}
            fontSize={"6xl"}
          >
            Need a job done, and done <br /> well? Get started
          </Heading>
          <IconButton
            as={Link}
            href={"#!"}
            aria-label="Get Started"
            bg={"black"}
            icon={<Icon color="white" rotate={"90deg"} />}
            px={6}
            py={8}
            rounded={30}
          />
        </VStack>
        <SimpleGrid
          columns={12}
          bg={"transparent"}
          position={"relative"}
          className="divider-before"
          spacing={"100px"}
          my={30}
          py={40}
        >
          <GridItem colSpan={4}>
            <Link href={"/"}>
              <Image
                src="/images/zwilt-logo.svg"
                alt="Logo"
                width={120}
                height={30}
              />
            </Link>
            <Text mt={10} mb={20} color={"white"}>
              We take complex hiring processes - and simplify them. Connecting
              you to the world's highly qualified talent pool.
            </Text>
            <Text mb={5} color={"white"} opacity={0.4} fontWeight={"semibold"}>
              LINKS AND REDIRECTS
            </Text>
            <ButtonGroup>
              {["Hire now", "Apply now"].map((item) => (
                <Button
                  key={item}
                  bg={"#292B34"}
                  color={"#EDEFFF"}
                  rounded={20}
                  px={10}
                  py={7}
                  _hover={{ color: "black" }}
                >
                  {item}
                </Button>
              ))}
            </ButtonGroup>
          </GridItem>
          <GridItem colSpan={8}>
            <Stack gap={20}>
              <Heading color={"white"} fontWeight={"semibold"} fontSize={"6xl"}>
                Connecting the right people to the right businesses.
              </Heading>
              <SimpleGrid columns={4} spacing={10}>
                {Object.keys(groupedMenu).map((category) => (
                  <GridItem key={category}>
                    <Stack gap={6}>
                      <Text
                        textTransform={"uppercase"}
                        color={"white"}
                        fontWeight={"semibold"}
                        opacity={0.4}
                      >
                        {category}
                      </Text>
                      {groupedMenu[category].map((item) => (
                        <Text
                          as={Link}
                          href={item.link}
                          key={item.item}
                          color={"#ffffff"}
                          fontSize={"lg"}
                          cursor={"pointer"}
                          _hover={{
                            textDecoration: "none",
                            bgImage: `url("/images/footer-hover.svg")`,
                            bgRepeat: "no-repeat",
                            bgPos: "0 100%",
                          }}
                        >
                          {item.item}
                        </Text>
                      ))}
                    </Stack>
                  </GridItem>
                ))}
              </SimpleGrid>
            </Stack>
          </GridItem>
        </SimpleGrid>
        <Flex alignItems={"center"} borderTop={"1px solid #ffffff"} py={5}>
          <Text color={"white"} fontWeight={"medium"} fontSize={"lg"}>
            All rights reserved by Zwilt
          </Text>
          <Text
            as={Link}
            href={"#!"}
            ms={"auto"}
            color={"white"}
            fontWeight={"medium"}
            fontSize={"lg"}
            textDecor={"underline"}
            opacity={0.6}
          >
            Privacy Policy
          </Text>
          <Text
            as={Link}
            href={"#!"}
            ms={"3"}
            color={"white"}
            fontWeight={"medium"}
            fontSize={"lg"}
            textDecor={"underline"}
            opacity={0.6}
          >
            Terms and conditions
          </Text>
        </Flex>
      </Container>
    </Box>
  );
}
