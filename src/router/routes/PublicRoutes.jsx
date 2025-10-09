// eslint-disable-next-line no-unused-vars
import React, { lazy } from 'react';

import { ROUTE_PATHS } from '../constants/routePaths';
import Home from '../../pages/home/Home';
import Login from '../../pages/login/Login';
import Registration from '../../pages/registration/Registration';
import ServiceList from '../../pages/serviceList/ServiceList';
import OurSpecialistDoctors from '../../pages/ourSpecilistDoctors/OurSpecilistDoctors';
import About from '../../pages/about/About';
import RootLayout from '../../layouts/RootLayout';
import AuthLayout from '../../layouts/AuthLayout';
import PageNotFound from '../../components/shared/PageNotFound';

export const PublicRoutes = [
  {
    path: ROUTE_PATHS.HOME,
    element: <RootLayout />,
    children: [
      {
        path: ROUTE_PATHS.HOME,
        index: true,
        element: <Home />,
      },
      {
        path: ROUTE_PATHS.ABOUT,
        element: <About />,
      },
      {
        path: ROUTE_PATHS.SERVICE_LIST,
        element: <ServiceList />,
      },
      {
        path: ROUTE_PATHS.OUR_SPECIALIST_DOCTORS,
        element: <OurSpecialistDoctors />,
      },
    ],
  },
  {
    path: '',
    element: <AuthLayout />,
    children: [
      {
        path: ROUTE_PATHS.LOGIN,
        element: <Login />,
      },
      {
        path: ROUTE_PATHS.REGISTER,
        element: <Registration />,
      },
    ],
  },
  {
    path: '*',
    element: <PageNotFound />,
  },
];
