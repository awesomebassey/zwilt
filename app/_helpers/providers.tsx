"use client"

import { ChakraProvider } from "@chakra-ui/react";
import { theme } from "@/app/_helpers/theme";

export function Providers({ children }: { children: React.ReactNode }) {
  return <ChakraProvider theme={theme}>{children}</ChakraProvider>;
}
