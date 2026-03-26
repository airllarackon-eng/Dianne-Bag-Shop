"use client";

import { useEffect, useRef, useState } from "react";
import styles from "./Modal.module.css";

interface ModalProps {
  title: string;
  description: string;
  onClose: () => void;
}

export function Modal({ title, description, onClose }: ModalProps) {
  const closeTimerRef = useRef<number | null>(null);
  const [isClosing, setIsClosing] = useState(false);

  useEffect(() => {
    const { body } = document;
    const original = body.style.overflow;
    body.style.overflow = "hidden";

    return () => {
      body.style.overflow = original;
      if (closeTimerRef.current) {
        window.clearTimeout(closeTimerRef.current);
      }
    };
  }, []);

  const handleClose = () => {
    if (isClosing) {
      return;
    }

    setIsClosing(true);
    closeTimerRef.current = window.setTimeout(() => {
      onClose();
    }, 300);
  };

  return (
    <div className={`${styles.overlay} ${isClosing ? styles.hide : styles.show}`}>
      <button
        type="button"
        className={styles.backdrop}
        onClick={handleClose}
        aria-label="Close modal"
      />
      <div
        className={`${styles.dialog} ${isClosing ? styles.dialogHide : styles.dialogShow}`}
        role="dialog"
        aria-modal="true"
        aria-labelledby="modal-title"
      >
        <button
          type="button"
          onClick={handleClose}
          className={styles.closeButton}
          aria-label="Close popup"
        >
          Close
        </button>
        <h3 id="modal-title">{title}</h3>
        <p>{description}</p>
      </div>
    </div>
  );
}
