"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { MapPin, Star } from "lucide-react";

import { siteConfig } from "@/config/site-config";
import { heroImage } from "@/config/projects-config";
import Button from "@/components/ui/button";

const HERO_IMAGE = heroImage;

/**
 * Signage Studio hero — refreshed to the Bbettr Website OS motion standard.
 *
 * Removed: grid-overlay pattern, glow orb, inner rounded card, heavy stats block.
 * Kept:    real neon project photo as the sole visual anchor.
 * Added:   subtle "professional sign switching on" reveal on the highlight word
 *          (fade + brightness ramp — no sweep, no loop, no nightclub glow),
 *          honoured by `prefers-reduced-motion`.
 */
export default function CinematicHero() {
  return (
    <section className="relative min-h-[100svh] overflow-hidden bg-brand-ink text-white">
      {/* Real project photography — the visual anchor. */}
      <div className="absolute inset-0">
        <Image
          src={HERO_IMAGE}
          alt="Illuminated channel-letter signage installed by Signage Studio"
          fill
          priority
          sizes="100vw"
          className="object-cover object-center opacity-55"
        />
        {/* Two soft gradients — one for legibility, one for depth. Kept
            intentionally simple so the photo remains the star. */}
        <div className="absolute inset-0 bg-gradient-to-t from-brand-ink via-brand-ink/70 to-brand-ink/40" />
        <div className="absolute inset-0 bg-gradient-to-r from-brand-ink/85 via-brand-ink/40 to-transparent" />
      </div>

      {/* Content — clean editorial column, no boxes. */}
      <div className="relative z-10 mx-auto flex min-h-[100svh] max-w-7xl flex-col justify-end px-6 pb-16 pt-40 lg:px-8 lg:pb-24 lg:pt-44">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          className="inline-flex w-fit items-center gap-2.5 rounded-full border border-white/15 bg-white/[0.03] px-4 py-1.5 text-[11px] font-semibold uppercase tracking-[0.2em] text-white/85 backdrop-blur"
        >
          <span className="h-1.5 w-1.5 rounded-full bg-brand-primary" />
          Signage Studio · Silverton, Pretoria · Since {siteConfig.established}
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 32 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.85, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
          className="mt-8 max-w-5xl font-display text-[2.75rem] font-bold leading-[1.02] tracking-tight sm:text-6xl md:text-7xl lg:text-[5.75rem]"
        >
          Professional signage that makes your brand{" "}
          <span className="relative inline-block">
            <span className="illuminated-word bg-gradient-to-r from-brand-primary via-brand-accent to-brand-primary bg-clip-text text-transparent motion-reduce:opacity-100 motion-reduce:[animation:none]">
              impossible
            </span>
          </span>{" "}
          to miss.
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.35, ease: [0.22, 1, 0.36, 1] }}
          className="mt-7 max-w-2xl text-base leading-7 text-white/70 md:text-lg md:leading-8"
        >
          Vehicle branding, building signage and custom installations —
          manufactured and installed in-house since {siteConfig.established}.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.5, ease: [0.22, 1, 0.36, 1] }}
          className="mt-10 flex flex-col gap-3 sm:flex-row"
        >
          <Button
            href={siteConfig.quoteHref}
            variant="primary"
            size="lg"
            withArrow
          >
            {siteConfig.cta}
          </Button>
          <Button
            href={siteConfig.secondaryCta.href}
            variant="ghost"
            size="lg"
          >
            {siteConfig.secondaryCta.label}
          </Button>
        </motion.div>

        {/* Trust rail — thin divider, single line, no boxed stats. */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.75 }}
          className="mt-14 flex flex-wrap items-center gap-x-8 gap-y-3 border-t border-white/10 pt-6 text-sm text-white/60"
        >
          <span className="inline-flex items-center gap-2">
            <span className="flex" aria-hidden>
              {[...Array(5)].map((_, i) => (
                <Star
                  key={i}
                  className="h-3.5 w-3.5 fill-brand-accent text-brand-accent"
                />
              ))}
            </span>
            <span className="font-medium text-white/85">
              5.0 · 200+ clients
            </span>
          </span>

          <span className="hidden h-3 w-px bg-white/15 sm:block" aria-hidden />

          <span className="inline-flex items-center gap-1.5">
            <MapPin className="h-3.5 w-3.5 text-brand-primary" />
            Silverton, Pretoria
          </span>

          <span className="hidden h-3 w-px bg-white/15 sm:block" aria-hidden />

          <span>Nationwide installs · In-house crews</span>
        </motion.div>
      </div>
    </section>
  );
}
