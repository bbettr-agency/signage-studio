"use client";

import Script from "next/script";
import { Quote, Star } from "lucide-react";

import { siteConfig } from "@/config/site-config";
import SectionContainer from "@/components/layout/section-container";

/**
 * Client Voices — real Google reviews via the Elfsight embed.
 *
 * Refresh:
 *  - Warm cream background so the section reads as a genuine trust pause
 *    between two darker rhythms.
 *  - Editorial framing (quotation mark, headline, dividers, city credit) so the
 *    section still feels intentional even if the Elfsight widget itself uses
 *    Elfsight's own styling.
 *  - No fake testimonials — the widget shows only real Google reviews.
 */
export default function GoogleReviews() {
  return (
    <SectionContainer className="bg-brand-cream text-brand-ink">
      {/* Editorial intro — sets a premium tone before the embed loads */}
      <div className="mx-auto max-w-3xl text-center">
        <span
          className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.25em] text-brand-primary"
          aria-hidden
        >
          <span className="h-1.5 w-1.5 rounded-full bg-brand-primary" />
          Client Voices
        </span>

        <div className="mt-6 flex justify-center">
          <Quote className="h-9 w-9 rotate-180 text-brand-primary/40" />
        </div>

        <h2 className="mt-6 font-display text-4xl font-bold leading-[1.05] tracking-tight text-brand-ink md:text-5xl">
          Rated by the businesses
          <br />
          <span className="text-brand-ink/45">we&apos;ve branded.</span>
        </h2>

        <p className="mx-auto mt-6 max-w-xl text-base leading-7 text-brand-ink/65">
          Real Google reviews from clients across {siteConfig.region} and
          nationwide — no editing, no filtering.
        </p>

        <div className="mt-8 flex items-center justify-center gap-3 text-sm text-brand-ink/60">
          <span className="flex" aria-hidden>
            {[...Array(5)].map((_, i) => (
              <Star
                key={i}
                className="h-4 w-4 fill-brand-primary text-brand-primary"
              />
            ))}
          </span>
          <span className="font-medium text-brand-ink/80">
            5.0 · Google Reviews
          </span>
        </div>
      </div>

      {/* Thin divider — establishes rhythm before the widget */}
      <div className="mx-auto mt-16 h-px w-24 bg-brand-ink/15" />

      <Script
        id="elfsight-platform"
        src="https://elfsightcdn.com/platform.js"
        strategy="afterInteractive"
      />

      {/* The Elfsight widget owns its own styling. We keep the container simple
          so it slots into the cream section without clashing. */}
      <div
        className="mt-14 elfsight-app-4fa6cf16-eb30-453c-b4d8-740f5d5db8ef"
        data-elfsight-app-lazy
      />
    </SectionContainer>
  );
}
