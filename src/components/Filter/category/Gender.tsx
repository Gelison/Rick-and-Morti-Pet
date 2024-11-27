import React, { useState } from 'react';
import { observer } from 'mobx-react-lite';
import FilterBTN from '../FilterButton';

interface GenderProps {
  updateGender: (gender: string) => void;
  updatePageNumber: (page: number) => void;
}

const Gender: React.FC<GenderProps> = ({ updateGender, updatePageNumber }) => {
  const [isVisible, setIsVisible] = useState(false);
  const genders = ['female', 'male', 'genderless', 'unknown'];

  const toggleVisibility = () => {
    setIsVisible((prev) => !prev);
  };

  return (
    <div className='mb-4'>
      <h2 className='text-lg font-bold'>
        <button
          className='px-4 py-2 rounded bg-primary text-white hover:bg-primary2'
          onClick={toggleVisibility}
          type='button'
        >
          Gender
        </button>
      </h2>
      {isVisible && (
        <div className='mt-2 space-y-2'>
          {genders.map((item, index) => (
            <FilterBTN
              key={index}
              name='gender'
              index={index}
              updatePageNumber={updatePageNumber}
              task={updateGender}
              input={item}
            />
          ))}
        </div>
      )}
    </div>
  );
};

export default observer(Gender);
