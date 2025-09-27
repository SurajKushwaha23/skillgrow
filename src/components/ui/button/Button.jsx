/* eslint-disable react/prop-types */
import React from 'react';

const Button = ({ children }) => {
  return (
    <button className='bg-blue-500 text-white font-semibold py-2 px-4 rounded'>{children}</button>
  );
};

export default Button;
