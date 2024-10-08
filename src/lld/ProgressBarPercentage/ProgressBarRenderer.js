import ProgressBar from './Component/ProgressBar';
import './index.css';
import { useEffect, useState } from 'react';
const ProgressBarRenderer = () => {
  const [progressPercent, setProgressPercent] = useState(0);

  useEffect(() => {
    const timerId = setInterval(() => {
      setProgressPercent((prev) => {
        if (prev === 100) {
          clearInterval(timerId);
          return prev;
        }
        return prev + 1;
      });
    }, 200);

    return () => {
      clearInterval(timerId);
    };
  }, []);

  return <ProgressBar progressPercent={progressPercent} />;
};
export default ProgressBarRenderer;
