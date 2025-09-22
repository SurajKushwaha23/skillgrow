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
