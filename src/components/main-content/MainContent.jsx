import React from 'react';
import Countdown from './Countdown';
import styles from './MainContent.module.scss';

export default function MainContent() {
  return (
    <div className={styles.container}>
      <div className={styles.names}>
        Дмитрий
        <div className={styles.heart} />
        Ирина
      </div>
      <div>17.09.2023</div>
      <div style={{ bottom: '0px', position: 'absolute' }}>
        <Countdown targetDate="2023-09-17T00:00:00" />
      </div>
    </div>
  );
}
