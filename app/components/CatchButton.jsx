'use client';
import styles from './button.module.css';

export default function CatchButton({ name }) {
  return (
    <button
      className={styles.catch_button}
      onClick={() => alert(`Złapany pokemon ${name}`)}
    >
      Złap mnie
    </button>
  );
}
