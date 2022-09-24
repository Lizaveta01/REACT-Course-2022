class CharService {
  _apiBase = 'https://rickandmortyapi.com/api';

  getResourse = async (url: string) => {
    const res = await fetch(url);
    if (!res.ok) {
      throw new Error(`Could not fetch ${url}, status: ${res.status}`);
    }
    return await res.json();
  };

  getAllCharacters = async () => {
    const res = await this.getResourse(`${this._apiBase}/character/?page=1`);
    console.log(res.results);
    return res.results;
  };

  getCharacter = async (id: number) => {
    const res = await this.getResourse(`${this._apiBase}/character/${id}`);
    return res;
  };
}
export default CharService;
