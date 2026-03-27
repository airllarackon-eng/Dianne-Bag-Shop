import type { Metadata } from "next";
import { ApproachDetails } from "@/components/ApproachDetails/ApproachDetails";
import { ContactBlock } from "@/components/ContactBlock/ContactBlock";
import { PageHero } from "@/components/PageHero/PageHero";
import { SectionIntro } from "@/components/SectionIntro/SectionIntro";
import { TeamGrid } from "@/components/TeamGrid/TeamGrid";
import { ValuesStrip } from "@/components/ValuesStrip/ValuesStrip";
import styles from "./page.module.css";

export const metadata: Metadata = {
  title: "About",
  description:
    "Learn about OrnaLuxe, a premium lifestyle and accessories brand focused on elegance, quality, and timeless style.",
  openGraph: {
    title: "About | OrnaLuxe",
    description:
      "Read the OrnaLuxe story and discover the principles behind our curated luxury accessories collections.",
    url: "https://ornaluxe.com/about",
  },
};

export default function AboutPage() {
  return (
    <div className={`pageTransition ${styles.page}`}>
      <PageHero
        title="A premium accessories brand built on detail and confidence"
        subtitle="OrnaLuxe is dedicated to elegant curation, quality craftsmanship, and timeless style for modern professionals."
        imageSrc="https://picsum.photos/id/1011/1200/780"
        imageAlt="Luxury accessories arranged on a textured editorial set with warm studio lighting"
      />
      <section className={styles.storySection} aria-labelledby="about-story-heading">
        <div className="container">
          <SectionIntro
            eyebrow="Who we are"
            title="OrnaLuxe is a premium lifestyle and accessories brand dedicated to elegance, quality, and timeless style."
            body="We specialize in curated luxury pieces that elevate everyday living, from statement accessories to refined essentials that express sophistication. At OrnaLuxe, luxury is about confidence, detail, and self-expression. Our mission is to deliver refined products that help customers stand out effortlessly."
          />
        </div>
      </section>
      <ApproachDetails />
      <ValuesStrip />
      <TeamGrid />
      <ContactBlock />
    </div>
  );
}
