import Image from "next/image";
import Link from "next/link";
import { ScrollReveal } from "@/components/ScrollReveal/ScrollReveal";
import { featuredProjects } from "@/lib/site-data";
import styles from "./WorkPreview.module.css";

export function WorkPreview() {
  return (
    <section className={styles.section} aria-labelledby="work-preview-heading">
      <div className="container">
        <ScrollReveal variant="blur" className={styles.header}>
          <h2 id="work-preview-heading">Selected work</h2>
          <Link href="/work" className={styles.link}>
            Explore all case studies
          </Link>
        </ScrollReveal>

        <div className={styles.grid}>
          {featuredProjects.slice(0, 3).map((project, index) => (
            <ScrollReveal
              key={project.title}
              className={styles.card}
              variant={index % 2 === 0 ? "left" : "right"}
              delay={index * 120}
            >
              <div className={styles.imageWrap}>
                <Image
                  src={project.image.src}
                  alt={project.image.alt}
                  fill
                  sizes="(max-width: 768px) 100vw, 33vw"
                />
              </div>
              <div className={styles.content}>
                <p className={styles.category}>{project.category}</p>
                <h3>{project.title}</h3>
                <p>{project.summary}</p>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
