import type { Metadata } from "next";
import { ContactDetails } from "@/components/ContactDetails/ContactDetails";
import { ContactForm } from "@/components/ContactForm/ContactForm";
import { FaqAccordion } from "@/components/FaqAccordion/FaqAccordion";
import { PageHero } from "@/components/PageHero/PageHero";
import styles from "./page.module.css";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Contact OrnaLuxe customer support for product guidance, business hours, and social channels.",
  openGraph: {
    title: "Contact | OrnaLuxe",
    description:
      "Reach OrnaLuxe through email, phone, and social channels for premium accessories support.",
    url: "https://ornaluxe.com/contact",
  },
};

export default function ContactPage() {
  return (
    <div className={`pageTransition ${styles.page}`}>
      <PageHero
        title="Contact our support and style guidance team"
        subtitle="We are available to help you choose pieces that match your lifestyle, wardrobe, and daily routine."
        imageSrc="https://picsum.photos/id/1025/1200/780"
        imageAlt="Customer support specialist preparing premium accessory recommendations at a clean desk"
      />
      <ContactDetails />
      <ContactForm />
      <FaqAccordion />
    </div>
  );
}
