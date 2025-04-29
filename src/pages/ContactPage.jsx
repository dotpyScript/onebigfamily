import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { FaHome, FaChevronRight } from 'react-icons/fa';
import Contact from '../components/Contact';
import SEO from '../components/SEO';

const ContactPage = () => {
  const [imageLoaded, setImageLoaded] = useState(false);

  useEffect(() => {
    const img = new Image();
    img.src = '/images/hero5.jpg';
    img.onload = () => setImageLoaded(true);
  }, []);

  const contactStructuredData = {
    '@context': 'https://schema.org',
    '@type': 'ContactPage',
    name: 'Contact One Big Family',
    description:
      'Get in touch with One Big Family. We are here to answer your questions and help you get involved in our community initiatives.',
    mainEntity: {
      '@type': 'Organization',
      name: 'One Big Family',
      contactPoint: {
        '@type': 'ContactPoint',
        contactType: 'customer service',
        email: 'contact@onebigfamily.org',
        availableLanguage: ['English'],
      },
      address: {
        '@type': 'PostalAddress',
        addressCountry: 'NG',
        addressLocality: 'Nigeria',
      },
    },
  };

  return (
    <>
      <SEO
        title="Contact Us"
        description="Get in touch with One Big Family. We're here to answer your questions about our community initiatives, events, and how you can get involved in supporting military families."
        keywords="contact One Big Family, get in touch, contact form, support, questions, inquiries, military family support contact"
        url="/contact"
        structuredData={contactStructuredData}
      />
      {/* Hero Section with Image Background */}
      <section className="relative h-[40vh] md:h-[50vh] overflow-hidden">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: imageLoaded ? 1 : 0 }}
          transition={{ duration: 0.5 }}
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: 'url("/images/hero5.jpg")',
          }}
        />
        {/* Dark overlay with gradient */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/70 to-black/80" />

        {/* Hero Content */}
        <div className="absolute inset-0 flex flex-col justify-end items-center text-center pb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="container mx-auto px-4"
          >
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-2 md:mb-4">
              Get in Touch
            </h1>
            <p className="text-lg sm:text-xl text-white/90 max-w-2xl mx-auto leading-relaxed">
              Have questions or want to join our community? We're here to help
              and answer any question.
            </p>
          </motion.div>
        </div>

        {/* Breadcrumbs */}
        <div className="absolute bottom-0 left-0 w-full bg-black/30 backdrop-blur-sm">
          <div className="container mx-auto px-4 py-3 md:py-4">
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
              <span className="text-white">Contact</span>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Contact Component */}
      <Contact />
    </>
  );
};

export default ContactPage;
