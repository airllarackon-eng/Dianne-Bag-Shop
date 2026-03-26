import { ScrollReveal } from "@/components/ScrollReveal/ScrollReveal";
import { capabilityGroups } from "@/lib/site-data";
import styles from "./CapabilitiesList.module.css";

export function CapabilitiesList() {
  return (
    <section className={styles.section} aria-labelledby="capabilities-heading">
      <div className="container">
        <ScrollReveal className={styles.heading}>
          <h2 id="capabilities-heading">Capabilities in detail</h2>
        </ScrollReveal>

        <div className={styles.grid}>
          {capabilityGroups.map((group, index) => (
            <ScrollReveal
              as="article"
              key={group.title}
              className={styles.card}
              variant="scale"
              delay={index * 120}
            >
              <h3>{group.title}</h3>
              <ul>
                {group.items.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
