"use client";

import Image from "next/image";
import { motion } from "framer-motion";

import { aboutConfig } from "@/config/about-config";
import { siteConfig } from "@/config/site-config";
import SectionContainer from "@/components/layout/section-container";
import SectionHeading from "@/components/ui/section-heading";

export default function AboutStory() {
  return (
    <SectionContainer className="bg-brand-ink text-white">
      <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-20">
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="relative"
        >
          <div className="relative overflow-hidden rounded-3xl border border-white/10">
            <div className="relative aspect-[4/5]">
              <Image
                src={aboutConfig.story.image}
                alt="Signage Studio fabricated 3D signage installation"
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-brand-ink/70 via-transparent to-transparent" />
            </div>
          </div>

          {/* Floating badge */}
          <div className="absolute -bottom-6 -right-4 rounded-2xl border border-white/10 bg-brand-charcoal/90 p-6 shadow-ink backdrop-blur md:-right-8">
            <div className="font-display text-4xl font-bold text-brand-accent">
              Est. {siteConfig.established}
            </div>
            <div className="mt-1 text-xs uppercase tracking-[0.18em] text-white/45">
              Johannesburg Studio
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.05 }}
          viewport={{ once: true }}
        >
          <SectionHeading
            eyebrow="Our Story"
            title={
              <>
                A signage studio,
                <br />
                <span className="text-white/40">not a print shop.</span>
              </>
            }
            className="mb-8"
          />

          <div className="space-y-5">
            {aboutConfig.story.paragraphs.map((p, i) => (
              <p key={i} className="text-base leading-7 text-white/65 md:text-lg">
                {p}
              </p>
            ))}
          </div>
        </motion.div>
      </div>
    </SectionContainer>
  );
}
