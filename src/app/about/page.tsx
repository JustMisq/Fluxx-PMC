import type { Metadata } from "next";
import AboutPage from "@/components/pages/AboutPage";

export const metadata: Metadata = {
  title: "Organization Dossier — Forged in the Void",
  description:
    "FLUXX PMC organization profile: mission, core values, operational doctrine, command structure, and history. Combat-verified private military corporation in the Stanton system.",
  openGraph: {
    title: "About FLUXX PMC — Forged in the Void",
    description: "Our mission, doctrine, and combat-verified track record",
    url: "https://fluxxpmc.com/about",
    type: "website",
  },
};

export default function Page() {
  return <AboutPage />;
}
