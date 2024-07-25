import type { Metadata } from "next";
import { Viga } from "next/font/google";
import QuickSand from "next/font/local";
import Inter from "next/font/local";
import "./globals.css";

const viga = Viga({
  weight: ["400"],
  style: ["normal"],
  subsets: ["latin"],
});

const quickSand = QuickSand({
  src: [
    {
      path: "../../public/fonts/Quicksand.ttf",
      weight: "400",
    },
  ],
  variable: "--font-quicksand",
});

const inter = Inter({
  src: [
    {
      path: "../../public/fonts/Inter.ttf",
      weight: "400",
    },
  ],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "Site Semana Computação UFJF 2024",
  description: "Site da Semana da Computação da UFJF 2024",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={viga.className}>{children}</body>
    </html>
  );
}
