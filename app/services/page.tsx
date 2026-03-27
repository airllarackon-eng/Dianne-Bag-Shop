import type { Metadata } from "next";
import { CapabilitiesList } from "@/components/CapabilitiesList/CapabilitiesList";
import { ContactBlock } from "@/components/ContactBlock/ContactBlock";
import { PageHero } from "@/components/PageHero/PageHero";
import { ProcessTimeline } from "@/components/ProcessTimeline/ProcessTimeline";
import { SectionIntro } from "@/components/SectionIntro/SectionIntro";
import { ServicesGrid } from "@/components/ServicesGrid/ServicesGrid";
import styles from "./page.module.css";

export const metadata: Metadata = {
  title: "Collections",
  description:
    "Browse OrnaLuxe curated collections of premium bags and accessories that merge timeless sophistication with modern trends.",
  openGraph: {
    title: "Collections | OrnaLuxe",
    description:
      "Explore OrnaLuxe collection categories and curation standards for luxury work bags and statement accessories.",
    url: "https://ornaluxe.com/services",
  },
};

export default function ServicesPage() {
  return (
    <div className={`pageTransition ${styles.page}`}>
      <PageHero
        title="Collections designed for modern luxury routines"
        subtitle="Explore categories built for elegance, utility, and everyday confidence."
        imageSrc="https://picsum.photos/id/103/1200/780"
        imageAlt="Premium handbags and accessories arranged by category on a modern display table"
      />
      <section className={styles.summary} aria-labelledby="collections-summary-heading">
        <div className="container">
          <SectionIntro
            eyebrow="Collection promise"
            title="OrnaLuxe offers a carefully curated selection of premium pieces designed to blend timeless sophistication with modern trends."
            body="Every item we provide is chosen with attention to detail, ensuring durability, beauty, and a touch of exclusivity."
          />
        </div>
      </section>
      <ServicesGrid />
      <CapabilitiesList />
      <ProcessTimeline />
      <ContactBlock />
    </div>
  );
}
