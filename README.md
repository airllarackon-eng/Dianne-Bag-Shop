# OrnaLuxe

OrnaLuxe is a production-ready static e-commerce website built with Next.js App Router and TypeScript. It presents a premium accessories brand with editorial layouts, refined motion, accessible interactions, and reusable component architecture.

## Project Overview

- **Website Name:** OrnaLuxe
- **Type:** Premium accessories e-commerce website
- **One-line description:** A luxury-focused digital storefront highlighting curated bags and statement accessories.
- **Target audience:** Young professionals aged 25 to 40 seeking quality bags and accessories.
- **Primary goal:** Draw attention to premium bag categories and drive collection exploration.

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

This project uses `output: 'export'` in `next.config.js`, so the build generates a static `out/` folder suitable for deployment on static hosting.

## Tech stack

- Next.js (App Router)
- TypeScript (strict mode)
- CSS Modules + global design tokens
- `next/font` (Google fonts, self-hosted)
- `next/image` and `next/link`

## File structure

```text
project-root/
├── app/
│   ├── favicon.ico
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
│   ├── ContactDetails/
│   ├── ContactForm/
│   ├── Modal/
│   ├── PageHero/
│   ├── TeamGrid/
│   ├── CapabilitiesList/
│   ├── ValuesStrip/
│   ├── ApproachDetails/
│   ├── ScrollToTopButton/
│   └── ScrollReveal/
├── hooks/
│   └── useScrollReveal.ts
├── lib/
│   ├── types.ts
│   └── site-data.ts
├── public/
│   ├── images/
│   └── favicon.ico
├── next.config.js
├── tsconfig.json
├── package.json
└── README.md
```

## Credits

- Fonts: [Google Fonts](https://fonts.google.com/) via `next/font/google` (Playfair Display and Inter)
- Placeholder images: [picsum.photos](https://picsum.photos) and [placehold.co](https://placehold.co)
