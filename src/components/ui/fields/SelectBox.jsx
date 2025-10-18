/* eslint-disable react/prop-types */

import { useForm } from 'react-hook-form';

const SelectBox = ({ id, label, options, required = false, validationObject = {} }) => {
  const {
    register,
    formState: { errors = {} },
    clearErrors,
  } = useForm({
    mode: 'onBlur',
    reValidateMode: 'onBlur',
  });

  const handleClearErrors = fieldName => {
    clearErrors(fieldName);
  };

  return (
    <div className='relative'>
      <label htmlFor={id} className='block text-sm font-medium text-gray-700'>
        {label} {required && <span className='text-red-500'>*</span>}
      </label>
      <select
        id={id}
        {...register(id, validationObject)}
        className='w-full h-12 px-4 rounded-lg border border-gray-300 bg-white text-gray-900 focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200'
        onChange={() => handleClearErrors(id)}
      >
        <option value='' disabled selected>
          {label.toLowerCase()}
        </option>
        {options.map(option => (
          <option key={option.value} value={option.value}>
            {option.label || option.name}
          </option>
        ))}
      </select>
      {errors[id] && (
        <span id={`${id}-error`} className={`text-red-500 text-xs mt-1`}>
          {errors[id]?.message}
        </span>
      )}
    </div>
  );
};

export default SelectBox;
