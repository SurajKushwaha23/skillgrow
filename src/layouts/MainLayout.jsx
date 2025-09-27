/* eslint-disable react/prop-types */
import React from 'react';
import { Outlet } from 'react-router-dom';

const MainLayout = ({ children }) => {
  return (
    <div className='flex min-h-screen flex-col'>
      <main className='flex-grow'>{children || <Outlet />}</main>
    </div>
  );
};

export default MainLayout;
