import { ReactNode } from "react";
import { cn } from "@/utils/cn";

type FormShellProps = {
  children: ReactNode;
  className?: string;
  title?: string;
  description?: string;
};

export default function FormShell({
  children,
  className,
  title,
  description,
}: FormShellProps) {
  return (
    <div
      className={cn(
        "relative rounded-[1.75rem] border border-white/10 bg-white/[0.04] p-3 shadow-ink backdrop-blur-xl",
        className
      )}
    >
      <div className="relative rounded-[1.5rem] border border-white/[0.06] bg-brand-ink/80 p-8">
        {(title || description) && (
          <div className="mb-7">
            {title && (
              <h3 className="font-display text-2xl font-bold text-white">
                {title}
              </h3>
            )}
            {description && (
              <p className="mt-2 text-sm text-white/60">{description}</p>
            )}
          </div>
        )}

        {children}
      </div>
    </div>
  );
}
