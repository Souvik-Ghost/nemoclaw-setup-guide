import React from 'react';
import styles from './StepCard.module.css';

export default function StepCard({ stepNumber, title, children }: { stepNumber: number, title: string, children: React.ReactNode }) {
  return (
    <div className={`${styles.card} glass-panel`}>
      <div className={styles.header}>
        <span className={styles.badge}>Step {stepNumber}</span>
        <h2>{title}</h2>
      </div>
      <div className={styles.content}>
        {children}
      </div>
    </div>
  );
}
