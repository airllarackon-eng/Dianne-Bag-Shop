import Link from "next/link";
import { ScrollReveal } from "@/components/ScrollReveal/ScrollReveal";
import styles from "./ContactDetails.module.css";

type DetailLink = {
  label: string;
  href: string;
  external?: boolean;
};

type DetailBlock = {
  title: string;
  lines: string[];
  links: DetailLink[];
};

const details: DetailBlock[] = [
  {
    title: "Customer Support",
    lines: ["Email: support@ornaluxe.com", "Phone and WhatsApp: +233 506640015"],
    links: [
      { label: "support@ornaluxe.com", href: "mailto:support@ornaluxe.com" },
      { label: "+233 506640015", href: "tel:+233506640015" },
    ],
  },
  {
    title: "Business Hours",
    lines: ["Monday to Saturday: 9:00 AM to 6:00 PM", "Sunday: Closed"],
    links: [],
  },
  {
    title: "Social Media",
    lines: ["Instagram: @OrnaLuxe", "Facebook: OrnaLuxe"],
    links: [
      { label: "Instagram", href: "https://instagram.com/ornaluxe", external: true },
      { label: "Facebook", href: "https://facebook.com/ornaluxe", external: true },
    ],
  },
];

export function ContactDetails() {
  return (
    <section className={styles.section} aria-labelledby="contact-details-heading">
      <div className="container">
        <ScrollReveal className={styles.heading} variant="up">
          <h2 id="contact-details-heading">Reach OrnaLuxe</h2>
        </ScrollReveal>
        <div className={styles.grid}>
          {details.map((block, index) => (
            <ScrollReveal
              key={block.title}
              as="article"
              className={styles.card}
              variant="scale"
              delay={index * 110}
            >
              <h3>{block.title}</h3>
              <ul>
                {block.lines.map((line) => (
                  <li key={line}>{line}</li>
                ))}
              </ul>
              {block.links.length > 0 ? (
                <div className={styles.links}>
                  {block.links.map((link) =>
                    link.external ? (
                      <a key={link.href} href={link.href} target="_blank" rel="noopener noreferrer">
                        {link.label}
                      </a>
                    ) : (
                      <Link key={link.href} href={link.href}>
                        {link.label}
                      </Link>
                    )
                  )}
                </div>
              ) : null}
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
