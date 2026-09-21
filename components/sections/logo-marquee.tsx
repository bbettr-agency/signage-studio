"use client";

import type { CSSProperties } from "react";

import { clientLogos } from "@/config/client-logos";
import { cn } from "@/utils/cn";

type LogoMarqueeProps = {
  heading?: string;
  className?: string;
  /**
   * `section` (default) — self-contained tinted section with a heading; used
   * as a top-level page section.
   * `embedded` — bare track only, transparent background, no heading; used
   * when the marquee lives inside another surface (e.g. the hero).
   */
  variant?: "section" | "embedded";
  /**
   * Multiplier applied on top of each logo's config height. Used to pump the
   * strip louder without editing per-brand values. Default 1.
   */
  scale?: number;
};

/**
 * Seamless horizontal client-logo marquee.
 *
 * - Per-logo height (CSS custom properties on `<img>` inline style) so square
 *   marks can be bigger than wide wordmarks and every brand feels equally
 *   prominent. Widths stay `auto` — no stretching or cropping.
 * - Two duplicated tracks translate -50% for a seamless loop. Per-item
 *   margin-right (not flex gap) so the loop lands on frame with no jump.
 * - `brightness-0 invert` forces every logo to a uniform bright-white outline
 *   so mixed-colour sources all read on the dark surface. Full opacity on
 *   hover.
 * - Marquee pauses on hover.
 * - `prefers-reduced-motion: reduce` disables the animation and shows a
 *   static wrap grid instead.
 */
export default function LogoMarquee({
  heading = "Trusted by businesses to bring their brands to life",
  className,
  variant = "section",
  scale = 1,
}: LogoMarqueeProps) {
  const track = [...clientLogos, ...clientLogos];

  const marquee = (
    <>
      {/* Marquee (default) */}
      <div className="group relative overflow-hidden motion-reduce:hidden">
        <div
          className="flex w-max animate-marquee-slow items-center group-hover:[animation-play-state:paused] md:animate-marquee"
          aria-hidden
        >
          {track.map((logo, i) => (
            <LogoImg key={`${logo.src}-${i}`} logo={logo} scale={scale} />
          ))}
        </div>
      </div>

      {/* Reduced-motion fallback: static wrap grid */}
      <div className="mx-auto hidden max-w-6xl flex-wrap items-center justify-center gap-x-14 gap-y-10 px-6 motion-reduce:flex lg:px-8">
        {clientLogos.map((logo) => (
          <LogoImg key={logo.src} logo={logo} scale={scale} labelled />
        ))}
      </div>

      {/* SR-only list so screen readers can read every client name */}
      <ul className="sr-only">
        {clientLogos.map((logo) => (
          <li key={`sr-${logo.src}`}>{logo.name}</li>
        ))}
      </ul>
    </>
  );

  if (variant === "embedded") {
    return (
      <div
        className={cn("relative", className)}
        aria-label="Clients we work with"
      >
        {marquee}
      </div>
    );
  }

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

      {marquee}
    </section>
  );
}

/**
 * Individual logo — uses CSS variables so per-logo mobile/desktop heights
 * can be driven from config without leaving the component code messy.
 * The `scale` multiplier lets a specific placement (e.g. the hero) pump the
 * whole set louder without editing per-brand values.
 */
function LogoImg({
  logo,
  labelled = false,
  scale = 1,
}: {
  logo: (typeof clientLogos)[number];
  labelled?: boolean;
  scale?: number;
}) {
  const hSm = Math.round((logo.heightMobilePx ?? 72) * scale);
  const hLg = Math.round((logo.heightDesktopPx ?? 128) * scale);
  const mrSm = Math.round(48 * scale);
  const mrLg = Math.round(64 * scale);

  const style = {
    "--logo-h-sm": `${hSm}px`,
    "--logo-h-lg": `${hLg}px`,
    marginRight: `${mrSm}px`,
    height: "var(--logo-h-sm)",
  } as CSSProperties;

  return (
    <div
      className="flex shrink-0 items-center md:[margin-right:var(--mr-lg)]"
      style={{ ...style, ["--mr-lg" as string]: `${mrLg}px` }}
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
