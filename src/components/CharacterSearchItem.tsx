import { useNavigate } from 'react-router-dom';
import { CharacterItemProps } from '../API/types';

export const CharacterSearchItem: React.FC<CharacterItemProps> = ({
  character,
}) => {
  const navigate = useNavigate();

  return (
    <div className=' flex flex-row'>
      <div
        className='mr-10  rounded-md  cursor-pointer flex  my-1'
        onClick={() => navigate(`/character/${character.id}`)}
      >
        <img
          className='rounded-md h-10 w-10 '
          src={character.image}
          alt={character.name}
        />
        <div className=' hover:text-primary flex pt-2'>
          <h2>Name: {character.name}</h2>
        </div>
      </div>
    </div>
  );
};
