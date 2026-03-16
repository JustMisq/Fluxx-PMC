import type { Metadata } from "next";
import AboutPage from "@/components/pages/AboutPage";

export const metadata: Metadata = {
  title: "About FLUXX PMC — Forged in the Void",
  description:
    "Learn about FLUXX PMC's mission, values, and operational doctrine. Professional military excellence across the Stanton system.",
  openGraph: {
    title: "About FLUXX PMC",
    description: "Our mission, values, and operational doctrine",
    url: "https://fluxxpmc.com/about",
    type: "website",
  },
};

export default function Page() {
  return <AboutPage />;
}
