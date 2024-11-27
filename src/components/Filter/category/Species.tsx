import React, { useState } from 'react';
import { observer } from 'mobx-react-lite';
import FilterBTN from '../FilterButton';

interface SpeciesProps {
  updateSpecies: (species: string) => void;
  updatePageNumber: (page: number) => void;
}

const Species: React.FC<SpeciesProps> = ({
  updateSpecies,
  updatePageNumber,
}) => {
  const [isVisible, setIsVisible] = useState(false);
  const species = [
    'Human',
    'Alien',
    'Humanoid',
    'Poopybutthole',
    'Mythological',
    'Unknown',
    'Animal',
    'Disease',
    'Robot',
    'Cronenberg',
    'Planet',
  ];

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
          Species
        </button>
      </h2>
      {isVisible && (
        <div className='mt-2 space-y-2'>
          {species.map((item, index) => (
            <FilterBTN
              key={index}
              name='species'
              index={index}
              updatePageNumber={updatePageNumber}
              task={updateSpecies}
              input={item}
            />
          ))}
        </div>
      )}
    </div>
  );
};

export default observer(Species);
