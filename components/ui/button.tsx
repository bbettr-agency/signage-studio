import Link from "next/link";
import { ReactNode } from "react";
import { ArrowRight } from "lucide-react";
import { cn } from "@/utils/cn";

type ButtonVariant = "primary" | "secondary" | "ghost" | "outline";
type ButtonSize = "md" | "lg";

type ButtonProps = {
  children: ReactNode;
  href?: string;
  variant?: ButtonVariant;
  size?: ButtonSize;
  className?: string;
  withArrow?: boolean;
  external?: boolean;
  onClick?: () => void;
  type?: "button" | "submit";
  ariaLabel?: string;
};

const base =
  "group inline-flex items-center justify-center gap-2 rounded-full font-semibold transition-all duration-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-primary focus-visible:ring-offset-2 focus-visible:ring-offset-brand-ink";

const sizes: Record<ButtonSize, string> = {
  md: "px-6 py-3 text-sm",
  lg: "px-8 py-4 text-sm md:text-base",
};

const variants: Record<ButtonVariant, string> = {
  primary:
    "bg-brand-primary text-white hover:bg-brand-accent hover:text-brand-ink hover:shadow-accent",
  secondary:
    "bg-white text-brand-ink hover:bg-brand-accent",
  ghost:
    "bg-white/5 text-white backdrop-blur-md border border-white/10 hover:bg-white/10 hover:border-brand-primary/50",
  outline:
    "border border-brand-primary/50 text-brand-primary hover:bg-brand-primary hover:text-white",
};

export default function Button({
  children,
  href,
  variant = "primary",
  size = "lg",
  className,
  withArrow = false,
  external = false,
  onClick,
  type = "button",
  ariaLabel,
}: ButtonProps) {
  const classes = cn(base, sizes[size], variants[variant], className);

  const content = (
    <>
      <span>{children}</span>
      {withArrow && (
        <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
      )}
    </>
  );

  if (href) {
    if (external) {
      return (
        <a
          href={href}
          target="_blank"
          rel="noopener noreferrer"
          className={classes}
          aria-label={ariaLabel}
        >
          {content}
        </a>
      );
    }
    return (
      <Link href={href} className={classes} aria-label={ariaLabel}>
        {content}
      </Link>
    );
  }

  return (
    <button
      type={type}
      onClick={onClick}
      className={classes}
      aria-label={ariaLabel}
    >
      {content}
    </button>
  );
}
