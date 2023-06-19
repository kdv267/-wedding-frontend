import React, { useRef } from 'react';
import AboutUs from './components/about-us/AboutUs';
import Form from './components/form/Form';
import Header from './components/header/Header';
import Invite from './components/invite/Invite';
import MainContent from './components/main-content/MainContent';
import Map from './components/map/Map';
import Program from './components/program/Program';
import Questions from './components/questions/Questions';

function App() {
  const inviteRef = useRef(null);
  const aboutUsRef = useRef(null);
  const questionsRef = useRef(null);
  const mainContentRef = useRef(null);
  const formRef = useRef(null);
  const programRef = useRef(null);
  const mapRef = useRef(null);
  return (
    <div>
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
      <Invite inviteRef={inviteRef} />
      <AboutUs aboutUsRef={aboutUsRef} />
      <Questions questionsRef={questionsRef} />
      <Form formRef={formRef} />
      <Program programRef={programRef} />
      <Map mapRef={mapRef} />
    </div>
  );
}

export default App;
