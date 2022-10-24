class CharService {
  _apiBase = 'https://rickandmortyapi.com/api';

  getResourse = async (url: string) => {
    const res = await fetch(url);
    if (!res.ok) {
      throw new Error(`Could not fetch ${url}, status: ${res.status}`);
    }
    return await res.json();
  };

  getAllCharacters = async (page = 0, name = '', status = '', gender = '', species = '') => {
    const res = await this.getResourse(
      `${this._apiBase}/character/?page=${page}&name=${name}&status=${status}&gender=${gender}&species=${species}`,
    );
    console.log(res.results);
    return res.results;
  };

  getCharacter = async (searchValue: string) => {
    const res = await this.getResourse(`${this._apiBase}/character/?name=${searchValue}`);
    return res;
  };
}

export default CharService;
