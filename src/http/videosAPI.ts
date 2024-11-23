import { $authHost, $host } from './index';

export const createType = async (type: any) => {
  const { data } = await $authHost.post('api/type', type);
  return data;
};

export const fetchTypes = async () => {
  const { data } = await $host.get('api/type');
  return data;
};

export const createBrand = async (brand: any) => {
  const { data } = await $authHost.post('api/brand', brand);
  return data;
};

export const fetchBrands = async () => {
  const { data } = await $host.get('api/brand');
  return data;
};

export const createFilm = async (film: any) => {
  const { data } = await $authHost.post('api/video', film);
  return data;
};

export const fetchFilm = async ({ typeId, brandId, page, limit = 5 }: any) => {
  const { data } = await $host.get('api/video', {
    params: {
      typeId,
      brandId,
      page,
      limit,
    },
  });
  return data;
};

export const fetchOneFilm = async (id: any) => {
  const { data } = await $host.get('api/video/' + id);
  return data;
};
