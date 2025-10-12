import CustomInputBox from '../../components/ui/fields/CustomInputBox';
import { APPOINTMENT_FORM_FIELDS } from '../../constant/formFields';
import { MEDICAL_DEPARTMENTS } from '../../assets/mock/mockDepartment';
import { useState } from 'react';

const AppointmentForm = () => {
  const { FIRST_NAME, LAST_NAME, EMAIL, PHONE } = APPOINTMENT_FORM_FIELDS;
  const [formSubmitted, setFormSubmitted] = useState(false);

  const handleSubmitClick = e => {
    e.preventDefault();
    setFormSubmitted(true);
  };

  return (
    <>
      <div className='bg-gradient-to-br from-blue-50 to-indigo-50 py-8'>
        <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
          {/* Header Section */}
          <div className='mb-12 text-center py-8'>
            <h1 className='text-4xl font-bold text-gray-900 mb-4 bg-gradient-to-r from-gray-900 to-blue-900 bg-clip-text '>
              Book Your Appointment
            </h1>
            <p className='text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed'>
              Schedule your visit with our expert doctors and experience personalized healthcare.
              Fill out the form below and we will get back to you shortly to confirm your
              appointment.
            </p>
          </div>
        </div>
      </div>

      {/* success message when form is submitted and generate a confirmation number */}
      {formSubmitted && (
        <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 my-8'>
          <div
            className='bg-gradient-to-r from-green-50 to-emerald-50 border-l-4 border-green-500 text-green-800 px-6 py-4 rounded-lg shadow-lg relative transform transition-all duration-300 ease-in-out hover:shadow-xl'
            role='alert'
          >
            <div className='flex items-start'>
              {/* Success Icon */}
              <div className='flex-shrink-0'>
                <svg
                  className='w-6 h-6 text-green-500 mt-0.5'
                  fill='currentColor'
                  viewBox='0 0 20 20'
                >
                  <path
                    fillRule='evenodd'
                    d='M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z'
                    clipRule='evenodd'
                  />
                </svg>
              </div>

              {/* Content */}
              <div className='ml-3 flex-1'>
                <div className='flex items-center justify-between'>
                  <h3 className='text-lg font-semibold text-green-800'>Success!</h3>
                  {/* Optional close button */}
                  <button className='text-green-500 hover:text-green-700 transition-colors duration-200'>
                    <svg className='w-4 h-4' fill='none' stroke='currentColor' viewBox='0 0 24 24'>
                      <path
                        strokeLinecap='round'
                        strokeLinejoin='round'
                        strokeWidth='2'
                        d='M6 18L18 6M6 6l12 12'
                      />
                    </svg>
                  </button>
                </div>
                <p className='mt-1 text-green-700'>
                  Your appointment has been booked and your confirmation number is{' '}
                  <strong className='font-bold text-green-900 bg-green-200 px-1.5 py-0.5 rounded'>
                    #123456
                  </strong>
                  .
                </p>

                {/* Additional info or actions */}
                <div className='mt-3 flex space-x-3'>
                  <button className='text-sm bg-green-500 hover:bg-green-600 text-white px-3 py-1.5 rounded-md transition-colors duration-200 font-medium'>
                    View Details
                  </button>
                  <button className='text-sm border border-green-300 hover:bg-green-50 text-green-700 px-3 py-1.5 rounded-md transition-colors duration-200 font-medium'>
                    Add to Calendar
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/** Appointment Form Section **/}
      {!formSubmitted && (
        <>
          <div className='max-w-9xl mx-auto px-4 sm:px-6 lg:px-8 py-12'>
            {/* Form Section */}
            <div className='bg-white rounded-2xl  border border-gray-100 p-8'>
              <form className='space-y-8'>
                {/* Personal Information Section */}
                <div className='space-y-6'>
                  <h3 className='text-xl font-semibold text-gray-900 border-b border-gray-200 pb-3'>
                    Personal Information
                  </h3>

                  <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'>
                    <CustomInputBox
                      id={FIRST_NAME.id}
                      fieldLabel={FIRST_NAME.label}
                      type={FIRST_NAME.type}
                      validationObject={FIRST_NAME.validation}
                      required
                    />

                    <CustomInputBox
                      id={LAST_NAME.id}
                      fieldLabel={LAST_NAME.label}
                      type={LAST_NAME.type}
                      validationObject={LAST_NAME.validation}
                    />

                    <div className='space-y-0'>
                      <label htmlFor='gender' className='block text-sm font-medium text-gray-700'>
                        Gender <span className='text-red-500'>*</span>
                      </label>
                      <select
                        id='gender'
                        className='w-full h-12 px-4 rounded-lg border border-gray-300 bg-white text-gray-900 focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200'
                        required
                      >
                        <option value='' disabled selected>
                          Select Gender
                        </option>
                        <option value='male'>Male</option>
                        <option value='female'>Female</option>
                        <option value='other'>Other</option>
                      </select>
                    </div>
                  </div>
                </div>

                {/* Contact Information Section */}
                <div className='space-y-6'>
                  <h3 className='text-xl font-semibold text-gray-900 border-b border-gray-200 pb-3'>
                    Contact Information
                  </h3>

                  <div className='grid grid-cols-1 md:grid-cols-2 gap-6'>
                    <CustomInputBox
                      id={EMAIL.id}
                      fieldLabel={EMAIL.label}
                      type={EMAIL.type}
                      validationObject={EMAIL.validation}
                      required
                    />

                    <CustomInputBox
                      id={PHONE.id}
                      fieldLabel={PHONE.label}
                      type={PHONE.type}
                      validationObject={PHONE.validation}
                      required
                    />
                  </div>
                </div>

                {/* Appointment Details Section */}
                <div className='space-y-6'>
                  <h3 className='text-xl font-semibold text-gray-900 border-b border-gray-200 pb-3'>
                    Appointment Details
                  </h3>

                  <div className='grid grid-cols-1 md:grid-cols-2 gap-6'>
                    <div className='space-y-2'>
                      <label
                        htmlFor='department'
                        className='block text-sm font-medium text-gray-700'
                      >
                        Department / Specialty <span className='text-red-500'>*</span>
                      </label>
                      <select
                        id='department'
                        className='w-full h-12 px-4 rounded-lg border border-gray-300 bg-white text-gray-900 focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200'
                        required
                      >
                        <option value='' disabled selected>
                          Select a department
                        </option>
                        {MEDICAL_DEPARTMENTS.map(dept => (
                          <option key={dept.value} value={dept.value}>
                            {dept.label}
                          </option>
                        ))}
                      </select>
                    </div>

                    <div className='space-y-2'>
                      <label
                        htmlFor='appointment-date'
                        className='block text-sm font-medium text-gray-700'
                      >
                        Appointment Date <span className='text-red-500'>*</span>
                      </label>
                      <input
                        type='date'
                        id='appointment-date'
                        className='w-full h-12 px-4 rounded-lg border border-gray-300 bg-white text-gray-900 focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200'
                        required
                      />
                    </div>
                  </div>

                  <div className='space-y-2'>
                    <label htmlFor='message' className='block text-sm font-medium text-gray-700'>
                      Description / Message
                    </label>
                    <textarea
                      id='message'
                      rows='4'
                      className='w-full px-4 py-3 rounded-lg border border-gray-300 bg-white text-gray-900 focus:ring-2 focus:ring-blue-500 focus:border-transparent resize-none transition-all duration-200'
                      placeholder='Please describe any specific concerns, symptoms, or special requests for your appointment...'
                    ></textarea>
                  </div>
                </div>

                {/* Preferences & Terms Section */}
                <div className='space-y-6'>
                  <div className='flex items-start space-x-3 p-4 bg-blue-50 rounded-lg border border-blue-100'>
                    <input
                      type='checkbox'
                      id='MarketingAccept'
                      className='mt-1 size-5 rounded border-gray-300 text-blue-600 focus:ring-blue-500'
                    />
                    <label htmlFor='MarketingAccept' className='text-sm text-gray-700'>
                      <span className='font-medium'>Stay informed:</span> I want to receive emails
                      about health tips, upcoming events, and important practice announcements.
                    </label>
                  </div>

                  <div className='p-4 bg-gray-50 rounded-lg border border-gray-200'>
                    <p className='text-sm text-gray-600'>
                      By submitting this form, you agree to our{' '}
                      <a
                        href='#'
                        className='font-medium text-blue-600 hover:text-blue-500 underline transition-colors'
                      >
                        terms and conditions
                      </a>{' '}
                      and{' '}
                      <a
                        href='#'
                        className='font-medium text-blue-600 hover:text-blue-500 underline transition-colors'
                      >
                        privacy policy
                      </a>
                      . We respect your privacy and will never share your information with third
                      parties.
                    </p>
                  </div>
                </div>

                {/* Submit Button */}
                <div className='flex justify-center pt-4'>
                  <button
                    type='button'
                    onClick={handleSubmitClick}
                    className='w-full md:w-auto px-12 py-4 bg-gradient-to-r from-blue-600 to-violet-600 text-white font-semibold rounded-xl shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 transition-all duration-200 focus:outline-none focus:ring-4 focus:ring-blue-500 focus:ring-opacity-50'
                  >
                    <span className='flex items-center justify-center space-x-2'>
                      <span>Book Appointment</span>
                      <svg
                        className='w-5 h-5'
                        fill='none'
                        stroke='currentColor'
                        viewBox='0 0 24 24'
                      >
                        <path
                          strokeLinecap='round'
                          strokeLinejoin='round'
                          strokeWidth='2'
                          d='M13 7l5 5m0 0l-5 5m5-5H6'
                        />
                      </svg>
                    </span>
                  </button>
                </div>
              </form>
            </div>
          </div>
        </>
      )}
    </>
  );
};

export default AppointmentForm;
