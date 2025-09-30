// eslint-disable-next-line no-unused-vars
import React, { lazy } from 'react';

import { ROUTE_PATHS } from '../constants/routePaths.js';
import RootLayout from '../../layouts/RootLayout.jsx';
import AuthLayout from '../../layouts/AuthLayout.jsx';
import Index from '../../pages/index.jsx';
import Login from '../../pages/login/Login.jsx';
import Registration from '../../pages/registration/Registration';
import PreQuiz from '../../assets/components/prequiz/PreQuiz';

// Map layout names to their components (add more as needed)
export const layouts = {
  Root: RootLayout,
  Auth: AuthLayout,
};

export const PublicRoutes = [
  {
    path: ROUTE_PATHS.HOME,
    Index: true,
    element: <Index />,
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
