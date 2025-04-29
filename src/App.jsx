import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import CustomCursor from './components/CustomCursor';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import AboutPage from './pages/AboutPage';
import EventPage from './pages/EventPage';
import News from './pages/News';
import ContactPage from './pages/ContactPage';
import DonationPage from './pages/DonationPage';
import ScrollToTop from './utils/ScrollToTop';

const App = () => {
  return (
    <Router>
      <div className="App">
        <ScrollToTop />
        <CustomCursor />
        <Navbar />
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/events" element={<EventPage />} />
            <Route path="/news" element={<News />} />
            <Route path="/news/:articleId" element={<News />} />
            <Route path="/contact" element={<ContactPage />} />
            <Route path="/donate" element={<DonationPage />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
};

export default App;
