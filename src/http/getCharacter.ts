import axios from 'axios';

export const getCharacter = async (page: number) => {
  const response = await axios.get(
    `https://rickandmortyapi.com/api/character/?page=${page}`
  );
  if (!response.data || response.status !== 200) return;
  return response.data;
};
