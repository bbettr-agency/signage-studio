import type { Metadata } from "next";
import { createMetadata } from "@/lib/metadata";
import ServicesPage from "@/views/services-page";

export const metadata: Metadata = createMetadata({
  title: "Signage Services",
  description:
    "Vehicle branding, building signage, light boxes, PVC banners, window branding, Chromadek signs, custom signage and professional installations across South Africa.",
  path: "/services",
});

export default function Page() {
  return <ServicesPage />;
}
