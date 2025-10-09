// eslint-disable-next-line no-unused-vars
import React from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { PublicRoutes } from './routes/PublicRoutes';

const router = createBrowserRouter(PublicRoutes);

const AppRouter = () => {
  return <RouterProvider router={router} />;
};

export default AppRouter;
