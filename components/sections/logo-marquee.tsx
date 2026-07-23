"use client";

import Image from "next/image";

import { clientLogos } from "@/config/client-logos";
import { cn } from "@/utils/cn";

type LogoMarqueeProps = {
  heading?: string;
  className?: string;
};

/**
 * Seamless horizontal logo marquee.
 * - Two duplicated tracks translate -50% for an infinite seamless loop.
 * - Muted grayscale + reduced opacity by default; full colour on group hover.
 * - Marquee pauses on hover of the whole strip.
 * - `prefers-reduced-motion: reduce` disables the animation and shows a static
 *   wrap-based grid instead.
 * - Mobile uses a slower cadence via the `md:` variant.
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
      <div className="mx-auto mb-10 max-w-3xl px-6 text-center lg:px-8">
        <p className="text-xs font-semibold uppercase tracking-[0.25em] text-brand-primary">
          Trusted By
        </p>
        <h2 className="mt-3 font-display text-xl font-semibold tracking-tight text-white/85 md:text-2xl">
          {heading}
        </h2>
      </div>

      {/* Marquee (default): masked at edges for a soft fade.
          Uses per-item margin-right (NOT flex-gap) so the -50% translate lands
          perfectly on the duplicated track for a seamless loop. */}
      <div
        className="group relative overflow-hidden motion-reduce:hidden [mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)]"
      >
        <div
          className="flex w-max animate-marquee-slow group-hover:[animation-play-state:paused] md:animate-marquee"
          aria-hidden
        >
          {track.map((logo, i) => (
            <div
              key={`${logo.src}-${i}`}
              className="relative mr-16 h-20 w-52 shrink-0 md:mr-28 md:h-28 md:w-72"
              title={logo.name}
            >
              {/* brightness-0 + invert forces every logo to a uniform bright
                  white — the only reliable treatment on a dark background
                  when logo colours are mixed (some pale, some dark). */}
              <Image
                src={logo.src}
                alt=""
                fill
                sizes="(max-width: 768px) 208px, 288px"
                className="object-contain opacity-70 brightness-0 invert transition-opacity duration-500 hover:opacity-100"
              />
            </div>
          ))}
        </div>
      </div>

      {/* Reduced-motion fallback: static, honest grid */}
      <div className="mx-auto hidden max-w-6xl flex-wrap items-center justify-center gap-x-12 gap-y-8 px-6 motion-reduce:flex lg:px-8">
        {clientLogos.map((logo) => (
          <div
            key={logo.src}
            className="relative h-20 w-52 md:h-24 md:w-60"
            title={logo.name}
          >
            <Image
              src={logo.src}
              alt={`${logo.name} — Signage Studio client`}
              fill
              sizes="240px"
              className="object-contain opacity-80 brightness-0 invert"
            />
          </div>
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
