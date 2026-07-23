"use client";

import { motion } from "framer-motion";
import { Phone } from "lucide-react";

import { siteConfig } from "@/config/site-config";
import Button from "@/components/ui/button";

export default function FinalCta() {
  return (
    <section className="relative overflow-hidden bg-brand-ink px-6 py-24 text-white md:py-32 lg:px-8">
      {/* Backdrop */}
      <div className="absolute inset-0 bg-gradient-to-br from-brand-ink via-brand-graphite to-brand-ink" />
      <div className="pointer-events-none absolute left-1/2 top-0 h-[600px] w-[900px] -translate-x-1/2 rounded-full bg-brand-primary/15 blur-[140px]" />
      <div
        className="absolute inset-0 opacity-[0.05]"
        style={{
          backgroundImage:
            "linear-gradient(to right, white 1px, transparent 1px), linear-gradient(to bottom, white 1px, transparent 1px)",
          backgroundSize: "80px 80px",
          maskImage:
            "radial-gradient(ellipse at center, black 30%, transparent 80%)",
        }}
      />

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="relative mx-auto max-w-5xl text-center"
      >
        <div className="inline-flex items-center gap-2 rounded-full border border-brand-primary/30 bg-brand-primary/10 px-4 py-1.5 text-[11px] font-semibold uppercase tracking-[0.2em] text-brand-primary">
          <span className="flex h-1.5 w-1.5 rounded-full bg-brand-primary shadow-[0_0_8px_rgba(0,136,150,0.9)]" />
          Open For New Projects
        </div>

        <h2 className="mt-8 font-display text-5xl font-bold leading-[0.95] tracking-tight md:text-6xl lg:text-7xl">
          Got a vehicle, a wall
          <br />
          or a brand to make{" "}
          <span className="bg-gradient-to-r from-brand-primary to-brand-accent bg-clip-text text-transparent">
            unmissable?
          </span>
        </h2>

        <p className="mx-auto mt-8 max-w-2xl text-base text-white/65 md:text-lg">
          Send us your brief — vehicle make and model, building dimensions, or
          a rough idea. You'll get a detailed line-item quote within one
          business day.
        </p>

        <div className="mt-12 flex flex-col items-center justify-center gap-3 sm:flex-row">
          <Button href="/contact" variant="primary" size="lg" withArrow>
            {siteConfig.cta}
          </Button>
          <Button
            href={siteConfig.phoneLink}
            variant="ghost"
            size="lg"
          >
            <Phone className="h-4 w-4" />
            {siteConfig.phoneDisplay}
          </Button>
        </div>

        <p className="mt-8 text-xs uppercase tracking-[0.2em] text-white/35">
          Free quotes · Nationwide installs · 5-year warranty
        </p>
      </motion.div>
    </section>
  );
}
