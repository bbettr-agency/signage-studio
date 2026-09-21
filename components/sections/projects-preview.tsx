import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight, MapPin } from "lucide-react";

import { featuredProjects } from "@/config/projects-config";
import SectionContainer from "@/components/layout/section-container";
import SectionHeading from "@/components/ui/section-heading";
import { Reveal, Stagger } from "@/engine/motion";
import { cn } from "@/utils/cn";

export default function ProjectsPreview() {
  const featured = featuredProjects;

  return (
    <SectionContainer className="bg-brand-graphite text-white">
      <Reveal>
        <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between md:gap-12">
          <SectionHeading
            eyebrow="Selected Work"
            title={
              <>
                Recent projects
                <br />
                <span className="text-white/40">from the studio floor.</span>
              </>
            }
            description="A small selection of vehicle wraps, building signage and installations delivered over the past 12 months."
            className="mb-0 md:max-w-2xl"
          />
          <Link
            href="/projects"
            className="group inline-flex items-center gap-2 self-start rounded-full border border-white/10 px-5 py-2.5 text-sm font-semibold text-white transition hover:border-brand-primary/40 hover:bg-brand-primary/5 hover:text-brand-primary md:self-end"
          >
            View full portfolio
            <ArrowUpRight className="h-4 w-4 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
          </Link>
        </div>
      </Reveal>

      <Stagger className="mt-16 grid gap-6 md:grid-cols-6 md:gap-8">
        {featured.map((project, i) => {
          const isLarge = i === 0 || i === 3;
          return (
            <Reveal
              key={project.image}
              preset="fadeUpItem"
              as="section"
              className={cn(
                "group relative overflow-hidden rounded-3xl border border-white/10 bg-brand-ink",
                isLarge ? "md:col-span-4" : "md:col-span-2"
              )}
            >
              <article>
                <div className="relative aspect-[4/3] overflow-hidden md:aspect-[16/10]">
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    sizes="(max-width: 768px) 100vw, 60vw"
                    className="object-cover transition-transform duration-700 ease-out will-change-transform group-hover:scale-[1.04]"
                  />

                  {/* Small solid strip only where the title needs contrast. */}
                  <div
                    aria-hidden
                    className="pointer-events-none absolute inset-x-0 bottom-0 h-28 bg-brand-ink/70"
                  />

                  <div className="absolute left-5 top-5">
                    <span className="inline-flex items-center rounded-full border border-white/25 bg-brand-ink/85 px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.2em] text-white">
                      {project.category}
                    </span>
                  </div>

                  <div className="absolute inset-x-0 bottom-0 flex items-end justify-between gap-4 p-6">
                    <div>
                      <h3 className="font-display text-xl font-semibold text-white md:text-2xl">
                        {project.title}
                      </h3>
                      {project.location && (
                        <div className="mt-1.5 flex items-center gap-1.5 text-xs text-white/60">
                          <MapPin className="h-3 w-3 text-brand-primary" />
                          {project.location}
                        </div>
                      )}
                    </div>

                    <span className="flex h-11 w-11 items-center justify-center rounded-full border border-white/25 bg-brand-ink/85 text-white transition group-hover:border-brand-primary group-hover:bg-brand-primary group-hover:text-white">
                      <ArrowUpRight className="h-4 w-4" aria-hidden />
                    </span>
                  </div>
                </div>
              </article>
            </Reveal>
          );
        })}
      </Stagger>
    </SectionContainer>
  );
}
