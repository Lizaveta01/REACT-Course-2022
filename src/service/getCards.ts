import { HttpRequests, IChar } from '../constants/constants';
import { setCards, setError, setLoading } from '../store/slices/fetchDataSliсe';
import { store } from '../store/Store';

const { TYPE, GET } = HttpRequests;

export const getCards = async (url: string): Promise<IChar[]> => {
  const { dispatch } = store;

  dispatch(setLoading());

  try {
    const response = await fetch(`${url}`, {
      method: GET,
      headers: {
        'Content-Type': TYPE,
      },
    });

    if (!response.ok) {
      throw new Error('Something wrong!');
    }

    const data: IChar[] = await response.json();
    dispatch(setCards(data));
    return data;
  } catch (err) {
    dispatch(setError());
    throw err;
  }
};
