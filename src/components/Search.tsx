import React, { useState } from 'react';
import { SearchIcon } from '../assets/index';

export const Search = () => {
  const [inputValue, setInputValue] = useState<string>('');
  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(event.target.value);
  };
  console.log(inputValue);
  return (
    <div className=''>
      <form>
        <div className='flex justify-center h-10'>
          <input
            className=' min-w-[400px] max-w-screen-2xl rounded-lg border-[1px] border-blue-500 focus:ring-blue-500 focus:border-blue-500'
            type='search'
            name='search'
            placeholder='Search'
            autoComplete='off'
            onChange={handleInputChange}
          />
          <img
            src={SearchIcon}
            alt=''
            className='h-6 w-6 cursor-pointer mt-2 -ml-8'
          />
        </div>
      </form>
    </div>
  );
};
