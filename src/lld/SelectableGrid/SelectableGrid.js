import { useCallback, useState } from 'react';
import './index.css';

const SelectableGrid = ({ rows, columns }) => {
  const [pressed, setPressed] = useState(false);
  const [selectedList, setSelectedList] = useState([]);
  const [initial, setInitial] = useState(null);
  const boxesCount = rows * columns;

  const handleMouseDown = (e, index) => {
    setSelectedList([]);
    setPressed(true);
    setInitial(index);
    setSelectedList([index]);
  };

  const handleMouseUp = () => {
    setPressed(false);
  };

  const collectAllRectangleElements = useCallback(
    (initial, final) => {
      const getRowNumber = (n) => {
        return n % columns === 0 ? n / columns : parseInt(n / columns) + 1;
      };

      const getColumnNumber = (n) => {
        return n % columns === 0 ? columns : n % columns;
      };

      const getElementFromRowCOl = (r, c) => {
        return (r - 1) * columns + c;
      };

      const row1 = getRowNumber(initial);
      const col1 = getColumnNumber(initial);
      const row2 = getRowNumber(final);
      const col2 = getColumnNumber(final);

      const width = Math.abs(col2 - col1) + 1;
      const height = Math.abs(row2 - row1) + 1;

      const startRow = Math.min(row1, row2);
      const startCol = Math.min(col1, col2);

      const arr = [];

      for (let i = 0; i < height; i++) {
        for (let j = 0; j < width; j++) {
          arr.push(getElementFromRowCOl(startRow + i, startCol + j));
        }
      }
      setSelectedList(arr);
    },
    [columns]
  );

  const handleMouseOver = (e, index) => {
    if (!pressed) return;

    collectAllRectangleElements(initial, index);
  };

  return (
    <>
      <span>selectableGrid</span>
      <div
        className="grid"
        style={{ '--column-count': columns, '--row-count': rows }}
      >
        {new Array(boxesCount).fill(0).map((ele, index) => {
          return (
            <div
              className={`box ${
                selectedList.includes(index + 1) ? 'colored-box' : ''
              }`}
              key={index}
              onMouseDown={(e) => handleMouseDown(e, index + 1)}
              onMouseOver={(e) => handleMouseOver(e, index + 1)}
              // onMouseEnter={(e) => handleMouseOver(e, index + 1)}
              onMouseUp={handleMouseUp}
            >
              {index + 1}
            </div>
          );
        })}
      </div>
    </>
  );
};

export default SelectableGrid;
