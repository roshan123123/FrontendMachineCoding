import { useEffect, useState } from 'react';
import './index.css';

const InfintieScroll = () => {
  const [count, setCount] = useState(50);

  useEffect(() => {
    const ele = document.getElementById('scroll_containter');
    const handleScrollEnd = () => {
      console.log('askndfk');
      if (ele.clientHeight + ele.scrollTop + 50 >= ele.scrollHeight) {
        setCount((prev) => prev + 50);
      }
    };
    ele.addEventListener('scroll', handleScrollEnd);

    return () => {
      ele.removeEventListener('scroll', handleScrollEnd);
    };
  }, []);

  return (
    <>
      this is from infintie scroll
      <div id="scroll_containter">
        {new Array(count).fill(0).map((ele, index) => {
          return <div className="ele">{index + 1}</div>;
        })}
      </div>
    </>
  );
};
export default InfintieScroll;
