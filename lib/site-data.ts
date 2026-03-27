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
  name: "OrnaLuxe",
  description:
    "OrnaLuxe is a premium lifestyle and accessories brand dedicated to elegance, quality, and timeless style.",
  audience:
    "Young professionals aged 25 to 40 looking for refined bags and accessories that elevate daily style.",
  primaryGoal:
    "Draw attention to quality bags and accessories through curated storytelling and premium product presentation.",
  location: "Accra, Ghana",
  email: "support@ornaluxe.com",
  phone: "+233 506640015",
};

export const NAV_LINKS = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/services", label: "Collections" },
  { href: "/contact", label: "Contact" },
] as const;

export const heroContent: HeroContent = {
  kicker: "Luxury accessories for modern professionals",
  heading: "Statement bags crafted for confident everyday elegance.",
  body:
    "OrnaLuxe curates premium pieces that combine timeless silhouettes, modern refinement, and durable craftsmanship for work and beyond.",
  primaryCta: {
    href: "/services",
    label: "Shop Collections",
  },
  secondaryCta: {
    href: "/about",
    label: "Our Story",
  },
  image: {
    src: "https://picsum.photos/id/1062/1600/1100",
    alt: "Premium leather handbags arranged in an editorial studio setting with warm directional light",
  },
};

export const serviceItems: ServiceItem[] = [
  {
    title: "Executive Tote Collection",
    summary:
      "Structured tote bags sized for laptops, documents, and daily essentials without compromising elegance.",
  },
  {
    title: "Refined Shoulder Bags",
    summary:
      "Clean silhouettes with polished hardware and versatile finishes for day-to-evening transitions.",
  },
  {
    title: "Signature Work Satchels",
    summary:
      "Professional satchels designed for mobility, confidence, and long-term durability.",
  },
  {
    title: "Evening and Occasion Clutches",
    summary:
      "Statement pieces with refined detailing for events, dinners, and elevated social moments.",
  },
  {
    title: "Travel and Weekend Carryalls",
    summary:
      "Spacious, thoughtfully organized designs that maintain a luxury finish while supporting movement.",
  },
  {
    title: "Small Leather Accessories",
    summary:
      "Compact wallets, card holders, and essentials that complete a cohesive premium look.",
  },
];

export const processSteps = [
  {
    title: "Curate",
    summary:
      "Every collection begins with careful material selection, silhouette research, and quality benchmarking.",
  },
  {
    title: "Refine",
    summary:
      "Our team reviews stitching, hardware, interior utility, and finishing details for consistency.",
  },
  {
    title: "Deliver",
    summary:
      "Selected pieces are prepared for confident ownership with premium packaging and responsive support.",
  },
];

export const stats: StatItem[] = [
  { label: "Curated premium pieces", value: 120, suffix: "+" },
  { label: "Repeat customer rate", value: 87, suffix: "%" },
  { label: "Average quality score", value: 98, suffix: "%" },
  { label: "Cities served", value: 24, suffix: "" },
];

export const featuredProjects: FeaturedProject[] = [
  {
    title: "The Boardroom Edit",
    category: "Workday Essential",
    summary:
      "A polished lineup of leather totes and satchels designed for professional presence from desk to dinner.",
    image: {
      src: "https://picsum.photos/id/1074/1200/880",
      alt: "Elegant leather tote bag on a tailored chair in a minimalist office setting",
    },
  },
  {
    title: "After Hours Statement",
    category: "Evening Selection",
    summary:
      "Refined clutches and compact shoulder pieces with premium finishes for elevated evening styling.",
    image: {
      src: "https://picsum.photos/id/1033/1200/880",
      alt: "Luxury evening clutch and accessories arranged on textured stone surface",
    },
  },
  {
    title: "City Motion Capsule",
    category: "Weekend and Travel",
    summary:
      "Versatile crossbody and carryall silhouettes designed for movement, organization, and confident style.",
    image: {
      src: "https://picsum.photos/id/1027/1200/880",
      alt: "Premium travel carryall bag on a bench near an urban transit platform",
    },
  },
  {
    title: "Quiet Luxury Core",
    category: "Minimal Signature",
    summary:
      "Muted tones, disciplined form, and elevated materials for clients who prefer understated distinction.",
    image: {
      src: "https://picsum.photos/id/1060/1200/880",
      alt: "Minimal designer handbag displayed on pedestal with dramatic side lighting",
    },
  },
];

export const testimonials: TestimonialItem[] = [
  {
    quote:
      "I am obsessed with the quality. The detail is exceptional and every piece feels genuinely premium. OrnaLuxe exceeded my expectations.",
    name: "Ama Nkrumah",
    role: "Product Manager, Accra",
  },
  {
    quote:
      "The work bag I bought is elegant, practical, and durable. It upgraded my entire wardrobe in one purchase.",
    name: "Chioma Daniels",
    role: "Brand Strategist, Lagos",
  },
  {
    quote:
      "OrnaLuxe has the statement pieces I needed for both office and events. Everything feels carefully chosen.",
    name: "Nana Boateng",
    role: "Consultant, Kumasi",
  },
];

