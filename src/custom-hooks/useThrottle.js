import { useRef, useCallback } from 'react';

const useThrottle = (fn, delay = 500) => {
  let timer = useRef(null);

  const returnFunction = useCallback(
    function (...args) {
      if (!timer.current) {
        fn(...args);
        timer.current = setTimeout(() => {
          timer.current = null;
        }, delay);
      }
    },
    [fn, delay]
  );
  return returnFunction;
};

export default useThrottle;
