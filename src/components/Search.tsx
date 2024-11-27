import { useState, useEffect } from 'react';
import axios from 'axios';
import { Character } from '../API/types';
import { useDebounce } from '../uilse/hooks/useDebounce';
import { CharacterSearchItem } from './CharacterSearchItem';

export const Search = () => {
  const [characters, setCharacters] = useState<Character[]>([]);
  const [inputValue, setInputValue] = useState<string>('');
  const debounceValue = useDebounce(inputValue, 1000);
  const [isSearchVisible, setIsSearchVisible] = useState<boolean>(false);

  const fetchCharactersByName = async (name: string) => {
    try {
      const response = await axios.get(
        `https://rickandmortyapi.com/api/character/?name=${name}`
      );
      if (response.data && response.status === 200) {
        setCharacters(response.data.results);
      }
    } catch (error) {
      console.error('Ошибка при выполнении запроса:', error);
      setCharacters([]);
    }
  };

  useEffect(() => {
    if (debounceValue) {
      fetchCharactersByName(debounceValue);
      setIsSearchVisible(true);
    } else {
      setCharacters([]);
    }
  }, [debounceValue]);

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(event.target.value);
  };

  const handleHideSearch = () => {
    setIsSearchVisible(true);
  };

  return (
    <div className='w-3/4 '>
      <form className='relative' onClick={() => setIsSearchVisible(false)}>
        <div className='flex justify-center h-10'>
          <input
            className='w-3/4 rounded-lg border-[1px] border-gray-500 dark:bg-graphite focus:ring-primary focus:border-primary p-2'
            type='search'
            name='search'
            placeholder='Search by name'
            autoComplete='off'
            onChange={handleInputChange}
            onClick={() => setIsSearchVisible(false)}
          />
        </div>
        {isSearchVisible && (
          <div className='w-3/4 overflow-y-scroll h-40 z-10 absolute left-[13%] bg-secondary rounded-lg'>
            {characters.map((character) => (
              <CharacterSearchItem character={character} key={character.id} />
            ))}
          </div>
        )}
      </form>
    </div>
  );
};
