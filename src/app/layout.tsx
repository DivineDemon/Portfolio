import type { Metadata } from "next";
import { Calistoga, Inter } from "next/font/google";
import { Suspense } from "react";

import { cn } from "@/lib/utils";

import "./globals.css";

export const metadata: Metadata = {
  title: "Mushood Hanif",
  description:
    "I specialize in transforming designs into functional, high-performing web applications. Let&apos;s discuss your next project.",
};

const inter = Inter({ subsets: ["latin"], variable: "--font-sans" });
const calistoga = Calistoga({
  subsets: ["latin"],
  variable: "--font-serif",
  weight: ["400"],
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link
          rel="icon"
          href="data:image/svg+xml,<svg xmlns=%22http://www.w3.org/2000/svg%22 viewBox=%220 0 100 100%22><text y=%22.9em%22 font-size=%2290%22>📦</text></svg>"
        />
      </head>
      <body
        className={cn(
          "bg-gray-900 font-sans text-white antialiased",
          inter.variable,
          calistoga.variable
        )}
      >
        <Suspense>{children}</Suspense>
      </body>
    </html>
  );
}
