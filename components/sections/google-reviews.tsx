"use client";

import Script from "next/script";

import SectionContainer from "@/components/layout/section-container";
import SectionHeading from "@/components/ui/section-heading";

/**
 * Elfsight Google Reviews embed.
 * The widget's internal styling is managed in the Elfsight dashboard;
 * here we wrap it in the site's dark section shell for visual consistency.
 */
export default function GoogleReviews() {
  return (
    <SectionContainer className="bg-brand-ink text-white">
      <SectionHeading
        eyebrow="Client Voices"
        title={
          <>
            Rated by the businesses
            <br />
            <span className="text-white/40">we've branded.</span>
          </>
        }
        align="center"
      />

      <Script
        id="elfsight-platform"
        src="https://elfsightcdn.com/platform.js"
        strategy="afterInteractive"
      />

      <div
        className="elfsight-app-4fa6cf16-eb30-453c-b4d8-740f5d5db8ef"
        data-elfsight-app-lazy
      />
    </SectionContainer>
  );
}
