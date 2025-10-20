/* eslint-disable react/prop-types */
import { useForm } from 'react-hook-form';

const SelectBox = ({ id, label, options, mandatory = false, validationObject = {} }) => {
  const {
    register,
    formState: { errors = {} },
    clearErrors,
  } = useForm({
    mode: 'onBlur',
  });

  const handleClearErrors = fieldName => {
    clearErrors(fieldName);
  };

  return (
    <div className='relative'>
      <label htmlFor={id} className={`block text-sm font-medium text-gray-700 mb-1`}>
        {label} {mandatory && <span className='text-red-500'>*</span>}
      </label>
      <div className='relative rounded-md shadow-sm'>
        <select
          id={id}
          {...register(id, validationObject)}
          className={`flex h-10 w-full rounded-md border border-gray-300 bg-transparent px-3 py-2 text-sm placeholder:text-gray-400 focus:outline-none focus:ring-1 focus:ring-gray-400 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50 ${
            errors[id] ? 'border-red-500' : ''
          }  `}
          onChange={() => handleClearErrors(id)}
          placeholder='Select an option'
        >
          <option value='' disabled>
            Select an option
          </option>
          {options.map((option, index) => (
            <option key={option?.value ?? option?.name ?? index} value={option.value}>
              {option.label || option.name}
            </option>
          ))}
        </select>
      </div>
      {errors[id] && (
        <span id={`${id}-error`} className={`text-red-500 text-sm mt-1`}>
          {errors[id]?.message}
        </span>
      )}
    </div>
  );
};

export default SelectBox;
