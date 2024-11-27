import React, { useState } from 'react';
import { observer } from 'mobx-react-lite';

interface FilterBTNProps {
  input: string;
  task: (input: string) => void;
  updatePageNumber: (page: number) => void;
  index: number;
  name: string;
}

const FilterBTN: React.FC<FilterBTNProps> = ({
  input,
  task,
  updatePageNumber,
  index,
  name,
}) => {
  const [selected, setSelected] = useState<string | null>(null);

  const handleClick = () => {
    task(input);
    updatePageNumber(1);
    setSelected(input);
  };

  return (
    <div className='mb-2'>
      <div className='flex items-center'>
        <input
          className='hidden'
          type='radio'
          name={name}
          id={`${name}-${index}`}
          onChange={handleClick}
        />
        <label
          className={`cursor-pointer px-4 py-2 rounded-full border border-primary text-primary hover:bg-primary hover:text-white transition duration-300 ease-in-out ${
            selected === input ? 'bg-primary text-white' : ''
          }`}
          htmlFor={`${name}-${index}`}
        >
          {input}
        </label>
      </div>
    </div>
  );
};

export default observer(FilterBTN);
