import React from 'react';
import { motion } from 'framer-motion';
import {
  FaCheckCircle,
  FaUserPlus,
  FaHandshake,
  FaUsersCog,
  FaCrown,
  FaArrowRight,
} from 'react-icons/fa';

const Membership = () => {
  const benefits = [
    {
      icon: <FaHandshake />,
      title: 'Financial Support',
      description: 'Access to community funds for life events and emergencies',
    },
    {
      icon: <FaUsersCog />,
      title: 'Networking',
      description: 'Connect with professionals across different sectors',
    },
    {
      icon: <FaUserPlus />,
      title: 'Career Growth',
      description: 'Job opportunities and professional development',
    },
  ];

  return (
    <section
      className="py-20 bg-white relative overflow-hidden"
      id="membership"
    >
      {/* Background Elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-0 w-1/3 h-1/3 bg-gray-50 rounded-full blur-3xl transform -translate-x-1/2 -translate-y-1/2" />
        <div className="absolute bottom-0 right-0 w-1/2 h-1/2 bg-gray-50 rounded-full blur-3xl transform translate-x-1/4 translate-y-1/4" />
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
            Membership & Benefits
          </h2>
          <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Be part of a thriving community that supports and uplifts each
            other. Your journey to success starts here.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-3 gap-8 items-stretch mb-16">
          {/* Featured Membership Card */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="lg:col-span-1"
          >
            <div className="relative bg-black text-white rounded-3xl p-6 sm:p-8 flex flex-col h-full">
              <div className="absolute top-0 right-0 transform translate-x-2 -translate-y-2">
                <FaCrown className="text-3xl sm:text-4xl text-yellow-400" />
              </div>
              <div className="flex-1">
                <h3 className="text-xl sm:text-2xl font-bold mb-4 text-white">
                  Community Membership
                </h3>
                <div className="mb-8">
                  <div className="flex items-baseline gap-2 mb-2">
                    <span className="text-3xl sm:text-4xl font-bold">
                      ₦1,000
                    </span>
                    <span className="text-gray-400">/month</span>
                  </div>
                  <p className="text-gray-400 text-sm sm:text-base">
                    Invest in your future and community
                  </p>
                </div>
                <div className="space-y-8 mb-3">
                  <div className="flex items-center gap-3">
                    <FaCheckCircle className="text-white text-base sm:text-lg flex-shrink-0" />
                    <span className="text-sm sm:text-base">
                      Access to community funds
                    </span>
                  </div>
                  <div className="flex items-center gap-3">
                    <FaCheckCircle className="text-white text-base sm:text-lg flex-shrink-0" />
                    <span className="text-sm sm:text-base">
                      Emergency financial support
                    </span>
                  </div>
                  <div className="flex items-center gap-3">
                    <FaCheckCircle className="text-white text-base sm:text-lg flex-shrink-0" />
                    <span className="text-sm sm:text-base">
                      Professional networking
                    </span>
                  </div>
                  <div className="flex items-center gap-3">
                    <FaCheckCircle className="text-white text-base sm:text-lg flex-shrink-0" />
                    <span className="text-sm sm:text-base">
                      Career development opportunities
                    </span>
                  </div>
                </div>
              </div>
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                onClick={() =>
                  window.open(
                    'https://chat.whatsapp.com/C06Vg8cIrX33baQJbEBVOO',
                    '_blank',
                    'noopener,noreferrer'
                  )
                }
                className="w-full bg-white text-black rounded-full py-3 sm:py-4 px-6 font-semibold flex items-center justify-center gap-2 group mt-auto"
              >
                Join Now
                <FaArrowRight className="group-hover:translate-x-1 transition-transform" />
              </motion.button>
            </div>
          </motion.div>

          {/* Benefits Grid */}
          <div className="lg:col-span-2 grid md:grid-cols-2 gap-6">
            {benefits.map((benefit, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                viewport={{ once: true }}
                className="relative group"
              >
                <div className="flex flex-row lg:flex-col items-start gap-4 md:gap-6 bg-white rounded-2xl p-4 md:p-6 border border-gray-200 hover:border-gray-300 transition-all duration-300 h-full">
                  <div className="lg:flex lg:items-center lg:w-full lg:gap-4">
                    <div className="bg-gray-50 p-3 md:p-4 rounded-xl flex-shrink-0">
                      <span className="text-xl md:text-2xl text-gray-700">
                        {benefit.icon}
                      </span>
                    </div>
                    <h3 className="hidden lg:block text-lg md:text-xl font-semibold text-gray-800">
                      {benefit.title}
                    </h3>
                  </div>
                  <div className="flex-1 lg:w-full">
                    <h3 className="text-lg md:text-xl font-semibold mb-2 text-gray-800 lg:hidden">
                      {benefit.title}
                    </h3>
                    <p className="text-sm md:text-base text-gray-600 leading-relaxed lg:mt-3">
                      {benefit.description}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}

            {/* Payment Methods Card */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              viewport={{ once: true }}
              className="bg-gray-50 rounded-2xl p-6 md:col-span-2"
            >
              <h3 className="text-lg sm:text-xl font-bold mb-4 text-black">
                Payment Methods
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
                <div className="text-center p-4 bg-white rounded-xl">
                  <p className="font-semibold">Bank Transfer</p>
                </div>
                <div className="text-center p-4 bg-white rounded-xl">
                  <p className="font-semibold">Mobile Money</p>
                </div>
                <div className="text-center p-4 bg-white rounded-xl">
                  <p className="font-semibold">Online Payment</p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Join over 5,000+ members who are already part of our thriving
            community. Together, we build stronger futures.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default Membership;
