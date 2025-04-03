import React from 'react';

const Input = ({
  label,
  className,
  type,
  placeholder,
  ...props
}: {
  label: string;
  className?: string;
  placeholder?: string;
  type?: string;
}) => {
  return (
    <div>
      <label className="block font-medium text-black">{label}</label>
      <input
        className={`sm:text-md mt-1 block w-full rounded-md border border-gray-200 px-3 py-2 focus:border-primary focus:ring-primary ${className}`}
        type={type}
        placeholder={placeholder}
        {...props}
      />
    </div>
  );
};

export default Input;
