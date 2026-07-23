"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowDownRight, Phone, Star } from "lucide-react";

import { siteConfig } from "@/config/site-config";
import { heroImage } from "@/config/projects-config";
import Button from "@/components/ui/button";

const HERO_IMAGE = heroImage;

const stats = [
  { value: "1,200+", label: "Vehicles Wrapped" },
  { value: "350+", label: "Buildings Branded" },
  { value: "10+", label: "Years In Studio" },
];

export default function CinematicHero() {
  return (
    <section className="relative min-h-[100svh] overflow-hidden bg-brand-ink text-white">
      {/* Background image */}
      <div className="absolute inset-0">
        <Image
          src={HERO_IMAGE}
          alt="Premium vehicle wrap and signage installation"
          fill
          priority
          sizes="100vw"
          className="object-cover object-center opacity-50"
        />
        <div className="absolute inset-0 bg-gradient-to-br from-brand-ink/95 via-brand-ink/70 to-brand-ink/95" />
        <div className="absolute inset-0 bg-gradient-to-t from-brand-ink via-brand-ink/40 to-transparent" />
        <div className="absolute inset-0 bg-radial-glow" />
      </div>

      {/* Grid texture */}
      <div
        className="absolute inset-0 opacity-[0.07]"
        style={{
          backgroundImage:
            "linear-gradient(to right, white 1px, transparent 1px), linear-gradient(to bottom, white 1px, transparent 1px)",
          backgroundSize: "60px 60px",
          maskImage:
            "radial-gradient(ellipse at center, black 0%, transparent 75%)",
        }}
      />

      {/* Soft teal orb */}
      <div className="pointer-events-none absolute -top-32 right-1/4 h-[500px] w-[500px] rounded-full bg-brand-primary/20 blur-[120px]" />

      {/* Content */}
      <div className="relative z-10 mx-auto flex min-h-[100svh] max-w-7xl flex-col justify-end px-6 pb-20 pt-40 lg:px-8 lg:pb-28 lg:pt-44">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
        >
          <div className="inline-flex items-center gap-2.5 rounded-full border border-brand-primary/30 bg-brand-primary/10 px-4 py-1.5 text-[11px] font-semibold uppercase tracking-[0.2em] text-brand-primary backdrop-blur">
            <span className="flex h-1.5 w-1.5 rounded-full bg-brand-primary shadow-[0_0_8px_rgba(0,136,150,0.9)]" />
            Premium Signage Studio · Since {siteConfig.established}
          </div>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
          className="mt-8 max-w-5xl font-display text-5xl font-bold leading-[0.95] tracking-tight sm:text-6xl md:text-7xl lg:text-[8rem]"
        >
          Signage that
          <br />
          <span className="relative inline-block">
            <span className="relative z-10 bg-gradient-to-r from-brand-primary via-brand-accent to-brand-primary bg-clip-text text-transparent">
              demands
            </span>
            <span className="absolute -bottom-2 left-0 h-1.5 w-full bg-brand-primary/40 blur-sm" />
          </span>{" "}
          attention.
        </motion.h1>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.25, ease: [0.22, 1, 0.36, 1] }}
          className="mt-10 grid gap-10 lg:grid-cols-[1.4fr_1fr] lg:items-end"
        >
          <p className="max-w-xl text-base leading-7 text-white/70 md:text-lg md:leading-8">
            From full vehicle wraps to 3D fabricated building signage — we
            engineer bold, premium-grade branding that turns vehicles into
            billboards and storefronts into landmarks.
          </p>

          <div className="flex flex-col gap-3 sm:flex-row lg:justify-end">
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
        </motion.div>

        {/* Stats / scroll bar */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mt-16 flex flex-col gap-6 border-t border-white/10 pt-8 sm:flex-row sm:items-end sm:justify-between"
        >
          <div className="grid grid-cols-3 gap-8 md:gap-14">
            {stats.map((s) => (
              <div key={s.label}>
                <div className="font-display text-2xl font-bold text-brand-accent md:text-3xl">
                  {s.value}
                </div>
                <div className="mt-1 text-xs uppercase tracking-[0.18em] text-white/45">
                  {s.label}
                </div>
              </div>
            ))}
          </div>

          <div className="flex items-center gap-3 text-sm text-white/60">
            <div className="flex">
              {[...Array(5)].map((_, i) => (
                <Star
                  key={i}
                  className="h-4 w-4 fill-brand-accent text-brand-accent"
                />
              ))}
            </div>
            <span className="font-medium text-white/80">
              5.0 rated by 200+ clients
            </span>
          </div>
        </motion.div>

        {/* Scroll cue */}
        <div className="pointer-events-none absolute bottom-6 right-6 hidden items-center gap-2 text-xs uppercase tracking-[0.25em] text-white/40 lg:flex">
          <ArrowDownRight className="h-3 w-3" />
          Scroll
        </div>
      </div>
    </section>
  );
}
