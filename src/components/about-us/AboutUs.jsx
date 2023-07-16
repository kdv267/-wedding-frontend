import React from 'react';
import styles from './AboutUs.module.scss';
import Invite from '../invite/Invite';

export default function AboutUs({ aboutUsRef, guests }) {
  return (
    <div
      className={styles.container}
      ref={aboutUsRef}
    >
      <div className={styles.content}>
        <h2>{guests?.name}</h2>
        <div>Дорогие друзья!</div>

        <p>
          Жить, любить, чувствовать.
          Однажды мы поняли, что нет ничего важнее этого.
          И что идти дальше мы хотим только вместе.
          А теперь мечтаем, чтобы день нашей свадьбы стал красивым и ярким событием
          на этом увлекательном пути.
        </p>
      </div>
      <Invite guests={guests} />
    </div>
  );
}
