import type { Metadata } from "next";
import { Inter, Marcellus, Playfair_Display, Plus_Jakarta_Sans, Outfit, Cormorant_Garamond } from "next/font/google";
import "./globals.css";

const inter = Inter({ variable: "--font-inter", subsets: ["latin"] });
const marcellus = Marcellus({ weight: "400", variable: "--font-marcellus", subsets: ["latin"] });
const playfair = Playfair_Display({ variable: "--font-playfair", subsets: ["latin"] });
const jakarta = Plus_Jakarta_Sans({ variable: "--font-jakarta", subsets: ["latin"] });
const outfit = Outfit({ variable: "--font-outfit", subsets: ["latin"] });
const cormorant = Cormorant_Garamond({ weight: ["400", "600", "700"], variable: "--font-cormorant", subsets: ["latin"] });

export const metadata: Metadata = {
  title: "ONE OF NONE | Haute Parfumerie",
  description: "Born in obscurity. Refined in shadows.",
};

import { LoadingProvider } from "@/components/LoadingScreen";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${marcellus.variable} ${playfair.variable} ${jakarta.variable} ${outfit.variable} ${cormorant.variable} h-full antialiased scroll-smooth`}>
      <head>
        <link href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200" rel="stylesheet" />
        <link href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&display=swap" rel="stylesheet" />
      </head>
      <body className="min-h-full flex flex-col font-sans bg-surface text-on-surface">
        <LoadingProvider>
          {children}
        </LoadingProvider>
      </body>
    </html>
  );
}
