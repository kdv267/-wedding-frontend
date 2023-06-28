/* eslint-disable react/no-unescaped-entities */
import React from 'react';
import styles from './Program.module.scss';

export default function Program({ programRef }) {
  return (
    <div
      className={styles.container}
      ref={programRef}
    >
      <img
        src="/heart1.jpeg"
        alt="heart"
        style={{
          zIndex: '-20', position: 'absolute', width: '150px', height: '150px', right: '35%',
        }}
      />
      <h3 className={styles.title}>ПРОГРАММА СВАДЕБНОГО ДНЯ</h3>
      <div className={styles.action_container}>
        <div className={styles.action}>
          <h3 className={styles.time}>14:00</h3>
          <div>Сбор гостей, свадебный фуршет</div>
        </div>
        <div className={styles.action}>
          <h3 className={styles.time}>15:00</h3>
          <div>Свадебная церемония</div>
        </div>
        <div className={styles.action}>
          <h3 className={styles.time}>16:00</h3>
          <div>Свадебный ужин</div>
        </div>
        <div className={styles.action}>
          <h3 className={styles.time}>23:00</h3>
          <div>"Блистательное" окончание вечера</div>
        </div>
      </div>
    </div>
  );
}
