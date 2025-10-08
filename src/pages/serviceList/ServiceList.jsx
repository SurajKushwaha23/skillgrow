import { Search, Filter } from 'lucide-react';
import { servicesData } from '../../assets/mock/mockServicesData';
import ServiceCard from '../../components/ui/service-card/ServiceCard';

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
          <h1 className='text-4xl font-bold text-gray-900 mb-4 bg-gradient-to-r from-gray-900 to-blue-900 bg-clip-text '>
            Hospital Services
          </h1>
          <p className='text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed'>
            Discover our wide range of specialized medical treatments and healthcare services
            tailored to your needs
          </p>
        </div>

        {/* Filters Section */}
        <div className='flex flex-col md:flex-row bg-blue-500/10 p-6 rounded-xl gap-4'>
          {/* Search Bar */}
          <div className='flex items-center bg-white border border-gray-300 rounded-lg shadow-sm px-4 py-2 md:flex-1'>
            <Search className='h-5 w-5 text-gray-400 mr-3' />
            <input
              type='text'
              placeholder='Search services...'
              className='w-full outline-none text-gray-700 placeholder-gray-400'
            />
          </div>

          {/* Select filters for services */}
          <div className='flex items-center md:flex-1'>
            <select className='bg-white border border-gray-300 rounded-lg shadow-sm px-4 py-2 outline-none w-full'>
              <option value=''>All Categories</option>
              <option value='cardiology'>Cardiology</option>
              <option value='neurology'>Neurology</option>
              <option value='orthopedics'>Orthopedics</option>
            </select>
          </div>

          {/* experienced filter */}
          <div className='flex items-center md:flex-1'>
            <select className='bg-white border border-gray-300 rounded-lg shadow-sm px-4 py-2 outline-none w-full'>
              <option value=''>Experience Level</option>
              <option value='junior'>Junior</option>
              <option value='mid'>Mid</option>
              <option value='senior'>Senior</option>
            </select>
          </div>
        </div>

        {/* Results Count */}
        <div className='flex flex-col sm:flex-row justify-between items-center gap-4 mb-6 p-3 '>
          <div className='flex items-center gap-3'>
            <p className='text-gray-700 font-medium'>
              Showing <span className='font-bold text-blue-600 text-lg'>{servicesData.length}</span>{' '}
              of <span className='font-bold text-gray-900'>{servicesData.length}</span> services
            </p>
          </div>

          <div className='flex items-center gap-3  px-4 py-2 '>
            <span className='w-3 h-3 bg-green-500 rounded-full animate-pulse'></span>
            <span className='text-green-800 font-medium text-sm'>All services available</span>
          </div>
        </div>

        {/* Sample Service Cards - Showing what it would look like with data */}
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12'>
          {servicesData.map(service => (
            <ServiceCard key={service.id} service={service} />
          ))}
        </div>
        {/* Empty State */}
        {servicesData.length === 0 && (
          <div className='text-center py-16'>
            <div className='max-w-md mx-auto'>
              <div className='w-20 h-20 bg-gradient-to-br from-blue-100 to-indigo-200 rounded-3xl flex items-center justify-center mx-auto mb-6 shadow-lg'>
                <Search className='h-10 w-10 text-blue-600' />
              </div>
              <h3 className='text-2xl font-bold text-gray-900 mb-3'>No matching services</h3>
              <p className='text-gray-500 mb-6 text-lg leading-relaxed'>
                We could not find any services matching your criteria. Try adjusting your search
                terms or filters.
              </p>
              <button className='inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-blue-600 to-indigo-600 text-white font-semibold rounded-xl hover:shadow-lg transform hover:-translate-y-0.5 transition-all duration-300 shadow-md'>
                Reset all filters
                <Filter className='h-4 w-4' />
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default ServiceList;
