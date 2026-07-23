import type { Metadata } from "next";
import { createMetadata } from "@/lib/metadata";
import ContactPage from "@/views/contact-page";

export const metadata: Metadata = createMetadata({
  title: "Contact & Quotes",
  description:
    "Request a signage quote from Signage Studio in Silverton, Pretoria. Call, WhatsApp or send your brief — we respond within one business day.",
  path: "/contact",
});

export default function Page() {
  return <ContactPage />;
}
