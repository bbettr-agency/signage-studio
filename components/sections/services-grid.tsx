import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight, Camera } from "lucide-react";

import { servicesConfig } from "@/config/services-config";
import { siteConfig } from "@/config/site-config";
import SectionContainer from "@/components/layout/section-container";
import SectionHeading from "@/components/ui/section-heading";
import Icon from "@/components/ui/icon";
import Button from "@/components/ui/button";
import { Reveal, Stagger } from "@/engine/motion";
import { cn } from "@/utils/cn";

/**
 * "What We Do" — editorial rhythm:
 *   1. Statement + link to the full services page.
 *   2. Featured trio of alternating text↔image rows (outcome-led headlines,
 *      real project photography, single Quote CTA per row).
 *   3. Remaining services listed on thin dividers so nothing is hidden.
 */
export default function ServicesGrid() {
  const featured = servicesConfig.filter((s) => s.featured);
  const remaining = servicesConfig.filter((s) => !s.featured);

  return (
    <SectionContainer id="services" className="bg-brand-ink text-white">
      {/* 1 · Editorial statement */}
      <Reveal>
        <div className="grid gap-10 md:grid-cols-[1.15fr_1fr] md:items-end md:gap-16">
          <SectionHeading
            eyebrow="What We Do"
            title={
              <>
                Eight disciplines.
                <br />
                <span className="text-white/40">One studio.</span>
              </>
            }
            description="From wraps to fabrication to installation — every job leaves the studio held to the same premium standard, engineered and installed by our own crews."
            className="mb-0"
          />
          <Link
            href="/services"
            className="group inline-flex items-center gap-2 self-start rounded-full border border-white/10 px-5 py-2.5 text-sm font-semibold text-white transition hover:border-brand-primary/50 hover:bg-brand-primary/5 hover:text-brand-primary md:self-end"
          >
            See every service
            <ArrowUpRight className="h-4 w-4 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
          </Link>
        </div>
      </Reveal>

      {/* 2 · Featured trio — alternating text ↔ image, no boxed cards */}
      <div className="mt-24 space-y-24 md:mt-28 md:space-y-32">
        {featured.map((service, i) => (
          <FeaturedRow
            key={service.slug}
            service={service}
            reversed={i % 2 === 1}
          />
        ))}
      </div>

      {/* 3 · Remaining disciplines — clean divider list so nothing is hidden */}
      <div className="mt-28 border-t border-white/10 pt-16 md:mt-32">
        <Reveal>
          <div className="mb-10 flex flex-col gap-3 md:flex-row md:items-end md:justify-between">
            <h3 className="font-display text-2xl font-semibold tracking-tight text-white md:text-3xl">
              Also in the studio
            </h3>
            <p className="max-w-md text-sm text-white/55">
              Every discipline below is made in-house and installed nationwide.
            </p>
          </div>
        </Reveal>

        <Stagger
          as="ul"
          className="divide-y divide-white/10 border-y border-white/10"
        >
          {remaining.map((service) => (
            <Reveal
              key={service.slug}
              preset="fadeUpItem"
              as="li"
            >
              <Link
                href={service.href}
                className="group flex items-center gap-4 py-5 transition hover:pl-3 md:gap-6 md:py-6"
              >
                <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-white/5 text-brand-primary transition group-hover:bg-brand-primary group-hover:text-white md:h-12 md:w-12">
                  <Icon name={service.icon} className="h-4 w-4 md:h-5 md:w-5" />
                </span>

                <div className="flex-1">
                  <div className="flex flex-wrap items-baseline gap-x-3 gap-y-1">
                    <span className="font-display text-lg font-semibold text-white md:text-xl">
                      {service.title}
                    </span>
                    {service.outcome && (
                      <span className="text-sm text-white/50 md:text-base">
                        — {service.outcome}
                      </span>
                    )}
                  </div>
                  {service.suits && (
                    <p className="mt-1 hidden text-sm text-white/45 md:block">
                      {service.suits}
                    </p>
                  )}
                </div>

                <ArrowUpRight className="h-4 w-4 shrink-0 text-white/40 transition group-hover:text-brand-primary md:h-5 md:w-5" />
              </Link>
            </Reveal>
          ))}
        </Stagger>
      </div>
    </SectionContainer>
  );
}

/* ------------------------------------------------------------------ */
/* Featured editorial row — image ↔ text, no card.                     */
/* ------------------------------------------------------------------ */

function FeaturedRow({
  service,
  reversed,
}: {
  service: (typeof servicesConfig)[number];
  reversed: boolean;
}) {
  return (
    <div
      id={service.slug}
      className="scroll-mt-28 grid items-center gap-10 lg:grid-cols-2 lg:gap-16"
    >
      {/* Visual */}
      <Reveal
        preset="imageReveal"
        className={cn("relative", reversed && "lg:order-2")}
      >
        <div className="relative aspect-[4/3] w-full overflow-hidden rounded-2xl">
          {service.image ? (
            <Image
              src={service.image}
              alt={`${service.title} — Signage Studio project`}
              fill
              sizes="(max-width: 1024px) 100vw, 50vw"
              className="object-cover transition-transform duration-700 ease-out hover:scale-[1.03]"
            />
          ) : (
            <VehiclePlaceholder />
          )}
        </div>
      </Reveal>

      {/* Copy */}
      <Reveal className={cn(reversed && "lg:order-1")}>
        <span className="text-xs font-semibold uppercase tracking-[0.22em] text-brand-primary">
          {service.title}
        </span>

        <h3 className="mt-4 font-display text-3xl font-bold leading-[1.08] tracking-tight md:text-4xl lg:text-5xl">
          {service.outcome ?? service.title}.
        </h3>

        <p className="mt-5 max-w-xl text-base leading-relaxed text-white/65 md:text-lg">
          {service.description}
        </p>

        {service.suits && (
          <p className="mt-3 max-w-xl text-sm text-white/45">
            <span className="font-medium text-white/70">Best for: </span>
            {service.suits}
          </p>
        )}

        <div className="mt-8 flex flex-wrap items-center gap-4">
          <Button
            href={siteConfig.quoteHref}
            variant="primary"
            withArrow
            size="md"
          >
            {siteConfig.cta}
          </Button>
          <Link
            href={service.href}
            className="text-sm font-semibold text-white/75 underline-offset-4 transition hover:text-brand-primary hover:underline"
          >
            Learn about {service.title.toLowerCase()} →
          </Link>
        </div>
      </Reveal>
    </div>
  );
}

/**
 * Honest placeholder for services awaiting real photography (currently only
 * Vehicle Branding). Kept sparse and on-brand — no fake stock imagery.
 */
function VehiclePlaceholder() {
  return (
    <div className="flex h-full flex-col items-center justify-center bg-brand-graphite px-8 text-center">
      <span className="flex h-14 w-14 items-center justify-center rounded-full bg-brand-primary/10 text-brand-primary">
        <Camera className="h-5 w-5" />
      </span>
      <p className="mt-5 max-w-sm text-sm font-medium text-white/80">
        Fresh vehicle-wrap photography landing soon
      </p>
      <p className="mt-2 max-w-xs text-xs leading-5 text-white/45">
        Request a quote to see recent samples direct from the studio.
      </p>
    </div>
  );
}
