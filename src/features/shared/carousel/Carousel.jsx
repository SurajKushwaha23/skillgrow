/* eslint-disable react/prop-types */
import { useState, useEffect } from 'react';

const Carousel = ({
  items = [],
  autoPlay = true,
  interval = 6000,
  showIndicators = true,
  showNavigation = true,
}) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  // Auto-play functionality
  useEffect(() => {
    if (!autoPlay) return;

    const timer = setInterval(() => {
      nextSlide();
    }, interval);

    return () => clearInterval(timer);
  }, [currentIndex, autoPlay, interval]);

  const nextSlide = () => {
    setCurrentIndex(prevIndex => (prevIndex === items.length - 1 ? 0 : prevIndex + 1));
  };

  const prevSlide = () => {
    setCurrentIndex(prevIndex => (prevIndex === 0 ? items.length - 1 : prevIndex - 1));
  };

  const goToSlide = index => {
    setCurrentIndex(index);
  };

  return (
    <div className='relative w-full mx-auto overflow-hidden shadow-xl'>
      {/* Carousel Container */}
      <div
        className='flex transition-transform duration-500 ease-in-out'
        style={{ transform: `translateX(-${currentIndex * 100}%)` }}
      >
        {items.map((item, index) => (
          <div key={item.id || index} className='w-full flex-shrink-0'>
            <div className='relative h-96 md:h-[500px]'>
              <img src={item.image} alt={item.title} className='w-full h-full object-cover' />
              <div className='absolute inset-0  bg-opacity-40 flex items-center justify-center'>
                <div className='text-center text-white'>
                  <h2 className='text-3xl md:text-5xl font-bold mb-4'>{item.title}</h2>
                  <p className='text-xl md:text-2xl'>{item.description}</p>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Navigation Arrows */}
      {showNavigation && (
        <>
          <button
            onClick={prevSlide}
            className='absolute left-4 top-1/2 transform -translate-y-1/2 bg-white bg-opacity-50 hover:bg-opacity-75 text-gray-800 p-2 rounded-full transition-all duration-200 hover:scale-110'
          >
            <svg className='w-6 h-6' fill='none' stroke='currentColor' viewBox='0 0 24 24'>
              <path
                strokeLinecap='round'
                strokeLinejoin='round'
                strokeWidth={2}
                d='M15 19l-7-7 7-7'
              />
            </svg>
          </button>
          <button
            onClick={nextSlide}
            className='absolute right-4 top-1/2 transform -translate-y-1/2 bg-white bg-opacity-50 hover:bg-opacity-75 text-gray-800 p-2 rounded-full transition-all duration-200 hover:scale-110'
          >
            <svg className='w-6 h-6' fill='none' stroke='currentColor' viewBox='0 0 24 24'>
              <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M9 5l7 7-7 7' />
            </svg>
          </button>
        </>
      )}

      {/* Indicators */}
      {showIndicators && (
        <div className='absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2'>
          {items.map((_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                index === currentIndex
                  ? 'bg-white scale-125'
                  : 'bg-white bg-opacity-50 hover:bg-opacity-75'
              }`}
            />
          ))}
        </div>
      )}
    </div>
  );
};

export default Carousel;
