import { ProjectItem } from "@/types/site";

/**
 * Real Signage Studio project photography, organised by the studio's
 * actual signage disciplines. Images live in /public/projects/<slug>.
 */
type CategoryDef = {
  slug: string;
  name: string;
  count: number;
};

const categoryDefs: CategoryDef[] = [
  { slug: "vehicle-branding", name: "Vehicle Branding", count: 0 }, // photos coming soon
  { slug: "3d-fabrication", name: "3D Fabrication", count: 6 },
  { slug: "acm-signs", name: "ACM Signs", count: 6 },
  { slug: "pylon-signs", name: "Pylon Signs", count: 2 },
  { slug: "lightboxes", name: "Light Boxes", count: 3 },
  { slug: "neon-rope", name: "Neon Rope", count: 1 },
  { slug: "laser-cut-lettering", name: "Laser Cut Lettering", count: 2 },
  { slug: "custom-signage", name: "Custom Signage", count: 4 },
  { slug: "perspex-signs", name: "Perspex Signs", count: 1 },
  { slug: "chromadek-signs", name: "Chromadek Signs", count: 4 },
  { slug: "window-branding", name: "Window Branding", count: 3 },
  { slug: "wall-decals", name: "Wall Decals", count: 3 },
  { slug: "wall-paper", name: "Wallpaper", count: 4 },
  { slug: "pvc-banners", name: "PVC Banners", count: 2 },
  { slug: "boat-decals", name: "Boat Decals", count: 2 },
  { slug: "cnc-router", name: "CNC Router", count: 1 },
];

export const projectCategories: string[] = [
  "All",
  ...categoryDefs.filter((c) => c.count > 0).map((c) => c.name),
];

export const projectsConfig: ProjectItem[] = categoryDefs
  .filter((c) => c.count > 0)
  .flatMap((c) =>
    Array.from({ length: c.count }, (_, i) => ({
      title: c.name,
      category: c.name,
      image: `/projects/${c.slug}/${c.slug}-${i + 1}.jpg`,
    }))
  );

/**
 * Hand-picked covers for the homepage "Selected Work" preview —
 * the strongest, most credible real installations.
 */
export const featuredProjects: ProjectItem[] = [
  {
    title: "Illuminated Channel Letters",
    category: "Neon Rope",
    location: "Pretoria",
    image: "/projects/neon-rope/neon-rope-1.jpg",
  },
  {
    title: "Freestanding Pylon Sign",
    category: "Pylon Signs",
    location: "Gauteng",
    image: "/projects/pylon-signs/pylon-signs-2.jpg",
  },
  {
    title: "Storefront Light Box",
    category: "Light Boxes",
    location: "Silverton",
    image: "/projects/lightboxes/lightboxes-3.jpg",
  },
  {
    title: "Full Window Branding",
    category: "Window Branding",
    location: "Pretoria",
    image: "/projects/window-branding/window-branding-3.jpg",
  },
];

/**
 * Strongest single image — used for the homepage hero.
 *
 * The Chromadek install on Safari Outdoor's storefront: real large-format
 * capability, real recognisable client (Safari Outdoor's logo also appears in
 * the hero's Trusted-By strip), cinematic 1800×810 aspect for full-bleed.
 */
export const heroImage = "/projects/chromadek-signs/chromadek-signs-1.jpg";
export const heroImageAlt =
  "Large-format Chromadek signage installed on the Safari Outdoor storefront by Signage Studio";
