"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, Phone } from "lucide-react";
import { useEffect, useState } from "react";

import { navigationConfig } from "@/config/navigation-config";
import { siteConfig } from "@/config/site-config";
import { useScrollLock } from "@/hooks/use-scroll-lock";
import { cn } from "@/utils/cn";
import Button from "@/components/ui/button";
import Logo from "@/components/ui/logo";
import MobileMenu from "./mobile-menu";

export default function PremiumNavbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const pathname = usePathname();

  useScrollLock(isOpen);

  useEffect(() => {
    const onScroll = () => setIsScrolled(window.scrollY > 16);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const isActive = (href: string) =>
    href === "/" ? pathname === "/" : pathname.startsWith(href);

  return (
    <>
      <header
        className={cn(
          "fixed inset-x-0 top-0 z-50 transition-all duration-500",
          isScrolled
            ? "border-b border-white/5 bg-brand-ink/80 backdrop-blur-xl"
            : "bg-transparent"
        )}
      >
        <div
          className={cn(
            "mx-auto flex max-w-7xl items-center justify-between px-6 transition-all duration-500 lg:px-8",
            isScrolled ? "py-3" : "py-5"
          )}
        >
          <Logo
            imgClassName={cn(
              "w-auto transition-all duration-500",
              isScrolled ? "h-10 md:h-11" : "h-14 md:h-[4.5rem]"
            )}
          />

          <nav className="hidden items-center gap-1 md:flex">
            {navigationConfig.navigation.map((item) => {
              const active = isActive(item.href);
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  aria-current={active ? "page" : undefined}
                  className={cn(
                    "rounded-full px-4 py-2 text-sm font-medium transition",
                    active
                      ? "bg-brand-primary/10 text-brand-primary"
                      : "text-white/70 hover:bg-white/5 hover:text-white"
                  )}
                >
                  {item.label}
                </Link>
              );
            })}
          </nav>

          <div className="hidden items-center gap-3 md:flex">
            <a
              href={siteConfig.phoneLink}
              className="flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm font-medium text-white/80 backdrop-blur transition hover:border-brand-primary/50 hover:text-white"
            >
              <Phone className="h-3.5 w-3.5 text-brand-primary" />
              {siteConfig.phoneDisplay}
            </a>
            <Button href="/contact" size="md" variant="primary" withArrow>
              {siteConfig.cta}
            </Button>
          </div>

          <button
            onClick={() => setIsOpen(true)}
            className="rounded-xl border border-white/10 bg-white/5 p-2.5 text-white transition hover:border-brand-primary/50 hover:text-brand-primary md:hidden"
            aria-label="Open mobile menu"
          >
            <Menu className="h-5 w-5" />
          </button>
        </div>
      </header>

      <MobileMenu isOpen={isOpen} onClose={() => setIsOpen(false)} />
    </>
  );
}
