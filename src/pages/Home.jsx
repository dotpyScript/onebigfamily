import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import Hero from '../components/Hero';
import About from '../components/About';
import Impact from '../components/Impact';
import Membership from '../components/Membership';
import Events from '../components/Events';
import Contact from '../components/Contact';

const Home = () => {
  const location = useLocation();

  // Handle scroll to section when navigating from other pages
  useEffect(() => {
    // Check if there's a hash in the URL
    if (location.hash) {
      // Remove the # from the hash
      const id = location.hash.substring(1);
      const element = document.getElementById(id);
      if (element) {
        // Add a small delay to ensure all components are rendered
        setTimeout(() => {
          const navHeight = 80; // Height of the navbar
          const elementPosition = element.getBoundingClientRect().top;
          const offsetPosition = elementPosition + window.scrollY - navHeight;
          window.scrollTo({
            top: offsetPosition,
            behavior: 'smooth',
          });
        }, 100);
      }
    } else {
      // If no hash, scroll to top
      window.scrollTo(0, 0);
    }
  }, [location]);

  return (
    <main className="w-full">
      <Hero id="home" />
      <About id="about" />
      <Impact id="impact" />
      <Membership id="membership" />
      <Events id="events" />
      <Contact id="contact" />
    </main>
  );
};

export default Home;
