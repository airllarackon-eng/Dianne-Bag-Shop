import { ScrollReveal } from "@/components/ScrollReveal/ScrollReveal";
import { aboutTimeline } from "@/lib/site-data";
import styles from "./ApproachDetails.module.css";

export function ApproachDetails() {
  return (
    <section className={styles.section} aria-labelledby="approach-heading">
      <div className="container">
        <div className={styles.layout}>
          <ScrollReveal variant="left" className={styles.copy}>
            <h2 id="approach-heading">A timeline shaped by elegance, quality, and detail</h2>
            <p>
              OrnaLuxe grew from a focused accessories concept into a curated premium label designed
              for modern professionals who value enduring style.
            </p>
          </ScrollReveal>

          <ol className={styles.timeline}>
            {aboutTimeline.map((item, index) => (
              <ScrollReveal
                as="li"
                key={item.year}
                className={styles.item}
                variant="up"
                delay={index * 120}
              >
                <span className={styles.year}>{item.year}</span>
                <h3>{item.title}</h3>
                <p>{item.summary}</p>
              </ScrollReveal>
            ))}
          </ol>
        </div>
      </div>
    </section>
  );
}
