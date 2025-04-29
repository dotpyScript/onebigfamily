import React from 'react';
import { motion } from 'framer-motion';
import { Link, useNavigate } from 'react-router-dom';
import { FaHandHoldingHeart, FaUsers } from 'react-icons/fa';

const CallToAction = () => {
  const navigate = useNavigate();

  const handleDonateClick = (e) => {
    e.preventDefault();
    navigate('/donate');
    window.scrollTo(0, 0); // Scroll to top when navigating to donate page
  };

  const handleContactClick = (e) => {
    e.preventDefault();
    navigate('/contact');
    window.scrollTo(0, 0); // Scroll to top when navigating to contact page
  };

  return (
    <section className="relative py-20 overflow-hidden">
      {/* Background with overlay */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: 'url("/images/hero5.jpg")',
        }}
      />
      <div className="absolute inset-0 bg-black/70" />

      {/* Content */}
      <div className="relative container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left Column - Main CTA */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-white"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Join Us in Making a Difference
            </h2>
            <p className="text-lg text-white/90 mb-8">
              Your support can help us create lasting change in our community.
              Together, we can build a brighter future for all families.
            </p>
            <div className="flex flex-wrap gap-4">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={handleDonateClick}
                className="inline-flex items-center px-6 py-2 bg-white text-black text-base lg:text-lg font-semibold tracking-wider rounded-full hover:bg-gray-200 transition-all duration-300 shadow-lg hover:shadow-xl"
              >
                <FaHandHoldingHeart className="mr-2" />
                Donate
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={handleContactClick}
                className="inline-flex items-center px-6 py-2 border-2 border-white text-white text-base lg:text-lg font-semibold tracking-wider rounded-full hover:bg-white hover:text-black transition-all duration-300 shadow-lg hover:shadow-xl relative overflow-hidden group"
              >
                <span className="absolute inset-0 bg-white transform origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-300 ease-out" />
                <FaUsers className="mr-2 relative z-10 group-hover:text-black transition-colors duration-300" />
                <span className="relative z-10 group-hover:text-black transition-colors duration-300">
                  Get Involved
                </span>
              </motion.button>
            </div>
          </motion.div>

          {/* Right Column - Stats */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="grid grid-cols-2 gap-6"
          >
            {[
              {
                number: '500+',
                label: 'Families Supported',
              },
              {
                number: '10+',
                label: 'Community Events',
              },
              {
                number: '100+',
                label: 'Volunteers',
              },
              {
                number: '₦1.1M+',
                label: 'Funds Raised',
              },
            ].map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white/10 backdrop-blur-sm rounded-xl p-6 text-center"
              >
                <h3 className="text-3xl md:text-4xl font-bold text-white mb-2">
                  {stat.number}
                </h3>
                <p className="text-white/80">{stat.label}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default CallToAction;
