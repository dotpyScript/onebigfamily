import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import {
  FaHome,
  FaChevronRight,
  FaCalendar,
  FaMapMarkerAlt,
  FaClock,
} from 'react-icons/fa';
import OptimizedImage from '../components/OptimizedImage';
import SEO from '../components/SEO';

const EventPage = () => {
  const upcomingEvents = [
    {
      id: 1,
      title: 'Community Meetup',
      date: '2025-08-15',
      time: '2:00 PM - 4:00 PM',
      location: 'Virtual Meeting',
      image: '/event_img/upcommingevent/event1.jpg',
      description:
        'Monthly community gathering to discuss upcoming projects and initiatives',
    },
    {
      id: 2,
      title: 'Career Workshop',
      date: '2025-07-25',
      time: '10:00 AM - 1:00 PM',
      location: 'Barracks Community Center',
      image: '/event_img/upcommingevent/event2.jpg',
      description:
        'Professional development workshop for members with industry experts',
    },
    {
      id: 3,
      title: 'Women In Tech',
      date: '2025-07-15',
      time: '11:00 AM - 3:00 PM',
      location: 'Army Barrack Central Mosque, Minna',
      image: '/event_img/upcommingevent/event3.jpg',
      description:
        'Empowering women in technology through mentorship, networking, and skill-building workshops. Join us for an inspiring day of learning and connection.',
    },

    {
      id: 4,
      title: 'Community Health Fair',
      date: '2025-06-20',
      time: '10:00 AM - 4:00 PM',
      location: 'Central Community Center',
      image: '/event_img/upcommingevent/event9.jpg',
      description:
        'Join us for free health screenings, wellness workshops, and family activities.',
    },
    {
      id: 5,
      title: 'Youth Leadership Workshop',
      date: '2024-06-15',
      time: '2:00 PM - 5:00 PM',
      location: 'Tech Innovation Hub',
      image: '/event_img/upcommingevent/event14.jpg',
      description: 'Empowering young leaders with skills for tomorrow.',
    },
    {
      id: 6,
      title: 'Family Fun Day',
      date: '2024-06-07',
      time: '11:00 AM - 6:00 PM',
      location: 'City Park',
      image: '/event_img/upcommingevent/event11.jpg',
      description:
        'A day of games, food, and entertainment for the whole family.',
    },
  ];

  const pastEvents = [
    {
      id: 1,
      title: 'Wedding Support',
      date: '2025-04-18',
      time: '10:00 AM - 6:00 PM',
      location: 'Minna',
      image: '/event_img/pastevent/pastevent1.jpg',
      description: "Community support for member's wedding ceremony",
    },
    {
      id: 2,
      title: "Qur'anic Recitation Competition",
      date: '2025-01-25',
      time: '9:00 AM - 1:00 PM',
      location: 'Army Barrack Central Mosque, Minna',
      image: '/event_img/pastevent/pastevent2.jpg',
      description:
        "Qur'anic recitation competition for members and non-members",
    },
    {
      id: 3,
      title: 'Health & Wellness Day',
      date: '2024-12-15',
      time: '9:00 AM - 3:00 PM',
      location: 'Minna',
      image: '/event_img/pastevent/pastevent3.jpg',
      description: 'Health checkups and wellness activities for all members',
    },
    // {
    //   id: 4,
    //   title: 'Winter Charity Drive',
    //   date: '2024-01-15',
    //   time: '9:00 AM - 3:00 PM',
    //   location: 'Community Hall',
    //   image: '/hero7.jpg',
    //   description:
    //     'Successfully provided warm clothing and supplies to 200+ families.',
    // },
    // {
    //   id: 5,
    //   title: 'Education Summit',
    //   date: '2024-02-20',
    //   time: '10:00 AM - 4:00 PM',
    //   location: 'Public Library',
    //   image: '/hero8.jpg',
    //   description: 'Discussed innovative approaches to community education.',
    // },
    // {
    //   id: 6,
    //   title: 'Spring Food Festival',
    //   date: '2024-03-10',
    //   time: '12:00 PM - 8:00 PM',
    //   location: 'Downtown Square',
    //   image: '/hero9.jpg',
    //   description:
    //     'Celebrated local cuisine and raised funds for food security programs.',
    // },
  ];

  const EventCard = ({ event }) => (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300"
    >
      <div className="relative h-48 overflow-hidden">
        <OptimizedImage
          src={event.image}
          alt={event.title}
          className="w-full h-full object-cover transform hover:scale-110 transition-transform duration-300"
          fallbackSrc="/images/hero5.jpg"
        />
      </div>
      <div className="p-6">
        <h3 className="text-xl font-bold text-gray-900 mb-2">{event.title}</h3>
        <p className="text-gray-600 mb-4 line-clamp-2">{event.description}</p>
        <div className="space-y-2 text-sm text-gray-500">
          <div className="flex items-center">
            <FaCalendar className="mr-2" />
            <span>{new Date(event.date).toLocaleDateString()}</span>
          </div>
          <div className="flex items-center">
            <FaClock className="mr-2" />
            <span>{event.time}</span>
          </div>
          <div className="flex items-center">
            <FaMapMarkerAlt className="mr-2" />
            <span>{event.location}</span>
          </div>
        </div>
      </div>
    </motion.div>
  );

  const eventsStructuredData = {
    '@context': 'https://schema.org',
    '@type': 'CollectionPage',
    name: 'One Big Family Events',
    description:
      'Discover upcoming community events, workshops, and gatherings organized by One Big Family. Join us in building stronger communities.',
    mainEntity: {
      '@type': 'Event',
      organizer: {
        '@type': 'Organization',
        name: 'One Big Family',
        url: 'https://onebigfamily.org',
      },
      location: {
        '@type': 'Place',
        name: 'Various Locations in Nigeria',
      },
    },
  };

  return (
    <>
      <SEO
        title="Events"
        description="Join One Big Family's community events, workshops, and gatherings. Discover upcoming activities that bring our military families together and strengthen our community bonds."
        keywords="community events, military family events, workshops, gatherings, family activities, community building, One Big Family events"
        url="/events"
        structuredData={eventsStructuredData}
      />
      {/* Hero Section */}
      <section className="relative h-[50vh] overflow-hidden">
        <div className="absolute inset-0">
          <OptimizedImage
            src="/images/hero5.jpg"
            alt="Events Hero"
            className="w-full h-full object-cover"
            fallbackSrc="/images/hero5.jpg"
          />
        </div>
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
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4">
              Community Events
            </h1>
            <p className="text-xl text-white/90 max-w-2xl mx-auto">
              Join us in making a difference through our upcoming events and
              relive the moments from our past gatherings.
            </p>
          </motion.div>
        </div>

        {/* Breadcrumbs */}
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
              <span className="text-white">Events</span>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Events Content */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          {/* Upcoming Events */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="mb-20"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
              Upcoming Events
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {upcomingEvents.map((event) => (
                <EventCard key={event.id} event={event} />
              ))}
            </div>
          </motion.div>

          {/* Past Events */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
              Past Events
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {pastEvents.map((event) => (
                <EventCard key={event.id} event={event} />
              ))}
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
};

export default EventPage;
