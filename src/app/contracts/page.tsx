import type { Metadata } from "next";
import ContractsPage from "@/components/pages/ContractsPage";

export const metadata: Metadata = {
  title: "Contract Bureau — Engage Our Force",
  description:
    "Request FLUXX PMC military services: security contracts, armed escort missions, offensive combat operations, and strategic reconnaissance. Command-reviewed and operationally planned.",
  openGraph: {
    title: "FLUXX PMC — Contract Bureau",
    description: "Professional military services on contract. Security, escort, combat, and ISR.",
    url: "https://fluxxpmc.com/contracts",
    type: "website",
  },
};

export default function Page() {
  return <ContractsPage />;
}
