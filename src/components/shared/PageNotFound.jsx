import { NavLink } from 'react-router-dom';
import { useLocation } from 'react-router-dom';
import Header from '../shared/Header';
import Footer from '../shared/Footer';

function PageNotFound() {
  const location = useLocation();
  return (
    <>
      <Header />
      <div className='py-24'>
        <div className='text-center'>
          <p className='font-bold text-9xl text-blue-primary drop-shadow-xs'>404</p>
          <h1 className='mt-2 text-3xl font-bold tracking-tight text-black sm:text-5xl'>
            Oops! Page Not Found
          </h1>

          <p className='mt-4 text-base leading-7 font-semibold text-gray-600'>
            Sorry, we could not find the page{' '}
            <span className='text-white bg-blue-700 px-2 py-1 rounded-sm text-sm'>
              {location.pathname}
            </span>{' '}
            you are looking for.
          </p>

          <div className='mt-4 flex items-center justify-center gap-x-3'>
            <NavLink
              to='/'
              className='inline-flex mx-auto bg-blue-primary py-2  px-5 bg-violet-500 text-white text-sm font-semibold rounded-full shadow-md hover:bg-blue-primary focus:outline-hidden focus:ring-3 focus:ring-violet-400 focus:ring-opacity-75'
            >
              Go to Homepage
            </NavLink>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default PageNotFound;
