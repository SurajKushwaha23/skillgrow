// eslint-disable-next-line no-unused-vars
import React from 'react';

import { Outlet } from 'react-router-dom';

import Header from '../components/shared/Header';
import Footer from '../components/shared/Footer';

const RootLayout = () => {
  return (
    <>
      <Header />
      <Outlet />
      <Footer />
    </>
  );
};

export default RootLayout;
