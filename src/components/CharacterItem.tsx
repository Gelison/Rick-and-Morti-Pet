import { useNavigate } from 'react-router';
import { CharacterItemProps } from '../API/types';

export const CharacterItem: React.FC<CharacterItemProps> = ({ character }) => {
  const navigate = useNavigate();

  return (
    <div
      className='text-gray-300 hover:text-primary2 border border-white rounded-md cursor-pointer overflow-hidden transition-transform transform hover:scale-105 flex flex-col'
      onClick={() => navigate(`/character/${character.id}`)}
    >
      <img
        className='w-full h-48 object-cover'
        src={character.image}
        alt={character.name}
      />
      <div className='p-4 flex flex-col justify-between flex-grow'>
        <h2 className='text-lg font-bold mb-2'>Name: {character.name}</h2>
        <div className='text-sm'>
          <p>Status: {character.status}</p>
          <p>Species: {character.species}</p>
          <p>Gender: {character.gender}</p>
        </div>
      </div>
    </div>
  );
};
