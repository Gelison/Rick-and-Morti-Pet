import { useNavigate } from 'react-router';
import { CharacterItemProps } from '../API/types';

export const CharacterSearchItem: React.FC<CharacterItemProps> = ({
  character,
}) => {
  const navigate = useNavigate();

  return (
    <div
      className='flex items-center space-x-4 p-4 bg-gray-800 rounded-md shadow-md hover:bg-gray-700 cursor-pointer transition-colors duration-300'
      onClick={() => navigate(`/character/${character.id}`)}
    >
      <img
        className='rounded-full h-16 w-16 object-cover md:h-20 md:w-20'
        src={character.image}
        alt={character.name}
      />
      <div className='text-white'>
        <h2 className='text-base font-bold sm:text-lg md:text-xl lg:text-2xl'>
          {character.name}
        </h2>
        <p className='text-xs text-gray-400 sm:text-sm md:text-base lg:text-lg'>
          ID: {character.id}
        </p>
      </div>
    </div>
  );
};
