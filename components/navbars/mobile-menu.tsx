"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { MessageCircle, Phone, X } from "lucide-react";

import { navigationConfig } from "@/config/navigation-config";
import { siteConfig } from "@/config/site-config";
import { cn } from "@/utils/cn";
import Button from "@/components/ui/button";
import Logo from "@/components/ui/logo";

type MobileMenuProps = {
  isOpen: boolean;
  onClose: () => void;
};

/**
 * Mobile menu — pure CSS enter/exit so we don't reach for AnimatePresence.
 *
 * The panel is always mounted and translated off-screen when closed. Transform
 * transitions run on the compositor (no layout thrash) and honour
 * `prefers-reduced-motion` naturally when the OS applies it.
 */
export default function MobileMenu({ isOpen, onClose }: MobileMenuProps) {
  const pathname = usePathname();
  const isActive = (href: string) =>
    href === "/" ? pathname === "/" : pathname.startsWith(href);

  return (
    <div
      className={cn(
        "fixed inset-0 z-[100] md:hidden",
        // Keep the whole overlay non-interactive when closed so buttons
        // underneath still work. Only the panel itself needs to slide.
        isOpen ? "pointer-events-auto" : "pointer-events-none"
      )}
      aria-hidden={!isOpen}
    >
      {/* Scrim */}
      <button
        onClick={onClose}
        aria-label="Close mobile menu"
        className={cn(
          "absolute inset-0 bg-brand-ink/85 backdrop-blur-sm transition-opacity duration-200",
          isOpen ? "opacity-100" : "opacity-0"
        )}
      />

      {/* Panel */}
      <div
        role="dialog"
        aria-modal={isOpen}
        aria-label="Site navigation"
        className={cn(
          "absolute right-0 top-0 flex h-full w-[88%] max-w-sm flex-col bg-brand-charcoal p-6 text-white shadow-ink transition-transform duration-300 ease-out motion-reduce:transition-none",
          isOpen ? "translate-x-0" : "translate-x-full"
        )}
      >
        <div className="flex items-center justify-between">
          <Logo onClick={onClose} />

          <button
            onClick={onClose}
            className="rounded-full border border-white/10 bg-white/5 p-2.5 transition hover:border-brand-primary/50 hover:text-brand-primary focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-primaryLight focus-visible:ring-offset-2 focus-visible:ring-offset-brand-charcoal"
            aria-label="Close menu"
          >
            <X className="h-5 w-5" />
          </button>
        </div>

        <nav className="mt-12 flex flex-col gap-1">
          {navigationConfig.navigation.map((item, i) => {
            const active = isActive(item.href);
            return (
              <Link
                key={item.href}
                href={item.href}
                onClick={onClose}
                aria-current={active ? "page" : undefined}
                className={cn(
                  "group flex items-center justify-between border-b border-white/5 py-5 font-display text-2xl font-semibold tracking-tight transition-colors",
                  active
                    ? "text-brand-primary"
                    : "text-white/85 hover:text-brand-primary"
                )}
              >
                {item.label}
                <span
                  className={cn(
                    "font-mono text-xs",
                    active
                      ? "text-brand-primary"
                      : "text-white/30 group-hover:text-brand-primary"
                  )}
                >
                  0{i + 1}
                </span>
              </Link>
            );
          })}
        </nav>

        <div className="mt-auto space-y-3 pt-10">
          <a
            href={siteConfig.phoneLink}
            onClick={onClose}
            aria-label={`${siteConfig.callCta} on ${siteConfig.phoneDisplay}`}
            className="flex items-center gap-3 rounded-2xl border border-white/10 bg-white/5 px-5 py-4 text-sm text-white/80 transition hover:border-brand-primary/40 hover:text-white"
          >
            <Phone className="h-4 w-4 text-brand-primary" />
            {siteConfig.phoneDisplay}
          </a>
          <a
            href={siteConfig.whatsappLink}
            target="_blank"
            rel="noopener noreferrer"
            onClick={onClose}
            aria-label="WhatsApp Signage Studio"
            className="flex items-center gap-3 rounded-2xl border border-white/10 bg-white/5 px-5 py-4 text-sm text-white/80 transition hover:border-brand-primary/40 hover:text-white"
          >
            <MessageCircle className="h-4 w-4 text-brand-primary" />
            WhatsApp
          </a>
          <Button
            href={siteConfig.quoteHref}
            variant="primary"
            size="lg"
            withArrow
            className="w-full"
            onClick={onClose}
          >
            {siteConfig.cta}
          </Button>
        </div>
      </div>
    </div>
  );
}
