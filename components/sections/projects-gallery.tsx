"use client";

import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { useState } from "react";

import {
  projectCategories,
  projectsConfig,
} from "@/config/projects-config";
import SectionContainer from "@/components/layout/section-container";
import { cn } from "@/utils/cn";

export default function ProjectsGallery() {
  const [active, setActive] = useState<string>("All");

  const filtered =
    active === "All"
      ? projectsConfig
      : projectsConfig.filter((p) => p.category === active);

  return (
    <SectionContainer className="bg-brand-ink text-white">
      {/* Filter bar */}
      <div className="mb-12 flex flex-wrap gap-2.5">
        {projectCategories.map((cat) => {
          const isActive = active === cat;
          return (
            <button
              key={cat}
              onClick={() => setActive(cat)}
              aria-pressed={isActive}
              className={cn(
                "rounded-full border px-5 py-2.5 text-sm font-medium transition-all duration-300",
                isActive
                  ? "border-brand-primary bg-brand-primary text-white shadow-glow"
                  : "border-white/10 bg-white/[0.02] text-white/65 hover:border-brand-primary/40 hover:text-white"
              )}
            >
              {cat}
            </button>
          );
        })}
      </div>

      {/* Grid */}
      <motion.div layout className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        <AnimatePresence mode="popLayout">
          {filtered.map((project) => (
            <motion.article
              key={project.title}
              layout
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
              className="group relative overflow-hidden rounded-3xl border border-white/10 bg-brand-graphite"
            >
              <div className="relative aspect-[4/3] overflow-hidden">
                <Image
                  src={project.image}
                  alt={`${project.category} signage by Signage Studio`}
                  fill
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  className="object-cover transition-transform duration-[1200ms] ease-out group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-brand-ink/90 via-brand-ink/10 to-transparent opacity-80 transition-opacity duration-500 group-hover:opacity-100" />

                <div className="absolute inset-x-0 bottom-0 flex items-end justify-between gap-3 p-5">
                  <span className="inline-flex items-center rounded-full border border-white/20 bg-brand-ink/60 px-3 py-1.5 text-[10px] font-semibold uppercase tracking-[0.18em] text-white backdrop-blur">
                    {project.category}
                  </span>
                  <span className="flex h-10 w-10 shrink-0 translate-y-2 items-center justify-center rounded-full border border-white/20 bg-white/10 text-white opacity-0 backdrop-blur transition-all duration-300 group-hover:translate-y-0 group-hover:border-brand-primary group-hover:bg-brand-primary group-hover:opacity-100">
                    <ArrowUpRight className="h-4 w-4" />
                  </span>
                </div>
              </div>
            </motion.article>
          ))}
        </AnimatePresence>
      </motion.div>
    </SectionContainer>
  );
}
