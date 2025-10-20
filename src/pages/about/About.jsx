// eslint-disable-next-line no-unused-vars
import React from 'react';

const About = () => {
  const teamMembers = [
    {
      id: 1,
      name: 'Dr. Sarah Johnson',
      position: 'Chief Medical Director',
      specialization: 'Cardiology',
      experience: '15+ years',
      image: '/images/doctor1.jpg',
    },
    {
      id: 2,
      name: 'Dr. Michael Chen',
      position: 'Head of Surgery',
      specialization: 'Orthopedic Surgery',
      experience: '12+ years',
      image: '/images/doctor2.jpg',
    },
    {
      id: 3,
      name: 'Dr. Emily Rodriguez',
      position: 'Head of Pediatrics',
      specialization: 'Pediatric Care',
      experience: '10+ years',
      image: '/images/doctor3.jpg',
    },
  ];

  const stats = [
    { number: '50+', label: 'Expert Doctors' },
    { number: '25+', label: 'Medical Departments' },
    { number: '10,000+', label: 'Happy Patients' },
    { number: '24/7', label: 'Emergency Services' },
  ];

  const values = [
    {
      icon: '🏥',
      title: 'Patient-Centered Care',
      description: 'We put our patients at the heart of everything we do.',
    },
    {
      icon: '🔬',
      title: 'Medical Excellence',
      description: 'Committed to the highest standards of medical practice.',
    },
    {
      icon: '❤️',
      title: 'Compassionate Service',
      description: 'Treating every patient with empathy and respect.',
    },
    {
      icon: '⚡',
      title: 'Innovation',
      description: 'Embracing the latest medical technologies and treatments.',
    },
  ];

  return (
    <div className='min-h-screen bg-gray-50'>
      {/* Hero Section */}
      <section className='bg-blue-600 text-white py-20'>
        <div className='container mx-auto px-6 text-center'>
          <h1 className='text-4xl md:text-6xl font-bold mb-6'>About Our Hospital</h1>
          <p className='text-xl md:text-2xl max-w-3xl mx-auto'>
            Delivering exceptional healthcare with compassion and innovation since 1995
          </p>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className='py-16 bg-white'>
        <div className='container mx-auto px-6'>
          <div className='grid md:grid-cols-2 gap-12'>
            <div>
              <h2 className='text-3xl font-bold text-gray-800 mb-6'>Our Mission</h2>
              <p className='text-lg text-gray-600 leading-relaxed'>
                To provide comprehensive, high-quality healthcare services that are accessible,
                affordable, and compassionate. We strive to improve the health and well-being of our
                community through excellence in patient care, medical education, and research.
              </p>
            </div>
            <div>
              <h2 className='text-3xl font-bold text-gray-800 mb-6'>Our Vision</h2>
              <p className='text-lg text-gray-600 leading-relaxed'>
                To be the leading healthcare institution recognized for clinical excellence,
                innovative treatments, and outstanding patient experiences. We envision a community
                where everyone has access to exceptional medical care.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className='py-16 bg-blue-50'>
        <div className='container mx-auto px-6'>
          <div className='grid grid-cols-2 md:grid-cols-4 gap-8'>
            {stats.map((stat, index) => (
              <div key={index} className='text-center'>
                <div className='text-3xl md:text-4xl font-bold text-blue-600 mb-2'>
                  {stat.number}
                </div>
                <div className='text-gray-600 font-medium'>{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Values */}
      <section className='py-16 bg-white'>
        <div className='container mx-auto px-6'>
          <h2 className='text-3xl font-bold text-center text-gray-800 mb-12'>Our Values</h2>
          <div className='grid md:grid-cols-2 lg:grid-cols-4 gap-8'>
            {values.map((value, index) => (
              <div
                key={index}
                className='text-center p-6 bg-gray-50 rounded-lg hover:shadow-lg transition-shadow'
              >
                <div className='text-4xl mb-4'>{value.icon}</div>
                <h3 className='text-xl font-semibold text-gray-800 mb-3'>{value.title}</h3>
                <p className='text-gray-600'>{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Medical Team */}
      <section className='py-16 bg-gray-50'>
        <div className='container mx-auto px-6'>
          <h2 className='text-3xl font-bold text-center text-gray-800 mb-4'>
            Meet Our Medical Team
          </h2>
          <p className='text-lg text-gray-600 text-center mb-12 max-w-2xl mx-auto'>
            Our team of highly qualified healthcare professionals is dedicated to providing you with
            the best possible medical care.
          </p>

          <div className='grid md:grid-cols-2 lg:grid-cols-3 gap-8'>
            {teamMembers.map(member => (
              <div
                key={member.id}
                className='bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow'
              >
                <div className='h-48 bg-gray-200 flex items-center justify-center'>
                  {/* Placeholder for doctor image */}
                  <div className='text-gray-400 text-6xl'>👨‍⚕️</div>
                </div>
                <div className='p-6'>
                  <h3 className='text-xl font-semibold text-gray-800 mb-2'>{member.name}</h3>
                  <p className='text-blue-600 font-medium mb-1'>{member.position}</p>
                  <p className='text-gray-600 mb-2'>Specialization: {member.specialization}</p>
                  <p className='text-gray-500 text-sm'>Experience: {member.experience}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Facilities */}
      <section className='py-16 bg-white'>
        <div className='container mx-auto px-6'>
          <h2 className='text-3xl font-bold text-center text-gray-800 mb-12'>Our Facilities</h2>
          <div className='grid md:grid-cols-2 lg:grid-cols-3 gap-8'>
            <div className='text-center p-6'>
              <div className='text-4xl text-blue-600 mb-4'>🏥</div>
              <h3 className='text-xl font-semibold mb-3'>Advanced ICU</h3>
              <p className='text-gray-600'>
                State-of-the-art intensive care units with 24/7 monitoring
              </p>
            </div>
            <div className='text-center p-6'>
              <div className='text-4xl text-blue-600 mb-4'>🔬</div>
              <h3 className='text-xl font-semibold mb-3'>Modern Laboratory</h3>
              <p className='text-gray-600'>Fully equipped diagnostic and research laboratory</p>
            </div>
            <div className='text-center p-6'>
              <div className='text-4xl text-blue-600 mb-4'>💊</div>
              <h3 className='text-xl font-semibold mb-3'>Pharmacy</h3>
              <p className='text-gray-600'>24/7 pharmacy services with genuine medicines</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className='py-16 bg-blue-600 text-white'>
        <div className='container mx-auto px-6 text-center'>
          <h2 className='text-3xl font-bold mb-6'>Ready to Get the Care You Deserve?</h2>
          <p className='text-xl mb-8 max-w-2xl mx-auto'>
            Contact us today to schedule an appointment or learn more about our services.
          </p>
          <div className='flex flex-col sm:flex-row gap-4 justify-center'>
            <button className='bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors'>
              Book Appointment
            </button>
            <button className='border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition-colors'>
              Contact Us
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
