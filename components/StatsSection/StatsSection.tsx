"use client";

import { useEffect, useRef, useState } from "react";
import { ScrollReveal } from "@/components/ScrollReveal/ScrollReveal";
import { stats } from "@/lib/site-data";
import styles from "./StatsSection.module.css";

function easeOutCubic(t: number) {
  return 1 - (1 - t) ** 3;
}

function useCountUp(target: number) {
  const ref = useRef<HTMLSpanElement | null>(null);
  const [value, setValue] = useState(target);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;

    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;

    if (prefersReducedMotion) return;

    let rafId = 0;
    let started = false;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting || started) return;

        started = true;
        const duration = 2000;
        const start = performance.now();

        const tick = (now: number) => {
          const progress = Math.min((now - start) / duration, 1);
          const eased = easeOutCubic(progress);
          setValue(Math.round(target * eased));

          if (progress < 1) {
            rafId = requestAnimationFrame(tick);
          }
        };

        rafId = requestAnimationFrame(tick);
        observer.unobserve(entry.target);
      },
      { threshold: 0.4 }
    );

    observer.observe(node);

    return () => {
      observer.disconnect();
      if (rafId) cancelAnimationFrame(rafId);
    };
  }, [target]);

  return { ref, value };
}

export function StatsSection() {
  return (
    <section className={styles.section} aria-label="Studio impact metrics">
      <div className="container">
        <div className={styles.grid}>
          {stats.map((item, index) => (
            <StatCard
              key={item.label}
              label={item.label}
              value={item.value}
              suffix={item.suffix}
              delay={index * 120}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

function StatCard({
  label,
  value,
  suffix,
  delay,
}: {
  label: string;
  value: number;
  suffix: string;
  delay: number;
}) {
  const { ref, value: count } = useCountUp(value);

  return (
    <ScrollReveal className={styles.card} variant="scale" delay={delay}>
      <p className={styles.number}>
        <span ref={ref}>{count}</span>
        {suffix}
      </p>
      <p className={styles.label}>{label}</p>
    </ScrollReveal>
  );
}
