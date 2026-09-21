import { trustConfig } from "@/config/trust-config";
import SectionContainer from "@/components/layout/section-container";
import SectionHeading from "@/components/ui/section-heading";
import Icon from "@/components/ui/icon";
import { Reveal, Stagger } from "@/engine/motion";

/**
 * "Why Choose Signage Studio" — cream editorial rhythm.
 * Warm cream surface with thin ink dividers; icons stay teal for continuity
 * with the dark sections above/below.
 */
export default function WhyUs() {
  return (
    <SectionContainer className="bg-brand-cream text-brand-ink">
      <div className="grid gap-12 lg:grid-cols-[1fr_1.35fr] lg:gap-24">
        <Reveal>
          <SectionHeading
            eyebrow="Why Choose Signage Studio"
            tone="light"
            title={
              <>
                Engineered to last.
                <br />
                Designed to be seen.
              </>
            }
            description="We don't cut corners on vinyl, fabrication or installation. Every spec sheet, every weld, every squeegee stroke is intentional."
            className="mb-0"
          />
        </Reveal>

        <Stagger
          as="ul"
          className="divide-y divide-brand-ink/10 border-y border-brand-ink/10"
        >
          {trustConfig.map((item) => (
            <Reveal
              key={item.title}
              preset="fadeUpItem"
              as="li"
              className="group flex items-start gap-5 py-7 md:gap-8 md:py-8"
            >
              <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-brand-primary/10 text-brand-primary transition group-hover:bg-brand-primary group-hover:text-white md:h-12 md:w-12">
                <Icon name={item.icon} className="h-5 w-5" />
              </span>

              <div className="flex-1">
                <h3 className="font-display text-lg font-semibold text-brand-ink md:text-xl">
                  {item.title}
                </h3>
                <p className="mt-2 max-w-xl text-sm leading-6 text-brand-ink/65 md:text-base md:leading-7">
                  {item.description}
                </p>
              </div>
            </Reveal>
          ))}
        </Stagger>
      </div>
    </SectionContainer>
  );
}
