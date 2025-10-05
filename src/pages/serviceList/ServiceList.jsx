import React from 'react';
import { Search, Filter, Grid, List, ChevronDown, Star, Clock, Users } from 'lucide-react';

const ServiceList = () => {
  return (
    <div className='min-h-screen bg-gradient-to-br from-blue-50 to-indigo-50 py-8'>
      <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
        {/* Header Section */}
        <div className='mb-12 text-center'>
          <div className='inline-flex items-center gap-2 bg-blue-100 text-blue-800 px-4 py-2 rounded-full text-sm font-medium mb-4'>
            <span className='w-2 h-2 bg-blue-600 rounded-full'></span>
            Comprehensive Healthcare Solutions
          </div>
          <h1 className='text-4xl font-bold text-gray-900 mb-4 bg-gradient-to-r from-gray-900 to-blue-900 bg-clip-text text-transparent'>
            Hospital Services
          </h1>
          <p className='text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed'>
            Discover our wide range of specialized medical treatments and healthcare services
            tailored to your needs
          </p>
        </div>

        {/* Controls Section */}
        <div className='bg-white/80 backdrop-blur-sm rounded-2xl shadow-lg border border-white/60 p-6 mb-12'>
          <div className='flex flex-col lg:flex-row gap-6 justify-between items-start lg:items-center'>
            {/* Search Bar */}
            <div className='flex-1 w-full lg:max-w-lg'>
              <div className='relative group'>
                <Search className='absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5 transition-colors duration-300 group-focus-within:text-blue-500' />
                <input
                  type='text'
                  placeholder='Search services, treatments, or departments...'
                  className='w-full pl-12 pr-6 py-4 border border-gray-200 rounded-xl focus:ring-3 focus:ring-blue-200 focus:border-blue-500 transition-all duration-300 bg-white/50 backdrop-blur-sm shadow-sm hover:shadow-md'
                />
              </div>
            </div>

            {/* Controls Group */}
            <div className='flex flex-col sm:flex-row gap-4 w-full lg:w-auto'>
              {/* Department Filter */}
              <div className='relative group'>
                <button className='flex items-center gap-3 px-5 py-3.5 border border-gray-200 rounded-xl hover:border-blue-300 hover:bg-blue-50 transition-all duration-300 shadow-sm hover:shadow-md w-full sm:w-auto group'>
                  <Filter className='h-4 w-4 text-gray-600 group-hover:text-blue-600 transition-colors duration-300' />
                  <span className='text-gray-700 font-medium'>Department</span>
                  <ChevronDown className='h-4 w-4 text-gray-500 transition-transform duration-300 group-hover:rotate-180 group-hover:text-blue-600' />
                </button>
              </div>

              {/* Sort Dropdown */}
              <div className='relative group'>
                <select className='px-5 py-3.5 border border-gray-200 rounded-xl focus:ring-3 focus:ring-blue-200 focus:border-blue-500 transition-all duration-300 appearance-none bg-white shadow-sm hover:shadow-md cursor-pointer w-full sm:w-auto pr-10'>
                  <option value='name-asc'>Name (A-Z)</option>
                  <option value='name-desc'>Name (Z-A)</option>
                  <option value='department-asc'>Department (A-Z)</option>
                  <option value='department-desc'>Department (Z-A)</option>
                </select>
                <ChevronDown className='absolute right-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-500 pointer-events-none transition-transform duration-300 group-hover:rotate-180' />
              </div>

              {/* View Toggle */}
              <div className='flex border border-gray-200 rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-all duration-300 w-full sm:w-auto'>
                <button
                  className='p-3.5 transition-all duration-300 hover:bg-blue-50 border-r border-gray-200 hover:text-blue-600'
                  aria-label='Grid view'
                >
                  <Grid className='h-4 w-4' />
                </button>
                <button
                  className='p-3.5 transition-all duration-300 hover:bg-blue-50 hover:text-blue-600'
                  aria-label='List view'
                >
                  <List className='h-4 w-4' />
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Results Count */}
        <div className='flex justify-between items-center mb-8'>
          <p className='text-gray-600 font-medium'>
            Showing <span className='font-bold text-blue-600'>12</span> of{' '}
            <span className='font-bold text-gray-900'>45</span> services
          </p>
          <div className='flex items-center gap-2 text-sm text-gray-500'>
            <span className='w-2 h-2 bg-green-500 rounded-full animate-pulse'></span>
            All services available
          </div>
        </div>

        {/* Sample Service Cards - Showing what it would look like with data */}
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12'>
          {/* Sample Card 1 */}
          <div className='bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 border border-gray-100 overflow-hidden group cursor-pointer'>
            <div className='h-2 bg-gradient-to-r from-blue-500 to-purple-600'></div>
            <div className='p-6'>
              <div className='flex items-start justify-between mb-4'>
                <h3 className='text-xl font-bold text-gray-900 group-hover:text-blue-600 transition-colors duration-300'>
                  Cardiology
                </h3>
                <div className='w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center group-hover:bg-blue-200 transition-colors duration-300'>
                  <Users className='h-6 w-6 text-blue-600' />
                </div>
              </div>
              <p className='text-gray-600 mb-4 line-clamp-2 leading-relaxed'>
                Comprehensive heart care with advanced diagnostic and treatment facilities.
              </p>
              <div className='flex items-center justify-between text-sm text-gray-500'>
                <div className='flex items-center gap-1'>
                  <Clock className='h-4 w-4' />
                  <span>24/7 Available</span>
                </div>
                <div className='flex items-center gap-1'>
                  <Star className='h-4 w-4 text-yellow-500 fill-current' />
                  <span className='font-medium'>4.9</span>
                </div>
              </div>
            </div>
          </div>

          {/* Sample Card 2 */}
          <div className='bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 border border-gray-100 overflow-hidden group cursor-pointer'>
            <div className='h-2 bg-gradient-to-r from-green-500 to-emerald-600'></div>
            <div className='p-6'>
              <div className='flex items-start justify-between mb-4'>
                <h3 className='text-xl font-bold text-gray-900 group-hover:text-green-600 transition-colors duration-300'>
                  Neurology
                </h3>
                <div className='w-12 h-12 bg-green-100 rounded-xl flex items-center justify-center group-hover:bg-green-200 transition-colors duration-300'>
                  <Users className='h-6 w-6 text-green-600' />
                </div>
              </div>
              <p className='text-gray-600 mb-4 line-clamp-2 leading-relaxed'>
                Expert care for brain and nervous system disorders with cutting-edge technology.
              </p>
              <div className='flex items-center justify-between text-sm text-gray-500'>
                <div className='flex items-center gap-1'>
                  <Clock className='h-4 w-4' />
                  <span>Mon-Fri</span>
                </div>
                <div className='flex items-center gap-1'>
                  <Star className='h-4 w-4 text-yellow-500 fill-current' />
                  <span className='font-medium'>4.8</span>
                </div>
              </div>
            </div>
          </div>

          {/* Sample Card 3 */}
          <div className='bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 border border-gray-100 overflow-hidden group cursor-pointer'>
            <div className='h-2 bg-gradient-to-r from-purple-500 to-pink-600'></div>
            <div className='p-6'>
              <div className='flex items-start justify-between mb-4'>
                <h3 className='text-xl font-bold text-gray-900 group-hover:text-purple-600 transition-colors duration-300'>
                  Pediatrics
                </h3>
                <div className='w-12 h-12 bg-purple-100 rounded-xl flex items-center justify-center group-hover:bg-purple-200 transition-colors duration-300'>
                  <Users className='h-6 w-6 text-purple-600' />
                </div>
              </div>
              <p className='text-gray-600 mb-4 line-clamp-2 leading-relaxed'>
                Specialized healthcare services for children from infancy through adolescence.
              </p>
              <div className='flex items-center justify-between text-sm text-gray-500'>
                <div className='flex items-center gap-1'>
                  <Clock className='h-4 w-4' />
                  <span>24/7 Available</span>
                </div>
                <div className='flex items-center gap-1'>
                  <Star className='h-4 w-4 text-yellow-500 fill-current' />
                  <span className='font-medium'>4.9</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Empty State */}
        <div className='text-center py-16'>
          <div className='max-w-md mx-auto'>
            <div className='w-20 h-20 bg-gradient-to-br from-blue-100 to-indigo-200 rounded-3xl flex items-center justify-center mx-auto mb-6 shadow-lg'>
              <Search className='h-10 w-10 text-blue-600' />
            </div>
            <h3 className='text-2xl font-bold text-gray-900 mb-3'>No matching services</h3>
            <p className='text-gray-500 mb-6 text-lg leading-relaxed'>
              We couldn't find any services matching your criteria. Try adjusting your search terms
              or filters.
            </p>
            <button className='inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-blue-600 to-indigo-600 text-white font-semibold rounded-xl hover:shadow-lg transform hover:-translate-y-0.5 transition-all duration-300 shadow-md'>
              Reset all filters
              <Filter className='h-4 w-4' />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServiceList;
