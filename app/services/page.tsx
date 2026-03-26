import type { Metadata } from "next";
import { CapabilitiesList } from "@/components/CapabilitiesList/CapabilitiesList";
import { ContactBlock } from "@/components/ContactBlock/ContactBlock";
import { PageHero } from "@/components/PageHero/PageHero";
import { ProcessTimeline } from "@/components/ProcessTimeline/ProcessTimeline";
import { ServicesGrid } from "@/components/ServicesGrid/ServicesGrid";
import { TestimonialsCarousel } from "@/components/TestimonialsCarousel/TestimonialsCarousel";
import styles from "./page.module.css";

export const metadata: Metadata = {
  title: "Services",
  description:
    "Explore Foundry Lane services across positioning, design systems, front-end delivery, and launch support.",
  openGraph: {
    title: "Services | Foundry Lane",
    description:
      "Detailed service capabilities for teams that need strategic direction and production-grade execution.",
    url: "https://foundrylane.studio/services",
  },
};

export default function ServicesPage() {
  return (
    <div className={`pageTransition ${styles.page}`}>
      <PageHero
        title="Capabilities built for modern launch cycles"
        subtitle="Our work spans strategy, design, and implementation so teams can move quickly without sacrificing craft or consistency."
        imageSrc="https://picsum.photos/id/1043/1200/780"
        imageAlt="Design system board with typography, spacing tokens, and interface components"
      />
      <ServicesGrid />
      <CapabilitiesList />
      <ProcessTimeline />
      <TestimonialsCarousel />
      <ContactBlock />
    </div>
  );
}
