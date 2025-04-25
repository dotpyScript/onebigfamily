import React from 'react';
import { motion } from 'framer-motion';
import { HiHeart, HiLightningBolt, HiShieldCheck } from 'react-icons/hi';
import Card from '../../../components/ui/Card';
import { FeatureItem } from './FeatureItem';

const features = [
  {
    name: 'Secure Donations',
    description: 'Your donations are protected with industry-leading security measures.',
    icon: HiShieldCheck,
    delay: 0.2
  },
  {
    name: 'Instant Impact',
    description: 'Your contribution makes an immediate difference in someone\'s life.',
    icon: HiLightningBolt,
    delay: 0.4
  },
  {
    name: 'Transparent Tracking',
    description: 'Track how your donations are making a difference.',
    icon: HiHeart,
    delay: 0.6
  }
];

export default function Features() {
  return (
    <div className="py-12 bg-gray-50 dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-extrabold text-gray-900 dark:text-white sm:text-4xl">
            Why Choose Us
          </h2>
          <p className="mt-4 max-w-2xl text-xl text-gray-500 dark:text-gray-400 lg:mx-auto">
            We make donating simple, secure, and impactful.
          </p>
        </div>

        <div className="mt-10">
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {features.map((feature) => (
              <FeatureItem key={feature.name} {...feature} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}