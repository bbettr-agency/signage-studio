"use client";

import { motion } from "framer-motion";
import { Phone } from "lucide-react";

import { siteConfig } from "@/config/site-config";
import Button from "@/components/ui/button";

/**
 * Final CTA — deboxed.
 * Was: heavy backdrop with grid pattern + big radial-glow orb + centered card.
 * Now: an open editorial composition. Subtle top divider only, no inner box.
 */
export default function FinalCta() {
  return (
    <section className="relative overflow-hidden bg-brand-ink px-6 py-28 text-white md:py-36 lg:px-8">
      {/* Soft top divider so the section transition doesn't feel abrupt */}
      <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-brand-primary/25" />

      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
        viewport={{ once: true }}
        className="relative mx-auto max-w-5xl text-center"
      >
        <div className="inline-flex items-center gap-2 rounded-full border border-brand-primary/30 bg-brand-primary/10 px-4 py-1.5 text-[11px] font-semibold uppercase tracking-[0.2em] text-brand-primary">
          <span className="h-1.5 w-1.5 rounded-full bg-brand-primary" />
          Open For New Projects
        </div>

        <h2 className="mt-8 font-display text-[2.5rem] font-bold leading-[1.02] tracking-tight md:text-6xl lg:text-7xl">
          Got a vehicle, a wall
          <br />
          or a brand to make{" "}
          <span className="text-brand-accent">unmissable?</span>
        </h2>

        <p className="mx-auto mt-8 max-w-2xl text-base leading-7 text-white/65 md:text-lg md:leading-8">
          Send us your brief — vehicle make and model, building dimensions, or
          a rough idea. You&apos;ll get a detailed line-item quote within one
          business day.
        </p>

        <div className="mt-12 flex flex-col items-center justify-center gap-3 sm:flex-row">
          <Button
            href={siteConfig.quoteHref}
            variant="primary"
            size="lg"
            withArrow
          >
            {siteConfig.cta}
          </Button>
          <Button
            href={siteConfig.phoneLink}
            variant="ghost"
            size="lg"
            ariaLabel={`${siteConfig.callCta} on ${siteConfig.phoneDisplay}`}
          >
            <Phone className="h-4 w-4" />
            {siteConfig.phoneDisplay}
          </Button>
        </div>

        <p className="mt-10 text-xs uppercase tracking-[0.22em] text-white/40">
          Free quotes · Nationwide installs · In-house crews
        </p>
      </motion.div>
    </section>
  );
}
