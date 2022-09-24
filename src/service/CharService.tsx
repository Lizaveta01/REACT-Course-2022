/* eslint-disable @typescript-eslint/no-explicit-any */
class CharService {
  _apiBase = 'https://rickandmortyapi.com/api';

  getResourse = async (url: any) => {
    const res = await fetch(url);

    if (!res.ok) {
      throw new Error(`Could not fetch ${url}, status: ${res.status}`);
    }

    return await res.json();
  };

  getAllCharacters = async () => {
    const res = await this.getResourse(`${this._apiBase}/character/?page=1`);
    console.log(res.results.map((item: any) => this._transform(item)));
    return res.results.map((item: any) => this._transform(item));
  };

  getCharacter = async (id: number) => {
    const res = await this.getResourse(`${this._apiBase}/character/${id}`);
    return this._transform(res.results[0]);
  };

  _transform = (char: any) => {
    return {
      id: char.id,
      name: char.name,
      status: char.status,
      gender: char.gender,
      species: char.species,
      planet: char.origin.name,
      image: char.image,
    };
  };
}
export default CharService;
