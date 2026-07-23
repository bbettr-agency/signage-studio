/**
 * Client logo list — driven purely by config.
 *
 * To add a new client:
 *   1. Drop the logo PNG (transparent bg preferred, ~1500 px min) into
 *      `public/images/client-logos/`.
 *   2. Add an entry below. `alt` = brand name for SEO + accessibility.
 *
 * Order = display order in the marquee.
 */

export type ClientLogo = {
  /** Brand name — used as accessible label and hover tooltip. */
  name: string;
  /** Absolute path under /public. */
  src: string;
};

export const clientLogos: ClientLogo[] = [
  { name: "Wildswinkel", src: "/images/client-logos/client-1.png" },
  { name: "Safari Outdoor", src: "/images/client-logos/client-2.png" },
  { name: "AfriForum", src: "/images/client-logos/client-3.png" },
  { name: "Toyota", src: "/images/client-logos/client-4.png" },
  { name: "Tru-Trac", src: "/images/client-logos/client-5.png" },
  { name: "Cuisine Foods", src: "/images/client-logos/client-6.png" },
  { name: "Obaro", src: "/images/client-logos/client-7.png" },
  { name: "Glasfit", src: "/images/client-logos/client-8.png" },
  { name: "Leatherman", src: "/images/client-logos/client-9.png" },
];
