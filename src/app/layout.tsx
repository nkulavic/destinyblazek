import type { Metadata } from "next";
import { Playfair_Display, Lato, Cormorant_Garamond } from "next/font/google";
import "./globals.css";

const playfair = Playfair_Display({
  variable: "--font-heading",
  subsets: ["latin"],
  display: "swap",
});

const lato = Lato({
  variable: "--font-sans",
  subsets: ["latin"],
  weight: ["300", "400", "700", "900"],
  display: "swap",
});

const cormorant = Cormorant_Garamond({
  variable: "--font-accent",
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Destiny Blazek | Integrative Wellness Coach",
  description:
    "Free integrative wellness coaching in Denver, CO. Supporting stress management, sleep, digestion, nutrition habits, and overall wellbeing through client-centered coaching.",
  keywords: [
    "wellness coach",
    "integrative health",
    "Denver wellness",
    "health coaching",
    "stress management",
    "nutrition coaching",
    "lifestyle coaching",
    "holistic health",
  ],
  authors: [{ name: "Destiny Blazek" }],
  openGraph: {
    title: "Destiny Blazek | Integrative Wellness Coach",
    description:
      "Free 8-session wellness coaching program. Client-centered support for stress, sleep, digestion, and overall wellbeing.",
    type: "website",
    locale: "en_US",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body
        className={`${playfair.variable} ${lato.variable} ${cormorant.variable} antialiased bg-cream text-brown-dark`}
      >
        {children}
      </body>
    </html>
  );
}
