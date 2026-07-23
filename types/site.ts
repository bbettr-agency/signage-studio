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
