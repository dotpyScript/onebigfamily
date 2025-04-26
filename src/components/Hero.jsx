import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  FaChevronRight,
  FaUsers,
  FaHandHoldingHeart,
  FaRegCalendarAlt,
} from 'react-icons/fa';

const Hero = () => {
  const [count, setCount] = useState(0);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [currentAdjectiveIndex, setCurrentAdjectiveIndex] = useState(0);
  const [displayText, setDisplayText] = useState('');
  const [isTyping, setIsTyping] = useState(true);
  const targetCount = 5423; // Number of people helped
  const incrementSpeed = 35; // Lower is faster
  const communityAdjectives = [
    ' Stronger',
    ' Smarter',
    ' Greener',
    ' Safer',
    ' Brighter',
    ' Connected',
  ];

  const backgroundImages = [
    '/images/hero1.jpg',
    '/images/hero3.jpg',
    '/images/hero2.jpg',
    '/images/hero4.jpg',
  ];

  const typeText = async (text) => {
    setIsTyping(true);
    setDisplayText('');
    for (let i = 0; i < text.length; i++) {
      await new Promise((resolve) => setTimeout(resolve, 100)); // Adjust typing speed here
      setDisplayText((prev) => prev + text[i]);
    }
    setIsTyping(false);
  };

  useEffect(() => {
    typeText(communityAdjectives[currentAdjectiveIndex]);
  }, [currentAdjectiveIndex]);

  useEffect(() => {
    if (!isTyping) {
      const timeout = setTimeout(() => {
        setCurrentAdjectiveIndex(
          (prev) => (prev + 1) % communityAdjectives.length
        );
      }, 2000); // Wait time after typing is complete
      return () => clearTimeout(timeout);
    }
  }, [isTyping, communityAdjectives.length]);

  useEffect(() => {
    if (count < targetCount) {
      const timer = setTimeout(() => {
        setCount((prev) =>
          Math.min(
            prev + Math.ceil(targetCount / (1000 / incrementSpeed)),
            targetCount
          )
        );
      }, incrementSpeed);
      return () => clearTimeout(timer);
    }
  }, [count]);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex(
        (prevIndex) => (prevIndex + 1) % backgroundImages.length
      );
    }, 5000); // Change image every 5 seconds
    return () => clearInterval(interval);
  }, [backgroundImages.length]);

  return (
    <section
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-cover bg-center transition-all duration-[3000ms]"
      id="home"
      style={{
        backgroundImage: `url(${backgroundImages[currentImageIndex]})`,
        fontFamily: "'Poppins', sans-serif",
        transition: 'background-image 3s ease-in-out',
      }}
    >
      {/* Dark overlay with gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/70 to-black/80"></div>

      {/* Content */}
      <div className="container mx-auto px-4 sm:px-6 py-8 relative z-10 flex items-center min-h-screen">
        <div className="w-full">
          {/* Centered content */}
          <div className="w-full max-w-3xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center space-y-6"
            >
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.2 }}
                className="inline-flex items-center bg-white/5 backdrop-blur-sm px-4 py-2 rounded-full border border-white/10 shadow-lg"
              >
                <FaHandHoldingHeart className="text-white mr-2" />
                <span className="text-white/90 font-medium">
                  <span className="text-white">₦1,000</span> Monthly Community
                  Support
                </span>
              </motion.div>

              <motion.h1
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.3 }}
                className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold text-white leading-tight"
              >
                <div className="flex flex-col items-center justify-center gap-2 sm:gap-3">
                  {/* First group - Together we build + Stronger */}
                  <div className="flex flex-col sm:flex-row items-center gap-1 sm:gap-2">
                    <span className="text-white whitespace-nowrap">
                      Together we build
                    </span>
                    <motion.span
                      key={currentAdjectiveIndex}
                      className="text-white font-extrabold whitespace-nowrap flex items-center"
                      style={{
                        fontFamily: "'Poppins', sans-serif",
                      }}
                    >
                      {displayText}
                      <motion.span
                        initial={{ opacity: 1 }}
                        animate={{ opacity: 0 }}
                        transition={{
                          repeat: Infinity,
                          duration: 0.7,
                          repeatType: 'reverse',
                        }}
                        className="inline-block w-[3px] h-[1em] bg-white ml-1 align-middle"
                      />
                    </motion.span>
                  </div>
                  {/* Second group - communities */}
                  <span className="text-white block">communities</span>
                </div>
              </motion.h1>

              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.4 }}
                className="text-lg sm:text-xl md:text-2xl text-white/80 font-light max-w-2xl mx-auto"
              >
                Join thousands making a difference with just ₦1,000 monthly.
                We've already helped{' '}
                <span className="font-bold text-white">
                  {count.toLocaleString()}
                </span>{' '}
                people in need.
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 }}
                className="flex flex-col sm:flex-row gap-4 justify-center pt-2"
              >
                <a
                  href="https://chat.whatsapp.com/C06Vg8cIrX33baQJbEBVOO"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group px-6 py-3 bg-white text-black font-semibold rounded-full hover:bg-gray-200 transition-all duration-300 shadow-lg flex items-center justify-center gap-3 text-lg"
                >
                  Join Our Community
                  <FaChevronRight className="group-hover:translate-x-1 transition-transform duration-300" />
                </a>
                <a
                  href="#testimonials"
                  className="px-6 py-3 bg-black/20 backdrop-blur-sm border border-white/10 text-white font-semibold rounded-full hover:bg-black/40 transition-all duration-300 flex items-center justify-center gap-2 text-lg"
                >
                  <FaUsers className="text-xl" />
                  See Success Stories
                </a>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
