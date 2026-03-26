import { ScrollReveal } from "@/components/ScrollReveal/ScrollReveal";
import styles from "./SectionIntro.module.css";

interface SectionIntroProps {
  eyebrow?: string;
  title: string;
  body?: string;
  align?: "left" | "center";
}

export function SectionIntro({
  eyebrow,
  title,
  body,
  align = "left",
}: SectionIntroProps) {
  return (
    <ScrollReveal
      className={`${styles.intro} ${align === "center" ? styles.center : ""}`}
      variant="blur"
    >
      {eyebrow ? <p className={styles.eyebrow}>{eyebrow}</p> : null}
      <h2>{title}</h2>
      {body ? <p className={styles.body}>{body}</p> : null}
    </ScrollReveal>
  );
}
