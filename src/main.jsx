import React from 'react';
import ReactDOM from 'react-dom/client';
import AppRouter from './router/AppRouter';

import DoctorApplicationProvider from './context/DoctorApplicationProvider';

import './index.css';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <DoctorApplicationProvider>
      <AppRouter />
    </DoctorApplicationProvider>
  </React.StrictMode>
);
