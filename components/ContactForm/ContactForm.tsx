"use client";

import { FormEvent, useState } from "react";
import { ScrollReveal } from "@/components/ScrollReveal/ScrollReveal";
import styles from "./ContactForm.module.css";

interface FormState {
  name: string;
  email: string;
  category: string;
  message: string;
}

const initialState: FormState = {
  name: "",
  email: "",
  category: "",
  message: "",
};

export function ContactForm() {
  const [form, setForm] = useState<FormState>(initialState);
  const [errors, setErrors] = useState<Partial<FormState>>({});
  const [submitted, setSubmitted] = useState(false);

  const onSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const nextErrors: Partial<FormState> = {};

    if (!form.name.trim()) nextErrors.name = "Please enter your name.";
    if (!/^\S+@\S+\.\S+$/.test(form.email)) nextErrors.email = "Enter a valid email address.";
    if (!form.category.trim()) nextErrors.category = "Please choose a product category.";
    if (!form.message.trim() || form.message.trim().length < 20) {
      nextErrors.message = "Please add at least 20 characters so we can guide you well.";
    }

    setErrors(nextErrors);

    if (Object.keys(nextErrors).length === 0) {
      setSubmitted(true);
      setForm(initialState);
    }
  };

  return (
    <section className={styles.section} aria-labelledby="contact-form-heading">
      <div className="container">
        <ScrollReveal className={styles.shell} variant="up">
          <h2 id="contact-form-heading">Send us your request</h2>
          <p>
            This is a front-end form for demonstration. Share what you need and our team can follow
            up with suitable options.
          </p>

          <form onSubmit={onSubmit} noValidate>
            <div className={styles.grid}>
              <div>
                <label htmlFor="name">Name</label>
                <input
                  id="name"
                  name="name"
                  value={form.name}
                  onChange={(event) => setForm((prev) => ({ ...prev, name: event.target.value }))}
                  aria-invalid={Boolean(errors.name)}
                  aria-describedby={errors.name ? "name-error" : undefined}
                />
                {errors.name ? <span id="name-error" className={styles.error}>{errors.name}</span> : null}
              </div>

              <div>
                <label htmlFor="email">Email</label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  value={form.email}
                  onChange={(event) => setForm((prev) => ({ ...prev, email: event.target.value }))}
                  aria-invalid={Boolean(errors.email)}
                  aria-describedby={errors.email ? "email-error" : undefined}
                />
                {errors.email ? <span id="email-error" className={styles.error}>{errors.email}</span> : null}
              </div>

              <div className={styles.full}>
                <label htmlFor="category">Preferred category</label>
                <input
                  id="category"
                  name="category"
                  value={form.category}
                  onChange={(event) => setForm((prev) => ({ ...prev, category: event.target.value }))}
                  aria-invalid={Boolean(errors.category)}
                  aria-describedby={errors.category ? "category-error" : undefined}
                  placeholder="Example: Executive tote or evening clutch"
                />
                {errors.category ? (
                  <span id="category-error" className={styles.error}>
                    {errors.category}
                  </span>
                ) : null}
              </div>

              <div className={styles.full}>
                <label htmlFor="message">Message</label>
                <textarea
                  id="message"
                  name="message"
                  rows={5}
                  value={form.message}
                  onChange={(event) => setForm((prev) => ({ ...prev, message: event.target.value }))}
                  aria-invalid={Boolean(errors.message)}
                  aria-describedby={errors.message ? "message-error" : undefined}
                />
                {errors.message ? (
                  <span id="message-error" className={styles.error}>
                    {errors.message}
                  </span>
                ) : null}
              </div>
            </div>

            <button type="submit">Submit request</button>
            {submitted ? (
              <p className={styles.success} role="status">
                Thank you. Your request has been captured.
              </p>
            ) : null}
          </form>
        </ScrollReveal>
      </div>
    </section>
  );
}
