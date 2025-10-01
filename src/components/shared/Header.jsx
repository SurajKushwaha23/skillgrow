import { useState, useEffect } from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import { Menu, X, Sparkles, ChevronDown, User, Rocket } from 'lucide-react';

const menuItems = [
  { name: 'Home', href: '/' },
  { name: 'About', href: 'about' },
  { name: 'Services', href: 'service' },
  { name: 'Rewards', href: 'point', icon: Sparkles },
];

function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isHovering, setIsHovering] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          isScrolled
            ? 'bg-white/95 backdrop-blur-xl border-b border-gray-200/60 shadow-lg py-3'
            : 'bg-transparent py-6'
        }`}
      >
        {/* Animated background gradient */}
        <div
          className={`absolute inset-0 transition-opacity duration-500 ${
            isScrolled ? 'opacity-0' : 'opacity-100'
          }`}
        >
          <div className='absolute inset-0 bg-gradient-to-b from-white/80 to-white/20'></div>
        </div>

        <div className='relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8'>
          <div className='flex items-center justify-between'>
            {/* Enhanced Logo */}
            <NavLink
              to='/'
              className='flex items-center space-x-3 group relative'
              onMouseEnter={() => setIsHovering(true)}
              onMouseLeave={() => setIsHovering(false)}
            >
              <div className='flex flex-col'>
                <span className='font-extrabold text-3xl bg-gradient-to-r from-gray-900 to-gray-700 bg-clip-text text-transparent'>
                  DXS
                </span>
                <span className='text-xs text-gray-500 font-medium'>Premium Solutions</span>
              </div>
            </NavLink>

            {/* Enhanced Desktop Navigation */}
            <nav className='hidden lg:flex items-center space-x-1'>
              {menuItems.map(item => {
                const Icon = item.icon;
                const isActive = location.pathname === item.href;

                return (
                  <NavLink
                    key={item.name}
                    to={item.href}
                    className='flex items-center space-x-2 px-4 py-2.5 text-md font-semibold transition-all duration-300 relative group'
                  >
                    {Icon && (
                      <Icon
                        className={`w-4 h-4 transition-transform duration-300 ${
                          isActive ? 'scale-110' : 'group-hover:scale-110'
                        }`}
                      />
                    )}
                    <span className='relative'>{item.name}</span>
                  </NavLink>
                );
              })}
            </nav>

            {/* Enhanced Desktop Auth */}
            <div className='hidden lg:flex items-center space-x-3'>
              <NavLink
                to='login'
                className='flex items-center space-x-2 text-sm font-semibold text-gray-700  px-4 py-2.5 rounded-xl transition-all duration-300 group'
              >
                <User className='w-4 h-4' />
                <span>Sign In</span>
              </NavLink>
              <NavLink
                to='register'
                className='flex items-center space-x-2 text-sm font-semibold transition-all duration-300 group'
              >
                <Rocket className='w-4 h-4 group-hover:rotate-12 transition-transform duration-300' />
                <span>Get started Today</span>
              </NavLink>
            </div>

            {/* Enhanced Mobile Menu Button */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className={`lg:hidden p-3 rounded-xl transition-all duration-300 ${
                isMenuOpen
                  ? 'bg-gray-100 text-gray-900 rotate-90'
                  : 'text-gray-600 hover:text-gray-900 hover:bg-gray-100/80'
              }`}
            >
              {isMenuOpen ? (
                <X className='w-6 h-6 transition-transform duration-300' />
              ) : (
                <Menu className='w-6 h-6 transition-transform duration-300' />
              )}
            </button>
          </div>
        </div>

        {/* Enhanced Mobile Menu */}
        {isMenuOpen && (
          <div className='lg:hidden absolute top-full left-0 right-0 bg-white/95 backdrop-blur-xl border-t border-gray-200/60 shadow-2xl animate-in slide-in-from-top duration-300'>
            <div className='px-4 py-6 space-y-2'>
              {menuItems.map(item => {
                const Icon = item.icon;
                const isActive = location.pathname === item.href;

                return (
                  <NavLink
                    key={item.name}
                    to={item.href}
                    onClick={() => setIsMenuOpen(false)}
                    className={`flex items-center space-x-3 px-4 py-4 rounded-xl text-base font-semibold transition-all duration-300 ${
                      isActive
                        ? 'bg-gradient-to-r from-blue-50 to-purple-50 text-blue-600 border-l-4 border-blue-600 shadow-sm'
                        : 'text-gray-700 hover:text-gray-900 hover:bg-gray-50/80'
                    }`}
                  >
                    {Icon && <Icon className={`w-5 h-5 ${isActive ? 'scale-110' : ''}`} />}
                    <span>{item.name}</span>
                  </NavLink>
                );
              })}

              <div className='pt-6 mt-4 border-t border-gray-200/60 space-y-3'>
                <NavLink
                  to='login'
                  onClick={() => setIsMenuOpen(false)}
                  className='flex items-center justify-center space-x-2 px-4 py-4 text-base font-semibold text-gray-700 hover:text-gray-900 hover:bg-gray-50/80 rounded-xl transition-all duration-300'
                >
                  <User className='w-5 h-5' />
                  <span>Sign In</span>
                </NavLink>
                <NavLink
                  to='register'
                  onClick={() => setIsMenuOpen(false)}
                  className='flex items-center justify-center space-x-2 px-4 py-4 text-base font-semibold text-white bg-gradient-to-r from-blue-600 to-purple-600 hover:shadow-lg rounded-xl transition-all duration-300 active:scale-95'
                >
                  <Rocket className='w-5 h-5' />
                  <span>Get Started Free</span>
                </NavLink>
              </div>
            </div>
          </div>
        )}
      </header>
      <div className='h-24'></div>
    </>
  );
}

export default Header;
