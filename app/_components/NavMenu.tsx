import { Flex, Text } from "@chakra-ui/react";
import Link from "next/link";
import { links } from "@/app/_constants";

export function NavMenu({ dir }: { dir: "column" | "row" }) {
  return (
    <Flex justifyContent={"center"} flexGrow={1} flexDir={dir} gap={6}>
      {links.map((link) => (
        <Text
          fontWeight={"medium"}
          color={"white"}
          key={link}
          as={Link}
          href={"#!"}
        >
          {link}
        </Text>
      ))}
    </Flex>
  );
}
