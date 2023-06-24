import React from 'react';
import { Route, Routes } from 'react-router-dom';
import MainPage from './components/main-page/MainPage';
import DefaultPage from './components/DefaultPage/DefaultPage';

function App() {
  return (
    <Routes>
      <Route path="/" element={<DefaultPage />} />
      <Route path="/:id" element={<MainPage />} />
      {/* Другие маршруты */}
    </Routes>
  );
}

export default App;
