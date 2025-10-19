/* eslint-disable react/prop-types */
// eslint-disable-next-line no-unused-vars
import React from 'react';

const TextBanner = ({ title, subtitle }) => {
  return (
    <div className='bg-gradient-to-br from-blue-50 via-white to-indigo-50 py-12 relative overflow-hidden'>
      {/* Background decorative elements */}
      <div className='absolute inset-0'>
        {/* Original decorative elements */}
        <div className='absolute top-10 left-10 w-20 h-20 bg-blue-400 rounded-full blur-xl opacity-30'></div>
        <div className='absolute bottom-10 right-10 w-24 h-24 bg-indigo-400 rounded-full blur-xl opacity-30'></div>
        <div className='absolute top-1/2 left-1/4 w-16 h-16 bg-purple-300 rounded-full blur-lg opacity-25'></div>

        {/* Medical Icons - Crosses */}
        <div className='absolute top-20 right-20 w-16 h-16 text-blue-400 opacity-40'>
          <div className='absolute inset-0 bg-current rounded-sm transform rotate-45'></div>
          <div className='absolute inset-0 bg-current rounded-sm transform -rotate-45'></div>
        </div>

        <div className='absolute bottom-32 left-24 w-12 h-12 text-indigo-400 opacity-35'>
          <div className='absolute inset-0 bg-current rounded-sm transform rotate-45'></div>
          <div className='absolute inset-0 bg-current rounded-sm transform -rotate-45'></div>
        </div>

        {/* Medical Icons - Hearts */}
        <div className='absolute top-1/3 right-1/4 w-14 h-14 text-pink-400 opacity-30'>
          <svg viewBox='0 0 24 24' fill='currentColor' className='w-full h-full'>
            <path d='M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z' />
          </svg>
        </div>

        {/* Medical Icons - Pill/Capsule */}
        <div className='absolute bottom-1/4 right-1/3 w-20 h-8 text-green-500 opacity-40'>
          <div className='absolute inset-0 bg-current rounded-full'></div>
          <div className='absolute inset-y-0 left-1/2 -ml-10 w-20 bg-current'></div>
        </div>

        {/* Medical Icons - Stethoscope */}
        <div className='absolute top-1/4 left-1/3 w-16 h-16 text-purple-500 opacity-35'>
          <svg viewBox='0 0 24 24' fill='currentColor' className='w-full h-full'>
            <path d='M19 8C20.6569 8 22 6.65685 22 5C22 3.34315 20.6569 2 19 2C17.3431 2 16 3.34315 16 5C16 5.12548 16.0077 5.24917 16.0227 5.37061C14.7715 6.17977 14 7.52733 14 9.03675V13C14 15.2091 15.7909 17 18 17H19C20.6569 17 22 15.6569 22 14C22 12.3431 20.6569 11 19 11H18C17.4477 11 17 11.4477 17 12C17 12.5523 17.4477 13 18 13H19C19.5523 13 20 13.4477 20 14C20 14.5523 19.5523 15 19 15H18C16.8954 15 16 14.1046 16 13V9.03675C16 6.25693 18.2206 4 21 4C21.5523 4 22 4.44772 22 5C22 5.55228 21.5523 6 21 6C19.8954 6 19 6.89543 19 8Z' />
            <path d='M4 10C4 9.44772 3.55228 9 3 9C2.44772 9 2 9.44772 2 10V14C2 14.5523 2.44772 15 3 15C3.55228 15 4 14.5523 4 14V10Z' />
            <path d='M5 9C5 7.89543 5.89543 7 7 7H9C10.1046 7 11 7.89543 11 9V15C11 16.1046 10.1046 17 9 17H7C5.89543 17 5 16.1046 5 15V9Z' />
          </svg>
        </div>

        {/* Medical Icons - ECG Heartbeat */}
        <div className='absolute bottom-40 left-1/2 w-32 h-8 text-blue-500 opacity-40'>
          <svg viewBox='0 0 100 20' className='w-full h-full'>
            <path
              d='M0,10 L20,10 L25,5 L30,15 L35,5 L40,15 L45,5 L50,15 L55,5 L60,15 L65,5 L70,15 L75,5 L80,10 L100,10'
              stroke='currentColor'
              strokeWidth='2'
              fill='none'
            />
          </svg>
        </div>

        {/* Medical Icons - Hospital Building */}
        <div className='absolute top-44 left-16 w-20 h-20 text-gray-500 opacity-30'>
          <svg viewBox='0 0 24 24' fill='currentColor' className='w-full h-full'>
            <path d='M12 7L10 5H6L4 7V19H20V7L18 5H14L12 7Z' />
            <path d='M8 9H10V11H8V9Z' />
            <path d='M14 9H16V11H14V9Z' />
            <path d='M8 13H10V15H8V13Z' />
            <path d='M14 13H16V15H14V13Z' />
            <path d='M8 17H10V19H8V17Z' />
            <path d='M14 17H16V19H14V17Z' />
          </svg>
        </div>

        {/* Medical Icons - Shield */}
        <div className='absolute bottom-44 right-24 w-16 h-16 text-green-500 opacity-35'>
          <svg viewBox='0 0 24 24' fill='currentColor' className='w-full h-full'>
            <path d='M12 1L3 5V11C3 16.55 6.84 21.74 12 23C17.16 21.74 21 16.55 21 11V5L12 1Z' />
          </svg>
        </div>

        {/* Additional Medical Icons - Syringe */}
        <div className='absolute top-16 left-1/2 w-14 h-14 text-blue-500 opacity-30'>
          <svg viewBox='0 0 24 24' fill='currentColor' className='w-full h-full'>
            <path d='M21.71 2.29C21.32 1.9 20.68 1.9 20.29 2.29L19.71 2.87L21.13 4.29L21.71 3.71C22.1 3.32 22.1 2.68 21.71 2.29ZM18.29 5.71L17.71 5.13L15.13 7.71L15.71 8.29L18.29 5.71ZM11.29 8.71L10.71 8.13L5.13 13.71L5.71 14.29L11.29 8.71ZM17 10C16.45 10 16 10.45 16 11C16 11.55 16.45 12 17 12C17.55 12 18 11.55 18 11C18 10.45 17.55 10 17 10ZM6 12C5.45 12 5 12.45 5 13C5 13.55 5.45 14 6 14C6.55 14 7 13.55 7 13C7 12.45 6.55 12 6 12ZM14 16C13.45 16 13 16.45 13 17C13 17.55 13.45 18 14 18C14.55 18 15 17.55 15 17C15 16.45 14.55 16 14 16Z' />
          </svg>
        </div>
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
