export const LOGIN_FORM_FIELDS = {
  EMAIL: {
    label: 'Email',
    id: 'email',
    type: 'email',
    validation: {
      required: 'Email is required',
      pattern: {
        value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
        message: 'Please enter a valid email address',
      },
    },
  },
  PASSWORD: {
    label: 'Password',
    id: 'password',
    type: 'password',
    validation: {
      required: 'Password is required',
      minLength: {
        value: 8,
        message: 'Password must be at least 8 characters long',
      },
    },
  },
};

// registration form fields
export const SIGNUP_FORM_FIELDS = {
  FIRST_NAME: {
    label: 'First Name',
    id: 'firstName',
    type: 'text',
    validation: {
      required: 'First Name is required',
      minLength: {
        value: 3,
        message: 'First Name must be at least 3 characters long',
      },
    },
  },
  LAST_NAME: {
    label: 'Last Name',
    id: 'lastName',
    type: 'text',
  },
  EMAIL: {
    label: 'Email',
    id: 'email',
    type: 'email',
    validation: {
      required: 'Email is required',
      pattern: {
        value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
        message: 'Please enter a valid email address',
      },
    },
  },
  PASSWORD: {
    label: 'Password',
    id: 'password',
    type: 'password',
    validation: {
      required: 'Password is required',
      minLength: {
        value: 8,
        message: 'Password must be at least 8 characters long',
      },
    },
  },
};
