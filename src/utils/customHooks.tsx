import { useCallback, useEffect, useRef, useState } from 'react';

export const useComponentDidMount = () => {
  const ref: React.MutableRefObject<boolean | undefined> = useRef();
  useEffect(() => {
    ref.current = true;
  }, []);
  return ref.current;
};

export const useHttp = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<unknown | null>(null);

  const request = useCallback(
    async (
      url: string,
      method = 'GET',
      body = null,
      headers = { 'Content-Type': 'application/json' },
    ) => {
      setLoading(true);
      try {
        const response = await fetch(url, { method, body, headers });

        if (!response.ok) {
          throw new Error(`Could not fetch ${url}, status: ${response.status}`);
        }
        const data = await response.json();
        setLoading(false);
        return data;
      } catch (e) {
        setLoading(false);
        setError(e);
        throw e;
      }
    },
    [],
  );

  const clearError = useCallback(() => setError(null), []);
  return { loading, request, error, clearError };
};
