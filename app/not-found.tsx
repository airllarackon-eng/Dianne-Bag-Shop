import Link from "next/link";
import styles from "./not-found.module.css";

export default function NotFound() {
  return (
    <div className={`pageTransition ${styles.page}`}>
      <section className={styles.section}>
        <div className="container">
          <p className={styles.code}>404</p>
          <h1>Page not found.</h1>
          <p>The page may have moved or no longer exists. Return home to continue browsing OrnaLuxe.</p>
          <Link href="/" className={styles.link}>
            Return home
          </Link>
        </div>
      </section>
    </div>
  );
}
