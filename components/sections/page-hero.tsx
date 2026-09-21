import Image from "next/image";
import Link from "next/link";
import { ChevronRight } from "lucide-react";

import { Reveal, heroStack } from "@/engine/motion";

type Crumb = { label: string; href?: string };

type PageHeroProps = {
  eyebrow: string;
  title: React.ReactNode;
  description?: string;
  image?: string;
  breadcrumbs?: Crumb[];
};

/**
 * Interior page hero. The H1 is the LCP element and is never animated
 * (per SYSTEM/DESIGN-LANGUAGE/02-MOTION-SYSTEM.md §5).
 * Any `priority` image sits outside every Reveal.
 */
export default function PageHero({
  eyebrow,
  title,
  description,
  image,
  breadcrumbs,
}: PageHeroProps) {
  const hero = heroStack({ character: "considered" });

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

      {/* Solid dark overlay — legibility, no gradients. */}
      <div className="absolute inset-0 bg-brand-ink/85" />

      <div className="relative z-10 mx-auto max-w-7xl px-6 pb-20 pt-36 md:pb-28 md:pt-44 lg:px-8">
        {breadcrumbs && (
          <Reveal
            {...hero.step(0)}
            as="nav"
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
          </Reveal>
        )}

        <Reveal {...hero.step(1)}>
          <div className="inline-flex items-center gap-2.5 rounded-full border border-brand-primary/30 bg-brand-primary/10 px-4 py-1.5 text-[11px] font-semibold uppercase tracking-[0.2em] text-brand-primary backdrop-blur">
            <span className="h-1.5 w-1.5 rounded-full bg-brand-primary" />
            {eyebrow}
          </div>
        </Reveal>

        {/* LCP element — must not animate. */}
        <h1
          {...hero.lcp}
          className="mt-7 max-w-4xl font-display text-4xl font-bold leading-[1.05] tracking-tight md:text-5xl lg:text-6xl"
        >
          {title}
        </h1>

        {description && (
          <Reveal
            {...hero.step(2)}
            as="p"
            className="mt-6 max-w-2xl text-base leading-relaxed text-white/65 md:text-lg"
          >
            {description}
          </Reveal>
        )}
      </div>
    </section>
  );
}
