import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  FaQuoteLeft,
  FaMapMarkerAlt,
  FaChevronRight,
  FaChevronLeft,
  FaUser,
} from 'react-icons/fa';
import OptimizedImage from './OptimizedImage';

const Impact = () => {
  const [currentStory, setCurrentStory] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentStory((prev) => (prev + 1) % successStories.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  const successStories = [
    {
      image: '/impact_img/impact1.jpg',
      name: 'Bashir Majiyebo Umar',
      role: 'President',
      story:
        "We're community's support. May Allah bless each and every one of you for your kindness and well wishes. Together, we'll achieve remarkable success and outstanding results.",
      location: 'Minna',
    },
    {
      image: '/impact_img/impact2.jpg',
      name: 'Attahiru Saminu.',
      role: 'Secretary',
      story:
        'We are deeply grateful for the monthly contributions that have empowered us to extend a helping hand to those in need throughout the holy month of Ramadan, bringing hope, relief and joy to countless individuals and families.',
      location: 'Katsina',
    },
    {
      image: '/impact_img/impact3.jpg',
      name: 'Abdulrahman Muhammad',
      role: 'Fin. Secretary',
      story:
        'With the help of our unity, we have severally come together to support ourselves one way or the other in conjugal bliss. It is indeed a thing to be proud of to all of us.',
      location: 'Kebbi',
    },
  ];

  const nextStory = () => {
    setCurrentStory((prev) => (prev + 1) % successStories.length);
  };

  const prevStory = () => {
    setCurrentStory(
      (prev) => (prev - 1 + successStories.length) % successStories.length
    );
  };

  return (
    <section className="py-20 relative overflow-hidden bg-white" id="impact">
      {/* Background elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        <div className="absolute -top-64 -left-64 w-[500px] h-[500px] rounded-full bg-gray-50 opacity-30" />
        <div className="absolute -bottom-32 -right-32 w-[300px] h-[300px] rounded-full bg-gray-50 opacity-30" />
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] rounded-full bg-gradient-to-br from-gray-50 to-transparent opacity-20" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 sm:mb-6 text-black">
            Success Stories
          </h2>
          <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Discover how our community has transformed lives through unity,
            support, and genuine care. These are the stories of real people
            whose lives have been changed.
          </p>
        </motion.div>

        <div className="relative">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentStory}
              initial={{ opacity: 0, x: 100 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -100 }}
              transition={{ duration: 0.5 }}
            >
              <div className="bg-white rounded-3xl overflow-hidden border border-gray-100">
                <div className="h-2 bg-black" />
                <div className="p-8 md:p-12">
                  <div className="grid md:grid-cols-5 gap-8 items-center">
                    <div className="md:col-span-2">
                      <div className="relative">
                        <div className="aspect-square rounded-2xl overflow-hidden">
                          <OptimizedImage
                            src={successStories[currentStory].image}
                            alt={successStories[currentStory].name}
                            className="w-full h-full"
                            fallbackSrc="/images/profile-fallback.jpg"
                          />
                        </div>
                        <div className="absolute -bottom-3 -right-3 sm:-bottom-4 sm:-right-4 md:-bottom-5 md:-right-5 w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24 rounded-full bg-black flex items-center justify-center text-white p-3 sm:p-4 md:p-5 transform hover:scale-105 transition-transform">
                          <FaQuoteLeft className="text-2xl sm:text-3xl md:text-4xl" />
                        </div>
                      </div>
                    </div>
                    <div className="md:col-span-3">
                      <div className="flex items-center gap-2 mb-2">
                        <FaMapMarkerAlt className="text-gray-600" />
                        <span className="text-gray-500">
                          {successStories[currentStory].location}
                        </span>
                      </div>
                      <h3 className="text-3xl font-bold mb-1 text-black">
                        {successStories[currentStory].name}
                      </h3>
                      <p className="text-xl text-gray-600 mb-6">
                        {successStories[currentStory].role}
                      </p>
                      <p className="text-gray-600 text-lg leading-relaxed mb-6">
                        "{successStories[currentStory].story}"
                      </p>
                      <motion.button
                        className="px-6 py-3 bg-black text-white rounded-full hover:bg-gray-800 transition-all"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.98 }}
                        onClick={() =>
                          window.open(
                            'https://chat.whatsapp.com/C06Vg8cIrX33baQJbEBVOO',
                            '_blank',
                            'noopener,noreferrer'
                          )
                        }
                      >
                        Join Our Community
                      </motion.button>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Story Navigation */}
          <div className="flex justify-between absolute top-1/2 left-0 right-0 -translate-y-1/2 pointer-events-none px-4">
            <motion.button
              onClick={prevStory}
              className="w-12 h-12 bg-white rounded-full flex items-center justify-center text-black hover:bg-gray-100 transition-all pointer-events-auto border border-gray-200"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              <FaChevronLeft />
            </motion.button>
            <motion.button
              onClick={nextStory}
              className="w-12 h-12 bg-white rounded-full flex items-center justify-center text-black hover:bg-gray-100 transition-all pointer-events-auto border border-gray-200"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              <FaChevronRight />
            </motion.button>
          </div>
        </div>

        {/* Story Indicators */}
        <div className="flex justify-center space-x-2 mt-8">
          {successStories.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentStory(index)}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                currentStory === index ? 'bg-black w-8' : 'bg-gray-300'
              }`}
            />
          ))}
        </div>

        <div className="mt-12">
          <h3 className="text-xl sm:text-2xl font-bold mb-4 sm:mb-6 text-center text-black">
            More Success Stories
          </h3>
          <div className="grid md:grid-cols-3 gap-6">
            {successStories.map((story, index) => (
              <motion.div
                key={index}
                className={`rounded-xl border border-gray-100 transform transition-all duration-500 cursor-pointer ${
                  currentStory === index
                    ? 'scale-105 shadow-xl z-10'
                    : 'scale-100 opacity-80'
                }`}
                onClick={() => setCurrentStory(index)}
                animate={{
                  x:
                    currentStory === index
                      ? 0
                      : currentStory > index
                      ? -20
                      : 20,
                  scale: currentStory === index ? 1.05 : 1,
                  transition: { duration: 0.5 },
                }}
              >
                <div className="bg-white rounded-lg p-4 h-full">
                  <div className="flex items-center gap-3 mb-3">
                    <div className="w-12 h-12 rounded-full overflow-hidden">
                      <OptimizedImage
                        src={story.image}
                        alt={story.name}
                        className="w-full h-full"
                        fallbackSrc="/images/profile-fallback.jpg"
                      />
                    </div>
                    <div>
                      <h4 className="font-semibold text-black">{story.name}</h4>
                      <p className="text-gray-600 text-sm">{story.role}</p>
                    </div>
                  </div>
                  <p className="text-gray-600 text-sm line-clamp-3">
                    "{story.story}"
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Impact;
