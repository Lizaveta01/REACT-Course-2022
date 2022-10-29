import { useEffect, useRef } from 'react';

export const useComponentDidMount = () => {
  const ref: React.MutableRefObject<boolean | undefined> = useRef();
  useEffect(() => {
    ref.current = true;
  }, []);
  return ref.current;
};
