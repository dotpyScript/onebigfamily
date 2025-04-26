import React from 'react';
import { motion } from 'framer-motion';
import { FaHome, FaChevronRight } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const AboutPage = () => {
  return (
    <main className="w-full">
      {/* Hero Section */}
      <section className="relative w-full h-screen">
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: 'url("/images/hero3.jpg")',
          }}
        />
        <div className="absolute inset-0 bg-black bg-opacity-50" />

        {/* Hero Content */}
        <div className="relative h-full flex flex-col justify-center items-center text-center px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-4xl mx-auto"
          >
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
              About One Big Family
            </h1>
            <p className="text-xl text-white/90 max-w-2xl mx-auto mb-8">
              Building stronger communities through unity, support, and shared
              values
            </p>
          </motion.div>
        </div>

        {/* Breadcrumbs */}
        <div className="absolute bottom-0 left-0 w-full bg-black/30 backdrop-blur-sm">
          <div className="container mx-auto px-4 py-4">
            <div className="flex items-center text-white/90 text-sm">
              <Link
                to="/"
                className="hover:text-white flex items-center transition-colors"
              >
                <FaHome className="mr-2" />
                Home
              </Link>
              <FaChevronRight className="mx-2 text-white/50" />
              <span className="text-white">About Us</span>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          {/* Mission & Vision */}
          <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-8 mb-20">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              className="bg-gray-50 p-8 rounded-lg shadow-sm"
            >
              <h2 className="text-3xl font-bold mb-6">Our Mission</h2>
              <p className="text-gray-600 leading-relaxed">
                To foster a supportive and inclusive community that empowers its
                members through mutual aid, education, and spiritual growth. We
                strive to create lasting positive impact in our community by
                promoting unity, understanding, and collective progress.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              className="bg-gray-50 p-8 rounded-lg shadow-sm"
            >
              <h2 className="text-3xl font-bold mb-6">Our Vision</h2>
              <p className="text-gray-600 leading-relaxed">
                To build a world where every member of our community thrives
                through strong support systems, shared resources, and collective
                wisdom. We envision a future where our unity creates
                opportunities and uplifts everyone in our extended family.
              </p>
            </motion.div>
          </div>

          {/* Core Values */}
          <div className="max-w-6xl mx-auto mb-20">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="text-3xl font-bold text-center mb-12"
            >
              Our Core Values
            </motion.h2>

            <div className="grid md:grid-cols-3 gap-8">
              {[
                {
                  title: 'Unity',
                  description:
                    "We believe in the power of coming together as one family, supporting each other through life's challenges and celebrations.",
                },
                {
                  title: 'Support',
                  description:
                    "Our community is built on mutual support, ensuring that no member faces life's challenges alone.",
                },
                {
                  title: 'Growth',
                  description:
                    'We are committed to continuous personal and collective growth through education, mentorship, and shared experiences.',
                },
              ].map((value, index) => (
                <motion.div
                  key={value.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="bg-gray-50 p-8 rounded-lg shadow-sm hover:shadow-md transition-all"
                >
                  <h3 className="text-xl font-bold mb-4">{value.title}</h3>
                  <p className="text-gray-600">{value.description}</p>
                </motion.div>
              ))}
            </div>
          </div>

          {/* History Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="max-w-4xl mx-auto text-center bg-gray-50 p-12 rounded-lg shadow-sm"
          >
            <h2 className="text-3xl font-bold mb-8">Our History</h2>
            <p className="text-gray-600 leading-relaxed">
              Founded with the vision of creating a supportive community
              network, One Big Family has grown from a small group of dedicated
              individuals into a thriving community. Over the years, we have
              expanded our reach and impact through various initiatives, events,
              and support programs that continue to strengthen our bonds and
              create positive change in our community.
            </p>
          </motion.div>
        </div>
      </section>
    </main>
  );
};

export default AboutPage;
