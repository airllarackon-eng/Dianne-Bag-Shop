import type {
  CapabilityGroup,
  ContactMethod,
  FaqItem,
  FeaturedProject,
  FooterGroup,
  HeroContent,
  ServiceItem,
  StatItem,
  TeamMember,
  TestimonialItem,
  ValueItem,
} from "@/lib/types";

export const SITE = {
  name: "Foundry Lane",
  description:
    "A strategic digital studio crafting editorial websites, brand systems, and conversion-focused launch narratives.",
  audience:
    "Founders and marketing teams at growth-stage companies that need a polished, high-performing digital presence.",
  primaryGoal:
    "Turn qualified visitors into strategy calls, project inquiries, and long-term creative partnerships.",
  location: "34 Mercer Street, New York, NY",
  email: "hello@foundrylane.studio",
  phone: "+1 (212) 555-0186",
};

export const NAV_LINKS = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/services", label: "Services" },
  { href: "/work", label: "Work" },
  { href: "/contact", label: "Contact" },
] as const;

export const heroContent: HeroContent = {
  kicker: "Independent brand and digital studio",
  heading: "Editorial websites engineered for decisive growth.",
  body:
    "Foundry Lane blends strategic storytelling, visual systems, and front-end precision to help ambitious teams launch with clarity and convert with confidence.",
  primaryCta: {
    href: "/contact",
    label: "Book a strategy call",
  },
  secondaryCta: {
    href: "/work",
    label: "Review selected work",
  },
  image: {
    src: "https://picsum.photos/id/1005/1400/1000",
    alt: "Creative direction session with printed layouts and brand notes across a studio table",
  },
};

export const serviceItems: ServiceItem[] = [
  {
    title: "Positioning and Narrative",
    summary:
      "Audience mapping, message architecture, and editorial framing that sharpen your market story.",
  },
  {
    title: "Website Design Systems",
    summary:
      "Conversion-aware UI systems, responsive behavior, and curated art direction built for scale.",
  },
  {
    title: "Front-end Implementation",
    summary:
      "Production-grade build quality with performance, accessibility, and maintainable component architecture.",
  },
  {
    title: "Launch Content and Campaigns",
    summary:
      "Cross-channel launch assets that align your web presence with product, social, and sales momentum.",
  },
];

export const processSteps = [
  {
    title: "Discover",
    summary:
      "We map stakeholders, audience intent, competitive whitespace, and conversion friction before design begins.",
  },
  {
    title: "Design",
    summary:
      "We shape narrative flow, visual hierarchy, and modular UI patterns through collaborative review cycles.",
  },
  {
    title: "Deliver",
    summary:
      "We implement, test, and ship a static-ready website that is fast, accessible, and launch-ready.",
  },
];

export const stats: StatItem[] = [
  { label: "Client engagements", value: 72, suffix: "+" },
  { label: "Average qualified lead lift", value: 39, suffix: "%" },
  { label: "Industries supported", value: 14, suffix: "" },
  { label: "Retention over 12 months", value: 93, suffix: "%" },
];

export const featuredProjects: FeaturedProject[] = [
  {
    title: "Northline Capital",
    category: "Financial Technology",
    summary:
      "A complete narrative and interface overhaul that increased enterprise demo requests from key buyer segments.",
    image: {
      src: "https://picsum.photos/id/1011/1000/760",
      alt: "Laptop and external display presenting a premium fintech website homepage",
    },
  },
  {
    title: "Aster Bio",
    category: "Health Innovation",
    summary:
      "A modular website built around scientific credibility and investor clarity for a breakthrough diagnostics platform.",
    image: {
      src: "https://picsum.photos/id/1031/1000/760",
      alt: "Brand presentation boards and mobile mockups for a healthcare innovation company",
    },
  },
  {
    title: "Commongrain Goods",
    category: "Consumer Retail",
    summary:
      "A commerce-focused redesign with improved product storytelling and cleaner purchase pathways.",
    image: {
      src: "https://picsum.photos/id/1047/1000/760",
      alt: "Editorial style product grid and campaign imagery for a retail storefront",
    },
  },
  {
    title: "Cinder Robotics",
    category: "Industrial Automation",
    summary:
      "A high-contrast launch experience translating complex robotics capabilities into clear decision narratives.",
    image: {
      src: "https://picsum.photos/id/1050/1000/760",
      alt: "Dark studio concept with robotics dashboard screens and product interface highlights",
    },
  },
];

export const testimonials: TestimonialItem[] = [
  {
    quote:
      "Foundry Lane created a site that feels editorial, credible, and commercially sharp. Our pipeline quality improved within the first month.",
    name: "Maya Serrano",
    role: "VP Marketing, Northline Capital",
  },
  {
    quote:
      "They translated a dense product story into something clear and compelling. Stakeholder buy-in became significantly easier.",
    name: "Callum Briggs",
    role: "Co-Founder, Aster Bio",
  },
  {
    quote:
      "The level of craft across strategy, UX, and front-end execution is exceptional. The final experience feels distinctly our own.",
    name: "Elena Park",
    role: "Chief Growth Officer, Commongrain Goods",
  },
];

