import React from 'react';
import { motion } from 'framer-motion';
import { IconType } from 'react-icons';
import Card from '../../../components/ui/Card';

interface FeatureItemProps {
  name: string;
  description: string;
  icon: IconType;
  delay: number;
}

export function FeatureItem({ name, description, icon: Icon, delay }: FeatureItemProps) {
  return (
    <Card delay={delay} className="px-6 py-8">
      <motion.div
        whileHover={{ scale: 1.05 }}
        className="flex flex-col items-center"
      >
        <div className="flex items-center justify-center h-12 w-12 rounded-md bg-emerald-500 text-white">
          <Icon className="h-6 w-6" />
        </div>
        <h3 className="mt-6 text-lg font-medium text-gray-900 dark:text-white">
          {name}
        </h3>
        <p className="mt-2 text-base text-gray-500 dark:text-gray-400 text-center">
          {description}
        </p>
      </motion.div>
    </Card>
  );
}