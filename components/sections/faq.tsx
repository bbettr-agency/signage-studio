"use client";

import { Minus, Plus } from "lucide-react";
import { useState } from "react";

import { faqConfig } from "@/config/faq-config";
import SectionContainer from "@/components/layout/section-container";
import SectionHeading from "@/components/ui/section-heading";
import { Reveal, Stagger } from "@/engine/motion";

export default function Faq() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <SectionContainer className="bg-brand-charcoal text-white">
      <div className="grid gap-16 lg:grid-cols-[1fr_1.4fr] lg:gap-24">
        <Reveal>
          <SectionHeading
            eyebrow="Common Questions"
            title={
              <>
                Everything you
                <br />
                need to know.
              </>
            }
            description="Still have questions? Reach out and we'll respond within one business day."
            className="mb-0"
          />
        </Reveal>

        <Stagger className="divide-y divide-white/10 border-y border-white/10">
          {faqConfig.map((item, index) => {
            const isOpen = openIndex === index;
            return (
              <Reveal key={item.question} preset="fadeUpItem">
                <button
                  onClick={() => setOpenIndex(isOpen ? null : index)}
                  className="group flex w-full items-center justify-between gap-6 py-7 text-left transition focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-primary/60 focus-visible:ring-offset-4 focus-visible:ring-offset-brand-charcoal"
                  aria-expanded={isOpen}
                >
                  <span
                    className={`font-display text-lg font-semibold transition md:text-xl ${
                      isOpen
                        ? "text-brand-primary"
                        : "text-white group-hover:text-brand-primary"
                    }`}
                  >
                    {item.question}
                  </span>

                  <span
                    className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-full border transition-colors duration-200 ${
                      isOpen
                        ? "border-brand-primary bg-brand-primary text-white"
                        : "border-white/15 text-white/70 group-hover:border-brand-primary group-hover:text-brand-primary"
                    }`}
                  >
                    {isOpen ? (
                      <Minus className="h-4 w-4" />
                    ) : (
                      <Plus className="h-4 w-4" />
                    )}
                  </span>
                </button>

                <div
                  className={`grid transition-all duration-500 ease-out ${
                    isOpen
                      ? "grid-rows-[1fr] pb-7 opacity-100"
                      : "grid-rows-[0fr] opacity-0"
                  }`}
                >
                  <div className="overflow-hidden">
                    <p className="max-w-2xl text-sm leading-relaxed text-white/60 md:text-base">
                      {item.answer}
                    </p>
                  </div>
                </div>
              </Reveal>
            );
          })}
        </Stagger>
      </div>
    </SectionContainer>
  );
}
