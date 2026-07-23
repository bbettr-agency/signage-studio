import { ReactNode } from "react";
import { cn } from "@/utils/cn";

type SectionHeadingProps = {
  eyebrow?: string;
  title: ReactNode;
  description?: string;
  align?: "left" | "center";
  tone?: "dark" | "light";
  className?: string;
};

export default function SectionHeading({
  eyebrow,
  title,
  description,
  align = "left",
  tone = "dark",
  className,
}: SectionHeadingProps) {
  const isDark = tone === "dark";

  return (
    <div
      className={cn(
        "mb-14 md:mb-20",
        align === "center" && "mx-auto max-w-3xl text-center",
        className
      )}
    >
      {eyebrow && (
        <div
          className={cn(
            "mb-5 inline-flex items-center gap-2 rounded-full border px-4 py-1.5 text-[11px] font-semibold uppercase tracking-[0.2em]",
            isDark
              ? "border-brand-primary/30 bg-brand-primary/10 text-brand-primary"
              : "border-brand-ink/15 bg-brand-ink/5 text-brand-ink"
          )}
        >
          <span className="h-1.5 w-1.5 rounded-full bg-brand-primary" />
          {eyebrow}
        </div>
      )}

      <h2
        className={cn(
          "font-display text-4xl font-bold leading-[1.05] tracking-tight md:text-5xl lg:text-6xl",
          isDark ? "text-white" : "text-brand-ink"
        )}
      >
        {title}
      </h2>

      {description && (
        <p
          className={cn(
            "mt-6 max-w-2xl text-base leading-7 md:text-lg",
            align === "center" && "mx-auto",
            isDark ? "text-white/65" : "text-brand-ink/70"
          )}
        >
          {description}
        </p>
      )}
    </div>
  );
}
