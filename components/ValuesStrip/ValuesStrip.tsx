import { ScrollReveal } from "@/components/ScrollReveal/ScrollReveal";
import { values } from "@/lib/site-data";
import styles from "./ValuesStrip.module.css";

export function ValuesStrip() {
  return (
    <section className={styles.section} aria-labelledby="values-heading">
      <div className="container">
        <ScrollReveal className={styles.heading} variant="up">
          <h2 id="values-heading">What OrnaLuxe stands for</h2>
        </ScrollReveal>
        <div className={styles.grid}>
          {values.map((item, index) => (
            <ScrollReveal
              as="article"
              key={item.title}
              className={styles.card}
              variant="up"
              delay={index * 110}
            >
              <h3>{item.title}</h3>
              <p>{item.body}</p>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
