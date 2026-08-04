"use client";

import { clientLogos } from "@/config/client-logos";
import { cn } from "@/utils/cn";

type LogoMarqueeProps = {
  heading?: string;
  className?: string;
};

/**
 * Seamless horizontal logo marquee.
 *
 * - Each logo has a FIXED HEIGHT and AUTO WIDTH so the natural aspect ratio
 *   is preserved: wide wordmarks read as wide, square marks as square. Nothing
 *   is stretched or cropped.
 * - Two duplicated tracks translate -50% for an infinite seamless loop.
 * - `brightness-0 invert` forces every logo to a uniform bright-white outline
 *   so mixed-colour source PNGs (some pale, some dark) all read on the dark
 *   surface. Full colour on hover.
 * - Marquee pauses on hover of the whole strip.
 * - `prefers-reduced-motion: reduce` disables the animation and shows a static
 *   wrap grid instead.
 * - Mobile uses a slower cadence via the `md:` variant.
 * - No mask/gradient at the edges (per the "no gradients" brand rule); the
 *   section container's overflow clips the track cleanly.
 */
export default function LogoMarquee({
  heading = "Trusted by businesses to bring their brands to life",
  className,
}: LogoMarqueeProps) {
  const track = [...clientLogos, ...clientLogos];

  return (
    <section
      className={cn(
        "relative border-y border-white/5 bg-brand-ink py-16 md:py-20",
        className
      )}
      aria-label="Clients we work with"
    >
      <div className="mx-auto mb-12 max-w-3xl px-6 text-center lg:px-8">
        <p className="text-xs font-semibold uppercase tracking-[0.25em] text-brand-primary">
          Trusted By
        </p>
        <h2 className="mt-3 font-display text-xl font-semibold tracking-tight text-white/85 md:text-2xl">
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
            /* eslint-disable-next-line @next/next/no-img-element */
            <img
              key={`${logo.src}-${i}`}
              src={logo.src}
              alt=""
              title={logo.name}
              className="mr-14 h-16 w-auto shrink-0 select-none brightness-0 invert opacity-80 transition-opacity duration-500 hover:opacity-100 md:mr-20 md:h-24 lg:h-28"
              draggable={false}
            />
          ))}
        </div>
      </div>

      {/* Reduced-motion fallback: static, honest wrap grid */}
      <div className="mx-auto hidden max-w-6xl flex-wrap items-center justify-center gap-x-14 gap-y-10 px-6 motion-reduce:flex lg:px-8">
        {clientLogos.map((logo) => (
          /* eslint-disable-next-line @next/next/no-img-element */
          <img
            key={logo.src}
            src={logo.src}
            alt={`${logo.name} — Signage Studio client`}
            title={logo.name}
            className="h-16 w-auto brightness-0 invert opacity-85 md:h-20"
            draggable={false}
          />
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
