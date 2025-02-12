import './App.css';
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import NavBar from './components/Navbar';
import Footer from './components/Footer'
import HomePage from './pages/HomePage';
import PropertyPage from './pages/PropertyPage';

const App = () => {
  return (
    <Router>
      <NavBar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/properties/:id" element={<PropertyPage />} />
      </Routes>
      <Footer />
    </Router>
  );
};

export default App;
