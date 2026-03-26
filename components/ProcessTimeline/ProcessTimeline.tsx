import { ScrollReveal } from "@/components/ScrollReveal/ScrollReveal";
import { processSteps } from "@/lib/site-data";
import styles from "./ProcessTimeline.module.css";

export function ProcessTimeline() {
  return (
    <section className={styles.section} aria-labelledby="process-heading">
      <div className="container">
        <div className={styles.wrapper}>
          <ScrollReveal variant="left" className={styles.headingBlock}>
            <h2 id="process-heading">How we shape and ship work</h2>
            <p>
              A clear process gives teams confidence while protecting creative range. We keep
              momentum high and decisions grounded.
            </p>
          </ScrollReveal>

          <ol className={styles.list}>
            {processSteps.map((step, index) => (
              <ScrollReveal
                as="li"
                key={step.title}
                className={styles.item}
                variant="up"
                delay={index * 120}
              >
                <span className={styles.stepNumber}>{String(index + 1).padStart(2, "0")}</span>
                <div>
                  <h3>{step.title}</h3>
                  <p>{step.summary}</p>
                </div>
              </ScrollReveal>
            ))}
          </ol>
        </div>
      </div>
    </section>
  );
}
