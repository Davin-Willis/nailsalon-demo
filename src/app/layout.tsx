import type { Metadata } from "next";
import { Bodoni_Moda, Jost } from "next/font/google";
import "./globals.css";

const bodoni = Bodoni_Moda({
  subsets: ["latin"],
  style: ["normal", "italic"],
  variable: "--font-bodoni",
});

const jost = Jost({
  subsets: ["latin"],
  variable: "--font-jost",
});

export const metadata: Metadata = {
  title: "Lacquer & Lily · Louisville Nail Studio (Demo)",
  description:
    "Manicures, pedicures, and hand-painted nail art in a calm, sunlit Louisville studio. Fictional demo site by Davin Willis.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${bodoni.variable} ${jost.variable}`}>
      <body className="antialiased">{children}</body>
    </html>
  );
}
