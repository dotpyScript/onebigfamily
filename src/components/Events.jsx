import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  FaCalendarAlt,
  FaMapMarkerAlt,
  FaUsers,
  FaClock,
  FaArrowRight,
  FaTicketAlt,
  FaChevronRight,
} from "react-icons/fa";

const Events = () => {
  const [activeTab, setActiveTab] = useState("upcoming");
  const [hoveredEvent, setHoveredEvent] = useState(null);

  const upcomingEvents = [
    {
      title: "Community Meetup",
      date: "May 15, 2024",
      time: "2:00 PM - 4:00 PM",
      location: "Virtual Meeting",
      description:
        "Monthly community gathering to discuss upcoming projects and initiatives",
      image:
        "https://images.unsplash.com/photo-1511578314322-379afb476865?q=80&w=2069&auto=format&fit=crop",
      attendees: 45,
    },
    {
      title: "Career Workshop",
      date: "June 5, 2024",
      time: "10:00 AM - 1:00 PM",
      location: "Barracks Community Center",
      description:
        "Professional development workshop for members with industry experts",
      image:
        "https://images.unsplash.com/photo-1540317580384-e5d43616b9aa?q=80&w=2070&auto=format&fit=crop",
      attendees: 30,
    },
    {
      title: "Annual General Meeting",
      date: "July 12, 2024",
      time: "11:00 AM - 3:00 PM",
      location: "Grand Hotel, Lagos",
      description:
        "Annual meeting to review our progress and plan for the coming year",
      image:
        "https://images.unsplash.com/photo-1505373877841-8d25f7d46678?q=80&w=2012&auto=format&fit=crop",
      attendees: 120,
    },
  ];

  const pastEvents = [
    {
      title: "Wedding Support",
      date: "April 10, 2024",
      time: "10:00 AM - 6:00 PM",
      location: "Lagos",
      description: "Community support for member's wedding ceremony",
      image:
        "https://images.unsplash.com/photo-1519741497674-611481863552?q=80&w=2070&auto=format&fit=crop",
      attendees: 85,
    },
    {
      title: "Business Networking",
      date: "March 20, 2024",
      time: "5:30 PM - 8:00 PM",
      location: "Abuja",
      description: "Business networking event for entrepreneurs",
      image:
        "https://images.unsplash.com/photo-1515187029135-18ee286d815b?q=80&w=2070&auto=format&fit=crop",
      attendees: 50,
    },
    {
      title: "Health & Wellness Day",
      date: "February 15, 2024",
      time: "9:00 AM - 3:00 PM",
      location: "Portharcourt",
      description: "Health checkups and wellness activities for all members",
      image:
        "https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?q=80&w=2070&auto=format&fit=crop",
      attendees: 65,
    },
  ];

  return (
    <section className="py-20 relative overflow-hidden bg-white" id="events">
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
          <h2 className="text-5xl font-bold mb-6 text-black">
            Upcoming Events
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Connect, learn, and grow with our community through exciting events
            and activities.
          </p>
        </motion.div>

        {/* Tab Navigation */}
        <div className="flex justify-center mb-12 gap-4">
          <motion.button
            onClick={() => setActiveTab("upcoming")}
            className={`px-8 py-3 rounded-full font-medium transition-all ${
              activeTab === "upcoming"
                ? "bg-black text-white"
                : "bg-white text-black border border-gray-200 hover:border-black"
            }`}
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
            Upcoming Events
          </motion.button>
          <motion.button
            onClick={() => setActiveTab("past")}
            className={`px-8 py-3 rounded-full font-medium transition-all ${
              activeTab === "past"
                ? "bg-black text-white"
                : "bg-white text-black border border-gray-200 hover:border-black"
            }`}
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
            Past Events
          </motion.button>
        </div>

        {/* Events Grid */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeTab}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.5 }}
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {(activeTab === "upcoming" ? upcomingEvents : pastEvents).map(
              (event, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  onHoverStart={() => setHoveredEvent(index)}
                  onHoverEnd={() => setHoveredEvent(null)}
                  className="group relative bg-white rounded-3xl overflow-hidden border border-gray-100"
                >
                  {/* Image Container */}
                  <div className="relative h-48 overflow-hidden">
                    <div className="absolute inset-0 bg-black/40 z-10 transition-opacity group-hover:opacity-60" />
                    <img
                      src={event.image}
                      alt={event.title}
                      className="w-full h-full object-cover transform transition-transform duration-700 group-hover:scale-110"
                    />
                    <div className="absolute top-4 left-4 z-20 bg-white/90 backdrop-blur-md rounded-full px-4 py-1 text-black text-sm font-medium">
                      {event.date}
                    </div>
                  </div>

                  {/* Content */}
                  <div className="p-6">
                    <h3 className="text-xl font-bold mb-3 text-black group-hover:text-black/80">
                      {event.title}
                    </h3>

                    <div className="space-y-2 mb-4">
                      <div className="flex items-center text-gray-600">
                        <FaClock className="mr-2" />
                        <span className="text-sm">{event.time}</span>
                      </div>
                      <div className="flex items-center text-gray-600">
                        <FaMapMarkerAlt className="mr-2" />
                        <span className="text-sm">{event.location}</span>
                      </div>
                      <div className="flex items-center text-gray-600">
                        <FaUsers className="mr-2" />
                        <span className="text-sm">
                          {event.attendees}{" "}
                          {activeTab === "upcoming" ? "registered" : "attended"}
                        </span>
                      </div>
                    </div>

                    <p className="text-gray-600 text-sm mb-6 line-clamp-2">
                      {event.description}
                    </p>

                    <motion.button
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      className="w-full bg-black text-white rounded-full py-3 px-6 font-medium flex items-center justify-center gap-2 group/btn"
                    >
                      {activeTab === "upcoming" ? (
                        <>
                          <FaTicketAlt className="text-sm" />
                          <span>Register Now</span>
                        </>
                      ) : (
                        <>
                          <span>View Details</span>
                          <FaChevronRight className="text-sm group-hover/btn:translate-x-1 transition-transform" />
                        </>
                      )}
                    </motion.button>
                  </div>
                </motion.div>
              )
            )}
          </motion.div>
        </AnimatePresence>

        {/* View All Button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
          className="mt-16 text-center"
        >
          <motion.button
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="inline-flex items-center gap-2 text-black font-medium group"
          >
            <span>View All Events</span>
            <FaArrowRight className="group-hover:translate-x-1 transition-transform" />
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
};

export default Events;
