import Link from "next/link";
import { Facebook, Instagram, Mail, MapPin, Phone } from "lucide-react";

import { siteConfig } from "@/config/site-config";
import { navigationConfig } from "@/config/navigation-config";
import { servicesConfig } from "@/config/services-config";
import Button from "@/components/ui/button";
import Logo from "@/components/ui/logo";

export default function PremiumFooter() {
  return (
    <footer className="relative overflow-hidden bg-brand-ink pt-24 text-white">
      <div className="pointer-events-none absolute left-1/2 top-0 h-px w-full max-w-7xl -translate-x-1/2 bg-gradient-to-r from-transparent via-brand-primary/40 to-transparent" />
      <div className="pointer-events-none absolute -top-32 left-1/2 h-[400px] w-[400px] -translate-x-1/2 rounded-full bg-brand-primary/5 blur-[100px]" />

      <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
        {/* CTA strip */}
        <div className="mb-20 grid items-center gap-8 rounded-[1.75rem] border border-white/10 bg-gradient-to-br from-white/[0.04] to-white/[0.01] p-10 md:grid-cols-[1.5fr_auto] md:p-14">
          <div>
            <p className="mb-3 text-xs font-semibold uppercase tracking-[0.25em] text-brand-primary">
              Let's Make It Loud
            </p>
            <h3 className="font-display text-3xl font-bold tracking-tight md:text-4xl">
              Ready to put your brand on the road or up on the wall?
            </h3>
          </div>
          <div className="flex flex-col gap-3 sm:flex-row md:flex-col">
            <Button href="/contact" variant="primary" withArrow>
              {siteConfig.cta}
            </Button>
            <Button href={siteConfig.phoneLink} variant="ghost">
              {siteConfig.phoneDisplay}
            </Button>
          </div>
        </div>

        {/* Main grid */}
        <div className="grid gap-12 md:grid-cols-12">
          {/* Brand */}
          <div className="md:col-span-4">
            <Logo imgClassName="h-11 w-auto md:h-12" />

            <p className="mt-6 max-w-sm text-sm leading-7 text-white/55">
              {siteConfig.description}
            </p>

            <div className="mt-8 flex gap-3">
              <a
                href={siteConfig.social.instagram}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Signage Studio on Instagram"
                className="flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-white/5 text-white/70 transition hover:border-brand-primary/40 hover:text-brand-primary"
              >
                <Instagram className="h-4 w-4" />
              </a>
              <a
                href={siteConfig.social.facebook}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Signage Studio on Facebook"
                className="flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-white/5 text-white/70 transition hover:border-brand-primary/40 hover:text-brand-primary"
              >
                <Facebook className="h-4 w-4" />
              </a>
            </div>
          </div>

          {/* Site */}
          <div className="md:col-span-2">
            <h4 className="text-xs font-semibold uppercase tracking-[0.2em] text-white/40">
              Site
            </h4>
            <ul className="mt-5 space-y-3 text-sm">
              {navigationConfig.navigation.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="text-white/65 transition hover:text-brand-primary"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div className="md:col-span-3">
            <h4 className="text-xs font-semibold uppercase tracking-[0.2em] text-white/40">
              Contact
            </h4>
            <ul className="mt-5 space-y-3 text-sm text-white/65">
              <li className="flex items-start gap-3">
                <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-brand-primary" />
                {siteConfig.address}
              </li>
              <li className="flex items-start gap-3">
                <Phone className="mt-0.5 h-4 w-4 shrink-0 text-brand-primary" />
                <a
                  href={siteConfig.phoneLink}
                  className="transition hover:text-brand-primary"
                >
                  {siteConfig.phoneDisplay}
                </a>
              </li>
              <li className="flex items-start gap-3">
                <Mail className="mt-0.5 h-4 w-4 shrink-0 text-brand-primary" />
                <a
                  href={siteConfig.emailLink}
                  className="break-all transition hover:text-brand-primary"
                >
                  {siteConfig.email}
                </a>
              </li>
            </ul>
          </div>

          {/* Operating hours */}
          <div className="md:col-span-3">
            <h4 className="text-xs font-semibold uppercase tracking-[0.2em] text-white/40">
              Operating Hours
            </h4>
            <ul className="mt-5 space-y-2.5 text-sm text-white/65">
              {siteConfig.hoursDetail.map((row) => (
                <li
                  key={row.day}
                  className="flex items-center justify-between gap-3 border-b border-white/5 pb-2.5"
                >
                  <span>{row.day}</span>
                  <span
                    className={
                      row.time === "Closed"
                        ? "text-white/35"
                        : "font-medium text-brand-accent"
                    }
                  >
                    {row.time}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-20 flex flex-col items-center justify-between gap-4 border-t border-white/10 py-8 text-xs text-white/40 md:flex-row">
          <p>
            © {new Date().getFullYear()} {siteConfig.businessName}. Crafted in{" "}
            {siteConfig.city}. All rights reserved.
          </p>
          <div className="flex gap-6">
            <Link href="/" className="transition hover:text-brand-primary">
              Privacy Policy
            </Link>
            <Link href="/" className="transition hover:text-brand-primary">
              Terms
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
