import { useState, useEffect } from 'react';
import { useParams } from 'react-router';
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
      <div className='fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2'>
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
    <div className='flex justify-center mt-10 px-4 sm:px-6 lg:px-8 mb-10'>
      <div className='w-full max-w-md bg-white p-6 rounded-lg shadow-md'>
        <h1 className='text-2xl font-bold mb-4 text-center text-primary'>
          {character?.name}
        </h1>

        <img
          src={character?.image}
          alt={character?.name}
          className='w-full h-auto max-w-xs mx-auto mb-4 rounded-md shadow-sm object-cover'
        />
        <p className='text-center text-gray-700 mb-2'>
          Species: {character?.species}
        </p>
        <p className='text-center text-gray-700 mb-2'>
          Status: {character?.status}
        </p>
        <p className='text-center text-gray-700 mb-2'>
          Gender: {character?.gender}
        </p>
        <p className='text-center text-gray-700 mb-2'>
          Origin: {character?.origin.name}
        </p>
        <p className='text-center text-gray-700'>
          Location: {character?.location.name}
        </p>
      </div>
    </div>
  );
};
