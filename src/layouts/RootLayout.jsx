// eslint-disable-next-line no-unused-vars
import React from 'react';
import Header from '../components/shared/Header';
import Footer from '../components/shared/Footer';

import { Outlet } from 'react-router-dom';

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
