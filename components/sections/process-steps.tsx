"use client";

import { motion } from "framer-motion";

import { processConfig } from "@/config/process-config";
import SectionContainer from "@/components/layout/section-container";
import SectionHeading from "@/components/ui/section-heading";

export default function ProcessSteps() {
  return (
    <SectionContainer className="relative overflow-hidden bg-brand-charcoal text-white">
      <div className="pointer-events-none absolute -right-32 top-1/3 h-[400px] w-[400px] rounded-full bg-brand-primary/10 blur-[120px]" />

      <SectionHeading
        eyebrow="Our Process"
        title={
          <>
            From brief to handover —
            <br />
            <span className="text-white/40">no surprises.</span>
          </>
        }
        description="A clean four-step process that keeps every project on time, on spec and on brand."
        align="center"
      />

      <div className="relative grid gap-px overflow-hidden rounded-2xl border border-white/10 bg-white/5 md:grid-cols-4">
        {processConfig.map((step, i) => (
          <motion.div
            key={step.number}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: i * 0.1 }}
            viewport={{ once: true }}
            className="group relative bg-brand-charcoal p-8 transition-colors duration-500 hover:bg-brand-graphite md:p-10"
          >
            <div className="font-display text-5xl font-bold text-white/10 transition-colors duration-500 group-hover:text-brand-primary md:text-6xl">
              {step.number}
            </div>

            <h3 className="mt-6 font-display text-xl font-bold text-white md:text-2xl">
              {step.title}
            </h3>

            <p className="mt-3 text-sm leading-6 text-white/55">
              {step.description}
            </p>

            <div className="mt-8 h-px w-12 bg-white/10 transition-all duration-500 group-hover:w-20 group-hover:bg-brand-primary" />
          </motion.div>
        ))}
      </div>
    </SectionContainer>
  );
}
