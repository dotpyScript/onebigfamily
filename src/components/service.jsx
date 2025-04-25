import React from "react";
import { motion } from "framer-motion";
import {
  FaUsers,
  FaHandshake,
  FaHeart,
  FaHandHoldingHeart,
  FaRegLightbulb,
} from "react-icons/fa";

const Services = () => {
  return (
    <section className="relative py-24 overflow-hidden bg-white font-poppins">
      <div className="container mx-auto px-4">
        {/* Main heading with gradient */}

        {/* Feature cards */}
        <div className="grid md:grid-cols-3 gap-6 mb-20">
          {[
            {
              icon: FaUsers,
              title: "United Community",
              description:
                "A diverse family united by shared experiences, bringing together soldiers, students, and civil servants.",
              delay: 0.2,
              gradient: "from-gray-50 to-white",
            },
            {
              icon: FaHandshake,
              title: "Monthly Support",
              description:
                "₦1,000 monthly contributions creating a powerful support system for those in need.",
              delay: 0.4,
              gradient: "from-gray-50 to-white",
            },
            {
              icon: FaHeart,
              title: "Lasting Impact",
              description:
                "Supporting crucial life moments through education, emergencies, and community development.",
              delay: 0.6,
              gradient: "from-gray-50 to-white",
            },
          ].map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: feature.delay }}
              viewport={{ once: true }}
              className="relative group h-full"
            >
              <div
                className="absolute inset-0 bg-gradient-to-b opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl"
                style={{ background: `linear-gradient(${feature.gradient})` }}
              ></div>
              <div className="relative h-full bg-white rounded-2xl p-8 border border-gray-200 hover:border-gray-300 transition-all duration-500 shadow-sm hover:shadow">
                <feature.icon className="text-4xl text-gray-700 mb-6" />
                <h3 className="text-2xl font-semibold mb-4 text-gray-800">
                  {feature.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {feature.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Impact statistics */}

        {/* Call to action */}
      </div>
    </section>
  );
};

export default Services;
