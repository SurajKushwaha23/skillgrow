import React from 'react';
import { NavLink } from 'react-router-dom';

function Registration() {
  return (
    <>
      <div className='grid grid-cols-1 lg:grid-cols-2'>
        <div className='relative flex items-end px-4 pb-10 pt-60 sm:px-6 sm:pb-16 md:justify-center lg:px-8 lg:pb-24 hidden lg:block'>
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

        <div className='flex items-center justify-center px-8 py-8 sm:px-12 sm:px-6 sm:py-16 lg:px-8 lg:py-24'>
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
                <label htmlFor='FirstName' className='block text-sm font-medium text-gray-700'>
                  First Name
                </label>

                <input
                  className='flex mt-1 h-10 w-full rounded-md border border-gray-300 bg-transparent px-3 py-2 text-sm placeholder:text-gray-400 focus:outline-hidden focus:ring-1 focus:ring-gray-400 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50 shadow-xs'
                  type='text'
                  placeholder='First Name'
                />
              </div>

              <div className='col-span-6 sm:col-span-3'>
                <label htmlFor='LastName' className='block text-sm font-medium text-gray-700'>
                  Last Name
                </label>

                <input
                  className='flex mt-1 h-10 w-full rounded-md border border-gray-300 bg-transparent px-3 py-2 text-sm placeholder:text-gray-400 focus:outline-hidden focus:ring-1 focus:ring-gray-400 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50 shadow-xs'
                  type='text'
                  placeholder='Last Name'
                />
              </div>

              <div className='col-span-6'>
                <label htmlFor='Email' className='block text-sm font-medium text-gray-700'>
                  {' '}
                  Email{' '}
                </label>

                <input
                  className='flex mt-1 h-10 w-full rounded-md border border-gray-300 bg-transparent px-3 py-2 text-sm placeholder:text-gray-400 focus:outline-hidden focus:ring-1 focus:ring-gray-400 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50 shadow-xs'
                  type='email'
                  placeholder='Email'
                />
              </div>

              <div className='col-span-6 sm:col-span-3'>
                <label htmlFor='Password' className='block text-sm font-medium text-gray-700'>
                  {' '}
                  Password{' '}
                </label>

                <input
                  className='flex mt-1 h-10 w-full rounded-md border border-gray-300 bg-transparent px-3 py-2 text-sm placeholder:text-gray-400 focus:outline-hidden focus:ring-1 focus:ring-gray-400 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50 shadow-xs'
                  type='password'
                  placeholder='Password'
                />
              </div>

              <div className='col-span-6 sm:col-span-3'>
                <label
                  htmlFor='PasswordConfirmation'
                  className='block text-sm font-medium text-gray-700'
                >
                  Password Confirmation
                </label>

                <input
                  className='flex mt-1 h-10 w-full rounded-md border border-gray-300 bg-transparent px-3 py-2 text-sm placeholder:text-gray-400 focus:outline-hidden focus:ring-1 focus:ring-gray-400 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50 shadow-xs'
                  type='password'
                  placeholder='Password Confirmation'
                />
              </div>

              <div className='col-span-6'>
                <label htmlFor='MarketingAccept' className='flex gap-4'>
                  <input
                    type='checkbox'
                    id='MarketingAccept'
                    name='marketing_accept'
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
                <button className='inline-block mx-auto w-full bg-blue-primary py-2  px-5 bg-violet-500 text-white text-sm font-semibold rounded-full shadow-md hover:bg-blue-primary focus:outline-hidden focus:ring-3 focus:ring-violet-400 focus:ring-opacity-75'>
                  Create an account
                </button>
              </div>
            </form>
            <div class='flex justify-center'>
              <p className='mt-10 text-center text-sm text-gray-500'>
                If you don't want to create account?{' '}
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
