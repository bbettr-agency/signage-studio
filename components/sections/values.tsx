"use client";

import { motion } from "framer-motion";

import { aboutConfig } from "@/config/about-config";
import SectionContainer from "@/components/layout/section-container";
import SectionHeading from "@/components/ui/section-heading";
import Icon from "@/components/ui/icon";

export default function Values() {
  return (
    <SectionContainer className="bg-brand-charcoal text-white">
      <SectionHeading
        eyebrow="What We Stand For"
        title={
          <>
            Principles that hold
            <br />
            <span className="text-white/40">under pressure.</span>
          </>
        }
        align="center"
      />

      <div className="grid gap-px overflow-hidden rounded-2xl border border-white/10 bg-white/5 sm:grid-cols-2 lg:grid-cols-4">
        {aboutConfig.values.map((value, i) => (
          <motion.div
            key={value.title}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: i * 0.08 }}
            viewport={{ once: true }}
            className="group bg-brand-charcoal p-8 transition-colors duration-500 hover:bg-brand-graphite"
          >
            <div className="mb-6 flex h-12 w-12 items-center justify-center rounded-xl bg-brand-primary/10 text-brand-primary transition group-hover:bg-brand-accent group-hover:text-brand-ink">
              <Icon name={value.icon} className="h-5 w-5" />
            </div>
            <h3 className="font-display text-lg font-bold text-white">
              {value.title}
            </h3>
            <p className="mt-3 text-sm leading-6 text-white/55">
              {value.description}
            </p>
          </motion.div>
        ))}
      </div>
    </SectionContainer>
  );
}
