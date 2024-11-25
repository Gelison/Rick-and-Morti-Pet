import { useState, useEffect } from 'react';
import { getCharacter } from '../API/getCharacter';
import { ShowMoreButton } from '../components/ShowMoreButton';
import { CharacterItem } from '../components/CharacterItem';

interface Character {
  id: number;
  name: string;
  status: string;
  species: string;
  gender: string;
  image: string;
}

export const Home = () => {
  const [characters, setCharacters] = useState<Character[]>([]);
  const [loading, setLoading] = useState(true);
  const [page, setPage] = useState(1);

  const onClick = () => {
    setPage((prev) => prev + 1);
  };

  const fetchData = async () => {
    setLoading(true);
    try {
      const response = await getCharacter(page);
      if (response) {
        setCharacters((prev) => [...prev, ...response.results]);
      }
    } catch (error) {
      console.error('Ошибка при выполнении запроса:', error);
    }
    setLoading(false);
  };

  useEffect(() => {
    fetchData();
  }, []);

  useEffect(() => {
    if (page > 1) {
      fetchData();
    }
  }, [page]);

  return (
    <div>
      <div className='flex flex-wrap -mt-64 pl-80'>
        {characters.length > 0 ? (
          characters.map((character) => (
            <CharacterItem key={character.id} character={character} />
          ))
        ) : (
          <div>Персонажи не найдены!</div>
        )}
      </div>
      <div className='flex justify-center'>
        <ShowMoreButton
          text='Показать больше'
          onClick={onClick}
          loading={loading}
        />
      </div>
    </div>
  );
};
