"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { heroContent } from "@/lib/site-data";
import styles from "./Hero.module.css";

export function Hero() {
  const [offsetY, setOffsetY] = useState(0);

  useEffect(() => {
    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;

    if (prefersReducedMotion) {
      return;
    }

    const onScroll = () => {
      setOffsetY(window.scrollY * 0.1);
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <section className={styles.hero} aria-labelledby="home-hero-heading">
      <div className={styles.media} style={{ transform: `translate3d(0, ${offsetY}px, 0)` }}>
        <Image
          src={heroContent.image.src}
          alt={heroContent.image.alt}
          fill
          priority
          sizes="(max-width: 768px) 100vw, 56vw"
          className={styles.image}
        />
      </div>

      <div className="container">
        <div className={styles.content}>
          <p className={styles.kicker}>{heroContent.kicker}</p>
          <h1 id="home-hero-heading">{heroContent.heading}</h1>
          <p className={styles.body}>{heroContent.body}</p>
          <div className={styles.actions}>
            <Link href={heroContent.primaryCta.href} className={styles.primaryCta}>
              {heroContent.primaryCta.label}
            </Link>
            <Link href={heroContent.secondaryCta.href} className={styles.secondaryCta}>
              {heroContent.secondaryCta.label}
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
