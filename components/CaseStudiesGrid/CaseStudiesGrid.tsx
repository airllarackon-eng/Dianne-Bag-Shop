import Image from "next/image";
import { ScrollReveal } from "@/components/ScrollReveal/ScrollReveal";
import { featuredProjects } from "@/lib/site-data";
import styles from "./CaseStudiesGrid.module.css";

export function CaseStudiesGrid() {
  return (
    <section className={styles.section} aria-labelledby="case-studies-heading">
      <div className="container">
        <ScrollReveal className={styles.heading}>
          <h2 id="case-studies-heading">Case studies</h2>
        </ScrollReveal>

        <div className={styles.grid}>
          {featuredProjects.map((project, index) => (
            <ScrollReveal
              key={project.title}
              as="article"
              className={styles.card}
              variant={index % 2 === 0 ? "left" : "right"}
              delay={index * 110}
            >
              <div className={styles.media}>
                <Image src={project.image.src} alt={project.image.alt} fill sizes="(max-width: 768px) 100vw, 50vw" />
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
