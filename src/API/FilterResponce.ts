import axios from 'axios';

export const SearchName = async (nameCaracter: string) => {
  try {
    const response = await axios.get(
      `https://rickandmortyapi.com/api/character/?name=${nameCaracter}`
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
