"use client";

import { motion } from "framer-motion";

import { trustConfig } from "@/config/trust-config";
import SectionContainer from "@/components/layout/section-container";
import SectionHeading from "@/components/ui/section-heading";
import Icon from "@/components/ui/icon";

export default function WhyUs() {
  return (
    <SectionContainer className="bg-brand-charcoal text-white">
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />

      <div className="grid gap-16 lg:grid-cols-[1fr_1.3fr] lg:gap-24">
        <SectionHeading
          eyebrow="Why Choose Signage Studio"
          title={
            <>
              Engineered to last.
              <br />
              Designed to be seen.
            </>
          }
          description="We don't cut corners on vinyl, fabrication or installation. Every spec sheet, every weld, every squeegee stroke is intentional."
          className="mb-0"
        />

        <div className="grid gap-6 sm:grid-cols-2">
          {trustConfig.map((item, i) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: i * 0.08 }}
              viewport={{ once: true }}
              className="group relative rounded-2xl border border-white/10 bg-white/[0.02] p-8 transition-all duration-500 hover:-translate-y-1 hover:border-brand-primary/30 hover:bg-white/[0.04]"
            >
              <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-xl bg-brand-primary/10 text-brand-primary transition group-hover:bg-brand-primary group-hover:text-brand-ink">
                <Icon name={item.icon} className="h-5 w-5" />
              </div>

              <h3 className="font-display text-lg font-bold text-white">
                {item.title}
              </h3>

              <p className="mt-3 text-sm leading-6 text-white/55">
                {item.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </SectionContainer>
  );
}
