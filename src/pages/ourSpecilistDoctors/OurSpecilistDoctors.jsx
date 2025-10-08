import { useState } from 'react';

// Mock data for doctors
const initialDoctors = [
  {
    id: 1,
    name: 'Dr. Sarah Johnson',
    specialty: 'Cardiologist',
    experience: 15,
    rating: 4.8,
    image:
      'https://images.unsplash.com/photo-1559839734-2b71ea197ec2?w=150&h=150&fit=crop&crop=face',
    availability: 'Available Today',
    education: 'MD, Harvard Medical School',
  },
  {
    id: 2,
    name: 'Dr. Michael Chen',
    specialty: 'Neurologist',
    experience: 12,
    rating: 4.9,
    image:
      'https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?w=150&h=150&fit=crop&crop=face',
    availability: 'Available Tomorrow',
    education: 'MD, Stanford University',
  },
  {
    id: 3,
    name: 'Dr. Emily Rodriguez',
    specialty: 'Pediatrician',
    experience: 8,
    rating: 4.7,
    image:
      'https://images.unsplash.com/photo-1594824947933-d0501ba2fe65?w=150&h=150&fit=crop&crop=face',
    availability: 'Available Today',
    education: 'MD, Johns Hopkins University',
  },
  {
    id: 4,
    name: 'Dr. James Wilson',
    specialty: 'Orthopedic Surgeon',
    experience: 20,
    rating: 4.9,
    image:
      'https://images.unsplash.com/photo-1582750433449-648ed127bb54?w=150&h=150&fit=crop&crop=face',
    availability: 'Available Next Week',
    education: 'MD, Mayo Clinic',
  },
];

