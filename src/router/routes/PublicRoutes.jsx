import React, { lazy } from 'react';

import { ROUTE_PATHS } from '../constants/routePaths';
import Home from '../pages/home/Home';
import About from '../pages/about/About';

export const PublicRoutes = [
  {
    path: ROUTE_PATHS.HOME,
    element: <Home />,
    metadata: {
      title: 'Home - Welcome to Our App',
      description: 'Home page description',
    },
    isPublic: true,
  },
  {
    path: ROUTE_PATHS.ABOUT,
    element: <About />,
    metadata: {
      title: 'About Us',
      description: 'Learn more about our company',
    },
    isPublic: true,
  },
];
