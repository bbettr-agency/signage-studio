import { processConfig } from "@/config/process-config";
import SectionContainer from "@/components/layout/section-container";
import { Reveal, Stagger } from "@/engine/motion";

/**
 * Our Process — cream surface for readability.
 * Open composition: numbered steps separated by thin dividers, no boxed cards.
 * Numbers rendered in primary teal — high contrast on cream, structural not
 * decorative (per accent-reserved rule).
 */
export default function ProcessSteps() {
  return (
    <SectionContainer className="bg-brand-cream text-brand-ink">
      <Reveal>
        <div className="mx-auto max-w-3xl text-center">
          <span
            className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.25em] text-brand-primary"
            aria-hidden
          >
            <span className="h-1.5 w-1.5 rounded-full bg-brand-primary" />
            How We Work
          </span>

          <h2 className="mt-6 font-display text-3xl font-bold leading-[1.08] tracking-tight text-brand-ink md:text-4xl lg:text-5xl">
            From brief to handover —
            <br />
            <span className="text-brand-ink/45">no surprises.</span>
          </h2>

          <p className="mx-auto mt-6 max-w-xl text-base leading-relaxed text-brand-ink/65 md:text-lg">
            A clean four-step process that keeps every project on time, on spec
            and on brand.
          </p>
        </div>
      </Reveal>

      <Stagger className="mt-20 grid gap-12 md:grid-cols-4 md:gap-0 md:divide-x md:divide-brand-ink/10">
        {processConfig.map((step) => (
          <Reveal
            key={step.number}
            preset="fadeUpItem"
            className="relative md:px-8 md:first:pl-0 md:last:pr-0"
          >
            <span className="font-display text-6xl font-bold text-brand-primary md:text-7xl">
              {step.number}
            </span>

            <h3 className="mt-6 font-display text-xl font-semibold tracking-tight text-brand-ink md:text-2xl">
              {step.title}
            </h3>

            <p className="mt-3 max-w-xs text-sm leading-6 text-brand-ink/60 md:text-base md:leading-7">
              {step.description}
            </p>
          </Reveal>
        ))}
      </Stagger>
    </SectionContainer>
  );
}