export const faqItems: FaqItem[] = [
  {
    question: "Who do you typically partner with?",
    answer:
      "Most projects involve leadership teams at growth-stage companies, typically with active product and marketing functions.",
  },
  {
    question: "Can you work with our internal team?",
    answer:
      "Yes. We frequently collaborate with in-house designers, engineers, and marketing leads through a shared review rhythm.",
  },
  {
    question: "Do you provide implementation and launch support?",
    answer:
      "Absolutely. We deliver production-ready code, QA support, and launch coordination to ensure smooth handoff and deployment.",
  },
  {
    question: "What does your engagement model look like?",
    answer:
      "Engagements are milestone-based with clear scope, review checkpoints, and transparent communication from kickoff to launch.",
  },
];

export const aboutTimeline = [
  {
    year: "2018",
    title: "Founding",
    summary:
      "Started as a small strategy and visual direction partnership serving challenger technology brands.",
  },
  {
    year: "2021",
    title: "Integrated Build Capability",
    summary:
      "Expanded into full front-end implementation and content systems to close the strategy-to-launch gap.",
  },
  {
    year: "2024",
    title: "Global Collaborations",
    summary:
      "Partnered with distributed teams across North America and Europe on multilingual and multi-market launches.",
  },
];

export const teamMembers: TeamMember[] = [
  {
    name: "Iris Nolan",
    role: "Creative Director",
    bio: "Leads editorial direction, narrative strategy, and visual systems with an emphasis on distinctive brand voice.",
    image: {
      src: "https://picsum.photos/id/1001/700/860",
      alt: "Creative director reviewing campaign layouts on a studio wall",
    },
  },
  {
    name: "Dorian Wells",
    role: "Experience Design Lead",
    bio: "Shapes information architecture and interaction patterns that align storytelling with conversion outcomes.",
    image: {
      src: "https://picsum.photos/id/1006/700/860",
      alt: "UX lead sketching wireframes and content flow diagrams at a desk",
    },
  },
  {
    name: "Sana Ridley",
    role: "Front-end Architect",
    bio: "Builds resilient, accessible interfaces with strong component governance and performance discipline.",
    image: {
      src: "https://picsum.photos/id/1012/700/860",
      alt: "Front-end engineer coding responsive layouts on a dual-monitor setup",
    },
  },
];

export const values: ValueItem[] = [
  {
    title: "Opinionated Craft",
    body:
      "We make deliberate design decisions that reinforce your positioning, not generic trends.",
  },
  {
    title: "Strategic Clarity",
    body:
      "Every page section earns its place through audience relevance, business intent, and narrative cohesion.",
  },
  {
    title: "Build Integrity",
    body:
      "Our implementation choices prioritize accessibility, maintainability, and measured performance.",
  },
];

export const capabilityGroups: CapabilityGroup[] = [
  {
    title: "Strategy",
    items: [
      "Positioning workshops",
      "Messaging architecture",
      "Audience segmentation",
      "Conversion pathway mapping",
    ],
  },
  {
    title: "Design",
    items: [
      "Editorial art direction",
      "Component systems",
      "Responsive UX patterns",
      "Visual QA frameworks",
    ],
  },
  {
    title: "Implementation",
    items: [
      "Next.js front-end delivery",
      "Accessibility hardening",
      "Performance optimization",
      "Static deployment preparation",
    ],
  },
];

export const contactMethods: ContactMethod[] = [
  {
    title: "Email",
    value: SITE.email,
    href: `mailto:${SITE.email}`,
  },
  {
    title: "Phone",
    value: SITE.phone,
    href: `tel:${SITE.phone.replace(/[^\d+]/g, "")}`,
  },
  {
    title: "Studio",
    value: SITE.location,
    href: "https://maps.google.com/?q=34+Mercer+Street+New+York+NY",
    external: true,
  },
];

export const awards = [
  "Design Systems Honoree 2024",
  "Digital Craft Jury Mention",
  "Editorial Web Showcase",
  "Independent Studio Spotlight",
];

export const footerGroups: FooterGroup[] = [
  {
    heading: "Navigate",
    links: [
      { label: "Home", href: "/" },
      { label: "About", href: "/about" },
      { label: "Services", href: "/services" },
      { label: "Work", href: "/work" },
      { label: "Contact", href: "/contact" },
    ],
  },
  {
    heading: "Capabilities",
    links: [
      { label: "Positioning", href: "/services" },
      { label: "Website Design", href: "/services" },
      { label: "Front-end Build", href: "/services" },
      { label: "Campaign Assets", href: "/services" },
    ],
  },
  {
    heading: "Reach",
    links: [
      { label: SITE.email, href: `mailto:${SITE.email}` },
      { label: SITE.phone, href: `tel:${SITE.phone.replace(/[^\d+]/g, "")}` },
      {
        label: SITE.location,
        href: "https://maps.google.com/?q=34+Mercer+Street+New+York+NY",
        external: true,
      },
    ],
  },
];
