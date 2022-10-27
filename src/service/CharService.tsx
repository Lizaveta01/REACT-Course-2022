import axios from 'axios';

const apiBase = 'https://rickandmortyapi.com/api';

const getResourse = async (url: string) => {
  const res = await axios.get(url);
  return await res.data.results;
};

export const getAllCharacters = async (
  page = 0,
  name = '',
  status = '',
  gender = '',
  species = '',
) => {
  const res = await getResourse(
    `${apiBase}/character/?page=${page}&name=${name}&status=${status}&gender=${gender}&species=${species}`,
  );
  return res;
};
