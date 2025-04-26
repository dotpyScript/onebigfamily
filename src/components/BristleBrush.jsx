import React from 'react';
import { motion } from 'framer-motion';

const BristleBrush = ({ className = '', bristleCount = 8, opacity = 0.2 }) => (
  <motion.div
    className={`w-24 h-24 opacity-${opacity * 100} ${className}`}
    animate={{
      y: [-10, 10],
      rotate: [0, 5, -5, 0],
    }}
    transition={{
      duration: 3,
      repeat: Infinity,
      repeatType: 'reverse',
      ease: 'easeInOut',
    }}
  >
    <div className="w-full h-full relative">
      {[...Array(bristleCount)].map((_, index) => (
        <div
          key={index}
          className="absolute w-1 bg-black"
          style={{
            height: '100%',
            left: `${index * 3}px`,
            transform: `rotate(${index * 5}deg)`,
            transformOrigin: 'bottom',
          }}
        />
      ))}
    </div>
  </motion.div>
);

export default BristleBrush;
