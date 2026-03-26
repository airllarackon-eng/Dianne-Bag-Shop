import Link from "next/link";
import styles from "./not-found.module.css";

export default function NotFound() {
  return (
    <div className={`pageTransition ${styles.page}`}>
      <section className={styles.section}>
        <div className="container">
          <p className={styles.code}>404</p>
          <h1>This page could not be found.</h1>
          <p>
            The page may have moved or been removed. You can return home to continue exploring
            the studio.
          </p>
          <Link href="/" className={styles.link}>
            Return home
          </Link>
        </div>
      </section>
    </div>
  );
}
