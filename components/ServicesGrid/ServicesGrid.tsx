import { ScrollReveal } from "@/components/ScrollReveal/ScrollReveal";
import { serviceItems } from "@/lib/site-data";
import styles from "./ServicesGrid.module.css";

export function ServicesGrid() {
  return (
    <section className={styles.section} aria-label="Core services">
      <div className="container">
        <div className={styles.grid}>
          {serviceItems.map((item, index) => (
            <ScrollReveal
              key={item.title}
              className={styles.card}
              variant="scale"
              delay={index * 120}
            >
              <h3>{item.title}</h3>
              <p>{item.summary}</p>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
