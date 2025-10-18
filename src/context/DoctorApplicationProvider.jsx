/* eslint-disable react/prop-types */
// eslint-disable-next-line no-unused-vars
import React, { createContext, useReducer } from 'react';
import { doctorApplicationReducer } from './reducer/DoctorApplicationReducer';
import { initialState } from './reducer/DoctorApplicationReducer';

const DoctorApplicationContext = createContext();
const DoctorApplicationDispatchContext = createContext();

const DoctorApplicationProvider = ({ children }) => {
  const [state, dispatch] = useReducer(doctorApplicationReducer, initialState);
  return (
    <DoctorApplicationContext.Provider value={state}>
      <DoctorApplicationDispatchContext.Provider value={dispatch}>
        {children}
      </DoctorApplicationDispatchContext.Provider>
    </DoctorApplicationContext.Provider>
  );
};

export default DoctorApplicationProvider;
