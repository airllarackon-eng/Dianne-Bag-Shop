import type { Metadata } from "next";
import { ApproachDetails } from "@/components/ApproachDetails/ApproachDetails";
import { ContactBlock } from "@/components/ContactBlock/ContactBlock";
import { PageHero } from "@/components/PageHero/PageHero";
import { TeamGrid } from "@/components/TeamGrid/TeamGrid";
import { ValuesStrip } from "@/components/ValuesStrip/ValuesStrip";
import styles from "./page.module.css";

export const metadata: Metadata = {
  title: "About",
  description:
    "Learn how Foundry Lane combines strategy, editorial design, and engineering to launch polished websites for growth-stage teams.",
  openGraph: {
    title: "About | Foundry Lane",
    description:
      "Meet the team and principles behind Foundry Lane's strategic design and implementation approach.",
    url: "https://foundrylane.studio/about",
  },
};

export default function AboutPage() {
  return (
    <div className={`pageTransition ${styles.page}`}>
      <PageHero
        title="We design with intent and build with rigor."
        subtitle="From narrative strategy to front-end delivery, our studio model keeps every layer of your website coherent, efficient, and launch-ready."
        imageSrc="https://picsum.photos/id/1037/1200/780"
        imageAlt="Studio collaboration session reviewing page flow and messaging hierarchy"
      />
      <ApproachDetails />
      <ValuesStrip />
      <TeamGrid />
      <ContactBlock />
    </div>
  );
}
