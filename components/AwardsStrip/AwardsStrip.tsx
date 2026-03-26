import { ScrollReveal } from "@/components/ScrollReveal/ScrollReveal";
import { awards } from "@/lib/site-data";
import styles from "./AwardsStrip.module.css";

export function AwardsStrip() {
  return (
    <section className={styles.section} aria-label="Recognition highlights">
      <div className="container">
        <div className={styles.track}>
          {awards.map((award, index) => (
            <ScrollReveal key={award} className={styles.item} variant="up" delay={index * 90}>
              <p>{award}</p>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
