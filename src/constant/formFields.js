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

// appointment form fields
export const APPOINTMENT_FORM_FIELDS = {
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
  GENDER: {
    label: 'Gender',
    id: 'gender',
    mandatory: true,
    validation: {
      required: { value: true, message: 'Please select a gender' },
    },
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
  PHONE: {
    label: 'Phone Number',
    id: 'phone',
    type: 'tel',
    validation: {
      required: 'Phone number is required',
      pattern: {
        value: /^\d{10}$/,
        message: 'Please enter a valid 10-digit phone number',
      },
    },
  },
  DATE: {
    label: 'Preferred Date',
    id: 'date',
    type: 'date',
    validation: {
      required: 'Preferred Date is required',
    },
  },
  TIME: {
    label: 'Preferred Time',
    id: 'time',
    type: 'time',
    validation: {
      required: 'Preferred Time is required',
    },
  },
  DOCTOR: {
    label: 'Select Doctor',
    id: 'doctor',
    type: 'select',
    options: ['Dr. Smith', 'Dr. Johnson', 'Dr. Williams'],
    validation: {
      required: 'Please select a doctor',
    },
  },
  NOTES: {
    label: 'Additional Notes',
    id: 'notes',
    type: 'textarea',
    validation: {
      required: 'Additional Notes are required',
    },
  },
  TERMS: {
    label: 'I agree to the terms and conditions',
    id: 'terms',
    type: 'checkbox',
    validation: {
      required: 'You must agree to the terms and conditions',
    },
  },
};
