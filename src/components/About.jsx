import React, { useRef, memo } from 'react';
import { motion, useInView } from 'framer-motion';
import {
  FaQuoteLeft,
  FaHeart,
  FaHandHoldingHeart,
  FaUsers,
  FaHandshake,
} from 'react-icons/fa';
import CountUp from 'react-countup';
import BristleBrush from './BristleBrush';

const StatItem = memo(
  ({ number, prefix = '', suffix = '', label, showDivider, decimals = 0 }) => (
    <div className="relative text-center">
      <h4 className="text-2xl font-bold mb-1 text-gray-800">
        <CountUp
          end={number}
          prefix={prefix}
          suffix={suffix}
          decimals={decimals}
          duration={2}
          enableScrollSpy
          scrollSpyOnce
        />
      </h4>
      <p className="text-gray-600 text-xs font-medium">{label}</p>
      {showDivider && (
        <div className="hidden md:block absolute right-0 top-1/2 w-px h-12 bg-gradient-to-b from-gray-200 via-gray-300 to-gray-200 transform -translate-y-1/2" />
      )}
    </div>
  )
);

const FeatureCard = memo(({ icon: Icon, title, description, delay }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.8, delay }}
    viewport={{ once: true }}
    className="relative group"
  >
    <div className="flex flex-row lg:flex-col items-start gap-4 md:gap-6 bg-white rounded-2xl p-4 md:p-6 border border-gray-200 hover:border-gray-300 transition-all duration-300 h-full">
      <div className="lg:flex lg:items-center lg:w-full lg:gap-4">
        <div className="bg-gray-50 p-3 md:p-4 rounded-xl flex-shrink-0">
          <Icon className="text-xl md:text-2xl text-gray-700" />
        </div>
        <h3 className="hidden lg:block text-lg md:text-xl font-semibold text-gray-800">
          {title}
        </h3>
      </div>
      <div className="flex-1 lg:w-full">
        <h3 className="text-lg md:text-xl font-semibold mb-2 text-gray-800 lg:hidden">
          {title}
        </h3>
        <p className="text-sm md:text-base text-gray-600 leading-relaxed lg:mt-3">
          {description}
        </p>
      </div>
    </div>
  </motion.div>
));

const About = () => {
  const statsRef = useRef(null);
  const isInView = useInView(statsRef, { once: true });

  const stats = [
    {
      number: 12450,
      suffix: '+',
      label: 'Active Members',
    },
    {
      number: 12.4,
      prefix: '₦',
      suffix: 'M+',
      label: 'Monthly Pool',
      decimals: 1,
    },
    {
      number: 5423,
      label: 'Lives Impacted',
    },
  ];

  const features = [
    {
      icon: FaUsers,
      title: 'United Community',
      description:
        'A diverse family united by shared experiences, bringing together soldiers, students, and civil servants.',
      delay: 0.2,
    },
    {
      icon: FaHandshake,
      title: 'Monthly Support',
      description:
        '₦1,000 monthly contributions creating a powerful support system for those in need.',
      delay: 0.4,
    },
    {
      icon: FaHeart,
      title: 'Lasting Impact',
      description:
        'Supporting crucial life moments through education, emergencies, and community development.',
      delay: 0.6,
    },
  ];

  return (
    <section
      className="relative py-24 overflow-hidden bg-white font-poppins"
      id="about"
    >
      <BristleBrush className="absolute top-10 right-10" />

      <div className="container mx-auto px-4">
        {/* First Row - Two Columns */}
        <div className="flex flex-col lg:flex-row items-stretch gap-12 mb-24">
          {/* Left side - Image */}
          <div className="lg:w-1/2 flex">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="w-full"
            >
              <div className="relative rounded-3xl overflow-hidden shadow-lg">
                <img
                  src="/about_img/about2.jpg"
                  alt="Community Support"
                  className="w-full h-[600px] object-cover"
                  onError={(e) => {
                    e.target.src = '/about_img/about1.jpg';
                  }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3, duration: 0.8 }}
                  viewport={{ once: true }}
                  className="absolute bottom-0 left-0 right-0 p-8 text-white"
                >
                  <FaQuoteLeft className="text-3xl text-orange-400 mb-4" />
                  <p className="text-xl font-light italic mb-4">
                    "Together, we're not just building a community; we're
                    creating a legacy of support and compassion."
                  </p>
                  <p className="font-semibold">- Our Community Vision</p>
                </motion.div>
              </div>
            </motion.div>
          </div>

          {/* Right side - Content */}
          <div className="lg:w-1/2 flex flex-col justify-between">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="mb-6"
            >
              <h2 className="text-3xl font-bold mb-3 text-transparent bg-clip-text bg-gradient-to-r from-gray-800 to-black">
                Our Story
              </h2>
              <p className="text-gray-600 text-base mb-6">
                Born from the heart of military, our community has grown into a
                powerful force for positive change, uniting diverse individuals
                under a common purpose.
              </p>
            </motion.div>

            {/* Content Cards */}
            <div className="space-y-4 mb-6">
              {[
                {
                  icon: FaHeart,
                  title: 'Our Mission',
                  description:
                    'To create a sustainable support system that empowers members through collective giving and mutual aid.',
                  delay: 0.2,
                },
                {
                  icon: FaHandHoldingHeart,
                  title: 'Our Impact',
                  description:
                    "From education to emergencies, we've touched thousands of lives through our monthly contribution system.",
                  delay: 0.4,
                },
              ].map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: 30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: item.delay, duration: 0.8 }}
                  viewport={{ once: true }}
                  className="group relative p-6 rounded-2xl border border-gray-200 hover:border-gray-300 transition-all duration-300 overflow-hidden"
                >
                  {/* Gradient background that shows on hover */}
                  <div className="absolute inset-0 bg-gradient-to-r from-gray-50 to-white opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                  {/* Content */}
                  <div className="relative flex items-start gap-4">
                    <div className="bg-gray-100 p-3 rounded-xl">
                      <item.icon className="text-2xl text-gray-700" />
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold text-gray-800 mb-2">
                        {item.title}
                      </h3>
                      <p className="text-gray-600 leading-relaxed">
                        {item.description}
                      </p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Impact Statistics */}
            <div className="grid grid-cols-3 gap-8 mb-8">
              {stats.map((stat, index) => (
                <StatItem key={index} {...stat} showDivider={index < 2} />
              ))}
            </div>

            {/* Call to Action */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.8 }}
              viewport={{ once: true }}
              className="mb-6"
            >
              <motion.a
                href="#join"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.98 }}
                transition={{ type: 'spring', stiffness: 400, damping: 25 }}
                className="inline-block bg-black text-white px-8 py-3 rounded-full font-medium text-base"
              >
                Join Our Community
              </motion.a>
            </motion.div>
          </div>
        </div>

        {/* Second Row - Feature Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 lg:gap-8">
          {features.map((feature, index) => (
            <FeatureCard key={index} {...feature} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default memo(About);
