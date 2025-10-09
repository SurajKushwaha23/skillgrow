import CustomInputBox from '../../components/ui/fields/CustomInputBox';
import { SIGNUP_FORM_FIELDS, APPOINTMENT_FORM_FIELDS } from '../../constant/formFields';

const AppointmentForm = () => {
  const { FIRST_NAME, LAST_NAME, EMAIL, PHONE, DATE, TIME, DOCTOR, NOTES, TERMS } =
    APPOINTMENT_FORM_FIELDS;

  const handleSubmitClick = e => {
    e.preventDefault();
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
              Schedule your visit with our expert doctors and experience personalized healthcare
            </p>
          </div>
        </div>
      </div>
      {/** Appointment Form Section **/}
      <div className='px-8 py-12'>
        <form action='#' className='mt-8 grid grid-cols-6 gap-6'>
          <div className='col-span-6 sm:col-span-3'>
            <CustomInputBox
              id={FIRST_NAME.id}
              fieldLabel={FIRST_NAME.label}
              type={FIRST_NAME.type}
              validationObject={FIRST_NAME.validation}
              required
            />
          </div>

          <div className='col-span-6 sm:col-span-3'>
            <CustomInputBox
              id={LAST_NAME.id}
              fieldLabel={LAST_NAME.label}
              type={LAST_NAME.type}
              validationObject={LAST_NAME.validation}
            />
          </div>

          <div className='col-span-6'>
            <CustomInputBox
              id={EMAIL.id}
              fieldLabel={EMAIL.label}
              type={EMAIL.type}
              validationObject={EMAIL.validation}
              required
            />
          </div>

          <div className='col-span-6'></div>

          <div className='col-span-6'>
            <label htmlFor='MarketingAccept' className='flex gap-4'>
              <input
                type='checkbox'
                id='MarketingAccept'
                className='size-5 rounded-md border-gray-200 bg-white shadow-xs'
              />

              <span className='text-sm text-gray-700'>
                I want to receive emails about events, product updates and company announcements.
              </span>
            </label>
          </div>

          <div className='col-span-6'>
            <p className='text-sm text-gray-500'>
              By creating an account, you agree to our
              <a href='#' className='text-gray-700 underline'>
                {' '}
                terms and conditions{' '}
              </a>
              and
              <a href='#' className='text-gray-700 underline'>
                privacy policy
              </a>
              .
            </p>
          </div>

          <div className='col-span-6 sm:flex sm:items-center sm:gap-4'>
            <button
              className='inline-block mx-auto w-full bg-blue-primary py-2  px-5 bg-violet-500 text-white text-sm font-semibold rounded-full shadow-md hover:bg-blue-primary focus:outline-hidden focus:ring-3 focus:ring-violet-400 focus:ring-opacity-75'
              onClick={handleSubmitClick}
            >
              Create an account
            </button>
          </div>
        </form>
      </div>
    </>
  );
};

export default AppointmentForm;
