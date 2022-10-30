import React, { Component } from 'react';
import { Routes, Route } from 'react-router-dom';
import LandingPage from './pages/LandingPage';
import LoginPage from './pages/LoginPage';
import MainPage from './pages/MainPage';

function App() {
  return (
    <div className="App">
      <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/main" element={<MainPage />} />
      </Routes>
    </div>
  );
}

export default App;
