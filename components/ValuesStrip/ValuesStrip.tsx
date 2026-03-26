import { ScrollReveal } from "@/components/ScrollReveal/ScrollReveal";
import { values } from "@/lib/site-data";
import styles from "./ValuesStrip.module.css";

export function ValuesStrip() {
  return (
    <section className={styles.section} aria-label="Studio principles">
      <div className="container">
        <div className={styles.grid}>
          {values.map((item, index) => (
            <ScrollReveal
              as="article"
              key={item.title}
              className={styles.card}
              variant="up"
              delay={index * 110}
            >
              <h2>{item.title}</h2>
              <p>{item.body}</p>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
