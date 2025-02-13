import { useEffect, useRef, useState } from 'react';
import './index.css';
const StopWatch = () => {
  const [isPaused, setIsPaused] = useState(true);
  const [toatalSeconds, setTotalSeconds] = useState(0);
  const timeridRef = useRef(null);

  const handleResetClick = () => {
    setTotalSeconds(0);
    setIsPaused(true);
    clearInterval(timeridRef.current);
  };

  const handleResumeOrPause = () => {
    if (isPaused) {
      timeridRef.current = setInterval(() => {
        setTotalSeconds((prev) => prev + 1);
      }, 1000);
      setIsPaused(!isPaused);
    } else {
      clearInterval(timeridRef.current);
      setIsPaused(!isPaused);
    }
  };

  useEffect(() => {
    return () => {
      clearInterval(timeridRef.current);
    };
  }, []);

  const displayHours = parseInt(toatalSeconds / 3600);
  const displayMinutes = parseInt((toatalSeconds % 3600) / 60);
  const displaySeconds = toatalSeconds % 60;

  return (
    <>
      <div className="coantinaer">Total Seconds {toatalSeconds}</div>
      <div className="parent">
        <div className="EachCell">
          <div>{displayHours}</div>
          <div>Hours</div>
        </div>
        <div className="EachCell">
          <div>{displayMinutes}</div>
          <div>Minutes</div>
        </div>
        <div className="EachCell">
          <div>{displaySeconds}</div>
          <div>Seconds</div>
        </div>
      </div>
      <button onClick={handleResumeOrPause}>
        {isPaused ? 'Resume' : 'Pause'}
      </button>
      <button onClick={handleResetClick}>Reset</button>
    </>
  );
};

export default StopWatch;
