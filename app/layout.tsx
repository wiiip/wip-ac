import type { Metadata } from "next";
import { Geist_Mono as Font } from "next/font/google";
import "./globals.css";

import { Analytics } from "@vercel/analytics/react";

const font = Font({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Work In Progress / Applied Creative",
  description: "Software Design and Development by Bridger Tower.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="bg-zinc-100 text-zinc-950 font-light">
      <body className={font.className}>
        {children}
        <Analytics />
      </body>
    </html>
  );
}
