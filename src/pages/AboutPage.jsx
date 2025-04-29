import React from 'react';
import { motion } from 'framer-motion';
import { FaHome, FaChevronRight } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import SEO from '../components/SEO';

const AboutPage = () => {
  const aboutStructuredData = {
    '@context': 'https://schema.org',
    '@type': 'AboutPage',
    mainEntity: {
      '@type': 'Organization',
      name: 'One Big Family',
      description:
        'A community-driven organization dedicated to supporting military families through various initiatives and programs.',
      foundingDate: '2023',
      foundingLocation: {
        '@type': 'Place',
        name: 'Nigeria',
      },
      areaServed: 'Nigeria',
      member: {
        '@type': 'OrganizationRole',
        roleName: 'Military Families',
      },
    },
  };

  return (
    <>
      <SEO
        title="About Us"
        description="Learn about One Big Family's mission to support military families through community initiatives, education programs, and charitable activities. Discover our story, values, and impact."
        keywords="about One Big Family, military family support, community initiatives, charity mission, NGO history, military community, family support programs"
        url="/about"
        structuredData={aboutStructuredData}
      />
      {/* Hero Section with Image Background */}
      <section className="relative h-[50vh] overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: 'url("/images/hero3.jpg")',
          }}
        />
        {/* Dark overlay with gradient - matching Hero.jsx */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/70 to-black/80" />

        {/* Hero Content - Adjusted positioning */}
        <div className="absolute inset-0 flex flex-col justify-end items-center text-center pb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="container mx-auto px-4"
          >
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4">
              About One Big Family
            </h1>
            <p className="text-xl text-white/90 max-w-2xl mx-auto">
              Building stronger communities through unity, support, and shared
              values
            </p>
          </motion.div>
        </div>

        {/* Breadcrumbs at bottom */}
        <div className="absolute bottom-0 left-0 w-full bg-black/30 backdrop-blur-sm">
          <div className="container mx-auto px-4 py-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="flex items-center text-white/90 text-sm"
            >
              <Link
                to="/"
                className="hover:text-white flex items-center transition-colors"
              >
                <FaHome className="mr-2" />
                Home
              </Link>
              <FaChevronRight className="mx-2 text-white/50" />
              <span className="text-white">About Us</span>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-20 relative overflow-hidden bg-white">
        {/* Background Elements */}
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
          <div className="absolute top-0 left-0 w-1/3 h-1/3 bg-gray-50 rounded-full blur-3xl transform -translate-x-1/2 -translate-y-1/2 opacity-70" />
          <div className="absolute bottom-0 right-0 w-1/2 h-1/2 bg-gray-50 rounded-full blur-3xl transform translate-x-1/4 translate-y-1/4 opacity-70" />
        </div>

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
    </>
  );
};

export default AboutPage;
