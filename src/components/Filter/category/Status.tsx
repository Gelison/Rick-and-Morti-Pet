import React, { useState } from 'react';
import { observer } from 'mobx-react-lite';
import FilterBTN from '../FilterButton';

interface StatusProps {
  updateStatus: (status: string) => void;
  updatePageNumber: (page: number) => void;
}

const Status: React.FC<StatusProps> = ({ updateStatus, updatePageNumber }) => {
  const [isVisible, setIsVisible] = useState(false);
  const status = ['Alive', 'Dead', 'Unknown'];

  const toggleVisibility = () => {
    setIsVisible((prev) => !prev);
  };

  return (
    <div className='mb-4'>
      <h2 className='text-lg font-bold'>
        <button
          className='px-4 py-2 rounded bg-primary text-white hover:bg-primary2'
          onClick={toggleVisibility}
        >
          Status
        </button>
      </h2>
      {isVisible && (
        <div className='mt-2 space-y-2'>
          {status.map((item, index) => (
            <FilterBTN
              key={index}
              index={index}
              name='status'
              task={updateStatus}
              updatePageNumber={updatePageNumber}
              input={item}
            />
          ))}
        </div>
      )}
    </div>
  );
};

export default observer(Status);
