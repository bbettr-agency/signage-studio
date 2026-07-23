"use client";

import Image from "next/image";
import { motion } from "framer-motion";

import { clientsConfig } from "@/config/clients-config";

export default function TrustedBy() {
  return (
    <section className="relative border-y border-white/5 bg-brand-charcoal px-6 py-16 lg:px-8 md:py-20">
      <div className="mx-auto max-w-7xl">
        <div className="mb-12 text-center">
          <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-brand-primary/30 bg-brand-primary/10 px-4 py-1.5 text-[11px] font-semibold uppercase tracking-[0.2em] text-brand-primary">
            <span className="h-1.5 w-1.5 rounded-full bg-brand-primary" />
            Trusted By
          </div>
          <h2 className="font-display text-2xl font-bold tracking-tight text-white md:text-3xl">
            Brands that trust us with their signage
          </h2>
        </div>

        <div className="grid grid-cols-2 gap-px overflow-hidden rounded-2xl border border-white/10 bg-white/5 sm:grid-cols-3 lg:grid-cols-3">
          {clientsConfig.map((client, i) => (
            <motion.div
              key={client.src}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: (i % 3) * 0.06 }}
              viewport={{ once: true }}
              className="group flex items-center justify-center bg-brand-charcoal p-8 transition-colors duration-500 hover:bg-brand-graphite md:p-12"
            >
              <div className="relative h-16 w-full md:h-20">
                <Image
                  src={client.src}
                  alt={`${client.name} — Signage Studio client`}
                  fill
                  sizes="(max-width: 640px) 45vw, 30vw"
                  className="object-contain opacity-50 brightness-0 invert transition-all duration-500 group-hover:opacity-90"
                />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
