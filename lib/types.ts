export interface LinkItem {
  label: string;
  href: string;
  external?: boolean;
}

export interface HeroContent {
  kicker: string;
  heading: string;
  body: string;
  primaryCta: LinkItem;
  secondaryCta: LinkItem;
  image: {
    src: string;
    alt: string;
  };
}

export interface ServiceItem {
  title: string;
  summary: string;
}

export interface StatItem {
  label: string;
  value: number;
  suffix: string;
}

export interface FeaturedProject {
  title: string;
  category: string;
  summary: string;
  image: {
    src: string;
    alt: string;
  };
}

export interface TestimonialItem {
  quote: string;
  name: string;
  role: string;
}

export interface FaqItem {
  question: string;
  answer: string;
}

export interface ContactMethod {
  title: string;
  value: string;
  href: string;
  external?: boolean;
}

export interface FooterGroup {
  heading: string;
  links: LinkItem[];
}

export interface TeamMember {
  name: string;
  role: string;
  bio: string;
  image: {
    src: string;
    alt: string;
  };
}

export interface ValueItem {
  title: string;
  body: string;
}

export interface CapabilityGroup {
  title: string;
  items: string[];
}
