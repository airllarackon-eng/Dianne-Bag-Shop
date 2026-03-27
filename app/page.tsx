import type { Metadata } from "next";
import { ContactBlock } from "@/components/ContactBlock/ContactBlock";
import { Hero } from "@/components/Hero/Hero";
import { SectionIntro } from "@/components/SectionIntro/SectionIntro";
import { ServicesGrid } from "@/components/ServicesGrid/ServicesGrid";
import { StatsSection } from "@/components/StatsSection/StatsSection";
import { TestimonialsCarousel } from "@/components/TestimonialsCarousel/TestimonialsCarousel";
import { WorkPreview } from "@/components/WorkPreview/WorkPreview";
import { SITE } from "@/lib/site-data";
import styles from "./page.module.css";

export const metadata: Metadata = {
  title: "Home",
  description:
    "OrnaLuxe curates premium bags and accessories for young professionals seeking timeless style, refined detail, and confident expression.",
  openGraph: {
    title: "Home | OrnaLuxe",
    description:
      "Discover OrnaLuxe collections of quality work bags and luxury accessories designed for modern everyday elegance.",
    url: "https://ornaluxe.com/",
  },
};

export default function HomePage() {
  return (
    <div className={`pageTransition ${styles.page}`}>
      <Hero />

      <section className={styles.introSection} aria-labelledby="brand-overview-heading">
        <div className="container">
          <SectionIntro
            eyebrow="Brand overview"
            title={SITE.description}
            body={`Audience: ${SITE.audience} Goal: ${SITE.primaryGoal}`}
          />
        </div>
      </section>

      <ServicesGrid />
      <WorkPreview />
      <StatsSection />
      <TestimonialsCarousel />
      <ContactBlock />
    </div>
  );
}
