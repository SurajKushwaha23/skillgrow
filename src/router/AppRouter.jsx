import { Suspense } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { PublicRoutes as publicRoutes } from './routes/publicRoutes';
import ProtectedRoute from '../layouts/MainLayout';

const AppRouter = () => {
  return (
    <Router>
      <Suspense fallback={<div>Loading...</div>}>
        <Routes>
          {publicRoutes.map(route => (
            <Route
              key={route.path}
              path={route.path}
              element={<ProtectedRoute>{route.element}</ProtectedRoute>}
            />
          ))}
        </Routes>
      </Suspense>
    </Router>
  );
};

export default AppRouter;
