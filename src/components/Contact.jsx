import React from "react";
import { motion } from "framer-motion";
import {
  FaWhatsapp,
  FaFacebook,
  FaTwitter,
  FaInstagram,
  FaArrowRight,
  FaEnvelope,
  FaPhone,
  FaMapMarkerAlt,
} from "react-icons/fa";

const Contact = () => {
  return (
    <section className="py-20 bg-white relative overflow-hidden" id="contact">
      {/* Background Elements */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-0 left-0 w-1/3 h-1/3 bg-gray-50 rounded-full blur-3xl transform -translate-x-1/2 -translate-y-1/2 opacity-70" />
        <div className="absolute bottom-0 right-0 w-1/2 h-1/2 bg-gray-50 rounded-full blur-3xl transform translate-x-1/4 translate-y-1/4 opacity-70" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl font-bold mb-6 text-black">Contact Us</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed">
            Have questions? We'd love to hear from you. Send us a message and
            we'll respond as soon as possible.
          </p>
        </motion.div>

        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-3 gap-8">
            {/* Contact Information */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="lg:col-span-1 space-y-6"
            >
              {/* Contact Info Cards */}
              <div className="bg-white border border-gray-100 rounded-2xl p-6 hover:border-black transition-colors duration-300">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-black rounded-xl flex items-center justify-center flex-shrink-0">
                    <FaPhone className="text-white text-xl" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg mb-1">Phone</h3>
                    <a
                      href="tel:+2341234567890"
                      className="text-gray-600 hover:text-black transition-colors"
                    >
                      +234 123 456 7890
                    </a>
                  </div>
                </div>
              </div>

              <div className="bg-white border border-gray-100 rounded-2xl p-6 hover:border-black transition-colors duration-300">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-black rounded-xl flex items-center justify-center flex-shrink-0">
                    <FaEnvelope className="text-white text-xl" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg mb-1">Email</h3>
                    <a
                      href="mailto:info@onebighappyfamily.com"
                      className="text-gray-600 hover:text-black transition-colors"
                    >
                      info@onebighappyfamily.com
                    </a>
                  </div>
                </div>
              </div>

              <div className="bg-white border border-gray-100 rounded-2xl p-6 hover:border-black transition-colors duration-300">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-black rounded-xl flex items-center justify-center flex-shrink-0">
                    <FaMapMarkerAlt className="text-white text-xl" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg mb-1">Location</h3>
                    <p className="text-gray-600">
                      Barracks Community, Lagos, Nigeria
                    </p>
                  </div>
                </div>
              </div>

              {/* Social Links */}
              <div className="bg-black text-white rounded-2xl p-6">
                <h3 className="font-semibold text-lg mb-4">Connect With Us</h3>
                <div className="grid grid-cols-2 gap-4">
                  {[
                    {
                      icon: FaWhatsapp,
                      label: "WhatsApp",
                      color: "hover:bg-green-500",
                    },
                    {
                      icon: FaFacebook,
                      label: "Facebook",
                      color: "hover:bg-blue-600",
                    },
                    {
                      icon: FaTwitter,
                      label: "Twitter",
                      color: "hover:bg-blue-400",
                    },
                    {
                      icon: FaInstagram,
                      label: "Instagram",
                      color: "hover:bg-pink-600",
                    },
                  ].map((social) => (
                    <motion.a
                      key={social.label}
                      href="#"
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      className={`flex items-center gap-2 p-3 bg-white/10 rounded-xl ${social.color} transition-colors`}
                    >
                      <social.icon className="text-xl" />
                      <span className="text-sm font-medium">
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
              className="lg:col-span-2 bg-white border border-gray-100 rounded-2xl p-8"
            >
              <form className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Full Name
                    </label>
                    <input
                      type="text"
                      className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-black focus:ring-1 focus:ring-black transition-colors"
                      placeholder="John Doe"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Email Address
                    </label>
                    <input
                      type="email"
                      className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-black focus:ring-1 focus:ring-black transition-colors"
                      placeholder="john@example.com"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Subject
                  </label>
                  <input
                    type="text"
                    className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-black focus:ring-1 focus:ring-black transition-colors"
                    placeholder="How can we help?"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Message
                  </label>
                  <textarea
                    rows="6"
                    className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-black focus:ring-1 focus:ring-black transition-colors resize-none"
                    placeholder="Your message..."
                  ></textarea>
                </div>

                <motion.button
                  type="submit"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="w-full bg-black text-white py-4 px-6 rounded-xl font-medium flex items-center justify-center gap-2 group"
                >
                  Send Message
                  <FaArrowRight className="group-hover:translate-x-1 transition-transform" />
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
