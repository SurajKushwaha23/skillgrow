import { ActionTypes } from '../ActionType.js';

// define the initial state and reducer for managing doctor application booking form data
export const initialState = {
  bookingForm: {
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    address: {
      street: '',
      city: '',
      state: '',
      zip: '',
    },
  },
};

export const doctorApplicationReducer = (state, action) => {
  switch (action.type) {
    case ActionTypes.UPDATE_BOOKING_FORM:
      return {
        ...state,
        bookingForm: {
          ...state.bookingForm,
          [action.payload.field]: action.payload.value,
        },
      };
    default:
      return state;
  }
};
