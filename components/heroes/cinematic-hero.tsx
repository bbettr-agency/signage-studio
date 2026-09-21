import Image from "next/image";
import { MapPin, Star } from "lucide-react";

import { siteConfig } from "@/config/site-config";
import { heroImage } from "@/config/projects-config";
import Button from "@/components/ui/button";
import { Reveal, heroStack } from "@/engine/motion";

const HERO_IMAGE = heroImage;

/**
 * Signage Studio hero — OS v2.7 compliant.
 *
 * - `heroStack().lcp` on the H1: the LCP element is never animated, so it paints
 *   at first paint and survives a no-JS load. This is the single hardest motion
 *   rule the OS enforces (`SYSTEM/DESIGN-LANGUAGE/02-MOTION-SYSTEM.md` §5).
 * - Supporting elements ride the delay ladder via `hero.step(n)`.
 * - `priority` image sits OUTSIDE any Reveal (no opacity fade on the LCP media).
 * - Accent colour is reserved for the primary CTA elsewhere on the page; the
 *   hero highlight word uses `brand-primary` (teal) so the accent stays a
 *   trained signal for "act here".
 * - Type scale on H1 uses the approved tokens (no arbitrary sizes).
 */
export default function CinematicHero() {
  const hero = heroStack({ character: "considered" });

  return (
    <section className="relative min-h-[100svh] overflow-hidden bg-brand-ink text-white">
      {/* Real project photography — LCP media, priority preloaded, no fade. */}
      <div className="absolute inset-0">
        <Image
          src={HERO_IMAGE}
          alt="Illuminated channel-letter signage installed by Signage Studio"
          fill
          priority
          sizes="100vw"
          className="object-cover object-center opacity-55"
        />
        {/* Solid tinted overlays — no gradients. Two flat layers give both
            base contrast for the whole viewport and stronger contrast on the
            text column so the headline stays crisp. */}
        <div className="absolute inset-0 bg-brand-ink/55" />
        <div className="absolute inset-y-0 left-0 w-full bg-brand-ink/45 md:w-2/3" />
      </div>

      {/* Content — clean editorial column, no boxes. */}
      <div className="relative z-10 mx-auto flex min-h-[100svh] max-w-7xl flex-col justify-end px-6 pb-16 pt-40 lg:px-8 lg:pb-24 lg:pt-44">
        <Reveal {...hero.step(0)} className="inline-flex w-fit items-center gap-2.5 rounded-full border border-white/15 bg-white/[0.03] px-4 py-1.5 text-[11px] font-semibold uppercase tracking-[0.2em] text-white/85 backdrop-blur">
          <span className="h-1.5 w-1.5 rounded-full bg-brand-primary" />
          Signage Studio · Silverton, Pretoria · Since {siteConfig.established}
        </Reveal>

        {/* LCP element — must not animate. `hero.lcp` is deliberately empty. */}
        <h1
          {...hero.lcp}
          className="mt-8 max-w-5xl font-display text-4xl font-bold leading-[1.02] tracking-tight sm:text-5xl md:text-6xl lg:text-7xl"
        >
          Professional signage that makes your brand{" "}
          <span className="text-brand-primary">impossible</span> to miss.
        </h1>

        <Reveal {...hero.step(1)} as="p" className="mt-7 max-w-2xl text-base leading-7 text-white/70 md:text-lg md:leading-8">
          Vehicle branding, building signage and custom installations —
          manufactured and installed in-house since {siteConfig.established}.
        </Reveal>

        <Reveal {...hero.step(2)} className="mt-10 flex flex-col gap-3 sm:flex-row">
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
        </Reveal>

        {/* Trust rail — thin divider, single line, no boxed stats. */}
        <Reveal {...hero.step(3)} className="mt-14 flex flex-wrap items-center gap-x-8 gap-y-3 border-t border-white/10 pt-6 text-sm text-white/60">
          <span className="inline-flex items-center gap-2">
            <span className="flex" aria-hidden>
              {[...Array(5)].map((_, i) => (
                <Star
                  key={i}
                  className="h-3.5 w-3.5 fill-brand-primary text-brand-primary"
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
        </Reveal>
      </div>
    </section>
  );
}
