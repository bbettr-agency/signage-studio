"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { ChevronRight } from "lucide-react";

type Crumb = { label: string; href?: string };

type PageHeroProps = {
  eyebrow: string;
  title: React.ReactNode;
  description?: string;
  image?: string;
  breadcrumbs?: Crumb[];
};

export default function PageHero({
  eyebrow,
  title,
  description,
  image,
  breadcrumbs,
}: PageHeroProps) {
  return (
    <section className="relative overflow-hidden bg-brand-ink text-white">
      {image && (
        <div className="absolute inset-0">
          <Image
            src={image}
            alt=""
            fill
            priority
            sizes="100vw"
            className="object-cover object-center opacity-35"
          />
        </div>
      )}

      {/* Solid dark overlay — no gradients. */}
      <div className="absolute inset-0 bg-brand-ink/85" />
      <div className="pointer-events-none absolute -top-24 left-1/3 h-[420px] w-[420px] rounded-full bg-brand-primary/15 blur-[120px]" />

      <div className="relative z-10 mx-auto max-w-7xl px-6 pb-20 pt-36 md:pb-28 md:pt-44 lg:px-8">
        {breadcrumbs && (
          <motion.nav
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            aria-label="Breadcrumb"
            className="mb-8 flex items-center gap-1.5 text-xs text-white/45"
          >
            {breadcrumbs.map((crumb, i) => (
              <span key={crumb.label} className="flex items-center gap-1.5">
                {crumb.href ? (
                  <Link
                    href={crumb.href}
                    className="transition hover:text-brand-primary"
                  >
                    {crumb.label}
                  </Link>
                ) : (
                  <span className="text-white/70">{crumb.label}</span>
                )}
                {i < breadcrumbs.length - 1 && (
                  <ChevronRight className="h-3 w-3 text-white/25" />
                )}
              </span>
            ))}
          </motion.nav>
        )}

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
        >
          <div className="inline-flex items-center gap-2.5 rounded-full border border-brand-primary/30 bg-brand-primary/10 px-4 py-1.5 text-[11px] font-semibold uppercase tracking-[0.2em] text-brand-primary backdrop-blur">
            <span className="h-1.5 w-1.5 rounded-full bg-brand-primary shadow-[0_0_8px_rgba(0,136,150,0.9)]" />
            {eyebrow}
          </div>

          <h1 className="mt-7 max-w-4xl font-display text-5xl font-bold leading-[0.98] tracking-tight md:text-6xl lg:text-7xl">
            {title}
          </h1>

          {description && (
            <p className="mt-7 max-w-2xl text-base leading-7 text-white/65 md:text-lg md:leading-8">
              {description}
            </p>
          )}
        </motion.div>
      </div>
    </section>
  );
}
