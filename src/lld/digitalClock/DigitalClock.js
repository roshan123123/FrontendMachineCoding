import { useEffect, useState } from 'react';

const DigitalClock = () => {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const intervalId = setInterval(() => {
      setTime(new Date());
    }, 1000);
    return () => {
      clearInterval(intervalId);
    };
  }, []);

  const displayHours = time.getHours();
  const displayMinutes = time.getMinutes();
  const displaySeconds = time.getSeconds();

  return (
    <div>
      Digital Clock
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
        <div className="EachCell">
          <div>Date using toLocaleDateString function </div>
          <div> {time.toLocaleDateString()}</div>
        </div>
        <div className="EachCell">
          <div>time using toLocaleTimeString function </div>
          <div>{time.toLocaleTimeString()}</div>
        </div>
      </div>
    </div>
  );
};

export default DigitalClock;
