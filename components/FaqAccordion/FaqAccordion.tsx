"use client";

import { useState } from "react";
import { ScrollReveal } from "@/components/ScrollReveal/ScrollReveal";
import { faqItems } from "@/lib/site-data";
import styles from "./FaqAccordion.module.css";

export function FaqAccordion() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section className={styles.section} aria-labelledby="faq-heading">
      <div className="container">
        <ScrollReveal className={styles.heading}>
          <h2 id="faq-heading">Frequently asked questions</h2>
        </ScrollReveal>

        <div className={styles.list}>
          {faqItems.map((item, index) => {
            const isOpen = openIndex === index;
            return (
              <ScrollReveal
                key={item.question}
                className={`${styles.item} ${isOpen ? styles.open : ""}`}
                variant="up"
                delay={index * 90}
              >
                <h3>
                  <button
                    type="button"
                    onClick={() => setOpenIndex(isOpen ? null : index)}
                    aria-expanded={isOpen}
                    aria-controls={`faq-panel-${index}`}
                    id={`faq-trigger-${index}`}
                  >
                    <span>{item.question}</span>
                    <span className={styles.icon} aria-hidden="true">
                      +
                    </span>
                  </button>
                </h3>
                <div
                  id={`faq-panel-${index}`}
                  role="region"
                  aria-labelledby={`faq-trigger-${index}`}
                  className={styles.panel}
                >
                  <div className={styles.panelInner}>
                    <p>{item.answer}</p>
                  </div>
                </div>
              </ScrollReveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
