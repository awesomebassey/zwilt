"use client";

import {
  Button,
  Container,
  Divider,
  Drawer,
  DrawerBody,
  DrawerCloseButton,
  DrawerContent,
  DrawerHeader,
  DrawerOverlay,
  Flex,
  IconButton,
  Image,
  Portal,
  Stack,
  Text,
  useDisclosure,
} from "@chakra-ui/react";
import Link from "next/link";
import { IoMenuSharp } from "react-icons/io5";
import { useRef } from "react";
import { links } from "@/app/_constants";

export function Header() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const btnRef = useRef();

  return (
    <>
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
            <Image
              src="/images/zwilt-logo.svg"
              alt="Logo"
              width={{ base: "80px", lg: 120 }}
            />
          </Link>
          <Flex
            display={{ base: "none", md: "flex" }}
            justifyContent={"center"}
            flexGrow={1}
            gap={6}
          >
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
          <Flex ms={"auto"} alignItems={"center"} gap={{ base: 3, lg: 6 }}>
            <Text as={Link} color={"white"} href={"#!"} fontWeight={"medium"}>
              Log In
            </Text>
            <Button
              as={Link}
              py={{ base: 2, lg: 4 }}
              px={{ base: 3, lg: 6 }}
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
          <IconButton
            aria-label="Menu"
            ref={btnRef.current}
            onClick={onOpen}
            display={{ base: "inline-flex", md: "none" }}
            icon={<IoMenuSharp fontSize={"1.5rem"} />}
            ms={3}
            rounded={20}
          />
        </Flex>
      </Container>
      <Portal>
        <Drawer
          isOpen={isOpen}
          placement="right"
          onClose={onClose}
          finalFocusRef={btnRef.current}
        >
          <DrawerOverlay />
          <DrawerContent>
            <DrawerHeader>
              <Text fontWeight={"bold"}>Menu</Text>
            </DrawerHeader>
            <DrawerCloseButton />
            <DrawerBody py={30}>
              <Stack spacing={4} divider={<Divider />}>
                {links.map((link) => (
                  <Text fontWeight={"medium"} key={link} as={Link} href={"#!"}>
                    {link}
                  </Text>
                ))}
              </Stack>
            </DrawerBody>
          </DrawerContent>
        </Drawer>
      </Portal>
    </>
  );
}
