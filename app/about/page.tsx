import type { Metadata } from "next";
import { createMetadata } from "@/lib/metadata";
import AboutPage from "@/views/about-page";

export const metadata: Metadata = createMetadata({
  title: "About Us",
  description:
    "Signage Studio is a premium Pretoria signage studio — vehicle branding, building signage and installations engineered and installed in-house since 2004.",
  path: "/about",
});

export default function Page() {
  return <AboutPage />;
}