export const faqItems: FaqItem[] = [
  {
    question: "Do you focus only on bags?",
    answer:
      "Bags are our core focus, supported by curated accessories that complete a premium and cohesive look.",
  },
  {
    question: "How do I choose the right work bag?",
    answer:
      "Start with your daily carry needs, preferred structure, and commute style. Our support team can guide your selection.",
  },
  {
    question: "Do you offer customer support after purchase?",
    answer:
      "Yes. We provide responsive customer support for product questions, care guidance, and order-related updates.",
  },
  {
    question: "Are your materials selected for longevity?",
    answer:
      "Every item is curated for craftsmanship and durability, with close attention to finishing and construction quality.",
  },
];

export const aboutTimeline = [
  {
    year: "2019",
    title: "Brand Launch",
    summary:
      "OrnaLuxe began as a focused luxury accessories label built around quality-first curation.",
  },
  {
    year: "2022",
    title: "Collection Expansion",
    summary:
      "The lineup expanded from signature handbags to complete lifestyle accessories for modern professionals.",
  },
  {
    year: "2025",
    title: "Regional Growth",
    summary:
      "OrnaLuxe extended availability across major cities while preserving boutique-level service quality.",
  },
];

export const teamMembers: TeamMember[] = [
  {
    name: "Esi Mensah",
    role: "Creative Director",
    bio: "Leads product storytelling and visual curation to ensure each release feels distinct, refined, and lasting.",
    image: {
      src: "https://picsum.photos/id/1005/720/900",
      alt: "Creative director reviewing luxury accessory styling boards in a studio",
    },
  },
  {
    name: "Kojo Addai",
    role: "Product Curation Lead",
    bio: "Oversees material quality, silhouette selection, and finishing standards across all core collections.",
    image: {
      src: "https://picsum.photos/id/1012/720/900",
      alt: "Product curator inspecting leather texture and hardware quality for a new bag line",
    },
  },
  {
    name: "Naa Odoi",
    role: "Customer Experience Manager",
    bio: "Ensures every interaction, from first inquiry to delivery, reflects premium service and confidence.",
    image: {
      src: "https://picsum.photos/id/1021/720/900",
      alt: "Customer experience manager preparing luxury packaging and customer notes",
    },
  },
];

export const values: ValueItem[] = [
  {
    title: "Curated Elegance",
    body:
      "Each product is selected to balance modern taste with timeless style and practical utility.",
  },
  {
    title: "Craft Integrity",
    body:
      "We prioritize quality materials, construction detail, and durability in every collection release.",
  },
  {
    title: "Confident Expression",
    body:
      "OrnaLuxe pieces are designed to help customers express presence through detail, not excess.",
  },
];

export const capabilityGroups: CapabilityGroup[] = [
  {
    title: "Category Focus",
    items: [
      "Work bags and totes",
      "Structured shoulder bags",
      "Statement clutches",
      "Weekend and travel carryalls",
    ],
  },
  {
    title: "Quality Standards",
    items: [
      "Material consistency checks",
      "Hardware and stitch review",
      "Finish and edge detailing",
      "Long-term wear assessment",
    ],
  },
  {
    title: "Customer Experience",
    items: [
      "Style guidance support",
      "Responsive order assistance",
      "Packaging with presentation detail",
      "Post-purchase care support",
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
    href: "https://maps.google.com/?q=Accra+Ghana",
    external: true,
  },
];

export const awards = [
  "Premium material standards",
  "Editorial product curation",
  "Refined functional design",
  "Customer-first service",
];

export const footerGroups: FooterGroup[] = [
  {
    heading: "Navigate",
    links: [
      { label: "Home", href: "/" },
      { label: "About", href: "/about" },
      { label: "Collections", href: "/services" },
      { label: "Contact", href: "/contact" },
    ],
  },
  {
    heading: "Collections",
    links: [
      { label: "Executive Totes", href: "/services" },
      { label: "Work Satchels", href: "/services" },
      { label: "Shoulder Bags", href: "/services" },
      { label: "Evening Clutches", href: "/services" },
    ],
  },
  {
    heading: "Support",
    links: [
      { label: SITE.email, href: `mailto:${SITE.email}` },
      { label: SITE.phone, href: `tel:${SITE.phone.replace(/[^\d+]/g, "")}` },
      {
        label: SITE.location,
        href: "https://maps.google.com/?q=Accra+Ghana",
        external: true,
      },
    ],
  },
];
