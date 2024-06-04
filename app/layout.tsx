import type { Metadata } from "next";
import { Providers, fonts } from "@/app/_helpers";
import "./globals.css"

export const metadata: Metadata = {
  title: "Home | Zwilt",
  description: "Find the ideal candidate for your next project",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={fonts.switzer.variable}>
      <body>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
