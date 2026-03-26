# Foundry Lane

Foundry Lane is a production-ready static website built with Next.js App Router and TypeScript. It presents a strategic digital studio with a premium editorial design language, scroll-triggered motion, responsive interaction patterns, and accessible component architecture.

## Project Overview

- **Website Name:** Foundry Lane
- **Type:** Creative agency / digital studio website
- **One-line description:** An editorial-style agency site showcasing strategy, services, case studies, team expertise, and project inquiry pathways.
- **Target audience:** Founders and marketing leaders at growth-stage companies.
- **Primary goal:** Convert visitors into qualified project inquiries.

## Prerequisites

- Node.js 20+
- npm 10+

## Installation

```bash
npm install
```

## Run locally

```bash
npm run dev
```

Then open `http://localhost:3000`.

## Production build

```bash
npm run build
```

This project uses `output: 'export'` in `next.config.ts`, so the build generates a static `out/` directory suitable for static hosting.

## Tech stack

- Next.js (App Router)
- TypeScript (strict mode)
- CSS Modules + global design tokens
- next/font (Google fonts, self-hosted)
- next/image and next/link

## File structure

```text
project-root/
├── app/
│   ├── layout.tsx
│   ├── globals.css
│   ├── layout.module.css
│   ├── page.tsx
│   ├── page.module.css
│   ├── about/
│   │   ├── page.tsx
│   │   └── page.module.css
│   ├── services/
│   │   ├── page.tsx
│   │   └── page.module.css
│   ├── work/
│   │   ├── page.tsx
│   │   └── page.module.css
│   ├── contact/
│   │   ├── page.tsx
│   │   └── page.module.css
│   ├── not-found.tsx
│   └── not-found.module.css
├── components/
│   ├── Navbar/
│   ├── Footer/
│   ├── Hero/
│   ├── SectionIntro/
│   ├── ServicesGrid/
│   ├── ProcessTimeline/
│   ├── WorkPreview/
│   ├── StatsSection/
│   ├── TestimonialsCarousel/
│   ├── FaqAccordion/
│   ├── ContactBlock/
│   ├── ContactForm/
│   ├── Modal/
│   ├── PageHero/
│   ├── TeamGrid/
│   ├── CapabilitiesList/
│   ├── ValuesStrip/
│   ├── CaseStudiesGrid/
│   ├── AwardsStrip/
│   ├── ApproachDetails/
│   ├── ScrollToTopButton/
│   └── ScrollReveal/
├── hooks/
│   ├── useScrollReveal.ts
│   └── useAutoReveal.ts
├── lib/
│   ├── types.ts
│   └── site-data.ts
├── public/
│   ├── images/
│   └── favicon.ico
├── next.config.ts
├── tsconfig.json
├── package.json
└── README.md
```

## Credits

- Fonts: [Google Fonts](https://fonts.google.com/) via `next/font/google` (Cormorant Garamond and Manrope)
- Placeholder images: [picsum.photos](https://picsum.photos) and [placehold.co](https://placehold.co)
