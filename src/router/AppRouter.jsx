// eslint-disable-next-line no-unused-vars
import React from 'react';
import { Routes, Route, Outlet } from 'react-router-dom';
import { PublicRoutes, layouts } from '../router/routes/PublicRoutes';
import PageNotFound from '../components/shared/PageNotFound';

const AppRouter = () => {
  return (
    <>
      <Routes>
        {PublicRoutes.map(route => {
          // Get the layout component for this route, or fallback to Outlet
          const Layout = layouts[route.layout] || (() => <Outlet />);
          return (
            <Route key={route.path} path={route.path} element={<Layout />}>
              <Route index element={route.element} />
            </Route>
          );
        })}
        {/* Wildcard route at the bottom */}
        <Route path='*' element={<PageNotFound />} />
      </Routes>
    </>
  );
};

export default AppRouter;
