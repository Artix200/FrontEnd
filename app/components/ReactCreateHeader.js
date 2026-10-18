import React from 'react';
import styles from './headers.module.css';

export default function HeaderReactCreate() {
  return React.createElement(
    'div',
    { className: styles.header },
    React.createElement(
      'h1',
      null,
      'Witaj w świecie pokemonów (React.createElement)',
    ),
  );
}
