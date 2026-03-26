import Image from "next/image";
import { ScrollReveal } from "@/components/ScrollReveal/ScrollReveal";
import { teamMembers } from "@/lib/site-data";
import styles from "./TeamGrid.module.css";

export function TeamGrid() {
  return (
    <section className={styles.section} aria-labelledby="team-heading">
      <div className="container">
        <ScrollReveal className={styles.heading}>
          <h2 id="team-heading">Core team</h2>
        </ScrollReveal>

        <div className={styles.grid}>
          {teamMembers.map((member, index) => (
            <ScrollReveal
              key={member.name}
              className={styles.card}
              variant="scale"
              delay={index * 110}
            >
              <div className={styles.imageWrap}>
                <Image src={member.image.src} alt={member.image.alt} fill sizes="(max-width: 768px) 100vw, 33vw" />
              </div>
              <div className={styles.content}>
                <h3>{member.name}</h3>
                <p className={styles.role}>{member.role}</p>
                <p>{member.bio}</p>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
