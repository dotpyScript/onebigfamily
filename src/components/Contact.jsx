import React, { useState, useRef } from 'react';
import { motion } from 'framer-motion';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import {
  FaWhatsapp,
  FaFacebook,
  FaTwitter,
  FaInstagram,
  FaArrowRight,
  FaEnvelope,
  FaPhone,
  FaMapMarkerAlt,
  FaCode,
} from 'react-icons/fa';
import BristleBrush from './BristleBrush';
import emailjs from '@emailjs/browser';

const Contact = () => {
  const form = useRef();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });
  const [isSending, setIsSending] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSending(true);

    const toastId = toast.loading('Sending your message...', {
      position: 'top-right',
      theme: 'dark',
    });

    try {
      await emailjs.sendForm(
        'service_5lfq3hn', // Replace with your EmailJS service ID
        'template_yki9j39', // Replace with your EmailJS template ID
        form.current,
        'BwAnVMPE6gm1hJw29' // Replace with your EmailJS public key
      );

      toast.update(toastId, {
        render: "Message sent successfully! We'll get back to you soon.",
        type: 'success',
        isLoading: false,
        autoClose: 5000,
        closeButton: true,
      });

      // Clear form
      setFormData({
        name: '',
        email: '',
        subject: '',
        message: '',
      });
    } catch (error) {
      toast.update(toastId, {
        render: 'Failed to send message. Please try again later.',
        type: 'error',
        isLoading: false,
        autoClose: 5000,
        closeButton: true,
      });
    } finally {
      setIsSending(false);
    }
  };

  return (
    <section className="py-12 sm:py-20 bg-white relative overflow-hidden">
      <ToastContainer />
      {/* Background Elements */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-0 left-0 w-1/3 h-1/3 bg-gray-50 rounded-full blur-3xl transform -translate-x-1/2 -translate-y-1/2 opacity-70" />
        <div className="absolute bottom-0 right-0 w-1/2 h-1/2 bg-gray-50 rounded-full blur-3xl transform translate-x-1/4 translate-y-1/4 opacity-70" />
      </div>

      <BristleBrush className="absolute top-10 right-10 hidden sm:block" />

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-8 sm:mb-16"
        >
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-3 sm:mb-6 text-black">
            Contact Us
          </h2>
          <p className="text-base sm:text-lg md:text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed px-2">
            Have questions? We'd love to hear from you. Send us a message and
            we'll respond as soon as possible.
          </p>
        </motion.div>

        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-3 gap-4 sm:gap-8">
            {/* Contact Information */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="lg:col-span-1 space-y-4 sm:space-y-6"
            >
              {/* Contact Info Cards */}
              <div className="bg-white border border-gray-100 rounded-xl sm:rounded-2xl p-4 sm:p-6 hover:border-black transition-colors duration-300">
                <div className="flex items-center gap-3 sm:gap-4">
                  <div className="w-10 h-10 sm:w-12 sm:h-12 bg-black rounded-lg sm:rounded-xl flex items-center justify-center flex-shrink-0">
                    <FaPhone className="text-white text-lg sm:text-xl" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-sm sm:text-base lg:text-lg mb-1">
                      Phone
                    </h3>
                    <a
                      href="tel:+2348109919244"
                      className="text-sm sm:text-base text-gray-600 hover:text-black transition-colors"
                    >
                      +234 9158086565
                    </a>
                  </div>
                </div>
              </div>

              <div className="bg-white border border-gray-100 rounded-xl sm:rounded-2xl p-4 sm:p-6 hover:border-black transition-colors duration-300">
                <div className="flex items-center gap-3 sm:gap-4">
                  <div className="w-10 h-10 sm:w-12 sm:h-12 bg-black rounded-lg sm:rounded-xl flex items-center justify-center flex-shrink-0">
                    <FaEnvelope className="text-white text-lg sm:text-xl" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-sm sm:text-base lg:text-lg mb-1">
                      Email
                    </h3>
                    <a
                      href="mailto:abbasmahmud0@gmail.com"
                      className="text-sm sm:text-base text-gray-600 hover:text-black transition-colors break-all"
                    >
                      info@onebighappyfamily.com
                    </a>
                  </div>
                </div>
              </div>

              <div className="bg-white border border-gray-100 rounded-xl sm:rounded-2xl p-4 sm:p-6 hover:border-black transition-colors duration-300">
                <div className="flex items-center gap-3 sm:gap-4">
                  <div className="w-10 h-10 sm:w-12 sm:h-12 bg-black rounded-lg sm:rounded-xl flex items-center justify-center flex-shrink-0">
                    <FaMapMarkerAlt className="text-white text-lg sm:text-xl" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-sm sm:text-base lg:text-lg mb-1">
                      Location
                    </h3>
                    <p className="text-sm sm:text-base text-gray-600">
                      Army Barracks, Minna, Niger State, Nigeria
                    </p>
                  </div>
                </div>
              </div>

              {/* Social Links */}
              <div className="bg-black text-white rounded-xl sm:rounded-2xl p-4 sm:p-6">
                <h3 className="font-semibold text-sm sm:text-base lg:text-lg mb-3 sm:mb-4">
                  Connect With Us
                </h3>
                <div className="grid grid-cols-2 gap-3 sm:gap-4">
                  {[
                    {
                      icon: FaWhatsapp,
                      label: 'WhatsApp',
                      color: 'hover:bg-green-500',
                      href: 'https://chat.whatsapp.com/C06Vg8cIrX33baQJbEBVOO',
                    },
                    {
                      icon: FaFacebook,
                      label: 'Facebook',
                      color: 'hover:bg-blue-600',
                    },
                    {
                      icon: FaTwitter,
                      label: 'Twitter',
                      color: 'hover:bg-blue-400',
                    },
                    {
                      icon: FaInstagram,
                      label: 'Instagram',
                      color: 'hover:bg-pink-600',
                    },
                    {
                      icon: FaCode,
                      label: 'Developer',
                      color: 'hover:bg-purple-600',
                      href: 'https://wa.me/+2348109919244',
                      span: 'col-span-2',
                    },
                  ].map((social) => (
                    <motion.a
                      key={social.label}
                      href={social.href || '#'}
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      className={`flex items-center gap-2 p-2 sm:p-3 bg-white/10 rounded-lg sm:rounded-xl ${
                        social.color
                      } transition-colors ${social.span || ''}`}
                    >
                      <social.icon className="text-base sm:text-xl" />
                      <span className="text-xs sm:text-sm font-medium">
                        {social.label}
                      </span>
                    </motion.a>
                  ))}
                </div>
              </div>
            </motion.div>

            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="lg:col-span-2 bg-white border border-gray-100 rounded-xl sm:rounded-2xl p-4 sm:p-8"
            >
              <form
                ref={form}
                onSubmit={handleSubmit}
                className="space-y-4 sm:space-y-6"
              >
                <div className="grid md:grid-cols-2 gap-4 sm:gap-6">
                  <div>
                    <label className="block text-xs sm:text-sm font-medium text-gray-700 mb-1 sm:mb-2">
                      Full Name
                    </label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full px-3 sm:px-4 py-2 sm:py-3 text-sm sm:text-base rounded-lg sm:rounded-xl border border-gray-200 focus:border-black focus:ring-1 focus:ring-black transition-colors"
                      placeholder="Abbas Mahmud"
                    />
                  </div>
                  <div>
                    <label className="block text-xs sm:text-sm font-medium text-gray-700 mb-1 sm:mb-2">
                      Email Address
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full px-3 sm:px-4 py-2 sm:py-3 text-sm sm:text-base rounded-lg sm:rounded-xl border border-gray-200 focus:border-black focus:ring-1 focus:ring-black transition-colors"
                      placeholder="abc@example.com"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs sm:text-sm font-medium text-gray-700 mb-1 sm:mb-2">
                    Subject
                  </label>
                  <input
                    type="text"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                    className="w-full px-3 sm:px-4 py-2 sm:py-3 text-sm sm:text-base rounded-lg sm:rounded-xl border border-gray-200 focus:border-black focus:ring-1 focus:ring-black transition-colors"
                    placeholder="How can we help?"
                  />
                </div>

                <div>
                  <label className="block text-xs sm:text-sm font-medium text-gray-700 mb-1 sm:mb-2">
                    Message
                  </label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows="5"
                    className="w-full px-3 sm:px-4 py-2 sm:py-3 text-sm sm:text-base rounded-lg sm:rounded-xl border border-gray-200 focus:border-black focus:ring-1 focus:ring-black transition-colors resize-none"
                    placeholder="Your message..."
                  ></textarea>
                </div>

                <motion.button
                  type="submit"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  disabled={isSending}
                  className={`w-full bg-black text-white py-3 sm:py-4 px-4 sm:px-6 rounded-lg sm:rounded-xl text-sm sm:text-base font-medium flex items-center justify-center gap-2 group ${
                    isSending ? 'opacity-75 cursor-not-allowed' : ''
                  }`}
                >
                  {isSending ? (
                    'Sending...'
                  ) : (
                    <>
                      Send Message
                      <FaArrowRight className="group-hover:translate-x-1 transition-transform" />
                    </>
                  )}
                </motion.button>
              </form>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
