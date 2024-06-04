import { Button, Container, Flex, Image, Text } from "@chakra-ui/react";
import Link from "next/link";
import { NavMenu } from "./NavMenu";

export function Header() {
  return (
    <Container maxW={"container.xl"} my={8} px={{ base: 7, md: 14 }}>
      <Flex
        justifyContent={"space-between"}
        w={"full"}
        py={3}
        px={4}
        bg={"#525AA0"}
        rounded={15}
        alignItems={"center"}
        shadow={"xl"}
      >
        <Link href={"/"}>
        <Image src="/images/zwilt-logo.svg" alt="Logo" width={120} height={30} />
        </Link>
        <NavMenu dir="row" />
        <Flex ms={"auto"} alignItems={"center"} gap={6}>
          <Text as={Link} color={"white"} href={"#!"} fontWeight={"medium"}>
            Log In
          </Text>
          <Button
            as={Link}
            py={4}
            px={6}
            colorScheme="white"
            variant={"solid"}
            bg={"white"}
            color={"#202229"}
            href={"#!"}
            rounded={16}
            fontWeight={"medium"}
          >
            Join Now
          </Button>
        </Flex>
      </Flex>
    </Container>
  );
}
