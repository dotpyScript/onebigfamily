import React from 'react';
import Hero from '../components/Hero';
import About from '../components/About';
import Impact from '../components/Impact';
import Membership from '../components/Membership';
import Events from '../components/Events';
import Contact from '../components/Contact';
import Services from '../components/service';

const Home = () => {
  return (
    <>
      <Hero id="home" />
      <About id="about" />
      <Impact id="impact" />
      <Services />
      <Membership id="membership" />
      <Events id="events" />
      <Contact id="contact" />
    </>
  );
};

export default Home;
