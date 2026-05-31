import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { IBM_Plex_Mono } from "next/font/google";
import "./globals.css";
import { Header } from "@/src/components/shell/Header";
import { ScrollProgress } from "@/src/components/shell/ScrollProgress";
import { BackgroundSystem } from "@/src/components/shell/BackgroundSystem";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const ibmPlexMono = IBM_Plex_Mono({
  variable: "--font-plex-mono",
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Shreya — Distributed Systems Engineer",
  description:
    "Portfolio of a distributed systems engineer specialising in event-driven architecture, reliable messaging platforms, and observable microservices.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${ibmPlexMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        <BackgroundSystem />
        <ScrollProgress />
        <Header />
        <main id="main-content" className="flex flex-col flex-1 pt-16">
          {children}
        </main>
      </body>
    </html>
  );
}
