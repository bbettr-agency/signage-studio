"use client";

import { MessageCircle, Phone } from "lucide-react";
import { siteConfig } from "@/config/site-config";

/**
 * Site-wide floating contact actions.
 *
 * - Desktop: a single circular WhatsApp button anchored bottom-right that
 *   stays visible while scrolling. Noticeable but not intrusive.
 * - Mobile: a sticky bottom bar with WhatsApp + Call, both thumb-sized,
 *   respecting `env(safe-area-inset-bottom)` for notched devices.
 * - Links, number and pre-filled message come from `siteConfig` — never
 *   hardcoded here.
 * - Fires a lightweight `signage_contact_click` window event on tap so any
 *   analytics integration (e.g. GTM, Plausible custom events, GHL webhooks)
 *   can pick them up without coupling to a specific vendor here.
 *
 * The corresponding bottom padding on `<main>` prevents content overlap.
 */
export default function FloatingActions() {
  const track = (channel: "whatsapp" | "call") => () => {
    if (typeof window === "undefined") return;
    try {
      window.dispatchEvent(
        new CustomEvent("signage_contact_click", { detail: { channel } })
      );
      // dataLayer for Google Tag Manager if it's on the page.
      const w = window as unknown as {
        dataLayer?: { push: (o: unknown) => void };
      };
      w.dataLayer?.push({ event: "signage_contact_click", channel });
    } catch {
      /* analytics is best-effort */
    }
  };

  return (
    <>
      {/* Desktop — floating circular WhatsApp button, bottom-right */}
      <a
        href={siteConfig.whatsappLink}
        target="_blank"
        rel="noopener noreferrer"
        aria-label={`WhatsApp Signage Studio on ${siteConfig.whatsapp}`}
        onClick={track("whatsapp")}
        className="fixed bottom-6 right-6 z-40 hidden h-14 w-14 items-center justify-center rounded-full bg-brand-primary text-white shadow-ink transition-all duration-300 hover:scale-105 hover:bg-brand-accent hover:text-brand-ink focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-primary focus-visible:ring-offset-2 focus-visible:ring-offset-brand-ink md:flex"
      >
        <MessageCircle className="h-6 w-6" aria-hidden />
        <span className="sr-only">
          WhatsApp Signage Studio on {siteConfig.whatsapp}
        </span>
      </a>

      {/* Mobile — sticky bottom action bar */}
      <nav
        aria-label="Contact Signage Studio"
        className="fixed inset-x-0 bottom-0 z-40 border-t border-white/10 bg-brand-ink/95 backdrop-blur-lg pb-[env(safe-area-inset-bottom)] md:hidden"
      >
        <div className="mx-auto flex max-w-lg items-stretch gap-3 px-4 py-3">
          <a
            href={siteConfig.whatsappLink}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={`WhatsApp Signage Studio on ${siteConfig.whatsapp}`}
            onClick={track("whatsapp")}
            className="flex flex-1 items-center justify-center gap-2 rounded-2xl bg-brand-primary px-4 py-3.5 text-sm font-semibold text-white focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-primary focus-visible:ring-offset-2 focus-visible:ring-offset-brand-ink"
          >
            <MessageCircle className="h-4 w-4" aria-hidden />
            WhatsApp
          </a>

          <a
            href={siteConfig.phoneLink}
            aria-label={`${siteConfig.callCta} on ${siteConfig.phoneDisplay}`}
            onClick={track("call")}
            className="flex flex-1 items-center justify-center gap-2 rounded-2xl bg-brand-accent px-4 py-3.5 text-sm font-semibold text-brand-ink focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-accent focus-visible:ring-offset-2 focus-visible:ring-offset-brand-ink"
          >
            <Phone className="h-4 w-4" aria-hidden />
            Call
          </a>
        </div>
      </nav>
    </>
  );
}
