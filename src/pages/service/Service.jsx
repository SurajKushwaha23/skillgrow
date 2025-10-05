import { Link } from 'react-router-dom';
import { servicesData } from '../../assets/mock/mockServicesData';

const Service = () => {
  return (
    <>
      <section className='bg-white py-16'>
        <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
          {/* Header Section */}
          <div className='text-center mb-16'>
            <span className='inline-block px-4 py-2 bg-blue-50 text-blue-700 rounded-full text-sm font-semibold mb-4'>
              Our Services
            </span>
            <h2 className='text-4xl md:text-5xl font-bold text-gray-900 mb-6'>
              Comprehensive <span className='text-blue-600'>Healthcare</span> Services
            </h2>
            <div className='w-24 h-1 bg-blue-600 mx-auto mb-6'></div>
            <p className='text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed'>
              Professional medical services designed to meet your health and wellness needs with
              care and expertise.
            </p>
          </div>

          {/* Services Grid */}
          <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12'>
            {servicesData.map(service => (
              <Link key={service.id} to={service.path} className='group'>
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
                      {service.icon.map((pathProps, index) => (
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
                    {service.title}
                  </h3>

                  {/* Status Indicator */}
                  <div className='flex items-center gap-2 mb-4'>
                    <div className='w-2 h-2 bg-green-500 rounded-full'></div>
                    <span className='text-green-600 font-medium text-sm'>{service.status}</span>
                  </div>

                  {/* Service Count */}
                  <div className='text-2xl font-bold text-blue-600 mb-4'>{service.count}</div>

                  {/* Subtle Divider */}
                  <div className='w-12 h-0.5 bg-gray-200 group-hover:bg-blue-400 transition-colors duration-200 mt-2'></div>
                </div>
              </Link>
            ))}
          </div>

          {/* Bottom Section */}
          <div className='bg-gray-50 rounded-2xl p-8 text-center'>
            <h3 className='text-2xl font-bold text-gray-900 mb-4'>Need More Information?</h3>
            <p className='text-gray-600 mb-6 max-w-2xl mx-auto'>
              Our team of healthcare professionals is here to answer your questions and help you
              find the right services for your needs.
            </p>
            <div className='flex flex-col sm:flex-row gap-4 justify-center'>
              <Link
                to='/services'
                className='inline-flex items-center justify-center px-8 py-3 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition-colors duration-200'
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
              <Link
                to='/contact'
                className='inline-flex items-center justify-center px-8 py-3 border border-gray-300 text-gray-700 font-semibold rounded-lg hover:border-gray-400 hover:bg-white transition-colors duration-200'
              >
                Contact Us
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Service;
