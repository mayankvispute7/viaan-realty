import type { Metadata } from "next";
import { Inter, Playfair_Display, Pinyon_Script } from "next/font/google";
import "./globals.css";
import SmoothScroll from "@/components/layout/SmoothScroll";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer"; // Safe path using @

// modern sans-serif for descriptions
const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });

// editorial serif for headings
const playfair = Playfair_Display({ subsets: ["latin"], variable: "--font-playfair" });

// elegant cursive for tagline
const pinyonScript = Pinyon_Script({ weight: ["400"], subsets: ["latin"], variable: "--font-pinyon" });

export const metadata: Metadata = {
  title: "VIAAN Realty | Where Dreams Meet Reality",
  description: "Luxury real estate in Pune.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={`${inter.variable} ${playfair.variable} ${pinyonScript.variable} font-sans`}>
        <SmoothScroll>
          <Navbar />
          <main>{children}</main>
          <Footer />
        </SmoothScroll>
      </body>
    </html>
  );
}