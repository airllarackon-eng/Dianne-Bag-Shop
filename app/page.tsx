import type { Metadata } from "next";
import { ContactBlock } from "@/components/ContactBlock/ContactBlock";
import { FaqAccordion } from "@/components/FaqAccordion/FaqAccordion";
import { Hero } from "@/components/Hero/Hero";
import { ProcessTimeline } from "@/components/ProcessTimeline/ProcessTimeline";
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
    "Foundry Lane builds editorial digital experiences for ambitious teams who need strategy, design, and front-end execution in one studio partner.",
  openGraph: {
    title: "Home | Foundry Lane",
    description:
      "Explore Foundry Lane's strategic approach to brand systems, high-performance websites, and launch campaigns.",
    url: "https://foundrylane.studio/",
  },
};

export default function HomePage() {
  return (
    <div className={`pageTransition ${styles.page}`}>
      <Hero />

      <section className={styles.introSection} aria-labelledby="studio-overview-heading">
        <div className="container">
          <SectionIntro
            eyebrow="Studio overview"
            title={SITE.description}
            body={`Audience: ${SITE.audience} Goal: ${SITE.primaryGoal}`}
          />
        </div>
      </section>

      <ServicesGrid />
      <ProcessTimeline />
      <StatsSection />
      <WorkPreview />
      <TestimonialsCarousel />
      <FaqAccordion />
      <ContactBlock />
    </div>
  );
}
