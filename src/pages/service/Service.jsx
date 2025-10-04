import React from 'react';
import { Link } from 'react-router-dom';

const servicesData = [
  {
    id: 1,
    title: 'Emergency Care',
    path: '/services/emergency',
    count: '24/7',
    status: 'Available',
    icon: (
      <path
        strokeLinecap='round'
        strokeLinejoin='round'
        strokeWidth={2}
        d='M4.5 12.75l6 6 9-13.5'
      />
    ),
  },
  {
    id: 2,
    title: 'Cardiology',
    path: '/services/cardiology',
    count: '8/5',
    status: 'Limited Availability',
    icon: (
      <path
        strokeLinecap='round'
        strokeLinejoin='round'
        strokeWidth={2}
        d='M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z'
      />
    ),
  },
  {
    id: 3,
    title: 'Neurology',
    path: '/services/neurology',
    count: '6/3',
    status: 'Available',
    icon: (
      <path
        strokeLinecap='round'
        strokeLinejoin='round'
        strokeWidth={2}
        d='M21 12a9 9 0 11-18 0 9 9 0 0118 0z'
      />
    ),
  },
  {
    id: 4,
    title: 'Orthopedics',
    path: '/services/orthopedics',
    count: '10/7',
    status: 'Available',
    icon: (
      <path
        strokeLinecap='round'
        strokeLinejoin='round'
        strokeWidth={2}
        d='M12 14l9-5-9-5-9 5 9 5m0 0l9-5-9-5-9 5 9 5m0 0v10'
      />
    ),
  },
];

const Service = () => {
  return (
    <>
      <section className='bg-gradient-to-b from-white via-blue-50 to-white py-16 relative'>
        {/* Background Pattern */}
        <div className='absolute inset-0 bg-grid-slate-100 [mask-image:linear-gradient(0deg,white,rgba(255,255,255,0.6))] bg-[length:20px_20px]'></div>

        <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative'>
          <div className='text-center mb-16'>
            <h2 className='text-4xl md:text-5xl font-extrabold text-gray-900 mb-4'>
              Our <span className='text-blue-600'>Services</span>
            </h2>
            <div className='h-1 w-24 bg-blue-600 mx-auto mb-8 rounded-full'></div>
            <p className='mt-4 text-xl text-gray-600 max-w-2xl mx-auto'>
              Comprehensive healthcare services tailored to your needs.
            </p>
          </div>

          <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8'>
            {servicesData.map(service => (
              <Link key={service.id} to={service.path} className='group relative'>
                <div className='bg-white/70 backdrop-blur-sm p-8 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border border-blue-50'>
                  <div className='flex flex-col items-center'>
                    {/* Service Icon */}
                    <div className='w-16 h-16 bg-gradient-to-tr from-blue-500 to-blue-600 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300 rotate-3 group-hover:rotate-0'>
                      <svg
                        xmlns='http://www.w3.org/2000/svg'
                        className='h-8 w-8 text-white'
                        fill='none'
                        viewBox='0 0 24 24'
                        stroke='currentColor'
                      >
                        {service.icon}
                      </svg>
                    </div>

                    {/* Service Title */}
                    <h3 className='text-2xl font-bold text-gray-800 mb-4 group-hover:text-blue-600 transition-colors duration-300'>
                      {service.title}
                    </h3>

                    {/* Status Badge */}
                    <div className='flex items-center gap-2 text-sm'>
                      <span className='inline-block w-2 h-2 rounded-full bg-green-500'></span>
                      <span className='text-green-600 font-medium'>{service.status}</span>
                    </div>

                    {/* Service Count */}
                    <div className='mt-4 text-blue-600 font-semibold'>{service.count}</div>

                    {/* Hover Indicator */}
                    <div className='absolute bottom-4 left-1/2 -translate-x-1/2 w-12 h-1 bg-blue-600 rounded-full scale-0 group-hover:scale-100 transition-transform duration-300'></div>
                  </div>
                </div>
              </Link>
            ))}
          </div>

          {/* View All Services Button */}
          <div className='text-center mt-12'>
            <Link
              to='/services'
              className='inline-flex items-center px-8 py-2 text-md  text-white bg-gradient-to-r from-blue-600 to-blue-700 rounded-full shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 transition-all duration-200 hover:from-blue-700 hover:to-blue-800'
            >
              View All Services
              <svg
                xmlns='http://www.w3.org/2000/svg'
                className='h-5 w-5 ml-2'
                viewBox='0 0 20 20'
                fill='currentColor'
              >
                <path
                  fillRule='evenodd'
                  d='M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z'
                  clipRule='evenodd'
                />
              </svg>
            </Link>
          </div>
        </div>
      </section>
    </>
  );
};

export default Service;
