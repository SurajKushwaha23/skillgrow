import { NavLink } from 'react-router-dom';

import { SIGNUP_FORM_FIELDS } from '../../constant/constant.js';

import CustomInputBox from '../../ui/fields/CustomInputBox.jsx';

function Registration() {
  const { FIRST_NAME, LAST_NAME, EMAIL, PASSWORD } = SIGNUP_FORM_FIELDS;
  const handleSubmitClick = async e => {
    e.preventDefault();
  };

  return (
    <>
      <div className='grid grid-cols-1 lg:grid-cols-2'>
        <div className='relative items-end px-4 pb-10 pt-60 sm:px-6 sm:pb-16 md:justify-center lg:px-8 lg:pb-24 hidden lg:block'>
          <div className='absolute inset-0'>
            <img
              className='h-full w-full rounded-md object-cover object-top'
              src='https://images.unsplash.com/photo-1534120247760-c44c3e4a62f1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTk0fHxkZXNpZ25lcnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=800&q=60'
              alt=''
            />
          </div>
          <div className='absolute inset-0 bg-linear-to-t from-black to-transparent'></div>
          <div className='relative'>
            <div className='w-full max-w-xl xl:mx-auto xl:w-full xl:max-w-xl xl:pr-24'>
              <h3 className='text-4xl font-bold text-white'>
                Now you dont have to rely on your designer to create a new page
              </h3>
              <ul className='mt-10 grid grid-cols-1 gap-x-8 gap-y-4 sm:grid-cols-2'>
                <li className='flex items-center space-x-3'>
                  <div className='inline-flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-blue-500'>
                    <svg
                      className='h-3.5 w-3.5 text-white'
                      xmlns='http://www.w3.org/2000/svg'
                      viewBox='0 0 20 20'
                      fill='currentColor'
                    >
                      <path
                        fillRule='evenodd'
                        d='M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z'
                        clipRule='evenodd'
                      ></path>
                    </svg>
                  </div>
                  <span className='text-lg font-medium text-white'> Commercial License </span>
                </li>
                <li className='flex items-center space-x-3'>
                  <div className='inline-flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-blue-500'>
                    <svg
                      className='h-3.5 w-3.5 text-white'
                      xmlns='http://www.w3.org/2000/svg'
                      viewBox='0 0 20 20'
                      fill='currentColor'
                    >
                      <path
                        fillRule='evenodd'
                        d='M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z'
                        clipRule='evenodd'
                      ></path>
                    </svg>
                  </div>
                  <span className='text-lg font-medium text-white'> Unlimited Exports </span>
                </li>
                <li className='flex items-center space-x-3'>
                  <div className='inline-flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-blue-500'>
                    <svg
                      className='h-3.5 w-3.5 text-white'
                      xmlns='http://www.w3.org/2000/svg'
                      viewBox='0 0 20 20'
                      fill='currentColor'
                    >
                      <path
                        fillRule='evenodd'
                        d='M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z'
                        clipRule='evenodd'
                      ></path>
                    </svg>
                  </div>
                  <span className='text-lg font-medium text-white'> 120+ Coded Blocks </span>
                </li>
                <li className='flex items-center space-x-3'>
                  <div className='inline-flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-blue-500'>
                    <svg
                      className='h-3.5 w-3.5 text-white'
                      xmlns='http://www.w3.org/2000/svg'
                      viewBox='0 0 20 20'
                      fill='currentColor'
                    >
                      <path
                        fillRule='evenodd'
                        d='M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z'
                        clipRule='evenodd'
                      ></path>
                    </svg>
                  </div>
                  <span className='text-lg font-medium text-white'> Design Files Included </span>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className='flex items-center justify-center px-8 py-8 sm:px-12  sm:py-16 lg:px-8 lg:py-24'>
          <div className='xl:mx-auto xl:w-full'>
            <h2 className='text-3xl font-bold leading-tight text-black sm:text-4xl'>
              Sign up to create account
            </h2>
            <p className='mt-2 text-sm text-gray-600'>
              Already have an account?{' '}
              <NavLink
                to='/login'
                title=''
                className='font-semibold text-blue-primary transition-all duration-200 hover:underline'
              >
                Sign In
              </NavLink>
            </p>

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

              <div className='col-span-6'>
                <CustomInputBox
                  id={PASSWORD.id}
                  fieldLabel={PASSWORD.label}
                  type={PASSWORD.type}
                  validationObject={PASSWORD.validation}
                  required
                />
              </div>

              <div className='col-span-6'>
                <label htmlFor='MarketingAccept' className='flex gap-4'>
                  <input
                    type='checkbox'
                    id='MarketingAccept'
                    className='size-5 rounded-md border-gray-200 bg-white shadow-xs'
                  />

                  <span className='text-sm text-gray-700'>
                    I want to receive emails about events, product updates and company
                    announcements.
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
            <div className='flex justify-center'>
              <p className='mt-10 text-center text-sm text-gray-500'>
                If you do not want to create account?{' '}
                <NavLink
                  to='/'
                  className='font-semibold leading-6 text-indigo-600 hover:text-indigo-500'
                >
                  Go Back
                </NavLink>
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Registration;
