"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowUpRight, MapPin } from "lucide-react";

import { featuredProjects } from "@/config/projects-config";
import SectionContainer from "@/components/layout/section-container";
import SectionHeading from "@/components/ui/section-heading";

export default function ProjectsPreview() {
  const featured = featuredProjects;

  return (
    <SectionContainer className="bg-brand-ink text-white">
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

      <div className="mt-16 grid gap-5 md:grid-cols-6">
        {featured.map((project, i) => {
          const isLarge = i === 0 || i === 3;
          return (
            <motion.article
              key={project.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: i * 0.08 }}
              viewport={{ once: true, margin: "-80px" }}
              className={`group relative overflow-hidden rounded-3xl border border-white/10 bg-brand-graphite ${
                isLarge ? "md:col-span-4" : "md:col-span-2"
              } ${i === 0 || i === 1 ? "" : ""}`}
            >
              <div className="relative aspect-[4/3] overflow-hidden md:aspect-[16/10]">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  sizes="(max-width: 768px) 100vw, 60vw"
                  className="object-cover transition-transform duration-[1200ms] ease-out group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-brand-ink via-brand-ink/30 to-transparent" />

                <div className="absolute left-5 top-5">
                  <span className="inline-flex items-center rounded-full border border-white/20 bg-brand-ink/60 px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.2em] text-white backdrop-blur">
                    {project.category}
                  </span>
                </div>

                <div className="absolute inset-x-0 bottom-0 flex items-end justify-between gap-4 p-6">
                  <div>
                    <h3 className="font-display text-xl font-bold text-white md:text-2xl">
                      {project.title}
                    </h3>
                    {project.location && (
                      <div className="mt-1.5 flex items-center gap-1.5 text-xs text-white/60">
                        <MapPin className="h-3 w-3 text-brand-primary" />
                        {project.location}
                      </div>
                    )}
                  </div>

                  <span className="flex h-11 w-11 items-center justify-center rounded-full border border-white/20 bg-white/10 text-white backdrop-blur transition group-hover:border-brand-primary group-hover:bg-brand-primary group-hover:text-brand-ink">
                    <ArrowUpRight className="h-4 w-4" />
                  </span>
                </div>
              </div>
            </motion.article>
          );
        })}
      </div>
    </SectionContainer>
  );
}
