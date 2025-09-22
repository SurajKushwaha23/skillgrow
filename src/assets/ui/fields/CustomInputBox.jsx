import { useForm } from 'react-hook-form';

const CustomInputBox = props => {
  const { id, formlabel, validationObject, required } = props;

  const {
    register,
    formState: { errors },
  } = useForm({
    mode: 'onBlur', // Validate on blur events
  });

  return (
    <>
      <label htmlFor={id} className='block text-sm font-medium text-gray-700 mb-1'>
        {formlabel}
        {required && <span className='text-red-500'>*</span>}
      </label>
      <div className='mt-2'>
        <input
          id={id}
          {...register(id, validationObject)}
          className={`flex h-10 w-full rounded-md border border-gray-300 bg-transparent px-3 py-2 text-sm placeholder:text-gray-400 focus:outline-hidden focus:ring-1 focus:ring-gray-400 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50 ${
            errors[id] ? 'border-red-500' : ''
          }`}
          placeholder={`Enter your ${formlabel}`}
          {...props}
        />
        {errors[id] && <span className='text-red-500 text-xs'>{errors[id].message}</span>}
      </div>
    </>
  );
};

export default CustomInputBox;
