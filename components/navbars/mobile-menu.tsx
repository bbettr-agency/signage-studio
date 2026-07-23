"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
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

export default function MobileMenu({ isOpen, onClose }: MobileMenuProps) {
  const pathname = usePathname();
  const isActive = (href: string) =>
    href === "/" ? pathname === "/" : pathname.startsWith(href);

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-[100] md:hidden">
          <motion.button
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            onClick={onClose}
            className="absolute inset-0 bg-brand-ink/85 backdrop-blur-sm"
            aria-label="Close mobile menu"
          />

          <motion.div
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
            className="absolute right-0 top-0 flex h-full w-[88%] max-w-sm flex-col bg-brand-charcoal p-6 text-white shadow-ink"
          >
            <div className="flex items-center justify-between">
              <Logo onClick={onClose} />

              <button
                onClick={onClose}
                className="rounded-full border border-white/10 bg-white/5 p-2.5 transition hover:border-brand-primary/50 hover:text-brand-primary"
                aria-label="Close menu"
              >
                <X className="h-5 w-5" />
              </button>
            </div>

            <nav className="mt-12 flex flex-col gap-1">
              {navigationConfig.navigation.map((item, i) => {
                const active = isActive(item.href);
                return (
                  <motion.div
                    key={item.href}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.1 + i * 0.06 }}
                  >
                    <Link
                      href={item.href}
                      onClick={onClose}
                      aria-current={active ? "page" : undefined}
                      className={cn(
                        "group flex items-center justify-between border-b border-white/5 py-5 font-display text-2xl font-semibold tracking-tight transition",
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
                  </motion.div>
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
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
