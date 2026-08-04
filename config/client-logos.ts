/**
 * Client logo list — driven purely by config.
 *
 * To add a new client:
 *   1. Drop the logo (SVG preferred for sharpness, otherwise PNG with
 *      transparent background, ~1000 px min on the long edge) into
 *      `public/images/client-logos/`.
 *   2. Add an entry below. `name` = brand name for SEO + accessibility.
 *   3. Optionally set `heightDesktopPx` / `heightMobilePx` — these are the
 *      RENDERED heights in the marquee. Small square logos usually need
 *      bigger values than wide wordmarks so every brand feels equally
 *      prominent (visual normalization, not identical width).
 *
 * Order = display order in the marquee.
 */

export type ClientLogo = {
  /** Brand name — used as accessible label and hover tooltip. */
  name: string;
  /** Absolute path under /public. */
  src: string;
  /** Rendered height in the desktop marquee. Default 128. */
  heightDesktopPx?: number;
  /** Rendered height in the mobile marquee. Default 72. */
  heightMobilePx?: number;
};

/**
 * Sizing benchmark: PG Glass + PG Aluminium (the two SVGs) sit around
 * 96–104 px tall — they are the visual reference. Square/compact PNG logos
 * (Obaro, Glasfit, Leatherman) render bigger so their brand mark has similar
 * on-screen presence.
 */
export const clientLogos: ClientLogo[] = [
  {
    name: "Wildswinkel",
    src: "/images/client-logos/client-1.png",
    heightDesktopPx: 140,
    heightMobilePx: 84,
  },
  {
    name: "Safari Outdoor",
    src: "/images/client-logos/client-2.png",
    heightDesktopPx: 140,
    heightMobilePx: 84,
  },
  {
    name: "AfriForum",
    src: "/images/client-logos/client-3.png",
    heightDesktopPx: 128,
    heightMobilePx: 80,
  },
  {
    name: "Toyota",
    src: "/images/client-logos/client-4.png",
    heightDesktopPx: 124,
    heightMobilePx: 76,
  },
  // client-5 removed per client request (2026-08-04).
  {
    name: "Cuisine Foods",
    src: "/images/client-logos/client-6.png",
    heightDesktopPx: 132,
    heightMobilePx: 80,
  },
  {
    name: "Obaro",
    src: "/images/client-logos/client-7.png",
    heightDesktopPx: 156,
    heightMobilePx: 92,
  },
  {
    name: "Glasfit",
    src: "/images/client-logos/client-8.png",
    heightDesktopPx: 148,
    heightMobilePx: 88,
  },
  {
    name: "Leatherman",
    src: "/images/client-logos/client-9.png",
    heightDesktopPx: 148,
    heightMobilePx: 88,
  },
  {
    name: "PG Glass",
    src: "/images/client-logos/1.svg",
    heightDesktopPx: 104,
    heightMobilePx: 64,
  },
  {
    name: "PG Aluminium",
    src: "/images/client-logos/2.svg",
    heightDesktopPx: 104,
    heightMobilePx: 64,
  },
];
