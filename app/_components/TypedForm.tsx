"use client";

import { Button, Flex } from "@chakra-ui/react";
import { ReactTyped } from "react-typed";
import { typedStrings } from "@/app/_constants";
import Icon from "./Icon";
import { useState } from "react";

export function TypedForm() {
  const [startTyping, setStartTyping] = useState<boolean>(true);
  const [inputValue, setInputValue] = useState<string>("");
  const [typedKey, setTypedKey] = useState<number>(0);

  const handleBlur = () => {
    if (!inputValue) {
      setStartTyping(true);
      setTypedKey((prevKey) => prevKey + 1);
    }
  };

  return (
    <form action="#!">
      <Flex
        maxW={{ md: "80%" }}
        mx={"auto"}
        rounded={15}
        border={"1.5px solid #f0f0f0"}
      >
        <Flex
          gap={1}
          h={"auto"}
          alignItems={"center"}
          fontSize={{ md: "lg" }}
          fontWeight={"semibold"}
          p={6}
          flexGrow={1}
        >
          {startTyping && (
            <label htmlFor="type-input" id="type-label">
              Looking for a
            </label>
          )}
          <ReactTyped
            key={typedKey}
            strings={typedStrings}
            typeSpeed={40}
            backSpeed={50}
            attr="placeholder"
            showCursor={true}
            cursorChar="|"
            bindInputFocusEvents
            loop
          >
            <input
              onFocus={() => setStartTyping(false)}
              onBlur={handleBlur}
              onChange={(e) => setInputValue(e.target.value)}
              value={inputValue}
              type="text"
              id="type-input"
            />
          </ReactTyped>
        </Flex>
        <Button
          h={"auto"}
          bg={"#FFBE2E"}
          variant={"solid"}
          rounded={15}
          px={{ base: 4, md: 8 }}
        >
          <Icon color="#202229" />
        </Button>
      </Flex>
    </form>
  );
}
