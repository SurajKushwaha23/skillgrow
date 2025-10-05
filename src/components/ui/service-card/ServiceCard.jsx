/* eslint-disable react/prop-types */
import React from 'react';
import { Link } from 'react-router-dom';

const ServiceCard = ({ service }) => {
  const { title, status, count, icon } = service;
  return (
    <>
      <Link to={service.path} className='group'>
        <div className='bg-white border border-gray-200 rounded-xl p-6 h-full flex flex-col items-center text-center transition-all duration-200 group-hover:border-blue-300 group-hover:shadow-lg'>
          {/* Icon Container */}
          <div className='w-16 h-16 bg-blue-50 rounded-lg flex items-center justify-center mb-6 group-hover:bg-blue-100 transition-colors duration-200'>
            <svg
              xmlns='http://www.w3.org/2000/svg'
              className='h-8 w-8 text-blue-600'
              fill='none'
              viewBox='0 0 24 24'
              stroke='currentColor'
            >
              {icon.map((pathProps, index) => (
                <path
                  key={index}
                  strokeLinecap={pathProps.strokeLinecap}
                  strokeLinejoin={pathProps.strokeLinejoin}
                  strokeWidth={pathProps.strokeWidth}
                  d={pathProps.d}
                />
              ))}
            </svg>
          </div>

          {/* Service Title */}
          <h3 className='text-xl font-bold text-gray-900 mb-4 group-hover:text-blue-700 transition-colors duration-200'>
            {title}
          </h3>

          {/* Status Indicator */}
          <div className='flex items-center gap-2 mb-4'>
            <div className='w-2 h-2 bg-green-500 rounded-full'></div>
            <span className='text-green-600 font-medium text-sm'>{status}</span>
          </div>

          {/* Service Count */}
          <div className='text-2xl font-bold text-blue-600 mb-4'>{count}</div>

          {/* Subtle Divider */}
          <div className='w-12 h-0.5 bg-gray-200 group-hover:bg-blue-400 transition-colors duration-200 mt-2'></div>
        </div>
      </Link>
    </>
  );
};

export default ServiceCard;
