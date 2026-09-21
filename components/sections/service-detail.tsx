import Image from "next/image";
import { Check } from "lucide-react";

import { servicesConfig } from "@/config/services-config";
import { siteConfig } from "@/config/site-config";
import SectionContainer from "@/components/layout/section-container";
import Icon from "@/components/ui/icon";
import Button from "@/components/ui/button";
import { Reveal } from "@/engine/motion";
import { cn } from "@/utils/cn";

/**
 * Service Detail — cream editorial rhythm on the Services page.
 * Alternating text ↔ image rows, no boxed cards.
 */
export default function ServiceDetail() {
  return (
    <SectionContainer
      className="bg-brand-cream text-brand-ink"
      innerClassName="space-y-24 md:space-y-28"
    >
      {servicesConfig.map((service, i) => {
        const reversed = i % 2 === 1;
        return (
          <div
            key={service.slug}
            id={service.slug}
            className="scroll-mt-28 grid items-center gap-10 lg:grid-cols-2 lg:gap-16"
          >
            {/* Image */}
            <Reveal
              preset="imageReveal"
              className={cn(
                "relative overflow-hidden rounded-3xl border border-brand-ink/10",
                reversed && "lg:order-2"
              )}
            >
              <div className="relative aspect-[4/3]">
                {service.image ? (
                  <Image
                    src={service.image}
                    alt={`${service.title} by Signage Studio`}
                    fill
                    sizes="(max-width: 1024px) 100vw, 50vw"
                    className="object-cover"
                  />
                ) : (
                  <div className="flex h-full flex-col items-center justify-center bg-brand-ink text-center">
                    <span className="flex h-14 w-14 items-center justify-center rounded-2xl bg-brand-primary/15 text-brand-primary">
                      <Icon name={service.icon} className="h-6 w-6" />
                    </span>
                    <p className="mt-5 px-8 text-sm font-medium text-white/85">
                      Fresh project photos landing soon
                    </p>
                    <p className="mt-1.5 px-10 text-xs leading-5 text-white/50">
                      Request a quote to see recent vehicle wrap samples.
                    </p>
                  </div>
                )}
              </div>
            </Reveal>

            {/* Text */}
            <Reveal className={cn(reversed && "lg:order-1")}>
              <div className="flex items-center gap-3">
                <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-brand-primary/10 text-brand-primary">
                  <Icon name={service.icon} className="h-5 w-5" />
                </span>
                <span className="font-mono text-xs uppercase tracking-[0.2em] text-brand-ink/45">
                  Service 0{i + 1}
                </span>
              </div>

              <h2 className="mt-6 font-display text-3xl font-bold tracking-tight text-brand-ink md:text-4xl lg:text-5xl">
                {service.title}
              </h2>

              <p className="mt-5 max-w-xl text-base leading-relaxed text-brand-ink/70 md:text-lg">
                {service.longDescription ?? service.description}
              </p>

              {service.bullets && (
                <ul className="mt-7 grid grid-cols-1 gap-3 sm:grid-cols-2">
                  {service.bullets.map((b) => (
                    <li
                      key={b}
                      className="flex items-center gap-2.5 text-sm text-brand-ink/80"
                    >
                      <span className="flex h-5 w-5 items-center justify-center rounded-full bg-brand-primary/15 text-brand-primary">
                        <Check className="h-3 w-3" />
                      </span>
                      {b}
                    </li>
                  ))}
                </ul>
              )}

              <div className="mt-9">
                <Button href={siteConfig.quoteHref} variant="primary" withArrow>
                  {siteConfig.cta}
                </Button>
              </div>
            </Reveal>
          </div>
        );
      })}
    </SectionContainer>
  );
}
