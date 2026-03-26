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
            <p className={styles.kicker}>Project inquiry</p>
            <h2 id="contact-block-heading">Plan your next launch with us</h2>
            <p>
              Tell us what you are building and where momentum is blocked. We will share a focused
              recommendation and delivery approach.
            </p>
            <button type="button" className={styles.button} onClick={() => setIsOpen(true)}>
              Open inquiry details
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

      <Modal
        isOpen={isOpen}
        onClose={() => setIsOpen(false)}
        title="Before we meet"
        description="Share your timeline, current website, and the audience you want to move. We will tailor the session around your most important conversion and storytelling challenges."
      />
    </section>
  );
}