const OurSpecialistDoctors = () => {
  const [doctors, setDoctors] = useState(initialDoctors);
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedSpecialty, setSelectedSpecialty] = useState('All');

  const specialties = ['All', 'Cardiologist', 'Neurologist', 'Pediatrician', 'Orthopedic Surgeon'];

  // Filter doctors based on search and specialty
  const filteredDoctors = doctors.filter(doctor => {
    const matchesSearch =
      doctor.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      doctor.specialty.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesSpecialty = selectedSpecialty === 'All' || doctor.specialty === selectedSpecialty;

    return matchesSearch && matchesSpecialty;
  });

  const StarRating = ({ rating }) => {
    return (
      <div className='flex items-center'>
        {[...Array(5)].map((_, index) => (
          <svg
            key={index}
            className={`w-4 h-4 ${
              index < Math.floor(rating) ? 'text-yellow-400' : 'text-gray-300'
            }`}
            fill='currentColor'
            viewBox='0 0 20 20'
          >
            <path d='M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z' />
          </svg>
        ))}
        <span className='ml-1 text-sm text-gray-600'>({rating})</span>
      </div>
    );
  };

  return (
    <div className='min-h-screen bg-gray-50'>
      {/* Beautiful Banner */}
      <div className='bg-gradient-to-r from-blue-600 to-purple-700 text-white py-16'>
        <div className='container mx-auto px-4'>
          <div className='max-w-4xl mx-auto text-center'>
            <h1 className='text-4xl md:text-5xl font-bold mb-4'>Find Your Perfect Doctor</h1>
            <p className='text-xl mb-8 opacity-90'>
              Experienced medical professionals ready to provide you with the best care
            </p>
            <div className='bg-white rounded-lg p-2 max-w-2xl mx-auto shadow-lg'>
              <div className='flex flex-col md:flex-row gap-2'>
                <input
                  type='text'
                  placeholder='Search doctors by name or specialty...'
                  className='flex-1 px-4 py-3 text-gray-800 rounded-lg border-none focus:outline-none focus:ring-2 focus:ring-blue-500'
                  value={searchTerm}
                  onChange={e => setSearchTerm(e.target.value)}
                />
                <select
                  className='px-4 py-3 text-gray-800 rounded-lg border-none focus:outline-none focus:ring-2 focus:ring-blue-500'
                  value={selectedSpecialty}
                  onChange={e => setSelectedSpecialty(e.target.value)}
                >
                  {specialties.map(specialty => (
                    <option key={specialty} value={specialty}>
                      {specialty}
                    </option>
                  ))}
                </select>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Stats Section */}
      <div className='bg-white shadow-sm'>
        <div className='container mx-auto px-4 py-8'>
          <div className='grid grid-cols-2 md:grid-cols-4 gap-6 text-center'>
            <div>
              <div className='text-2xl font-bold text-blue-600'>{doctors.length}+</div>
              <div className='text-gray-600'>Expert Doctors</div>
            </div>
            <div>
              <div className='text-2xl font-bold text-green-600'>24/7</div>
              <div className='text-gray-600'>Availability</div>
            </div>
            <div>
              <div className='text-2xl font-bold text-purple-600'>98%</div>
              <div className='text-gray-600'>Patient Satisfaction</div>
            </div>
            <div>
              <div className='text-2xl font-bold text-orange-600'>15+</div>
              <div className='text-gray-600'>Specialties</div>
            </div>
          </div>
        </div>
      </div>

      {/* Doctors List */}
      <div className='px-4 py-12'>
        <div className='flex justify-between items-center mb-8'>
          <h2 className='text-3xl font-bold text-gray-800'>Our Medical Team</h2>
          <div className='text-gray-600'>Showing {filteredDoctors.length} doctors</div>
        </div>

        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 gap-6'>
          {filteredDoctors.map(doctor => (
            <div
              key={doctor.id}
              className='bg-white rounded-xl shadow-md hover:shadow-lg transition-all duration-300 overflow-hidden border border-gray-100'
            >
              <div className='p-6'>
                <div className='flex items-start space-x-4'>
                  <img
                    src={doctor.image}
                    alt={doctor.name}
                    className='w-20 h-20 rounded-full object-cover border-4 border-blue-100'
                  />
                  <div className='flex-1'>
                    <h3 className='text-xl font-semibold text-gray-800 mb-1'>{doctor.name}</h3>
                    <p className='text-blue-600 font-medium mb-2'>{doctor.specialty}</p>
                    <StarRating rating={doctor.rating} />
                  </div>
                </div>

                <div className='mt-4 space-y-2'>
                  <div className='flex items-center text-sm text-gray-600'>
                    <svg
                      className='w-4 h-4 mr-2 text-green-500'
                      fill='none'
                      stroke='currentColor'
                      viewBox='0 0 24 24'
                    >
                      <path
                        strokeLinecap='round'
                        strokeLinejoin='round'
                        strokeWidth={2}
                        d='M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z'
                      />
                    </svg>
                    {doctor.experience} years experience
                  </div>
                  <div className='flex items-center text-sm text-gray-600'>
                    <svg
                      className='w-4 h-4 mr-2 text-purple-500'
                      fill='none'
                      stroke='currentColor'
                      viewBox='0 0 24 24'
                    >
                      <path
                        strokeLinecap='round'
                        strokeLinejoin='round'
                        strokeWidth={2}
                        d='M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4'
                      />
                    </svg>
                    {doctor.education}
                  </div>
                  <div className='flex items-center text-sm text-gray-600'>
                    <svg
                      className='w-4 h-4 mr-2 text-blue-500'
                      fill='none'
                      stroke='currentColor'
                      viewBox='0 0 24 24'
                    >
                      <path
                        strokeLinecap='round'
                        strokeLinejoin='round'
                        strokeWidth={2}
                        d='M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z'
                      />
                    </svg>
                    {doctor.availability}
                  </div>
                </div>

                <div className='mt-6 flex space-x-3'>
                  <button className='flex-1 bg-blue-600 hover:bg-blue-700 text-white py-2 px-4 rounded-lg transition duration-200 font-medium'>
                    Book Appointment
                  </button>
                  <button className='bg-gray-100 hover:bg-gray-200 text-gray-700 py-2 px-4 rounded-lg transition duration-200'>
                    Profile
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {filteredDoctors.length === 0 && (
          <div className='text-center py-12'>
            <div className='text-gray-400 text-6xl mb-4'>👨‍⚕️</div>
            <h3 className='text-xl font-semibold text-gray-600 mb-2'>No doctors found</h3>
            <p className='text-gray-500'>Try adjusting your search criteria or filters</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default OurSpecialistDoctors;
