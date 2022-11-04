import { useCallback, useEffect, useRef, useState } from 'react';

type Data<T, N> = {
  [key: string]: T | N;
};

export const useComponentDidMount = () => {
  const ref: React.MutableRefObject<boolean | undefined> = useRef();
  useEffect(() => {
    ref.current = true;
  }, []);
  return ref.current;
};

export const useHttp = () => {
  const request = async (
    url: string,
    method = 'GET',
    body = null,
    headers = { 'Content-Type': 'application/json' },
  ) => {
    try {
      const response = await fetch(url, { method, body, headers });
      if (!response.ok) {
        throw new Error(`Could not fetch ${url}, status: ${response.status}`);
      }
      const data = await response.json();
      return data;
    } catch (e) {
      throw e;
    }
  };

  return { request };
};
