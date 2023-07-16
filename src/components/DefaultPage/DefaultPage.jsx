import React, { useRef } from 'react';

import MainContent from '../main-content/MainContent';

import styles from './DefaultPage.module.scss';

function DefaultPage() {
  const mainContentRef = useRef(null);

  return (
    <div>
      <div className={styles.container}>

        <MainContent mainContentRef={mainContentRef} />
      </div>
    </div>
  );
}

export default DefaultPage;
