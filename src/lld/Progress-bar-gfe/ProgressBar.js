import { useState, useEffect } from 'react';
import './index.css';

//make only CONCURRENT_ACTIVE_BARS run at at time
const CONCURRENT_ACTIVE_BARS = 3;
const ProgressBarContainer = () => {
  const [count, setCount] = useState(0);
  const [filledCount, setFilledCount] = useState(0);
  const handleClick = () => {
    setCount((prev) => prev + 1);
  };
  const increasefilledCount = () => {
    setFilledCount((prev) => prev + 1);
  };

  return (
    <div className="parent_1">
      {`concurrent progress possible ${CONCURRENT_ACTIVE_BARS}`}
      <button onClick={handleClick}>Add</button>
      {new Array(count).fill(0).map((ele, index) => {
        return (
          <ProgressBar
            key={index}
            canBePainted={
              index < filledCount + CONCURRENT_ACTIVE_BARS ? true : false
            }
            increasefilledCount={increasefilledCount}
          />
        );
      })}
    </div>
  );
};

const ProgressBar = ({ canBePainted, increasefilledCount }) => {
  const [progressActive, setProgressActive] = useState(false);

  useEffect(() => {
    if (canBePainted) setProgressActive(true);
  }, [canBePainted]);

  return (
    <div className="placeHolder">
      <div
        className={`progress ${progressActive ? 'active_Progress' : ''}`}
        onTransitionEnd={() => increasefilledCount()}
      ></div>
    </div>
  );
};

export default ProgressBarContainer;
