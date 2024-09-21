import { useRef, useCallback } from 'react';

const useDebounce = (fn, delay = 500) => {
  let timer = useRef(null);

  const returnFunction = useCallback(
    function (...args) {
      clearTimeout(timer.current);
      timer.current = setTimeout(() => fn(...args), delay);
    },
    [fn, delay]
  );
  return returnFunction;
};
export default useDebounce;
