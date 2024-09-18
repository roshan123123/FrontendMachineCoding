import { useEffect, useState, useMemo } from 'react';
const GridLightComponent = ({ matrix }) => {
  const [filledElements, setFilledElements] = useState([]);

  const flatArray = useMemo(() => matrix.flat(), [matrix]);
  const handleClick = (e, idx) => {
    setFilledElements((prev) => [...prev, idx]);
  };
  useEffect(() => {
    const allFilled = () => {
      let availbleCells = 0;
      flatArray.forEach((element) => {
        if (element) availbleCells++;
      });
      if (availbleCells === filledElements.length) return true;
      return false;
    };

    if (allFilled()) {
      let timerId = setInterval(() => {
        //vvi when this timer function goes the filledElements is the same as the initial value due
        //to closures adn not the updated state value
        console.log('from else filledElements', filledElements);

        //to work on the updated value of the state we need to use this pattern
        setFilledElements((prev) => {
          if (prev.length === 0) {
            clearInterval(timerId);
            return [];
          } else {
            const newArr = [...prev].slice(0, prev.length - 1);
            return [...newArr];
          }
        });
      }, 1000);
    }
  }, [filledElements, flatArray]);

  return (
    <div className="matrix" style={{ '--column-count': matrix[0].length }}>
      {flatArray.map((ele, indx) => (
        <button
        className='button'
          disabled={!ele || filledElements.includes(indx + 1)}
          style={{
            background: filledElements.includes(indx + 1) ? 'green' : '',
          }}
          onClick={(e) => handleClick(e, indx + 1)}
        >
          {indx + 1}
        </button>
      ))}
    </div>
  );
};

export default GridLightComponent;
