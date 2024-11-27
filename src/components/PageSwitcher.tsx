import React from 'react';
import { observer } from 'mobx-react-lite';
import { Button } from './Button';

interface PageSwitcherProps {
  pageNumber: number;
  totalPages: number;
  updatePageNumber: (page: number) => void;
}

const PageSwitcher: React.FC<PageSwitcherProps> = ({
  pageNumber,
  totalPages,
  updatePageNumber,
}) => {
  const handlePrevious = () => {
    if (pageNumber > 1) {
      updatePageNumber(pageNumber - 1);
    }
  };

  const handleNext = () => {
    if (pageNumber < totalPages) {
      updatePageNumber(pageNumber + 1);
    }
  };

  return (
    <div className='flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-10 mb-5'>
      <Button
        isDisabled={pageNumber === 1}
        onClick={handlePrevious}
        label='Previous'
      />
      <span className='text-lg text-gray-700'>
        Page {pageNumber} of {totalPages}
      </span>
      <Button
        isDisabled={pageNumber === totalPages}
        onClick={handleNext}
        label='Next'
      />
    </div>
  );
};

export default observer(PageSwitcher);
