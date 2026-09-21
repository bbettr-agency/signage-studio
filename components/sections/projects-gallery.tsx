"use client";

import Image from "next/image";
import { ArrowUpRight } from "lucide-react";
import { useState } from "react";

import {
  projectCategories,
  projectsConfig,
} from "@/config/projects-config";
import SectionContainer from "@/components/layout/section-container";
import { Reveal, Stagger } from "@/engine/motion";
import { cn } from "@/utils/cn";

export default function ProjectsGallery() {
  const [active, setActive] = useState<string>("All");

  // Only show category chips that have real projects (also enforced in the
  // config — this is a belt-and-braces guard).
  const availableCategories = projectCategories.filter(
    (cat) =>
      cat === "All" || projectsConfig.some((p) => p.category === cat)
  );

  const filtered =
    active === "All"
      ? projectsConfig
      : projectsConfig.filter((p) => p.category === active);

  const count = filtered.length;

  return (
    <SectionContainer className="bg-brand-ink text-white">
      {/* Filter bar */}
      <div
        role="group"
        aria-label="Filter projects by category"
        className="mb-12 flex flex-wrap gap-2.5"
      >
        {availableCategories.map((cat) => {
          const isActive = active === cat;
          const catCount =
            cat === "All"
              ? projectsConfig.length
              : projectsConfig.filter((p) => p.category === cat).length;
          return (
            <button
              key={cat}
              onClick={() => setActive(cat)}
              aria-pressed={isActive}
              className={cn(
                "rounded-full border px-5 py-2.5 text-sm font-medium transition-colors duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-primaryLight focus-visible:ring-offset-2 focus-visible:ring-offset-brand-ink",
                isActive
                  ? "border-brand-primary bg-brand-primary text-white"
                  : "border-white/10 bg-white/[0.02] text-white/65 hover:border-brand-primary/40 hover:text-white"
              )}
            >
              {cat}
              <span
                aria-hidden
                className={cn(
                  "ml-2 text-[10px] font-semibold uppercase tracking-wider",
                  isActive ? "text-white/70" : "text-white/40"
                )}
              >
                {catCount}
              </span>
            </button>
          );
        })}
      </div>

      {/* Live count for screen readers */}
      <p className="sr-only" aria-live="polite">
        Showing {count} {active === "All" ? "projects" : active + " projects"}.
      </p>

      {/* Grid — keys include the active filter so cards re-mount on filter
          change, giving the Reveal preset a fresh entrance every time.
          `eager` = transform-only; the image stays visible on mount, so filter
          transitions never leave cards stuck at opacity 0. */}
      <Stagger
        key={active}
        className="grid gap-6 sm:grid-cols-2 md:gap-8 lg:grid-cols-3"
      >
        {filtered.map((project) => (
          <Reveal
            key={active + "|" + project.image}
            preset="fadeUpItem"
            eager
            as="section"
            className="group relative overflow-hidden rounded-3xl border border-white/10 bg-brand-graphite"
          >
            <article>
              <div className="relative aspect-[4/3] overflow-hidden">
                <Image
                  src={project.image}
                  alt={`${project.category} signage by Signage Studio`}
                  fill
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  className="object-cover transition-transform duration-700 ease-out will-change-transform group-hover:scale-[1.04]"
                />

                {/* Subtle bottom shade — only the bottom quarter, only for badge
                    contrast on bright images. Small solid block, not a slab. */}
                <div
                  aria-hidden
                  className="pointer-events-none absolute inset-x-0 bottom-0 h-16 bg-brand-ink/55"
                />

                {/* Badge + arrow — sit on top of the small bottom shade */}
                <div className="absolute inset-x-0 bottom-0 flex items-end justify-between gap-3 p-4">
                  <span className="inline-flex items-center rounded-full border border-white/25 bg-brand-ink/85 px-3 py-1.5 text-[10px] font-semibold uppercase tracking-[0.18em] text-white">
                    {project.category}
                  </span>
                  <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-white/25 bg-brand-ink/85 text-white opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                    <ArrowUpRight className="h-4 w-4" aria-hidden />
                  </span>
                </div>
              </div>
            </article>
          </Reveal>
        ))}
      </Stagger>
    </SectionContainer>
  );
}
