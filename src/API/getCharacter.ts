import axios from 'axios';

export const getCharacter = async (
  page: number,
  status: string,
  gender: string,
  species: string
) => {
  try {
    const response = await axios.get(
      `https://rickandmortyapi.com/api/character/?page=${page}&status=
      ${status}&gender=${gender}&species=${species}`
    );
    if (!response.data || response.status !== 200) {
      throw new Error('Ошибка получения данных');
    }
    return response.data;
  } catch (error) {
    console.error('Ошибка при выполнении запроса:', error);
    throw error;
  }
};

export const getCharacterInfo = async (id: string) => {
  try {
    const response = await axios.get(
      `https://rickandmortyapi.com/api/character/${id}`
    );
    if (!response.data || response.status !== 200) {
      throw new Error('Ошибка получения данных');
    }
    return response.data;
  } catch (error) {
    console.error('Ошибка при выполнении запроса:', error);
    throw error;
  }
};
