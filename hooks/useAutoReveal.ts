"use client";

import { useEffect } from "react";

type AutoRevealOptions = {
  attribute?: string;
  threshold?: number;
  rootMargin?: string;
};

export function useAutoReveal(options: AutoRevealOptions = {}) {
  const {
    attribute = "data-reveal",
    threshold = 0.15,
    rootMargin = "0px 0px -8% 0px",
  } = options;

  useEffect(() => {
    const nodes = document.querySelectorAll<HTMLElement>(`[${attribute}]`);

    if (nodes.length === 0) {
      return;
    }

    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;

    if (prefersReducedMotion) {
      nodes.forEach((node) => node.classList.add("is-revealed"));
      return;
    }

    const observers: IntersectionObserver[] = [];

    nodes.forEach((node) => {
      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              entry.target.classList.add("is-revealed");
              observer.unobserve(entry.target);
            }
          });
        },
        { threshold, rootMargin }
      );

      observer.observe(node);
      observers.push(observer);
    });

    return () => {
      observers.forEach((observer) => observer.disconnect());
    };
  }, [attribute, rootMargin, threshold]);
}
