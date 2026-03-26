import type { Metadata } from "next";
import { ContactBlock } from "@/components/ContactBlock/ContactBlock";
import { ContactForm } from "@/components/ContactForm/ContactForm";
import { FaqAccordion } from "@/components/FaqAccordion/FaqAccordion";
import { PageHero } from "@/components/PageHero/PageHero";
import styles from "./page.module.css";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Start a project conversation with Foundry Lane. Share your goals, timeline, and team context.",
  openGraph: {
    title: "Contact | Foundry Lane",
    description:
      "Reach Foundry Lane to discuss strategy, design, and front-end implementation support.",
    url: "https://foundrylane.studio/contact",
  },
};

export default function ContactPage() {
  return (
    <div className={`pageTransition ${styles.page}`}>
      <PageHero
        title="Let us discuss your next digital chapter"
        subtitle="Tell us what is changing in your business and what your current website is struggling to communicate."
        imageSrc="https://picsum.photos/id/1019/1200/780"
        imageAlt="Project planning session with notebooks, wireframes, and laptop on a wood desk"
      />
      <ContactForm />
      <FaqAccordion />
      <ContactBlock />
    </div>
  );
}
