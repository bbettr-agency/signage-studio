/**
 * Client logo list — driven purely by config.
 *
 * To add a new client:
 *   1. Drop the logo (SVG preferred for sharpness, otherwise PNG with
 *      transparent background, ~1000 px min on the long edge) into
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
  // client-5 removed per client request (2026-08-04).
  { name: "Cuisine Foods", src: "/images/client-logos/client-6.png" },
  { name: "Obaro", src: "/images/client-logos/client-7.png" },
  { name: "Glasfit", src: "/images/client-logos/client-8.png" },
  { name: "Leatherman", src: "/images/client-logos/client-9.png" },
  // Two new SVG slots — activate by uncommenting once the SVGs
  // in /public/images/client-logos/1.svg and 2.svg contain real artwork
  // (the currently uploaded files are empty <svg/> stubs).
  // { name: "New Client 1", src: "/images/client-logos/1.svg" },
  // { name: "New Client 2", src: "/images/client-logos/2.svg" },
];
