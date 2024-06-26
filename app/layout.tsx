import type { Metadata } from "next";
import { Work_Sans } from "next/font/google";
import "./globals.css";

import { Analytics } from "@vercel/analytics/react";

const work = Work_Sans({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Work In Progress / Applied Creative",
  description: "Tools for creative work.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={work.className}>
        {children}
        <Analytics />
      </body>
    </html>
  );
}
