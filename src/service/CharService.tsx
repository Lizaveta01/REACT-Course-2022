import axios from 'axios';

class CharService {
  _apiBase = 'https://rickandmortyapi.com/api';

  getResourse = async (url: string) => {
    const res = await axios.get(url);
    return await res.data.results;
  };

  getAllCharacters = async (page = 0, name = '', status = '', gender = '', species = '') => {
    const res = await this.getResourse(
      `${this._apiBase}/character/?page=${page}&name=${name}&status=${status}&gender=${gender}&species=${species}`,
    );
    console.log(res);
    return res;
  };
}

export default CharService;
