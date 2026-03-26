import type { Metadata } from "next";
import { AwardsStrip } from "@/components/AwardsStrip/AwardsStrip";
import { CaseStudiesGrid } from "@/components/CaseStudiesGrid/CaseStudiesGrid";
import { ContactBlock } from "@/components/ContactBlock/ContactBlock";
import { PageHero } from "@/components/PageHero/PageHero";
import { StatsSection } from "@/components/StatsSection/StatsSection";
import styles from "./page.module.css";

export const metadata: Metadata = {
  title: "Work",
  description:
    "Review selected Foundry Lane projects showcasing strategic storytelling, interface craft, and measurable outcomes.",
  openGraph: {
    title: "Work | Foundry Lane",
    description:
      "Case studies spanning fintech, healthcare, retail, and industrial automation.",
    url: "https://foundrylane.studio/work",
  },
};

export default function WorkPage() {
  return (
    <div className={`pageTransition ${styles.page}`}>
      <PageHero
        title="Selected projects with measurable impact"
        subtitle="Each case study combines narrative clarity, visual distinction, and conversion-aware architecture."
        imageSrc="https://picsum.photos/id/1059/1200/780"
        imageAlt="Creative presentation wall with campaign concepts and analytics snapshots"
      />
      <AwardsStrip />
      <CaseStudiesGrid />
      <StatsSection />
      <ContactBlock />
    </div>
  );
}
