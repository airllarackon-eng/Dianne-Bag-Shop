"use client";

import { type ElementType, type ReactNode, useMemo, useRef } from "react";
import { useScrollReveal } from "@/hooks/useScrollReveal";
import styles from "./ScrollReveal.module.css";

type RevealVariant = "up" | "left" | "right" | "scale" | "blur";

interface ScrollRevealProps {
  as?: ElementType;
  children: ReactNode;
  className?: string;
  variant?: RevealVariant;
  delay?: number;
}

export function ScrollReveal({
  as: Tag = "div",
  children,
  className,
  variant = "up",
  delay = 0,
}: ScrollRevealProps) {
  const ref = useRef<HTMLElement | null>(null);
  const isRevealed = useScrollReveal(ref);

  const composedClassName = useMemo(
    () =>
      [
        styles.reveal,
        styles[variant],
        isRevealed ? styles.isVisible : "",
        className ?? "",
      ]
        .filter(Boolean)
        .join(" "),
    [className, isRevealed, variant]
  );

  return (
    <Tag
      ref={ref}
      className={composedClassName}
      style={{ ["--reveal-delay" as string]: `${delay}ms` }}
    >
      {children}
    </Tag>
  );
}
