"use client";

import { useState } from "react";
import { ScrollReveal } from "@/components/ScrollReveal/ScrollReveal";
import { Modal } from "@/components/Modal/Modal";
import { contactMethods } from "@/lib/site-data";
import styles from "./ContactBlock.module.css";

export function ContactBlock() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <section className={styles.section} aria-labelledby="contact-block-heading">
      <div className="container">
        <div className={styles.layout}>
          <ScrollReveal className={styles.content} variant="left">
            <p className={styles.kicker}>Final call</p>
            <h2 id="contact-block-heading">OrnaLuxe has the statement pieces you need.</h2>
            <p>Get yours today and define your signature look with confidence, detail, and ease.</p>
            <button type="button" className={styles.button} onClick={() => setIsOpen(true)}>
              Open concierge note
            </button>
          </ScrollReveal>

          <div className={styles.methods}>
            {contactMethods.map((method, index) => (
              <ScrollReveal
                key={method.title}
                as="article"
                className={styles.card}
                delay={index * 120}
                variant="scale"
              >
                <h3>{method.title}</h3>
                <a
                  href={method.href}
                  target={method.external ? "_blank" : undefined}
                  rel={method.external ? "noopener noreferrer" : undefined}
                >
                  {method.value}
                </a>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </div>

      {isOpen ? (
        <Modal
          onClose={() => setIsOpen(false)}
          title="Personal shopping concierge"
          description="Share your preferred category, finish, and daily use needs. Our team will suggest options that fit your style and routine."
        />
      ) : null}
    </section>
  );
}
