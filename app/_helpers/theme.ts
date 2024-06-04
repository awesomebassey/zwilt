import { extendTheme } from "@chakra-ui/react";

export const theme = extendTheme({
  styles: {
    global: {
      html: {
        fontSize: "14px",
      },
      body: {
        fontSize: "14px",
        color: "#202229"
      },
    },
  },
  fonts: {
    heading: "var(--font-switzer)",
    body: "var(--font-switzer)",
  },
  fontSizes: {
    xs: "0.75rem",
    sm: "0.875rem",
    md: "1rem",
    lg: "1.14rem",
    xl: "1.25rem",
    "2xl": "1.57rem",
    "3xl": "1.7rem",
    "4xl": "2.4rem",
    "5xl": "3rem",
    "6xl": "3.8rem",
  },
});
