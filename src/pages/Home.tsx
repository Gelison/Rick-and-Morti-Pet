import { useEffect } from 'react';
import { observer } from 'mobx-react-lite';
import { getCharacter } from '../API/getCharacter';
import { CharacterItem } from '../components/CharacterItem';
import Filter from '../components/Filter/Filter';
import PageSwitcher from '../components/PageSwitcher'; // Импортируем компонент PageSwitcher
import CharacterStore from '../stores/CharacterStore';
import { Search } from '../components/Search';

const Home: React.FC = observer(() => {
  useEffect(() => {
    const fetchData = async () => {
      CharacterStore.setLoading(true);
      try {
        console.log('Fetching characters');
        const response = await getCharacter(
          CharacterStore.page,
          CharacterStore.status,
          CharacterStore.gender,
          CharacterStore.species
        );
        if (response) {
          CharacterStore.setCharacters(response.results);
          CharacterStore.updateInfo(response.info); // Обновляем информацию о страницах
        }
      } catch (error) {
        console.error('Ошибка при выполнении запроса:', error);
      }
      CharacterStore.setLoading(false);
    };

    fetchData();
  }, [
    CharacterStore.page,
    CharacterStore.status,
    CharacterStore.gender,
    CharacterStore.species,
  ]);

  return (
    <div className='container mx-auto px-4 py-8'>
      <h1 className='text-center mb-8 text-3xl text-primary font-bold'>
        Rick and Morty Characters
      </h1>
      <div className='flex justify-center mb-8'>
        <Search />
      </div>
      <div className='flex flex-col md:flex-row'>
        <div className='mb-8 md:mb-0 md:mr-8'>
          <Filter
            updatePageNumber={CharacterStore.updatePageNumber.bind(
              CharacterStore
            )}
          />
        </div>
        <div className='flex-grow'>
          <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6'>
            {CharacterStore.characters.length > 0 ? (
              CharacterStore.characters.map((character, index) => (
                <CharacterItem
                  key={`${character.id}-${index}`}
                  character={character}
                />
              ))
            ) : (
              <div className='text-center text-gray-500'>
                Персонажи не найдены!
              </div>
            )}
          </div>
          <div className='flex justify-center mt-8'>
            <PageSwitcher
              pageNumber={CharacterStore.page}
              totalPages={CharacterStore.info.pages}
              updatePageNumber={CharacterStore.updatePageNumber.bind(
                CharacterStore
              )}
            />
          </div>
        </div>
      </div>
    </div>
  );
});

export default Home;
