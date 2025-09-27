/* eslint-disable react/prop-types */
import React from 'react';
import { Navigate, Outlet } from 'react-router-dom';

const ProtectedRoute = ({ children }) => {
  const isAuthenticated = false; // Replace with real auth check (e.g., token in localStorage)

  if (!isAuthenticated) {
    return <Navigate to='/login' replace />;
  }
  return children ? children : <Outlet />;
};

export default ProtectedRoute;
