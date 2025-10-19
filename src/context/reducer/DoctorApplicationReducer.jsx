import { APPLICATION_ACTIONS_TYPES } from '../ActionType.js';

// define the initial state and reducer for managing doctor application booking form data
export const initialState = {
  bookingForm: {
    firstName: '',
    lastName: '',
    gender: '',
    dateOfBirth: '',
    email: '',
    phone: '',
    street: '',
    city: '',
    state: '',
    zip: '',
    country: '',
    department: '',
    appoinmentDate: '',
    message: '',
    upcomingEventInfo: false,
  },
};

const { SAVE_APPOINTMENT_FORM } = APPLICATION_ACTIONS_TYPES;

export const doctorApplicationReducer = (currentState = initialState, action) => {
  switch (action.type) {
    case SAVE_APPOINTMENT_FORM:
      return {
        ...initialState,
        bookingForm: action.payload,
      };
    default:
      return currentState;
  }
};
