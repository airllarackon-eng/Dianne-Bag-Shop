import Link from "next/link";
import { footerGroups, SITE } from "@/lib/site-data";
import styles from "./Footer.module.css";

const socialLinks = [
  {
    name: "Instagram",
    href: "https://instagram.com/ornaluxe",
    icon: (
      <svg viewBox="0 0 24 24" aria-hidden="true" focusable="false">
        <rect x="3" y="3" width="18" height="18" rx="5" ry="5" fill="none" stroke="currentColor" strokeWidth="1.8" />
        <circle cx="12" cy="12" r="4" fill="none" stroke="currentColor" strokeWidth="1.8" />
        <circle cx="17.2" cy="6.8" r="1.2" fill="currentColor" />
      </svg>
    ),
  },
  {
    name: "Facebook",
    href: "https://facebook.com/ornaluxe",
    icon: (
      <svg viewBox="0 0 24 24" aria-hidden="true" focusable="false">
        <path d="M13.5 21v-7h2.4l.4-3H13.5V9.2c0-.9.3-1.5 1.6-1.5h1.4V5.1c-.2 0-1.1-.1-2.2-.1-2.2 0-3.7 1.3-3.7 3.9V11H8.5v3h2.1v7h2.9Z" fill="currentColor" />
      </svg>
    ),
  },
  {
    name: "Pinterest",
    href: "https://pinterest.com/ornaluxe",
    icon: (
      <svg viewBox="0 0 24 24" aria-hidden="true" focusable="false">
        <path d="M12 3.4c-4.8 0-7.3 3.4-7.3 6.2 0 1.7.7 3.2 2.1 3.8.2.1.4 0 .4-.2l.4-1.4c.1-.2 0-.3-.1-.5-.3-.4-.6-1-.6-1.9 0-2.4 1.8-4.6 4.8-4.6 2.6 0 4 1.6 4 3.7 0 2.8-1.2 5.1-3.1 5.1-1 0-1.7-.8-1.5-1.8.3-1.2.8-2.6.8-3.5 0-.8-.4-1.5-1.3-1.5-1 0-1.9 1-1.9 2.4 0 .9.3 1.5.3 1.5l-1.2 4.9c-.4 1.6-.1 3.6-.1 3.8 0 .1.1.2.2.1.1-.1 1.4-1.7 1.8-3.2l.5-2.1c.3.5 1.3 1 2.3 1 3 0 5-2.7 5-6.4 0-2.8-2.4-5.4-6-5.4Z" fill="currentColor" />
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
