/* eslint-disable react/prop-types */
import { useState } from 'react';
import { useForm } from 'react-hook-form'; // Add this

const CustomInputBox = props => {
  const {
    id,
    fieldLabel,
    validationObject = {}, // Default to empty object for no validation
    required = false,
    helpText,
  } = props;

  const {
    register,
    formState: { errors = {} },
    clearErrors,
  } = useForm({
    mode: 'onBlur',
  });

  const [hasTyped, setHasTyped] = useState(false);
  const errorId = `${id}-error`;
  const helpId = helpText ? `${id}-help` : undefined;

  const handleClearErrors = fieldName => {
    clearErrors(fieldName);
  };

  const handleChange = () => {
    if (!hasTyped && errors[id]) {
      handleClearErrors(id);
      setHasTyped(true);
    }
  };

  return (
    <div className='relative'>
      {fieldLabel && (
        <label htmlFor={id} className={`block text-sm font-medium text-gray-700 mb-1`}>
          {fieldLabel}
          {required && <span className='text-red-500 ml-1'>*</span>}
        </label>
      )}
      <div className='mt-1 relative rounded-md shadow-sm'>
        <input
          id={id}
          {...register(id, validationObject)}
          className={`flex h-10 w-full rounded-md border border-gray-300 bg-transparent px-3 py-2 text-sm placeholder:text-gray-400 focus:outline-none focus:ring-1 focus:ring-gray-400 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50 ${
            errors[id] ? 'border-red-500' : ''
          }  `}
          aria-invalid={!!errors[id]}
          aria-describedby={
            helpId || errors[id] ? `${helpId ? helpId + ' ' : ''}${errorId}` : undefined
          }
          onChange={handleChange}
          {...props} // Spread native props last to allow overrides
        />
      </div>
      {errors[id] && (
        <span id={errorId} className={`text-red-500 text-xs mt-1`}>
          {errors[id]?.message}
        </span>
      )}
      {helpText && (
        <p id={helpId} className='text-gray-500 text-xs mt-1'>
          {helpText}
        </p>
      )}
    </div>
  );
};

export default CustomInputBox;
