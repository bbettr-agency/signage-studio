import "./globals.css";
import type { Metadata } from "next";
import { Inter, Space_Grotesk } from "next/font/google";

import { createMetadata } from "@/lib/metadata";
import { siteConfig } from "@/config/site-config";

const body = Inter({
  subsets: ["latin"],
  variable: "--font-body",
  display: "swap",
});

const display = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-display",
  display: "swap",
  weight: ["500", "600", "700"],
});

export const metadata: Metadata = createMetadata();

const businessSchema = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  name: siteConfig.businessName,
  image: siteConfig.website + "/projects/neon-rope/neon-rope-1.jpg",
  url: siteConfig.website,
  telephone: siteConfig.phone,
  email: siteConfig.email,
  address: {
    "@type": "PostalAddress",
    streetAddress: siteConfig.address,
    addressLocality: siteConfig.region,
    addressRegion: "Gauteng",
    postalCode: "0184",
    addressCountry: siteConfig.country,
  },
  areaServed: siteConfig.country,
  priceRange: "$$",
  description: siteConfig.description,
  openingHoursSpecification: [
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
      opens: "08:00",
      closes: "16:30",
    },
  ],
  sameAs: [siteConfig.social.instagram, siteConfig.social.facebook],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${body.variable} ${display.variable}`}
      suppressHydrationWarning
    >
      <head>
        <link rel="icon" href="/favicon.ico" />
        <meta name="theme-color" content="#0B0B0B" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(businessSchema),
          }}
        />
      </head>
      <body className="bg-brand-ink text-white antialiased">{children}</body>
    </html>
  );
}
