"use client";

import { motion } from "framer-motion";
import { statsConfig } from "@/config/stats-config";
import { cn } from "@/utils/cn";

type StatsBandProps = {
  className?: string;
};

export default function StatsBand({ className }: StatsBandProps) {
  return (
    <section
      className={cn(
        "border-y border-white/5 bg-brand-charcoal px-6 py-16 lg:px-8 md:py-20",
        className
      )}
    >
      <div className="mx-auto grid max-w-7xl grid-cols-2 gap-px overflow-hidden rounded-2xl border border-white/10 bg-white/5 md:grid-cols-4">
        {statsConfig.map((stat, i) => (
          <motion.div
            key={stat.label}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: i * 0.08 }}
            viewport={{ once: true }}
            className="bg-brand-charcoal p-8 text-center md:p-10"
          >
            <div className="font-display text-4xl font-bold text-brand-accent md:text-5xl">
              {stat.value}
            </div>
            <div className="mt-2 text-xs uppercase tracking-[0.18em] text-white/45">
              {stat.label}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
