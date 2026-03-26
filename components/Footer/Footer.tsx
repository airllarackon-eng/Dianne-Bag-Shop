import Link from "next/link";
import { footerGroups, SITE } from "@/lib/site-data";
import styles from "./Footer.module.css";

const socialLinks = [
  {
    name: "Instagram",
    href: "https://instagram.com",
    icon: (
      <svg viewBox="0 0 24 24" aria-hidden="true" focusable="false">
        <rect x="3" y="3" width="18" height="18" rx="5" ry="5" fill="none" stroke="currentColor" strokeWidth="1.8" />
        <circle cx="12" cy="12" r="4" fill="none" stroke="currentColor" strokeWidth="1.8" />
        <circle cx="17.2" cy="6.8" r="1.2" fill="currentColor" />
      </svg>
    ),
  },
  {
    name: "LinkedIn",
    href: "https://linkedin.com",
    icon: (
      <svg viewBox="0 0 24 24" aria-hidden="true" focusable="false">
        <path d="M5.5 8.7H9V20H5.5V8.7Zm1.8-5a2 2 0 1 1 0 4 2 2 0 0 1 0-4ZM11 8.7h3.3v1.5h.1c.5-.9 1.7-1.9 3.6-1.9 3.8 0 4.5 2.5 4.5 5.8V20H19v-5.2c0-1.3 0-2.9-1.8-2.9s-2 1.4-2 2.8V20H11V8.7Z" fill="currentColor" />
      </svg>
    ),
  },
  {
    name: "Dribbble",
    href: "https://dribbble.com",
    icon: (
      <svg viewBox="0 0 24 24" aria-hidden="true" focusable="false">
        <circle cx="12" cy="12" r="9" fill="none" stroke="currentColor" strokeWidth="1.8" />
        <path d="M6 8.5c3 1 8 1.2 12-.2M9 5.2c2.1 2.4 4.7 7.5 5.7 13M4.8 13.4c2.8-1.2 8.4-1.9 14.4-.5" fill="none" stroke="currentColor" strokeWidth="1.4" />
      </svg>
    ),
  },
];

export function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={`container ${styles.grid}`}>
        <div className={styles.intro}>
          <h2>{SITE.name}</h2>
          <p>{SITE.description}</p>
          <ul className={styles.socials} aria-label="Social links">
            {socialLinks.map((item) => (
              <li key={item.name}>
                <a
                  href={item.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`Visit ${item.name}`}
                >
                  {item.icon}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {footerGroups.map((group) => (
          <div key={group.heading} className={styles.column}>
            <h3>{group.heading}</h3>
            <ul>
              {group.links.map((link) => (
                <li key={link.label}>
                  {link.external ? (
                    <a href={link.href} target="_blank" rel="noopener noreferrer">
                      {link.label}
                    </a>
                  ) : (
                    <Link href={link.href}>{link.label}</Link>
                  )}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
      <div className={`container ${styles.bottom}`}>
        <p>Copyright {new Date().getFullYear()} {SITE.name}. All rights reserved.</p>
      </div>
    </footer>
  );
}
