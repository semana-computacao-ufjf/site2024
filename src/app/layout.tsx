import type { Metadata } from "next";
import { Viga } from "next/font/google";
import "./globals.css";

const viga = Viga({
  weight: ["400"],
  style: ["normal"],
  subsets: ["latin"],
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
