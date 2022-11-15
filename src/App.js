import React, { Component } from 'react';
import { Routes, Route } from 'react-router-dom';
import LandingPage from './pages/LandingPage';
import LoginPage from './pages/LoginPage';
import MainPage from './pages/MainPage';
import MainLayoutPage from './pages/MainLayoutPage';
import FavoritePage from './pages/FavoritePage';
import SearchPage from './pages/SearchPage';

function App() {
  return (
    <div className="App">
      <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/main" element={<MainLayoutPage />}>
            <Route index element={<MainPage />} />
            <Route path="favorite" element={<FavoritePage />} />
            <Route path="search" element={<SearchPage/>} />
          </Route>
      </Routes>
    </div>
  );
}

export default App;
