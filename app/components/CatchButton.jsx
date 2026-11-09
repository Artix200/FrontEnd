'use client';
import styles from './button.module.css';

export default function CatchButton({ name, handleAdditionToCatched }) {
  return (
    <button
      className={styles.catch_button}
      onClick={() => handleAdditionToCatched(name)}
    >
      Złap mnie
    </button>
  );
}
