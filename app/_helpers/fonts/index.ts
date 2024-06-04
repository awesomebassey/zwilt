import LocalFont from "next/font/local";

const switzer = LocalFont({
  src: [
    { path: "./switzer/regular.otf", weight: "400" },
    { path: "./switzer/medium.otf", weight: "500" },
    { path: "./switzer/semibold.otf", weight: "600" },
    { path: "./switzer/bold.otf", weight: "700" },
  ],
  variable: "--font-switzer",
});

export const fonts = {
  switzer,
};
