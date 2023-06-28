import React, { useEffect, useRef, useState } from 'react';

import axios from 'axios';
import { useParams } from 'react-router-dom';
import Header from '../header/Header';
import MainContent from '../main-content/MainContent';
import Invite from '../invite/Invite';
import AboutUs from '../about-us/AboutUs';
import Questions from '../questions/Questions';
import Form from '../form/Form';
import Program from '../program/Program';
import Map from '../map/Map';

import styles from './MainPage.module.scss';

function MainPage() {
  const inviteRef = useRef(null);
  const aboutUsRef = useRef(null);
  const questionsRef = useRef(null);
  const mainContentRef = useRef(null);
  const formRef = useRef(null);
  const programRef = useRef(null);
  const mapRef = useRef(null);

  const [guests, setGuests] = useState(null);

  const { id } = useParams();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(`http://localhost:5002/${id}`);
        setGuests(response.data);
      } catch (error) {
        console.error('Ошибка при получении данных: ', error);
      }
    };

    fetchData();
  }, []);

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
      <Invite inviteRef={inviteRef} guests={guests} />
      <AboutUs aboutUsRef={aboutUsRef} />
      <Questions questionsRef={questionsRef} />
      <Form formRef={formRef} guests={guests} />
      <Program programRef={programRef} />
      <Map mapRef={mapRef} />
    </div>
  );
}

export default MainPage;
