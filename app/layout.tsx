import "./globals.css";

import type { Metadata } from "next";
import {
  Instrument_Sans as Sans,
  Instrument_Serif as Serif,
} from "next/font/google";

const instrumentSans = Sans({
  variable: "--font-instrument-sans",
  subsets: ["latin"],
});

const instrumentSerif = Serif({
  variable: "--font-instrument-mono",
  weight: "400",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Work In Progress / Applied Creative",
  description: "A design and development company by Bridger Tower.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${instrumentSans.variable} ${instrumentSerif.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
