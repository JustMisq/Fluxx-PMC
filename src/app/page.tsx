import type { Metadata } from "next";
import HomePage from "@/components/pages/HomePage";

export const metadata: Metadata = {
  title: "FLUXX PMC — Private Military Corporation | Star Citizen",
  description:
    "Elite private military corporation operating across the Stanton system. Professional force projection, asset security, armed escort, combat operations, and strategic ISR. 500+ operations completed.",
  openGraph: {
    title: "FLUXX PMC — Authorized Force. Calculated Violence. Zero Compromise.",
    description:
      "Professional military services across the Stanton system. Security, combat, escort, and reconnaissance operations.",
    url: "https://fluxxpmc.com",
    type: "website",
  },
};

export default function Page() {
  return <HomePage />;
}
