import type { Metadata } from "next";
import { Calistoga, Inter } from "next/font/google";
import { Suspense } from "react";

import { cn } from "@/lib/utils";

import "./globals.css";

export const metadata: Metadata = {
  title: "Mushood Hanif",
  description:
    "I specialize in transforming designs into functional, high-performing web applications. Let's discuss your next project.",
  abstract:
    "I specialize in transforming designs into functional, high-performing web applications. Let's discuss your next project.",
  alternates: {
    canonical: "https://mushoodhanif.com",
  },
  applicationName: "Mushood Hanif",
  robots: {
    index: true,
    follow: true,
  },
  icons: {
    icon: "/logo.svg",
  },
  openGraph: {
    title: "Mushood Hanif",
    description:
      "I specialize in transforming designs into functional, high-performing web applications. Let's discuss your next project.",
    url: "https://mushoodhanif.com",
    siteName: "Mushood Hanif",
    images: [
      {
        url: "https://mushoodhanif.com/og-image.png",
      },
    ],
    type: "website",
  },
  keywords:
    "Frontend Developer, Developer, Software, Software Engineer, Fullstack Developer, Engineer, Web Apps, Websites, Design, Development",
  publisher: "Mushood Hanif",
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
