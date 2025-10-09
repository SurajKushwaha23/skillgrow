// AppointmentForm.jsx
import React, { useState, useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { Calendar, Clock, User, Phone, Mail, MapPin, Stethoscope, AlertCircle } from 'lucide-react';

const AppointmentForm = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [selectedDepartment, setSelectedDepartment] = useState('');

  const {
    register,
    handleSubmit,
    watch,
    setValue,
    formState: { errors },
    reset,
    trigger,
  } = useForm({
    mode: 'onChange',
    defaultValues: {
      patientName: '',
      phone: '',
      email: '',
      department: '',
      doctor: '',
      appointmentDate: '',
      appointmentTime: '',
      symptoms: '',
      priority: 'normal',
      address: '',
      emergencyContact: '',
    },
  });

  // Mock data - in production, this would come from an API
  const departments = [
    { id: 'cardiology', name: 'Cardiology', icon: '❤️' },
    { id: 'neurology', name: 'Neurology', icon: '🧠' },
    { id: 'orthopedics', name: 'Orthopedics', icon: '🦴' },
    { id: 'pediatrics', name: 'Pediatrics', icon: '👶' },
    { id: 'dermatology', name: 'Dermatology', icon: '🌟' },
    { id: 'emergency', name: 'Emergency Care', icon: '🚑' },
    { id: 'surgery', name: 'General Surgery', icon: '🔪' },
    { id: 'gastro', name: 'Gastroenterology', icon: '🍃' },
  ];

  const doctors = {
    cardiology: [
      {
        id: 'dr_smith',
        name: 'Dr. John Smith',
        specialization: 'Cardiologist',
        experience: '15 years',
        availability: ['09:00', '10:00', '14:00', '15:00'],
      },
      {
        id: 'dr_johnson',
        name: 'Dr. Sarah Johnson',
        specialization: 'Cardiac Surgeon',
        experience: '12 years',
        availability: ['11:00', '13:00', '16:00'],
      },
    ],
    neurology: [
      {
        id: 'dr_williams',
        name: 'Dr. Michael Williams',
        specialization: 'Neurologist',
        experience: '18 years',
        availability: ['08:00', '10:30', '14:00', '17:00'],
      },
      {
        id: 'dr_garcia',
        name: 'Dr. Maria Garcia',
        specialization: 'Neurosurgeon',
        experience: '20 years',
        availability: ['09:00', '11:30', '15:00'],
      },
    ],
    orthopedics: [
      {
        id: 'dr_brown',
        name: 'Dr. Emily Brown',
        specialization: 'Orthopedic Surgeon',
        experience: '10 years',
        availability: ['08:30', '11:30', '14:30', '16:30'],
      },
      {
        id: 'dr_taylor',
        name: 'Dr. James Taylor',
        specialization: 'Sports Medicine',
        experience: '8 years',
        availability: ['09:30', '13:00', '15:30'],
      },
    ],
    pediatrics: [
      {
        id: 'dr_davis',
        name: 'Dr. Jennifer Davis',
        specialization: 'Pediatrician',
        experience: '14 years',
        availability: ['08:00', '10:00', '13:00', '15:00'],
      },
    ],
    dermatology: [
      {
        id: 'dr_miller',
        name: 'Dr. Robert Miller',
        specialization: 'Dermatologist',
        experience: '16 years',
        availability: ['09:00', '11:00', '14:00', '16:00'],
      },
    ],
    emergency: [
      {
        id: 'emergency',
        name: 'Emergency Department',
        specialization: 'Emergency Medicine',
        experience: '24/7',
        availability: ['00:00', '23:59'],
      },
    ],
    surgery: [
      {
        id: 'dr_anderson',
        name: 'Dr. Thomas Anderson',
        specialization: 'General Surgeon',
        experience: '22 years',
        availability: ['08:00', '10:30', '14:00'],
      },
    ],
    gastro: [
      {
        id: 'dr_wilson',
        name: 'Dr. Patricia Wilson',
        specialization: 'Gastroenterologist',
        experience: '17 years',
        availability: ['09:00', '11:30', '15:00', '16:30'],
      },
    ],
  };

  const timeSlots = [
    '08:00',
    '08:30',
    '09:00',
    '09:30',
    '10:00',
    '10:30',
    '11:00',
    '11:30',
    '12:00',
    '12:30',
    '13:00',
    '13:30',
    '14:00',
    '14:30',
    '15:00',
    '15:30',
    '16:00',
    '16:30',
    '17:00',
    '17:30',
  ];

  // Watch department changes
  const watchedDepartment = watch('department');
  const watchedDoctor = watch('doctor');

  useEffect(() => {
    if (watchedDepartment) {
      setSelectedDepartment(watchedDepartment);
      // Reset doctor when department changes
      setValue('doctor', '');
    }
  }, [watchedDepartment, setValue]);

  const getAvailableDoctors = () => {
    return doctors[watchedDepartment] || [];
  };

  const getAvailableTimeSlots = () => {
    if (!watchedDoctor) return timeSlots;

    const selectedDoctor = getAvailableDoctors().find(doc => doc.id === watchedDoctor);
    return selectedDoctor ? selectedDoctor.availability : timeSlots;
  };

  const getMinDate = () => {
    const today = new Date();
    return today.toISOString().split('T')[0];
  };

  const getMaxDate = () => {
    const maxDate = new Date();
    maxDate.setMonth(maxDate.getMonth() + 3);
    return maxDate.toISOString().split('T')[0];
  };

  const formatPhoneNumber = value => {
    const phoneNumber = value.replace(/\D/g, '');
    const phoneNumberLength = phoneNumber.length;

    if (phoneNumberLength < 4) return phoneNumber;
    if (phoneNumberLength < 7) {
      return `(${phoneNumber.slice(0, 3)}) ${phoneNumber.slice(3)}`;
    }
    return `(${phoneNumber.slice(0, 3)}) ${phoneNumber.slice(3, 6)}-${phoneNumber.slice(6, 10)}`;
  };

  const onSubmit = async data => {
    setIsSubmitting(true);

    try {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 2000));

      console.log('Appointment data:', data);

      setIsSuccess(true);
      reset();
    } catch (error) {
      console.error('Error submitting appointment:', error);
    } finally {
      setIsSubmitting(false);
    }
  };

  if (isSuccess) {
    return (
      <div className='max-w-2xl mx-auto bg-white rounded-2xl shadow-xl p-8 text-center'>
        <div className='w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6'>
          <svg
            className='w-10 h-10 text-green-500'
            fill='none'
            stroke='currentColor'
            viewBox='0 0 24 24'
          >
            <path
              strokeLinecap='round'
              strokeLinejoin='round'
              strokeWidth='2'
              d='M5 13l4 4L19 7'
            ></path>
          </svg>
        </div>
        <h2 className='text-3xl font-bold text-gray-800 mb-4'>Appointment Booked Successfully!</h2>
        <p className='text-gray-600 mb-2 text-lg'>
          Your appointment has been scheduled successfully.
        </p>
        <p className='text-gray-500 mb-6'>You will receive a confirmation email and SMS shortly.</p>
        <button
          onClick={() => setIsSuccess(false)}
          className='bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors shadow-md'
        >
          Book Another Appointment
        </button>
      </div>
    );
  }

  return (
    <div className='max-w-6xl mx-auto bg-white rounded-2xl shadow-xl overflow-hidden'>
      {/* Header */}
      {/* <div className='bg-gradient-to-r from-blue-600 to-purple-700 text-white p-8'>
        <div className='flex items-center justify-between'>
          <div>
            <h1 className='text-4xl font-bold mb-2'>Book Your Medical Appointment</h1>
            <p className='text-blue-100 text-lg'>
              Schedule your visit with our expert healthcare team
            </p>
          </div>
          <div className='bg-white/20 p-4 rounded-xl'>
            <Stethoscope className='w-8 h-8' />
          </div>
        </div>
      </div> */}

      {/* Form */}
      <form onSubmit={handleSubmit(onSubmit)} className='p-8'>
        <div className='grid grid-cols-1 xl:grid-cols-2 gap-8'>
          {/* Patient Information */}
          <div className='space-y-6'>
            <h2 className='text-2xl font-semibold text-gray-800 border-b-2 border-blue-200 pb-3'>
              Patient Information
            </h2>

            {/* Patient Name */}
            <div>
              <label className='flex items-center text-sm font-semibold text-gray-700 mb-3'>
                <User className='w-5 h-5 mr-2 text-blue-600' />
                Full Name *
              </label>
              <input
                type='text'
                {...register('patientName', {
                  required: 'Patient name is required',
                  minLength: {
                    value: 2,
                    message: 'Name must be at least 2 characters',
                  },
                })}
                className={`w-full px-4 py-3 border-2 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all ${
                  errors.patientName
                    ? 'border-red-500 bg-red-50'
                    : 'border-gray-300 focus:border-blue-500'
                }`}
                placeholder='Enter your full name'
              />
              {errors.patientName && (
                <p className='flex items-center text-red-500 text-sm mt-2'>
                  <AlertCircle className='w-4 h-4 mr-1' />
                  {errors.patientName.message}
                </p>
              )}
            </div>

            {/* Contact Information */}
            <div className='grid grid-cols-1 md:grid-cols-2 gap-4'>
              <div>
                <label className='flex items-center text-sm font-semibold text-gray-700 mb-3'>
                  <Phone className='w-5 h-5 mr-2 text-blue-600' />
                  Phone Number *
                </label>
                <input
                  type='tel'
                  {...register('phone', {
                    required: 'Phone number is required',
                    pattern: {
                      value: /^\(\d{3}\) \d{3}-\d{4}$/,
                      message: 'Please enter a valid phone number',
                    },
                  })}
                  onChange={e => {
                    const formatted = formatPhoneNumber(e.target.value);
                    e.target.value = formatted;
                  }}
                  className={`w-full px-4 py-3 border-2 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all ${
                    errors.phone
                      ? 'border-red-500 bg-red-50'
                      : 'border-gray-300 focus:border-blue-500'
                  }`}
                  placeholder='(555) 123-4567'
                />
                {errors.phone && (
                  <p className='flex items-center text-red-500 text-sm mt-2'>
                    <AlertCircle className='w-4 h-4 mr-1' />
                    {errors.phone.message}
                  </p>
                )}
              </div>

              <div>
                <label className='flex items-center text-sm font-semibold text-gray-700 mb-3'>
                  <Mail className='w-5 h-5 mr-2 text-blue-600' />
                  Email Address *
                </label>
                <input
                  type='email'
                  {...register('email', {
                    required: 'Email is required',
                    pattern: {
                      value: /^\S+@\S+\.\S+$/,
                      message: 'Please enter a valid email address',
                    },
                  })}
                  className={`w-full px-4 py-3 border-2 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all ${
                    errors.email
                      ? 'border-red-500 bg-red-50'
                      : 'border-gray-300 focus:border-blue-500'
                  }`}
                  placeholder='your.email@example.com'
                />
                {errors.email && (
                  <p className='flex items-center text-red-500 text-sm mt-2'>
                    <AlertCircle className='w-4 h-4 mr-1' />
                    {errors.email.message}
                  </p>
                )}
              </div>
            </div>

            {/* Emergency Contact */}
            <div>
              <label className='text-sm font-semibold text-gray-700 mb-3 block'>
                Emergency Contact Number
              </label>
              <input
                type='tel'
                {...register('emergencyContact')}
                onChange={e => {
                  const formatted = formatPhoneNumber(e.target.value);
                  e.target.value = formatted;
                }}
                className='w-full px-4 py-3 border-2 border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all'
                placeholder='(555) 987-6543'
              />
            </div>

            {/* Address */}
            <div>
              <label className='flex items-center text-sm font-semibold text-gray-700 mb-3'>
                <MapPin className='w-5 h-5 mr-2 text-blue-600' />
                Residential Address
              </label>
              <textarea
                {...register('address')}
                rows='3'
                className='w-full px-4 py-3 border-2 border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all'
                placeholder='Enter your complete residential address'
              />
            </div>
          </div>

          {/* Appointment Details */}
          <div className='space-y-6'>
            <h2 className='text-2xl font-semibold text-gray-800 border-b-2 border-blue-200 pb-3'>
              Appointment Details
            </h2>

            {/* Department Selection */}
            <div>
              <label className='text-sm font-semibold text-gray-700 mb-3 block'>
                Medical Department *
              </label>
              <div className='grid grid-cols-2 md:grid-cols-4 gap-3'>
                {departments.map(dept => (
                  <label
                    key={dept.id}
                    className={`relative flex flex-col items-center p-4 border-2 rounded-xl cursor-pointer transition-all ${
                      watchedDepartment === dept.id
                        ? 'border-blue-500 bg-blue-50 shadow-md'
                        : 'border-gray-300 hover:border-blue-300 hover:bg-gray-50'
                    }`}
                  >
                    <input
                      type='radio'
                      {...register('department', { required: 'Please select a department' })}
                      value={dept.id}
                      className='absolute opacity-0'
                    />
                    <span className='text-2xl mb-2'>{dept.icon}</span>
                    <span className='text-sm font-medium text-center'>{dept.name}</span>
                  </label>
                ))}
              </div>
              {errors.department && (
                <p className='flex items-center text-red-500 text-sm mt-2'>
                  <AlertCircle className='w-4 h-4 mr-1' />
                  {errors.department.message}
                </p>
              )}
            </div>

            {/* Doctor Selection */}
            <div>
              <label className='text-sm font-semibold text-gray-700 mb-3 block'>
                Select Doctor *
              </label>
              <select
                {...register('doctor', { required: 'Please select a doctor' })}
                disabled={!watchedDepartment}
                className={`w-full px-4 py-3 border-2 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all ${
                  errors.doctor
                    ? 'border-red-500 bg-red-50'
                    : 'border-gray-300 focus:border-blue-500'
                } ${!watchedDepartment ? 'bg-gray-100 cursor-not-allowed opacity-60' : ''}`}
              >
                <option value=''>Select a Doctor</option>
                {getAvailableDoctors().map(doc => (
                  <option key={doc.id} value={doc.id}>
                    {doc.name} - {doc.specialization} ({doc.experience})
                  </option>
                ))}
              </select>
              {errors.doctor && (
                <p className='flex items-center text-red-500 text-sm mt-2'>
                  <AlertCircle className='w-4 h-4 mr-1' />
                  {errors.doctor.message}
                </p>
              )}
            </div>

            {/* Date and Time */}
            <div className='grid grid-cols-1 md:grid-cols-2 gap-4'>
              <div>
                <label className='flex items-center text-sm font-semibold text-gray-700 mb-3'>
                  <Calendar className='w-5 h-5 mr-2 text-blue-600' />
                  Appointment Date *
                </label>
                <input
                  type='date'
                  {...register('appointmentDate', {
                    required: 'Please select an appointment date',
                    validate: {
                      futureDate: value => {
                        const selectedDate = new Date(value);
                        const today = new Date();
                        today.setHours(0, 0, 0, 0);
                        return selectedDate >= today || 'Appointment date cannot be in the past';
                      },
                    },
                  })}
                  min={getMinDate()}
                  max={getMaxDate()}
                  className={`w-full px-4 py-3 border-2 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all ${
                    errors.appointmentDate
                      ? 'border-red-500 bg-red-50'
                      : 'border-gray-300 focus:border-blue-500'
                  }`}
                />
                {errors.appointmentDate && (
                  <p className='flex items-center text-red-500 text-sm mt-2'>
                    <AlertCircle className='w-4 h-4 mr-1' />
                    {errors.appointmentDate.message}
                  </p>
                )}
              </div>

              <div>
                <label className='flex items-center text-sm font-semibold text-gray-700 mb-3'>
                  <Clock className='w-5 h-5 mr-2 text-blue-600' />
                  Preferred Time *
                </label>
                <select
                  {...register('appointmentTime', {
                    required: 'Please select an appointment time',
                  })}
                  className={`w-full px-4 py-3 border-2 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all ${
                    errors.appointmentTime
                      ? 'border-red-500 bg-red-50'
                      : 'border-gray-300 focus:border-blue-500'
                  }`}
                >
                  <option value=''>Select Time Slot</option>
                  {getAvailableTimeSlots().map(time => (
                    <option key={time} value={time}>
                      {time}
                    </option>
                  ))}
                </select>
                {errors.appointmentTime && (
                  <p className='flex items-center text-red-500 text-sm mt-2'>
                    <AlertCircle className='w-4 h-4 mr-1' />
                    {errors.appointmentTime.message}
                  </p>
                )}
              </div>
            </div>

            {/* Priority and Symptoms */}
            <div className='grid grid-cols-1 md:grid-cols-2 gap-4'>
              <div>
                <label className='text-sm font-semibold text-gray-700 mb-3 block'>
                  Priority Level
                </label>
                <select
                  {...register('priority')}
                  className='w-full px-4 py-3 border-2 border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all'
                >
                  <option value='normal'>🟢 Normal</option>
                  <option value='urgent'>🟡 Urgent</option>
                  <option value='emergency'>🔴 Emergency</option>
                </select>
              </div>
            </div>

            {/* Symptoms */}
            <div>
              <label className='text-sm font-semibold text-gray-700 mb-3 block'>
                Symptoms / Reason for Visit *
              </label>
              <textarea
                {...register('symptoms', {
                  required: 'Please describe your symptoms',
                  minLength: {
                    value: 10,
                    message:
                      'Please provide more details about your symptoms (at least 10 characters)',
                  },
                })}
                rows='4'
                className={`w-full px-4 py-3 border-2 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all ${
                  errors.symptoms
                    ? 'border-red-500 bg-red-50'
                    : 'border-gray-300 focus:border-blue-500'
                }`}
                placeholder='Please describe your symptoms, when they started, severity, and any other relevant medical information...'
              />
              {errors.symptoms && (
                <p className='flex items-center text-red-500 text-sm mt-2'>
                  <AlertCircle className='w-4 h-4 mr-1' />
                  {errors.symptoms.message}
                </p>
              )}
            </div>
          </div>
        </div>

        {/* Submit Button */}
        <div className='mt-12 pt-8 border-t border-gray-200'>
          <div className='flex flex-col sm:flex-row items-center justify-between gap-4'>
            <div className='text-sm text-gray-500'>
              <p>✅ Your information is secure and encrypted</p>
              <p>🔒 We comply with HIPAA privacy standards</p>
            </div>
            <button
              type='submit'
              disabled={isSubmitting}
              className='w-full sm:w-auto bg-gradient-to-r from-blue-600 to-purple-600 text-white py-4 px-12 rounded-xl font-bold text-lg hover:from-blue-700 hover:to-purple-700 focus:ring-4 focus:ring-blue-200 disabled:opacity-50 disabled:cursor-not-allowed transition-all shadow-lg hover:shadow-xl'
            >
              {isSubmitting ? (
                <div className='flex items-center justify-center'>
                  <div className='w-6 h-6 border-t-2 border-white rounded-full animate-spin mr-3'></div>
                  Processing Your Appointment...
                </div>
              ) : (
                'Book Appointment Now'
              )}
            </button>
          </div>
          <p className='text-xs text-gray-500 text-center mt-4'>
            By booking this appointment, you agree to our terms of service and privacy policy. For
            emergencies, please call 911 or visit the nearest emergency room.
          </p>
        </div>
      </form>
    </div>
  );
};

export default AppointmentForm;
