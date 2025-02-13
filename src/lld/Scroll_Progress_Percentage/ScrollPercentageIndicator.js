import { useState } from 'react';
import { data } from './data';
import './index.css';
const ScrollPercentageIndicator = () => {
  const [scrollPercentage, setScrollPercentage] = useState(0);

  const handleScroll = (e) => {
    console.log(e.target.scrollTop);
    const element = e.target;
    const parentContainerHeight = element.clientHeight;
    const scrollHeight = element.scrollHeight;
    const ScrollableHeight = scrollHeight - parentContainerHeight;
    const ScrollPercent = parseInt(
      (e.target.scrollTop / ScrollableHeight) * 100
    );
    setScrollPercentage(ScrollPercent);
  };

  console.log('Scroll Percent', scrollPercentage);
  return (
    <>
      ScrollPercentageIndicator
      <div
        className="parentContainer"
        style={{
          width: '500px',
          height: '500px',
          border: '1px solid black',
          marginInline: 'auto',
          overflowY: 'scroll',
        }}
        onScroll={(e) => {
          handleScroll(e);
        }}
      >
        {data}
      </div>
    </>
  );
};

export default ScrollPercentageIndicator;
