'use client';
import React, { useState } from 'react';
import styles from './CodeSnippet.module.css';

export default function CodeSnippet({ code }: { code: string }) {
  const [copied, setCopied] = useState(false);

  const copyToClipboard = () => {
    navigator.clipboard.writeText(code.trim());
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className={styles.wrapper}>
      <pre className={styles.pre}>
        <code>{code.trim()}</code>
      </pre>
      <button className={styles.copyBtn} onClick={copyToClipboard}>
        {copied ? 'Copied!' : 'Copy'}
      </button>
    </div>
  );
}
