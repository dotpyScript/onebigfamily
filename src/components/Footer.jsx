import React from 'react';
import { Link } from 'react-router-dom';
import {
  FaWhatsapp,
  FaFacebook,
  FaTwitter,
  FaInstagram,
  FaEnvelope,
  FaPhone,
  FaCode,
} from 'react-icons/fa';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const quickLinks = [
    { name: 'Home', path: '/' },
    { name: 'About Us', path: '/about' },
    { name: 'Events', path: '/events' },
    { name: 'News', path: '/news' },
    { name: 'Contact', path: '/contact' },
    { name: 'Donate', path: '/donate' },
  ];

  return (
    <footer className="bg-black text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* About Section */}
          <div>
            <h3 className="text-xl font-bold mb-4">One Big Happy Family</h3>
            <p className="text-gray-400">
              A community of barracks residents supporting each other through
              monthly contributions and mutual assistance.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-white">
              Quick Links
            </h3>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    to={link.path}
                    className="text-gray-400 hover:text-white transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-xl font-bold mb-4">Contact Us</h3>
            <ul className="space-y-2">
              <li className="flex items-center text-gray-400">
                <FaEnvelope className="mr-2" />
                <a
                  href="mailto:info@onebighappyfamily.com"
                  className="hover:text-white transition-colors"
                >
                  info@onebighappyfamily.com
                </a>
              </li>
              <li className="flex items-center text-gray-400">
                <FaPhone className="mr-2" />
                <a
                  href="tel:+2349158086565"
                  className="hover:text-white transition-colors"
                >
                  +234 9158086565
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Developer */}
          <div>
            <h3 className="text-xl font-bold mb-4">Contact Developer</h3>
            <ul className="space-y-2">
              <li className="flex items-center text-gray-400">
                <FaEnvelope className="mr-2" />
                <a
                  href="mailto:abbasmahmud0@gmail.com"
                  className="hover:text-white transition-colors"
                >
                  Abbasmahmud0@gmail.com
                </a>
              </li>
              <li className="flex items-center text-gray-400">
                <FaPhone className="mr-2" />
                <a
                  href="tel:+2348109919244"
                  className="hover:text-white transition-colors"
                >
                  +234 8109919244
                </a>
              </li>
            </ul>
          </div>

          {/* Social Media */}
          <div>
            <h3 className="text-xl font-bold mb-4">Follow Us</h3>
            <div className="flex space-x-4">
              {[
                {
                  icon: FaWhatsapp,
                  label: 'WhatsApp',
                  href: 'https://chat.whatsapp.com/C06Vg8cIrX33baQJbEBVOO',
                },
                {
                  icon: FaFacebook,
                  label: 'Facebook',
                  href: '#',
                },
                {
                  icon: FaTwitter,
                  label: 'Twitter',
                  href: '#',
                },
                {
                  icon: FaInstagram,
                  label: 'Instagram',
                  href: '#',
                },
                {
                  icon: FaCode,
                  label: 'Developer',
                  href: 'https://wa.me/+2348109919244',
                },
              ].map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-white transition-colors"
                  aria-label={social.label}
                >
                  <social.icon className="h-6 w-6" />
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
          <p>&copy; {currentYear} One Big Happy Family. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
