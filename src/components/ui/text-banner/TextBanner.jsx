/* eslint-disable react/prop-types */
// eslint-disable-next-line no-unused-vars
import React from 'react';

const TextBanner = ({ title, subtitle }) => {
  return (
    <div className='bg-gradient-to-br from-blue-50 via-white to-indigo-50 py-12 relative overflow-hidden'>
      {/* Background decorative elements */}
      <div className='absolute inset-0 opacity-10'>
        <div className='absolute top-10 left-10 w-20 h-20 bg-blue-400 rounded-full blur-xl'></div>
        <div className='absolute bottom-10 right-10 w-24 h-24 bg-indigo-400 rounded-full blur-xl'></div>
        <div className='absolute top-1/2 left-1/4 w-16 h-16 bg-purple-300 rounded-full blur-lg'></div>
      </div>

      <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10'>
        {/* Header Section */}
        <div className='text-center py-10'>
          {/* Main Title */}
          <h1 className='text-5xl md:text-6xl font-bold text-gray-900 mb-6'>
            <span className='bg-gradient-to-r from-gray-900 via-blue-800 to-indigo-900 bg-clip-text text-transparent'>
              {title}
            </span>
          </h1>

          {/* Subtitle */}
          <p className='text-xl md:text-2xl text-gray-700 max-w-3xl mx-auto leading-relaxed mb-8'>
            {subtitle}
          </p>
        </div>
      </div>
    </div>
  );
};

export default TextBanner;
