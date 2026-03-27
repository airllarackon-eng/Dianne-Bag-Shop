import { ScrollReveal } from "@/components/ScrollReveal/ScrollReveal";
import { serviceItems } from "@/lib/site-data";
import styles from "./ServicesGrid.module.css";

export function ServicesGrid() {
  return (
    <section className={styles.section} aria-labelledby="collections-heading">
      <div className="container">
        <ScrollReveal className={styles.heading} variant="blur">
          <p className={styles.kicker}>Collection categories</p>
          <h2 id="collections-heading">Different categories of work bags for women</h2>
        </ScrollReveal>

        <div className={styles.grid}>
          {serviceItems.map((item, index) => (
            <ScrollReveal
              key={item.title}
              className={styles.card}
              variant="scale"
              delay={index * 110}
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
