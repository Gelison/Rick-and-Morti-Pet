import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { getCharacterInfo } from '../API/getCharacter';
import { CharacterSingleItem } from '../API/types';

export const SingleCharacter = (): JSX.Element => {
  const { id } = useParams<{ id?: string }>();

  const [character, setCharacter] = useState<CharacterSingleItem | null>(null);
  const [loading, setLoading] = useState<boolean>(true);

  const fetchData = async (): Promise<void> => {
    setLoading(true);
    const response = await getCharacterInfo(id as string);
    setCharacter(response);
    setLoading(false);
  };

  if (!id) {
    return <div>Invalid ID</div>;
  }

  useEffect(() => {
    fetchData();
  }, [id]);

  if (loading) {
    return (
      <div className='fixed top-1/2 left-1/2'>
        <div
          className='inline-block h-20 w-20 animate-spin rounded-full border-4 border-solid border-current border-r-transparent align-[-0.125em] motion-reduce:animate-[spin_1.5s_linear_infinite]'
          role='status'
        >
          <span className='!h-px !w-px !overflow-hidden !whitespace-nowrap !border-0 !p-0 ![clip:rect(0,0,0,0)]'></span>
        </div>
      </div>
    );
  }

  return (
    <div className='flex -mt-64 pl-80'>
      <img src={character?.image} alt={character?.name} />
      <div className='flex flex-col  ml-5 '>
        <p>{character?.species}</p>
        <h1>{character?.name}</h1>
        <div>{character?.status}</div>
        <div>{character?.gender}</div>

        <p>Origin: {character?.origin.name}</p>
        <p>Location: {character?.location.name}</p>
      </div>
    </div>
  );
};
