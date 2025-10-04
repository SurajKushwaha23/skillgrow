import { useState, useEffect } from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import { Menu, X, Stethoscope, Heart, Phone, MapPin, Clock, User, ArrowRight } from 'lucide-react';

const menuItems = [
  { name: 'Home', href: '/' },
  { name: 'About Us', href: 'about' },
  { name: 'Doctors', href: 'doctors' },
  { name: 'Our Specialities', href: 'specialities' },
];

function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      {/* Enhanced Top Info Bar */}
      <div className='bg-gradient-to-r from-blue-800 to-blue-900 text-white text-sm border-b border-blue-700/50'>
        <div className='mx-auto max-w-7xl px-4 sm:px-6 lg:px-8'>
          <div className='flex flex-col md:flex-row justify-between items-center py-2 md:py-1.5 space-y-1 md:space-y-0'>
            {/* Left Side - Contact Info */}
            <div className='flex flex-wrap justify-center md:justify-start items-center gap-4 md:gap-6 text-xs md:text-sm'>
              <div className='flex items-center space-x-2 bg-blue-700/30 px-3 py-1.5 rounded-full'>
                <Phone className='w-3 h-3 md:w-4 md:h-4 text-blue-200' />
                <span className='font-medium'>
                  Emergency: <span className='text-white font-semibold'>(555) 123-4567</span>
                </span>
              </div>
              <div className='flex items-center space-x-2'>
                <Clock className='w-3 h-3 md:w-4 md:h-4 text-blue-200' />
                <span className='text-blue-100'>Open 24/7</span>
              </div>
            </div>

            {/* Right Side - Location & Additional Info */}
            <div className='flex flex-wrap justify-center md:justify-start items-center gap-4 md:gap-6 text-xs md:text-sm'>
              <div className='flex items-center space-x-2'>
                <MapPin className='w-3 h-3 md:w-4 md:h-4 text-blue-200' />
                <span className='text-blue-100'>123 Medical Center Dr</span>
              </div>
              <div className='hidden lg:flex items-center space-x-2 bg-green-600/20 px-3 py-1.5 rounded-full border border-green-500/30'>
                <div className='w-2 h-2 bg-green-400 rounded-full animate-pulse'></div>
                <span className='text-green-200 font-medium'>Emergency Dept: Open</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Main Header */}
      <header className='bg-white/95 backdrop-blur-sm py-6 border-b border-blue-100'>
        <div className='relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8'>
          <div className='flex items-center justify-between'>
            {/* Hospital Logo */}
            <NavLink
              to='/'
              className='flex items-center space-x-3 group transition-transform duration-300 hover:scale-105'
            >
              <div className='flex items-center space-x-3'>
                <div className='bg-gradient-to-br from-blue-600 to-blue-700 text-white p-2 rounded-xl shadow-md'>
                  <Heart className='w-6 h-6' fill='currentColor' fillOpacity='0.2' />
                </div>
                <div className='flex flex-col'>
                  <span className='font-bold text-2xl bg-gradient-to-r from-blue-900 to-blue-800 bg-clip-text text-transparent'>
                    MEDICAL
                  </span>
                  <span className='text-xs text-blue-600 font-medium tracking-wide'>
                    HEALTHCARE EXCELLENCE
                  </span>
                </div>
              </div>
            </NavLink>

            {/* Desktop Navigation */}
            <nav className='hidden lg:flex items-center space-x-1'>
              {menuItems.map(item => {
                const isActive = location.pathname === item.href;

                return (
                  <NavLink
                    key={item.name}
                    to={item.href}
                    className='flex items-center space-x-2 px-4 py-3 text-sm font-medium transition-all duration-300 relative group'
                  >
                    <span className='relative'>
                      {item.name}
                      <span className='absolute -bottom-1 left-0 w-0 h-0.5 bg-blue-600 transition-all duration-300 group-hover:w-full'></span>
                    </span>
                  </NavLink>
                );
              })}
            </nav>

            {/* Desktop CTA Buttons */}
            <div className='hidden lg:flex items-center space-x-3'>
              <NavLink
                to='login'
                className='flex items-center space-x-2 text-sm font-medium  text-blue-700 px-4 py-2.5 rounded-lg transition-all duration-300 bg-blue-50 border  border-blue-200'
              >
                <User className='w-4 h-4' />
                <span>Patient Portal</span>
              </NavLink>
              <NavLink
                to='appointment'
                className='flex items-center space-x-2 bg-gradient-to-r from-blue-600 to-blue-700 text-white text-sm font-semibold px-6 py-2.5 rounded-lg hover:from-blue-700 hover:to-blue-800 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5'
              >
                <Stethoscope className='w-4 h-4' />
                <span>Book Appointment</span>
                <ArrowRight className='w-4 h-4 transition-transform duration-300 group-hover:translate-x-1' />
              </NavLink>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className={`lg:hidden p-3 rounded-xl transition-all duration-300 ${
                isMenuOpen
                  ? 'bg-blue-100 text-blue-600 shadow-inner'
                  : 'text-gray-600 hover:text-blue-600 hover:bg-blue-50 shadow-sm'
              }`}
            >
              {isMenuOpen ? <X className='w-6 h-6' /> : <Menu className='w-6 h-6' />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className='lg:hidden absolute top-full left-0 right-0 bg-white/98 backdrop-blur-xl border-t border-blue-100 shadow-2xl animate-in slide-in-from-top duration-300'>
            <div className='px-4 py-6 space-y-2'>
              {menuItems.map(item => {
                const isActive = location.pathname === item.href;

                return (
                  <NavLink
                    key={item.name}
                    to={item.href}
                    onClick={() => setIsMenuOpen(false)}
                    className={`flex items-center space-x-3 px-4 py-4 rounded-xl text-base font-medium transition-all duration-300 ${
                      isActive
                        ? 'bg-blue-50 text-blue-600 border-l-4 border-blue-600 shadow-sm'
                        : 'text-gray-700 hover:text-blue-600 hover:bg-blue-50'
                    }`}
                  >
                    <span>{item.name}</span>
                  </NavLink>
                );
              })}

              <div className='pt-6 mt-4 border-t border-blue-100 space-y-3'>
                <NavLink
                  to='login'
                  onClick={() => setIsMenuOpen(false)}
                  className='flex items-center justify-center space-x-2 px-4 py-4 text-base font-medium text-gray-600 hover:text-blue-700 hover:bg-blue-50 rounded-xl transition-all duration-300 border border-blue-100'
                >
                  <User className='w-5 h-5' />
                  <span>Patient Portal</span>
                </NavLink>
                <NavLink
                  to='appointment'
                  onClick={() => setIsMenuOpen(false)}
                  className='flex items-center justify-center space-x-2 px-4 py-4 text-base font-semibold text-white bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 rounded-xl transition-all duration-300 shadow-lg active:scale-95'
                >
                  <Stethoscope className='w-5 h-5' />
                  <span>Book Appointment</span>
                </NavLink>
              </div>
            </div>
          </div>
        )}
      </header>
    </>
  );
}

export default Header;
