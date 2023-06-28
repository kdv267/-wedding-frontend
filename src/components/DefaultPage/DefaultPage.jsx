import React, { useRef } from 'react';

import Header from '../header/Header';
import MainContent from '../main-content/MainContent';

import AboutUs from '../about-us/AboutUs';
import styles from './DefaultPage.module.scss';

function DefaultPage() {
  const inviteRef = useRef(null);
  const aboutUsRef = useRef(null);
  const questionsRef = useRef(null);
  const mainContentRef = useRef(null);
  const formRef = useRef(null);
  const programRef = useRef(null);
  const mapRef = useRef(null);

  return (
    <div>
      <div className={styles.container}>
        <Header
          inviteRef={inviteRef}
          aboutUsRef={aboutUsRef}
          questionsRef={questionsRef}
          mainContentRef={mainContentRef}
          formRef={formRef}
          programRef={programRef}
          mapRef={mapRef}
        />
        <MainContent mainContentRef={mainContentRef} />
      </div>
      <AboutUs aboutUsRef={aboutUsRef} />
    </div>
  );
}

export default DefaultPage;
