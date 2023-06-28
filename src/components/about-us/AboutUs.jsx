import React from 'react';
import styles from './AboutUs.module.scss';

export default function AboutUs({ aboutUsRef }) {
  return (
    <div
      className={styles.container}
      ref={aboutUsRef}
    >
      <h2>Дмитрий и Ирина</h2>
      <div>Дорогие друзья!</div>
      <div style={{ width: '80%' }}>
        <p>
          Жить, любить, чувствовать.
          Однажды мы поняли, что нет ничего важнее этого.
          И что идти дальше мы хотим только вместе.
          А теперь мечтаем, чтобы день нашей свадьбы стал красивым и ярким событием
          на этом увлекательном пути.
        </p>
        <br />
        <p>
          Мы будем очень рады, если вы разделите этот счастливый день с нами.
        </p>
        <br />
        <p>
          Увидимся на нашей свадьбе!
        </p>
      </div>
    </div>
  );
}
