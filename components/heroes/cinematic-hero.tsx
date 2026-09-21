import Image from "next/image";
import { MapPin, Star } from "lucide-react";

import { siteConfig } from "@/config/site-config";
import { heroImage, heroImageAlt } from "@/config/projects-config";
import Button from "@/components/ui/button";
import LogoMarquee from "@/components/sections/logo-marquee";
import { Reveal, heroStack } from "@/engine/motion";

/**
 * Signage Studio hero — OS v2.7 compliant, centre-aligned composition.
 *
 * - Backdrop: real large-format Chromadek install for Safari Outdoor. Cinematic
 *   1800×810 aspect works cleanly at full-bleed; a heavy solid ink overlay
 *   keeps the type crisp (`SYSTEM/DESIGN-LANGUAGE/00-DESIGN-LANGUAGE.md` §5,
 *   contrast measured over image regions).
 * - `heroStack().lcp` on the H1 — LCP element never animates
 *   (`02-MOTION-SYSTEM.md` §5). Priority image sits outside every Reveal.
 * - Content is centred; the trust rail + client-logo strip immediately after
 *   the CTAs collapse the "hero → trust section" gap into one confidence step.
 * - Total motion choreography stays under the 900 ms hero ceiling by
 *   consolidating supporting elements into two Reveal steps.
 */
export default function CinematicHero() {
  const hero = heroStack({ character: "considered" });

  return (
    <section className="relative flex min-h-[100svh] flex-col overflow-hidden bg-brand-ink text-white">
      {/* Real project photography — LCP media, priority preloaded, no fade. */}
      <div className="absolute inset-0">
        <Image
          src={heroImage}
          alt={heroImageAlt}
          fill
          priority
          sizes="100vw"
          className="object-cover object-center opacity-45"
        />
        {/* Solid dark overlay — no gradients. Heavier than the standard page
            hero so the busy install imagery becomes atmospheric texture and
            the centred type remains high-contrast. */}
        <div className="absolute inset-0 bg-brand-ink/75" />
      </div>

      {/* Content column: centred, sensibly narrow so headline reads at all sizes.
          `flex-1` claims the space between the navbar spacer and the marquee. */}
      <div className="relative z-10 mx-auto flex w-full max-w-4xl flex-1 flex-col justify-center px-6 pb-10 pt-36 text-center lg:px-8 lg:pb-14 lg:pt-40">
        <Reveal
          {...hero.step(0)}
          className="mx-auto inline-flex w-fit items-center gap-2.5 rounded-full border border-white/15 bg-white/[0.03] px-4 py-1.5 text-[11px] font-semibold uppercase tracking-[0.2em] text-white/85 backdrop-blur"
        >
          <span className="h-1.5 w-1.5 rounded-full bg-brand-primary" />
          Signage Studio · Silverton, Pretoria · Since {siteConfig.established}
        </Reveal>

        {/* LCP element — must not animate. `hero.lcp` is deliberately empty. */}
        <h1
          {...hero.lcp}
          className="mx-auto mt-8 max-w-4xl font-display text-4xl font-bold leading-[1.05] tracking-tight md:text-5xl lg:text-6xl"
        >
          Professional signage that makes your brand{" "}
          <span className="text-brand-primary">impossible</span> to miss.
        </h1>

        <Reveal
          {...hero.step(1)}
          as="p"
          className="mx-auto mt-6 max-w-2xl text-base leading-relaxed text-white/75 md:text-lg"
        >
          Vehicle branding, building signage and custom installations —
          manufactured and installed in-house from Silverton, Pretoria since
          {" "}
          {siteConfig.established}.
        </Reveal>

        <Reveal
          {...hero.step(2)}
          className="mx-auto mt-10 flex w-full flex-col items-center gap-3 sm:flex-row sm:justify-center"
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
        </Reveal>

        {/* Trust rail — single line, centred. */}
        <div className="mx-auto mt-10 flex flex-wrap items-center justify-center gap-x-6 gap-y-2 text-sm text-white/65">
          <span className="inline-flex items-center gap-2">
            <span className="flex" aria-hidden>
              {[...Array(5)].map((_, i) => (
                <Star
                  key={i}
                  className="h-3.5 w-3.5 fill-brand-primary text-brand-primary"
                />
              ))}
            </span>
            <span className="font-medium text-white/90">5.0 · 200+ clients</span>
          </span>
          <span className="hidden h-3 w-px bg-white/15 sm:block" aria-hidden />
          <span className="inline-flex items-center gap-1.5">
            <MapPin className="h-3.5 w-3.5 text-brand-primary" />
            Silverton, Pretoria
          </span>
          <span className="hidden h-3 w-px bg-white/15 sm:block" aria-hidden />
          <span>Nationwide installs</span>
        </div>

      </div>

      {/* Trusted-by marquee — full-bleed inside the hero, anchored to the
          bottom of the 100svh area by `flex-col` above. Scale 1.4 so logos
          are unmissable. Pure CSS animation (auto-scroll, pause on hover);
          prefers-reduced-motion falls back to a static wrap. Above-the-fold
          safe: no opacity fade, no observer wait. */}
      <div className="relative z-10 w-full shrink-0 pb-6 md:pb-10">
        <p className="mb-5 text-center text-[10px] font-semibold uppercase tracking-[0.28em] text-white/45 md:mb-7">
          Trusted by
        </p>
        <LogoMarquee variant="embedded" scale={1.4} />
      </div>
    </section>
  );
}
