import type { Metadata } from "next";
import FleetPage from "@/components/pages/FleetPage";

export const metadata: Metadata = {
  title: "Fleet Registry — Operational Assets",
  description:
    "FLUXX PMC fleet registry: combat fighters, gunships, capital ships, medical vessels, and logistics platforms. Every asset mission-configured and deployment-ready.",
  openGraph: {
    title: "FLUXX PMC — Fleet Registry",
    description: "Diversified arsenal of combat, ISR, and support platforms",
    url: "https://fluxxpmc.com/fleet",
    type: "website",
  },
};

export default function Page() {
  return <FleetPage />;
}
