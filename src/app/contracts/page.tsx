import type { Metadata } from "next";
import ContractsPage from "@/components/pages/ContractsPage";

export const metadata: Metadata = {
  title: "Contracts | FLUXX PMC",
  description:
    "Request military services from FLUXX PMC. Security contracts, escort missions, combat operations, and strategic reconnaissance.",
  openGraph: {
    title: "Request a Contract",
    description: "Professional military services on demand",
    url: "https://fluxxpmc.com/contracts",
    type: "website",
  },
};

export default function Page() {
  return <ContractsPage />;
}
