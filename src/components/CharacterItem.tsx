import { useNavigate } from 'react-router-dom';
import { CharacterItemProps } from '../API/types';

export const CharacterItem: React.FC<CharacterItemProps> = ({ character }) => {
  const navigate = useNavigate();

  return (
    <div
      className='mx-10 border-[1px] border-white rounded-md mb-4 cursor-pointer'
      onClick={() => navigate(`/character/${character.id}`)}
    >
      <img className='rounded-md' src={character.image} alt={character.name} />
      <div className='ml-1 hover:text-primary'>
        <h2>Name: {character.name}</h2>
        <p>
          Status: {character.status} - Species: {character.species}
        </p>
        <p>Gender: {character.gender}</p>
      </div>
    </div>
  );
};
