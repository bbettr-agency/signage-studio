import type { Metadata } from "next";
import { createMetadata } from "@/lib/metadata";
import ProjectsPage from "@/views/projects-page";

export const metadata: Metadata = createMetadata({
  title: "Our Projects",
  description:
    "Browse the Signage Studio portfolio — vehicle wraps, building signage, light boxes, banners and installations for fleets, retailers and brands across South Africa.",
  path: "/projects",
});

export default function Page() {
  return <ProjectsPage />;
}
