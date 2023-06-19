import React from 'react';
import Countdown from './Countdown';
import styles from './MainContent.module.scss';

export default function MainContent({ mainContentRef }) {
  return (
    <div className={styles.container} ref={mainContentRef}>
      <div className={styles.names}>
        Дмитрий
        <div className={styles.heart} />
        Ирина
      </div>
      <div className={styles.date}>17.09.2023</div>
      <div className={styles.countdown}>
        <Countdown targetDate="2023-09-17T00:00:00" />
      </div>
    </div>
  );
}
