import Image from "next/image";
import Link from "next/link";
import { ScrollReveal } from "@/components/ScrollReveal/ScrollReveal";
import { featuredProjects } from "@/lib/site-data";
import styles from "./WorkPreview.module.css";

export function WorkPreview() {
  const feature = featuredProjects[0];

  return (
    <section className={styles.section} aria-labelledby="editorial-feature-heading">
      <div className="container">
        <div className={styles.layout}>
          <ScrollReveal className={styles.media} variant="left">
            <Image
              src={feature.image.src}
              alt={feature.image.alt}
              fill
              sizes="(max-width: 768px) 100vw, 46vw"
            />
          </ScrollReveal>

          <ScrollReveal className={styles.content} variant="right" delay={120}>
            <p className={styles.kicker}>Craft and curation</p>
            <h2 id="editorial-feature-heading">
              OrnaLuxe offers a carefully curated selection of premium pieces designed to blend
              timeless sophistication with modern trends.
            </h2>
            <p>
              Every item is selected with attention to detail, balancing durability, beauty, and
              exclusive character so your everyday style feels elevated and intentional.
            </p>
            <ul className={styles.points}>
              <li>Premium material selection and finish quality</li>
              <li>Structured silhouettes with practical organization</li>
              <li>Editorial styling direction for work and social occasions</li>
            </ul>
            <Link href="/services" className={styles.link}>
              Explore full collection range
            </Link>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}
