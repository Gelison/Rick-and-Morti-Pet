import axios from 'axios';

export const getLocation = async (page: number) => {
  try {
    const response = await axios.get(
      `https://rickandmortyapi.com/api/location/?page=${page}`
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
