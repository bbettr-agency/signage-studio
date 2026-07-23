"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

import { servicesConfig } from "@/config/services-config";
import SectionContainer from "@/components/layout/section-container";
import SectionHeading from "@/components/ui/section-heading";
import Icon from "@/components/ui/icon";

export default function ServicesGrid() {
  return (
    <SectionContainer
      id="services"
      className="bg-brand-ink text-white"
    >
      <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between md:gap-12">
        <SectionHeading
          eyebrow="What We Do"
          title={
            <>
              Eight disciplines.
              <br />
              <span className="text-white/40">One studio.</span>
            </>
          }
          description="From a single decal to a national fleet rollout — every job leaves the studio held to the same premium standard."
          className="mb-12 md:mb-0 md:max-w-2xl"
        />
        <Link
          href="/services"
          className="group inline-flex items-center gap-2 self-start rounded-full border border-white/10 px-5 py-2.5 text-sm font-semibold text-white transition hover:border-brand-primary/40 hover:bg-brand-primary/5 hover:text-brand-primary md:self-end"
        >
          View all services
          <ArrowUpRight className="h-4 w-4 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
        </Link>
      </div>

      <div className="mt-16 grid gap-px overflow-hidden rounded-2xl border border-white/10 bg-white/5 sm:grid-cols-2 lg:grid-cols-4">
        {servicesConfig.map((service, index) => (
          <motion.div
            key={service.title}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: (index % 4) * 0.06 }}
            viewport={{ once: true, margin: "-50px" }}
            className="group relative flex flex-col bg-brand-ink p-8 transition-all duration-500 hover:bg-brand-graphite"
          >
            <div className="mb-6 flex items-center justify-between">
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-white/5 text-brand-primary transition-all duration-500 group-hover:bg-brand-accent group-hover:text-brand-ink group-hover:shadow-accent">
                <Icon name={service.icon} className="h-5 w-5" />
              </div>
              <span className="font-mono text-xs text-white/30">
                0{index + 1}
              </span>
            </div>

            <h3 className="font-display text-xl font-bold text-white">
              {service.title}
            </h3>

            <p className="mt-3 text-sm leading-6 text-white/55">
              {service.description}
            </p>

            {service.bullets && (
              <ul className="mt-5 space-y-1.5 text-xs text-white/45">
                {service.bullets.map((b) => (
                  <li key={b} className="flex items-center gap-2">
                    <span className="h-1 w-1 rounded-full bg-brand-primary" />
                    {b}
                  </li>
                ))}
              </ul>
            )}

            <Link
              href={service.href}
              className="mt-8 inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.15em] text-white/40 transition group-hover:text-brand-primary"
              aria-label={`Learn more about ${service.title}`}
            >
              Learn more
              <ArrowUpRight className="h-3.5 w-3.5 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
            </Link>
          </motion.div>
        ))}
      </div>
    </SectionContainer>
  );
}
