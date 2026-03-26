"use client";

import { useEffect, useState } from "react";
import styles from "./Modal.module.css";

interface ModalProps {
  isOpen: boolean;
  title: string;
  description: string;
  onClose: () => void;
}

export function Modal({ isOpen, title, description, onClose }: ModalProps) {
  const [mounted, setMounted] = useState(false);
  const [closing, setClosing] = useState(false);

  useEffect(() => {
    if (isOpen) {
      setMounted(true);
      setClosing(false);
      const { body } = document;
      const original = body.style.overflow;
      body.style.overflow = "hidden";

      return () => {
        body.style.overflow = original;
      };
    }

    return;
  }, [isOpen]);

  if (!isOpen && !mounted) {
    return null;
  }

  const handleClose = () => {
    setClosing(true);
    window.setTimeout(() => {
      setMounted(false);
      setClosing(false);
      onClose();
    }, 300);
  };

  return (
    <div className={`${styles.overlay} ${closing ? styles.hide : styles.show}`}>
      <button
        type="button"
        className={styles.backdrop}
        onClick={handleClose}
        aria-label="Close modal"
      />
      <div
        className={`${styles.dialog} ${closing ? styles.dialogHide : styles.dialogShow}`}
        role="dialog"
        aria-modal="true"
        aria-labelledby="modal-title"
      >
        <button type="button" onClick={handleClose} className={styles.closeButton} aria-label="Close popup">
          Close
        </button>
        <h3 id="modal-title">{title}</h3>
        <p>{description}</p>
      </div>
    </div>
  );
}
