"use client";

import { motion } from "framer-motion";
import { Clock, Mail, MapPin, MessageCircle, Phone } from "lucide-react";

import { siteConfig } from "@/config/site-config";
import SectionContainer from "@/components/layout/section-container";
import FormShell from "@/components/ui/form-shell";

const details = [
  {
    icon: Phone,
    label: "Call the studio",
    value: siteConfig.phoneDisplay,
    href: siteConfig.phoneLink,
  },
  {
    icon: MessageCircle,
    label: "WhatsApp",
    value: siteConfig.whatsapp,
    href: siteConfig.whatsappLink,
  },
  {
    icon: Mail,
    label: "Email us",
    value: siteConfig.email,
    href: siteConfig.emailLink,
  },
  {
    icon: MapPin,
    label: "Studio location",
    value: siteConfig.address,
  },
  {
    icon: Clock,
    label: "Opening hours",
    value: siteConfig.hours,
  },
];

export default function ContactForm() {
  return (
    <SectionContainer id="quote" className="bg-brand-ink text-white">
      <div className="grid gap-12 lg:grid-cols-[1fr_1.1fr] lg:gap-20">
        {/* Left — details */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
        >
          <div className="inline-flex items-center gap-2.5 rounded-full border border-brand-primary/30 bg-brand-primary/10 px-4 py-1.5 text-[11px] font-semibold uppercase tracking-[0.2em] text-brand-primary">
            <span className="h-1.5 w-1.5 rounded-full bg-brand-primary" />
            Get In Touch
          </div>

          <h2 className="mt-6 font-display text-4xl font-bold leading-[1.05] tracking-tight md:text-5xl">
            Let&apos;s scope your
            <br />
            <span className="text-white/40">signage project.</span>
          </h2>

          <p className="mt-6 max-w-md text-base leading-7 text-white/65">
            Send through your brief and we&apos;ll respond within one business day
            with a detailed, line-item quote — no obligation.
          </p>

          <div className="mt-10 space-y-3">
            {details.map((d) => {
              const Inner = (
                <>
                  <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-brand-primary/10 text-brand-primary">
                    <d.icon className="h-5 w-5" />
                  </span>
                  <span>
                    <span className="block text-xs uppercase tracking-[0.15em] text-white/40">
                      {d.label}
                    </span>
                    <span className="mt-0.5 block font-medium text-white">
                      {d.value}
                    </span>
                  </span>
                </>
              );

              return d.href ? (
                <a
                  key={d.label}
                  href={d.href}
                  className="flex items-center gap-4 rounded-2xl border border-white/10 bg-white/[0.02] p-4 transition hover:border-brand-primary/40 hover:bg-white/[0.04]"
                >
                  {Inner}
                </a>
              ) : (
                <div
                  key={d.label}
                  className="flex items-center gap-4 rounded-2xl border border-white/10 bg-white/[0.02] p-4"
                >
                  {Inner}
                </div>
              );
            })}
          </div>
        </motion.div>

        {/* Right — GHL form placeholder */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1 }}
          viewport={{ once: true }}
        >
          <FormShell
            title="Request A Quote"
            description="Complete the form and our team will be in touch shortly."
          >
            {/*
              GOHIGHLEVEL EMBED
              ------------------------------------------------------------
              Replace the placeholder block below with your GHL form embed:

              <iframe
                src="https://api.leadconnectorhq.com/widget/form/FORM_ID"
                style={{ width: "100%", height: 640, border: "none" }}
                title="Request A Quote"
              />
            */}
            <div
              id="ghl-quote-form"
              className="flex min-h-[460px] flex-col items-center justify-center rounded-2xl border border-dashed border-white/15 bg-white/[0.02] p-10 text-center"
            >
              <span className="flex h-12 w-12 items-center justify-center rounded-full bg-brand-primary/10 text-brand-primary">
                <Mail className="h-5 w-5" />
              </span>
              <p className="mt-5 text-sm font-medium text-white/80">
                GoHighLevel Quote Form
              </p>
              <p className="mt-2 max-w-xs text-xs leading-5 text-white/45">
                Paste your GHL form embed code into the{" "}
                <code className="text-brand-accent">#ghl-quote-form</code>{" "}
                container in <code className="text-brand-accent">contact-form.tsx</code>.
              </p>
            </div>
          </FormShell>
        </motion.div>
      </div>
    </SectionContainer>
  );
}
