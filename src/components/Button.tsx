import React from 'react';

interface ButtonProps {
  isDisabled: boolean;
  onClick: () => void;
  label: string;
}

export const Button: React.FC<ButtonProps> = ({
  isDisabled,
  label,
  onClick,
}) => {
  return (
    <button
      className='w-full sm:w-52 h-12 text-lg rounded-lg text-white bg-primary active:bg-primary2 disabled:bg-secondary mb-4 sm:mb-0 px-4 py-2 transition-all duration-300'
      disabled={isDisabled}
      onClick={onClick}
    >
      {label}
    </button>
  );
};
