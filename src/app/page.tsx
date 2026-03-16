import type { Metadata } from "next";
import HomePage from "@/components/pages/HomePage";

export const metadata: Metadata = {
  title: "FLUXX PMC — Private Military Corporation",
  description:
    "Elite private military corporation operating across the Stanton system. Security, tactical operations, escorts, and strategic recon.",
  openGraph: {
    title: "FLUXX PMC",
    description:
      "Professional military services across the Stanton system",
    url: "https://fluxxpmc.com",
    type: "website",
  },
};

export default function Page() {
  return <HomePage />;
}
