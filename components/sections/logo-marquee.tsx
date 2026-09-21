"use client";

import type { CSSProperties } from "react";

import { clientLogos } from "@/config/client-logos";
import { cn } from "@/utils/cn";

type LogoMarqueeProps = {
  heading?: string;
  className?: string;
};

/**
 * Seamless horizontal logo marquee.
 *
 * - Per-logo height (via CSS custom properties on `<img>` inline style) so
 *   compact/square logos can be bigger than wide wordmarks and every brand
 *   feels equally prominent. Widths stay `auto` — no stretching or cropping.
 * - Two duplicated tracks translate -50% for a seamless loop. Per-item
 *   margin-right (not flex gap) so the loop lands on frame with no jump.
 * - `brightness-0 invert` forces every logo to a uniform bright-white outline
 *   so mixed-colour sources all read on the dark surface. Full opacity on
 *   hover.
 * - Marquee pauses on hover.
 * - `prefers-reduced-motion: reduce` disables the animation and shows a
 *   static wrap grid instead.
 * - Vertically centred with a compact section — no more empty strip feel.
 */
export default function LogoMarquee({
  heading = "Trusted by businesses to bring their brands to life",
  className,
}: LogoMarqueeProps) {
  const track = [...clientLogos, ...clientLogos];

  return (
    <section
      className={cn(
        "relative border-y border-white/5 bg-brand-charcoal py-10 md:py-14",
        className
      )}
      aria-label="Clients we work with"
    >
      <div className="mx-auto mb-8 max-w-3xl px-6 text-center lg:px-8 md:mb-10">
        <p className="text-xs font-semibold uppercase tracking-[0.25em] text-brand-primary">
          Trusted By
        </p>
        <h2 className="mt-2.5 font-display text-xl font-semibold tracking-tight text-white/85 md:text-2xl">
          {heading}
        </h2>
      </div>

      {/* Marquee (default) */}
      <div className="group relative overflow-hidden motion-reduce:hidden">
        <div
          className="flex w-max animate-marquee-slow items-center group-hover:[animation-play-state:paused] md:animate-marquee"
          aria-hidden
        >
          {track.map((logo, i) => (
            <LogoImg key={`${logo.src}-${i}`} logo={logo} />
          ))}
        </div>
      </div>

      {/* Reduced-motion fallback: static wrap grid */}
      <div className="mx-auto hidden max-w-6xl flex-wrap items-center justify-center gap-x-14 gap-y-10 px-6 motion-reduce:flex lg:px-8">
        {clientLogos.map((logo) => (
          <LogoImg key={logo.src} logo={logo} labelled />
        ))}
      </div>

      {/* SR-only list so screen readers can read every client name */}
      <ul className="sr-only">
        {clientLogos.map((logo) => (
          <li key={`sr-${logo.src}`}>{logo.name}</li>
        ))}
      </ul>
    </section>
  );
}

/**
 * Individual logo — uses CSS variables so per-logo mobile/desktop heights
 * can be driven from config without leaving the component code messy.
 */
function LogoImg({
  logo,
  labelled = false,
}: {
  logo: (typeof clientLogos)[number];
  labelled?: boolean;
}) {
  const style = {
    // Falling back to sensible defaults if config omits the field.
    "--logo-h-sm": `${logo.heightMobilePx ?? 72}px`,
    "--logo-h-lg": `${logo.heightDesktopPx ?? 128}px`,
    height: "var(--logo-h-sm)",
  } as CSSProperties;

  return (
    <div
      className="mr-12 flex shrink-0 items-center md:mr-16"
      style={style}
      title={logo.name}
    >
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src={logo.src}
        alt={labelled ? `${logo.name} — Signage Studio client` : ""}
        draggable={false}
        className="h-[var(--logo-h-sm)] w-auto select-none brightness-0 invert opacity-85 transition-opacity duration-500 hover:opacity-100 md:h-[var(--logo-h-lg)]"
      />
    </div>
  );
}
