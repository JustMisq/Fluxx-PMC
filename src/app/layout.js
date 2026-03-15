import { Orbitron, Rajdhani, Share_Tech_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const orbitron = Orbitron({
  variable: "--font-orbitron",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800", "900"],
});

const rajdhani = Rajdhani({
  variable: "--font-rajdhani",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

const shareTechMono = Share_Tech_Mono({
  variable: "--font-mono",
  subsets: ["latin"],
  weight: "400",
});

export const metadata = {
  title: "FLUXX PMC — Private Military Company",
  description:
    "An elite private military organization conducting reconnaissance, assault, logistics, and tactical operations across the Star Citizen universe.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="dark">
      <body
        className={`${orbitron.variable} ${rajdhani.variable} ${shareTechMono.variable} font-[family-name:var(--font-rajdhani)] antialiased`}
      >
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
