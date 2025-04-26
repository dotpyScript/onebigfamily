import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { FaBars, FaTimes } from 'react-icons/fa';
import OptimizedImage from './OptimizedImage';
import { useNavigate } from 'react-router-dom';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const navigate = useNavigate();

  // Handle scroll effect and active section
  useEffect(() => {
    const handleScroll = () => {
      // Update navbar background
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }

      // Update active section
      const sections = navLinks.map((link) => link.href.substring(1));
      const currentSection = sections.find((section) => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          return rect.top <= 100 && rect.bottom >= 100;
        }
        return false;
      });

      if (currentSection) {
        setActiveSection(currentSection);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '/home' },
    { name: 'About', href: '/about' },
    { name: 'Events', href: '/events' },
    { name: 'Contact', href: '/contact' },
  ];

  const handleNavClick = (e, href) => {
    e.preventDefault();

    if (href.startsWith('#')) {
      const targetId = href.substring(1);
      const element = document.getElementById(targetId);

      if (element) {
        // Get dimensions
        const navHeight = 80; // Height of the navbar
        const elementPosition = element.getBoundingClientRect().top;
        const offsetPosition = elementPosition + window.scrollY - navHeight;

        // Close mobile menu first
        setIsOpen(false);

        // Small delay to allow mobile menu to close
        setTimeout(() => {
          window.scrollTo({
            top: offsetPosition,
            behavior: 'smooth',
          });
          setActiveSection(targetId);
        }, 100);
      }
    } else if (href.startsWith('/')) {
      // Handle absolute paths
      navigate(href);
      setIsOpen(false);
      setActiveSection(''); // Clear active section when navigating to a new page
    }
  };

  const handleDonateClick = (e) => {
    e.preventDefault();
    navigate('/donate');
    setIsOpen(false);
  };

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
      className={`fixed w-full z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-black/95 backdrop-blur-sm shadow-lg py-2'
          : 'bg-transparent py-4'
      }`}
    >
      <div className="container mx-auto px-4 sm:px-6">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="flex-shrink-0"
          >
            <a
              href="/home"
              onClick={(e) => handleNavClick(e, '#home')}
              className="block hover:opacity-80 transition-opacity"
            >
              <OptimizedImage
                src="/logo.png"
                alt="One Big Happy Family Logo"
                className="h-12 sm:h-14 w-auto"
                fallbackSrc="/images/logo-fallback.png"
                makeWhite={true}
              />
            </a>
          </motion.div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-1 lg:space-x-2">
            {navLinks.map((link) => (
              <motion.a
                key={link.name}
                href={link.href}
                onClick={(e) => handleNavClick(e, link.href)}
                className={`px-3 lg:px-4 py-2 text-white text-base lg:text-lg font-medium tracking-wider hover:text-gray-300 relative group transition-all duration-300 ${
                  activeSection === link.href.substring(1)
                    ? 'text-white'
                    : 'text-white/80'
                }`}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                {link.name}
                <span
                  className={`absolute bottom-0 left-0 h-0.5 bg-white transition-all duration-300 ${
                    activeSection === link.href.substring(1)
                      ? 'w-full'
                      : 'w-0 group-hover:w-full'
                  }`}
                />
              </motion.a>
            ))}
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={handleDonateClick}
              className="ml-4 px-6 py-2 bg-white text-black text-base lg:text-lg font-semibold tracking-wider rounded-full hover:bg-gray-200 transition-all duration-300 shadow-lg hover:shadow-xl"
            >
              Donate
            </motion.button>
          </div>

          {/* Mobile Menu Button */}
          <motion.button
            whileTap={{ scale: 0.95 }}
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2 rounded-full hover:bg-white/10 focus:outline-none transition-colors"
            aria-label="Toggle menu"
          >
            {isOpen ? (
              <FaTimes className="h-6 w-6 text-white" />
            ) : (
              <FaBars className="h-6 w-6 text-white" />
            )}
          </motion.button>
        </div>

        {/* Mobile Menu */}
        <motion.div
          initial={false}
          animate={isOpen ? 'open' : 'closed'}
          variants={{
            open: {
              opacity: 1,
              height: 'auto',
              marginTop: '16px',
              transition: {
                type: 'spring',
                stiffness: 300,
                damping: 30,
              },
            },
            closed: {
              opacity: 0,
              height: 0,
              marginTop: '0px',
              transition: {
                type: 'spring',
                stiffness: 300,
                damping: 30,
              },
            },
          }}
          className="md:hidden overflow-hidden"
        >
          <motion.div
            className="bg-black/95 backdrop-blur-sm rounded-2xl shadow-xl border border-white/10 mt-2 overflow-hidden"
            variants={{
              open: { y: 0, opacity: 1 },
              closed: { y: -20, opacity: 0 },
            }}
          >
            {navLinks.map((link) => (
              <motion.a
                key={link.name}
                href={link.href}
                onClick={(e) => handleNavClick(e, link.href)}
                className={`block px-6 py-4 text-white text-lg font-medium hover:bg-white/10 transition-all duration-300 border-b border-white/10 last:border-b-0 ${
                  activeSection === link.href.substring(1) ? 'bg-white/5' : ''
                }`}
                whileTap={{ scale: 0.98 }}
              >
                {link.name}
              </motion.a>
            ))}
            <div className="px-4 py-4">
              <motion.button
                whileTap={{ scale: 0.98 }}
                onClick={handleDonateClick}
                className="w-full py-3 bg-white text-black text-lg font-semibold tracking-wider rounded-full hover:bg-gray-200 transition-all duration-300 shadow-lg"
              >
                Donate Now
              </motion.button>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </motion.nav>
  );
};

export default Navbar;
