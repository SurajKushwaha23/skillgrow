// eslint-disable-next-line no-unused-vars
import React, { lazy } from 'react';

import { ROUTE_PATHS } from '../constants/routePaths';
import RootLayout from '../../layouts/RootLayout';
import AuthLayout from '../../layouts/AuthLayout';
import Home from '../../pages/home/Home';
import Login from '../../pages/login/Login';
import Registration from '../../pages/registration/Registration';
import PreQuiz from '../../assets/components/prequiz/Prequiz';

// Map layout names to their components (add more as needed)
export const layouts = {
  Root: RootLayout,
  Auth: AuthLayout,
};

export const PublicRoutes = [
  {
    path: ROUTE_PATHS.HOME,
    Index: true,
    element: <Home />,
    layout: 'Root',
  },
  {
    path: ROUTE_PATHS.LOGIN,
    element: <Login />,
    layout: 'Auth',
  },
  {
    path: ROUTE_PATHS.REGISTER,
    element: <Registration />,
    layout: 'Auth',
  },

  {
    path: ROUTE_PATHS.PRE_QUIZ,
    element: <PreQuiz />,
    layout: 'Root',
  },
];
