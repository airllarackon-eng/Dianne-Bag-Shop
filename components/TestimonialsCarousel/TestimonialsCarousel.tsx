"use client";

import { useEffect, useMemo, useState } from "react";
import { ScrollReveal } from "@/components/ScrollReveal/ScrollReveal";
import { testimonials } from "@/lib/site-data";
import styles from "./TestimonialsCarousel.module.css";

export function TestimonialsCarousel() {
  const [index, setIndex] = useState(0);
  const total = testimonials.length;

  useEffect(() => {
    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;

    if (prefersReducedMotion) {
      return;
    }

    const id = window.setInterval(() => {
      setIndex((prev) => (prev + 1) % total);
    }, 5500);

    return () => window.clearInterval(id);
  }, [total]);

  const trackStyle = useMemo(
    () => ({ transform: `translateX(-${index * 100}%)` }),
    [index]
  );

  return (
    <section className={styles.section} aria-labelledby="testimonials-heading">
      <div className="container">
        <ScrollReveal variant="up" className={styles.header}>
          <h2 id="testimonials-heading">What partners say</h2>
        </ScrollReveal>

        <div className={styles.carousel}>
          <div className={styles.track} style={trackStyle}>
            {testimonials.map((item) => (
              <article key={item.name} className={styles.slide}>
                <p className={styles.quote}>“{item.quote}”</p>
                <p className={styles.author}>{item.name}</p>
                <p className={styles.role}>{item.role}</p>
              </article>
            ))}
          </div>
        </div>

        <div className={styles.controls}>
          <button
            type="button"
            onClick={() => setIndex((prev) => (prev - 1 + total) % total)}
            aria-label="Show previous testimonial"
          >
            Prev
          </button>
          <div className={styles.dots}>
            {testimonials.map((item, dotIndex) => (
              <button
                key={item.name}
                type="button"
                className={dotIndex === index ? styles.active : ""}
                onClick={() => setIndex(dotIndex)}
                aria-label={`Show testimonial ${dotIndex + 1}`}
                aria-pressed={dotIndex === index}
              />
            ))}
          </div>
          <button
            type="button"
            onClick={() => setIndex((prev) => (prev + 1) % total)}
            aria-label="Show next testimonial"
          >
            Next
          </button>
        </div>
      </div>
    </section>
  );
}
