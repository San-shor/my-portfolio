import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Sanjida Akter | Software Engineer",
  description:
    "Software engineer portfolio — B.Sc. CSE (East West University). Experience at SELISE Digital Platforms; skills in React, Next.js, TypeScript, Node.js, and more.",
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  viewportFit: "cover",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="overflow-x-clip">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased min-h-[100dvh] font-sans text-neutral-950 bg-neutral-50`}
      >
        <div className="min-h-[100dvh] flex flex-col w-full min-w-0">
          <Navbar />
          <main className="flex-1 pt-16 bg-linear-to-b from-neutral-50 via-white to-neutral-50">
            {children}
          </main>
          <Footer />
        </div>
      </body>
    </html>
  );
}
