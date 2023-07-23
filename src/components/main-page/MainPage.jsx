/* eslint-disable no-unused-vars */
/* eslint-disable no-console */
import React, { useEffect, useRef, useState } from 'react';

import axios from 'axios';
import { redirect, useParams, useNavigate } from 'react-router-dom';
import { ConfigProvider } from 'antd';
import Header from '../header/Header';
import MainContent from '../main-content/MainContent';
import Invite from '../invite/Invite';
import AboutUs from '../about-us/AboutUs';
import Questions from '../questions/Questions';
import Form from '../form/Form';
import Program from '../program/Program';
import Map from '../map/Map';

import styles from './MainPage.module.scss';
import { SERVER_URL } from '../../constants';

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
  const navigate = useNavigate();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(`${SERVER_URL}/${id}`);
        if (response.data) {
          setGuests(response.data);
        } else {
          navigate('/');
        }
      } catch (error) {
        console.error('Ошибка при получении данных: ', error);
        navigate('/');
      }
    };

    fetchData();
  }, []);

  return (
    <div>
      <ConfigProvider
        theme={{
          token: {
            colorPrimary: '#80b180',
          },
        }}
      >
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
        <AboutUs guests={guests} aboutUsRef={aboutUsRef} />
        <Questions questionsRef={questionsRef} />
        <Form formRef={formRef} guests={guests} />
        <Program programRef={programRef} />
        <Map mapRef={mapRef} />
      </ConfigProvider>
    </div>
  );
}

export default MainPage;
