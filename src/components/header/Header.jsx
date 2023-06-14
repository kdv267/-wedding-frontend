import React from 'react';
import styles from './Header.module.scss';

export default function Header() {
  return (
    <header>
      <nav>
        <ul className={styles.container}>
          <li>Приглашение</li>
          <li>О нас</li>
          <li>F.A.Q.</li>
          <li>Опрос</li>
          <li>Программа</li>
          <li>Место</li>
        </ul>
      </nav>
    </header>
  );
}
