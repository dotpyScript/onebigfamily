import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import CustomCursor from './components/CustomCursor';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import DonationPage from './pages/DonationPage';
import ContactPage from './pages/ContactPage';
import EventPage from './pages/EventPage';
import AboutPage from './pages/AboutPage';

const App = () => {
  return (
    <Router>
      <div className="App">
        <CustomCursor />
        <Navbar />
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/donate" element={<DonationPage />} />
            <Route path="/contact" element={<ContactPage />} />
            <Route path="/events" element={<EventPage />} />
            <Route path="/about" element={<AboutPage />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
};

export default App;
