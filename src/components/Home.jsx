import React from 'react';
import Hero from './Hero';
import About from './About';
import Impact from './Impact';
import Membership from './Membership';
import Events from './Events';
import Contact from './Contact';
import Footer from './Footer';

const Home = () => {
  return (
    <main>
      <Hero id="home" />
      <About id="about" />
      <Impact id="impact" />
      <Membership id="membership" />
      <Events id="events" />
      <Contact id="contact" />
      <Footer />
    </main>
  );
};

export default Home;
