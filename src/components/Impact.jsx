import React, { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  FaQuoteLeft,
  FaMapMarkerAlt,
  FaChevronRight,
  FaChevronLeft,
} from "react-icons/fa";

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
      image:
        "https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?q=80&w=1000&auto=format&fit=crop",
      name: "John D.",
      role: "Student",
      story:
        "Thanks to the community's support, I was able to complete my education and secure a job in the civil service. The financial assistance came at a crucial time in my life.",
      location: "Lagos",
    },
    {
      image:
        "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?q=80&w=1000&auto=format&fit=crop",
      name: "Sarah M.",
      role: "Entrepreneur",
      story:
        "The monthly contributions helped me start my small business. Now I'm able to support my family better and even employ two people from our community.",
      location: "Abuja",
    },
    {
      image:
        "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=1000&auto=format&fit=crop",
      name: "Michael T.",
      role: "Civil Servant",
      story:
        "When I needed emergency medical assistance, the community came together to support me financially. I wouldn't have been able to afford the treatment without them.",
      location: "Port Harcourt",
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
          <h2 className="text-5xl font-bold mb-6 text-black">
            Success Stories
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
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
                          <img
                            src={successStories[currentStory].image}
                            alt={successStories[currentStory].name}
                            className="w-full h-full object-cover"
                          />
                        </div>
                        <div className="absolute -bottom-5 -right-5 w-24 h-24 rounded-full bg-black flex items-center justify-center text-white p-5">
                          <FaQuoteLeft className="text-4xl" />
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
                currentStory === index ? "bg-black w-8" : "bg-gray-300"
              }`}
            />
          ))}
        </div>

        <div className="mt-12">
          <h3 className="text-2xl font-bold mb-6 text-center text-black">
            More Success Stories
          </h3>
          <div className="grid md:grid-cols-3 gap-6">
            {successStories.map((story, index) => (
              <motion.div
                key={index}
                className={`rounded-xl border border-gray-100 transform transition-all duration-500 cursor-pointer ${
                  currentStory === index
                    ? "scale-105 shadow-xl z-10"
                    : "scale-100 opacity-80"
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
                      <img
                        src={story.image}
                        alt={story.name}
                        className="w-full h-full object-cover"
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
