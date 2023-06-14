import React, { useState, useEffect } from 'react';
import styles from './Countdown.module.scss';

function Countdown({ targetDate }) {
  const calculateTimeLeft = () => {
    const difference = +new Date(targetDate) - +new Date();

    let timeLeft = {};

    if (difference > 0) {
      timeLeft = {
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((difference / 1000 / 60) % 60),
        seconds: Math.floor((difference / 1000) % 60),
      };
    }

    return timeLeft;
  };

  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  useEffect(() => {
    const timer = setTimeout(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearTimeout(timer);
  });

  return (
    <div className={styles.container}>
      <div className={styles.date}>
        <span className={styles.days}>
          {timeLeft.days}
        </span>
        <span className={styles.text}>
          дней
        </span>
      </div>
      <div className={styles.date}>
        <span className={styles.days}>
          {timeLeft.hours}
        </span>
        <span className={styles.text}>
          часов
        </span>
      </div>
      <div className={styles.date}>
        <span className={styles.days}>
          {timeLeft.minutes}
        </span>
        <span className={styles.text}>
          минут
        </span>
      </div>
      <div className={styles.date}>
        <span className={styles.days}>
          {timeLeft.seconds}
        </span>
        <span className={styles.text}>
          секунд
        </span>
      </div>
    </div>
  );
}

export default Countdown;
