export type NavItem = {
  label: string;
  href: string;
};

export type ServiceItem = {
  title: string;
  description: string;
  icon: string;
  href: string;
  slug: string;
  bullets?: string[];
  image?: string;
  longDescription?: string;
  /** Outcome-led headline used in editorial / featured sections. */
  outcome?: string;
  /** One-line suits (who/what it's for) for the editorial featured row. */
  suits?: string;
  /** Feature on the homepage's editorial "What We Do" trio. */
  featured?: boolean;
};

export type TrustItem = {
  title: string;
  description: string;
  icon: string;
};

export type FaqItem = {
  question: string;
  answer: string;
};

export type ProjectItem = {
  title: string;
  category: string;
  location?: string;
  image: string;
  href?: string;
  featured?: boolean;
};

export type ProcessStep = {
  number: string;
  title: string;
  description: string;
};

export type TestimonialItem = {
  quote: string;
  author: string;
  role: string;
  rating?: number;
};
