import Image from "next/image";
import { ScrollReveal } from "@/components/ScrollReveal/ScrollReveal";
import styles from "./PageHero.module.css";

interface PageHeroProps {
  title: string;
  subtitle: string;
  imageSrc: string;
  imageAlt: string;
}

export function PageHero({ title, subtitle, imageSrc, imageAlt }: PageHeroProps) {
  return (
    <section className={styles.hero}>
      <div className="container">
        <div className={styles.layout}>
          <ScrollReveal className={styles.copy} variant="left">
            <h1>{title}</h1>
            <p>{subtitle}</p>
          </ScrollReveal>

          <ScrollReveal className={styles.imageWrap} variant="right" delay={130}>
            <Image src={imageSrc} alt={imageAlt} fill sizes="(max-width: 768px) 100vw, 48vw" />
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}
