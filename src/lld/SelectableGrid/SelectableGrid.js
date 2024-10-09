import { useCallback, useState } from 'react';
import './index.css';

const SelectableGrid = ({ rows, columns }) => {
  const [selectedBoxes, setSelectedBoxes] = useState([]);
  const [dragActive, setDragActive] = useState(false);
  const [origin, setOrigin] = useState();

  const handleMouseUp = () => {
    setDragActive(false);
  };
  const handleMouseDown = (index) => {
    setDragActive(true);
    setOrigin(index);
    setSelectedBoxes([index]);
  };

  const handleMouseEnter = (index) => {
    if (!dragActive) return;
    const getRowColsfromIndex = (index) => {
      const row =
        index % columns == 0 ? index / columns : parseInt(index / columns) + 1;
      const col = index % columns == 0 ? columns : index % columns;
      return {
        row,
        col,
      };
    };
    const getIndexFromRowCol = (row, col) => {
      return (row - 1) * columns + col;
    };

    const newColoredCollection = [origin];
    const CurrentELeCords = getRowColsfromIndex(index);
    const originCords = getRowColsfromIndex(origin);
    const leftX = Math.min(CurrentELeCords.col, originCords.col);
    const TopY = Math.min(CurrentELeCords.row, originCords.row);
    const BottomY = Math.max(CurrentELeCords.row, originCords.row);
    const RightX = Math.max(CurrentELeCords.col, originCords.col);
    for (let i = leftX; i <= RightX; i++) {
      for (let j = TopY; j <= BottomY; j++) {
        newColoredCollection.push(getIndexFromRowCol(j, i));
      }
    }

    setSelectedBoxes(newColoredCollection);
  };

  // NOTE://hnadle MOuseup was taken to the paarent as it can be handeled at parent leel as
  // it does not need index wher we up our mouse
  return (
    <div
      className="grid"
      style={{ '--columnCount': columns }}
      onMouseUp={handleMouseUp}
    >
      {new Array(rows * columns).fill(-1).map((ele, index) => {
        return (
          <div
            onMouseDown={() => handleMouseDown(index + 1)}
            onMouseEnter={() => handleMouseEnter(index + 1)}
            // onMouseUp={handleMouseUp}
            className={`box ${
              selectedBoxes.includes(index + 1) ? 'colored' : ''
            }`}
          >
            {index + 1}
          </div>
        );
      })}
    </div>
  );
};

export default SelectableGrid;
