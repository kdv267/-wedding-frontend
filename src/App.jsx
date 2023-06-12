import React from 'react';
import AboutUs from './components/about-us/AboutUs';
import Header from './components/header/Header';
import Invite from './components/invite/Invite';
import MainContent from './components/main-content/MainContent';
import Questions from './components/questions/Questions';

function App() {
  return (
    <div>
      <Header />
      <MainContent />
      <Invite />
      <AboutUs />
      <Questions />
    </div>
  );
}

export default App;
