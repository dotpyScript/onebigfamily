import React, { useState } from 'react';
import { motion } from 'framer-motion';

const OptimizedImage = ({
  src,
  alt,
  className,
  fallbackSrc = '/images/fallback.jpg',
  makeWhite = false,
}) => {
  const [isLoading, setIsLoading] = useState(true);
  const [hasError, setHasError] = useState(false);

  const handleLoad = () => {
    setIsLoading(false);
  };

  const handleError = () => {
    setIsLoading(false);
    setHasError(true);
  };

  return (
    <div className={`relative ${className}`}>
      {isLoading && (
        <div className="absolute inset-0 bg-gray-100 animate-pulse rounded-inherit" />
      )}

      <motion.img
        src={hasError ? fallbackSrc : src}
        alt={alt}
        className={`w-full h-full object-cover ${
          isLoading ? 'opacity-0' : 'opacity-100'
        } ${makeWhite ? 'brightness-0 invert' : ''}`}
        onLoad={handleLoad}
        onError={handleError}
        initial={{ opacity: 0 }}
        animate={{ opacity: isLoading ? 0 : 1 }}
        transition={{ duration: 0.3 }}
        loading="lazy"
        decoding="async"
      />

      {hasError && (
        <div className="absolute inset-0 flex items-center justify-center bg-gray-100 rounded-inherit">
          <span className="text-gray-500 text-sm">Image not available</span>
        </div>
      )}
    </div>
  );
};

export default OptimizedImage;
