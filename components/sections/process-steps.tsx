"use client";

import { motion } from "framer-motion";

import { processConfig } from "@/config/process-config";
import SectionContainer from "@/components/layout/section-container";

/**
 * Our Process — moved to the warm cream surface for readability.
 * Open composition: numbered steps separated by thin dividers, no boxed cards.
 * Instructional copy reads better on light; still bookended by dark sections
 * so the rhythm stays intentional.
 */
export default function ProcessSteps() {
  return (
    <SectionContainer className="bg-brand-cream text-brand-ink">
      <div className="mx-auto max-w-3xl text-center">
        <span
          className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.25em] text-brand-primary"
          aria-hidden
        >
          <span className="h-1.5 w-1.5 rounded-full bg-brand-primary" />
          How We Work
        </span>

        <h2 className="mt-6 font-display text-4xl font-bold leading-[1.05] tracking-tight text-brand-ink md:text-5xl">
          From brief to handover —
          <br />
          <span className="text-brand-ink/45">no surprises.</span>
        </h2>

        <p className="mx-auto mt-6 max-w-xl text-base leading-7 text-brand-ink/65">
          A clean four-step process that keeps every project on time, on spec
          and on brand.
        </p>
      </div>

      <div className="mt-20 grid gap-12 md:grid-cols-4 md:gap-0 md:divide-x md:divide-brand-ink/10">
        {processConfig.map((step, i) => (
          <motion.div
            key={step.number}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55, delay: i * 0.08 }}
            viewport={{ once: true }}
            className="relative md:px-8 md:first:pl-0 md:last:pr-0"
          >
            <span className="font-display text-6xl font-bold text-brand-accentDark/85 md:text-7xl">
              {step.number}
            </span>

            <h3 className="mt-6 font-display text-xl font-semibold tracking-tight text-brand-ink md:text-2xl">
              {step.title}
            </h3>

            <p className="mt-3 max-w-xs text-sm leading-6 text-brand-ink/60 md:text-base md:leading-7">
              {step.description}
            </p>
          </motion.div>
        ))}
      </div>
    </SectionContainer>
  );
}
