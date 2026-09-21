import Image from "next/image";

import { aboutConfig } from "@/config/about-config";
import { siteConfig } from "@/config/site-config";
import SectionContainer from "@/components/layout/section-container";
import SectionHeading from "@/components/ui/section-heading";
import { Reveal } from "@/engine/motion";

/**
 * About story — cream editorial pause.
 * Portrait studio photo on cream; dark badge floats over the image for a
 * magazine-like contrast without a "template card" feel.
 */
export default function AboutStory() {
  return (
    <SectionContainer className="bg-brand-cream text-brand-ink">
      <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-20">
        <Reveal className="relative">
          <div className="relative overflow-hidden rounded-3xl border border-brand-ink/10">
            <div className="relative aspect-[4/5]">
              <Image
                src={aboutConfig.story.image}
                alt="Signage Studio fabricated 3D signage installation"
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover"
              />
            </div>
          </div>

          {/* Floating badge — dark contrast on cream, magazine-style */}
          <div className="absolute -bottom-6 -right-4 rounded-2xl border border-brand-ink/10 bg-brand-ink p-6 shadow-ink md:-right-8">
            <div className="font-display text-4xl font-bold text-brand-primary">
              Est. {siteConfig.established}
            </div>
            <div className="mt-1 text-xs uppercase tracking-[0.18em] text-white/55">
              {siteConfig.region} Studio
            </div>
          </div>
        </Reveal>

        <Reveal>
          <SectionHeading
            eyebrow="Our Story"
            tone="light"
            title={
              <>
                A signage studio,
                <br />
                <span className="text-brand-ink/45">not a print shop.</span>
              </>
            }
            className="mb-8"
          />

          <div className="space-y-5">
            {aboutConfig.story.paragraphs.map((p, i) => (
              <p
                key={i}
                className="text-base leading-relaxed text-brand-ink/70 md:text-lg"
              >
                {p}
              </p>
            ))}
          </div>
        </Reveal>
      </div>
    </SectionContainer>
  );
}
