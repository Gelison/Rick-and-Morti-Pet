import React from 'react';
import { observer } from 'mobx-react-lite';
import Gender from './category/Gender';
import Species from './category/Species';
import Status from './category/Status';
import CharacterStore from '../../stores/CharacterStore';

interface FilterProps {
  updatePageNumber: (page: number) => void;
}

const Filter: React.FC<FilterProps> = ({ updatePageNumber }) => {
  const clear = () => {
    console.log('Clearing filters');
    CharacterStore.setStatus('');
    CharacterStore.setGender('');
    CharacterStore.setSpecies('');
    updatePageNumber(1);
  };

  return (
    <div className='p-4 bg-gray-100 rounded-lg shadow-md'>
      <div className='text-2xl font-bold mb-4 text-primary'>Filters</div>
      <div
        className='text-red-500 cursor-pointer mb-4 hover:text-red-700 transition-colors duration-200'
        onClick={clear}
      >
        Clear Filters
      </div>
      <div className='space-y-4'>
        <Status
          updatePageNumber={updatePageNumber}
          updateStatus={CharacterStore.setStatus.bind(CharacterStore)}
        />
        <Species
          updatePageNumber={updatePageNumber}
          updateSpecies={CharacterStore.setSpecies.bind(CharacterStore)}
        />
        <Gender
          updatePageNumber={updatePageNumber}
          updateGender={CharacterStore.setGender.bind(CharacterStore)}
        />
      </div>
    </div>
  );
};
export default observer(Filter);
