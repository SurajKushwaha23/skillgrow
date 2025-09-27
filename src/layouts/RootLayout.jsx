// eslint-disable-next-line no-unused-vars
import React from 'react';
import Header from '../assets/components/header/Header';
import { Outlet } from 'react-router-dom';
import Footer from '../assets/components/footer/Footer';

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
