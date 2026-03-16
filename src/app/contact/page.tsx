import type { Metadata } from "next";
import ContactPage from "@/components/pages/ContactPage";

export const metadata: Metadata = {
  title: "Contact | FLUXX PMC",
  description:
    "Reach FLUXX PMC command for contract inquiries, recruitment questions, or general communication.",
  openGraph: {
    title: "Contact FLUXX PMC",
    description: "Get in touch with command staff",
    url: "https://fluxxpmc.com/contact",
    type: "website",
  },
};

export default function Page() {
  return <ContactPage />;
}
