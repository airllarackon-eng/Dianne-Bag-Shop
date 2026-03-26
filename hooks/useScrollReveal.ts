"use client";

import { RefObject, useEffect, useState } from "react";

type RevealOptions = {
  threshold?: number;
  rootMargin?: string;
  once?: boolean;
};

export function useScrollReveal<T extends HTMLElement>(
  ref: RefObject<T | null>,
  options: RevealOptions = {}
) {
  const { threshold = 0.2, rootMargin = "0px 0px -8% 0px", once = true } = options;
  const [isRevealed, setIsRevealed] = useState(false);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;

    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;

    if (prefersReducedMotion) {
      setIsRevealed(true);
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsRevealed(true);
          if (once) {
            observer.unobserve(node);
          }
        } else if (!once) {
          setIsRevealed(false);
        }
      },
      {
        threshold,
        rootMargin,
      }
    );

    observer.observe(node);
    return () => observer.disconnect();
  }, [once, ref, rootMargin, threshold]);

  return isRevealed;
}
