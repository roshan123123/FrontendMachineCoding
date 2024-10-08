import { data } from './constatns/data';
import { useState, useRef, useEffect } from 'react';
import './index.css';

const TransferList = () => {
  const [leftList, setLeftList] = useState(
    data.filter((ele) => ele.placement === 'left')
  );
  const [rightList, setRightList] = useState(
    data.filter((ele) => ele.placement === 'right')
  );

  const handleAllMove = (src, srcSetter, dest, destSetter) => {
    destSetter((prev) => [...prev, ...src]);
    srcSetter([]);
  };

  const moveSelected = (srcList, srcListSetter, destList, destListSetter) => {
    const selectedItems = srcList.filter((ele) => ele.isChecked);
    destListSetter((prev) => [...prev, ...selectedItems]);
    srcListSetter((prev) => prev.filter((ele) => !ele.isChecked));
  };

  return (
    <div>
      <div className="Parents">
        <IndependentBox srcList={leftList} setSrcList={setLeftList} />
        <div className="buttonList">
          <button
            onClick={() =>
              handleAllMove(rightList, setRightList, leftList, setLeftList)
            }
          >
            Move all to left
          </button>
          <button
            onClick={() =>
              handleAllMove(leftList, setLeftList, rightList, setRightList)
            }
          >
            Move all to right
          </button>
          <button
            onClick={() =>
              moveSelected(rightList, setRightList, leftList, setLeftList)
            }
          >
            Move selected to left
          </button>
          <button
            onClick={() =>
              moveSelected(leftList, setLeftList, rightList, setRightList)
            }
          >
            Move selected to right
          </button>
        </div>
        <IndependentBox srcList={rightList} setSrcList={setRightList} />
      </div>
    </div>
  );
};

const IndependentBox = ({ srcList, setSrcList }) => {
  const [input, setInput] = useState('');
  const ref = useRef(null);

  const handleAdd = () => {
    setSrcList((prev) => [
      ...prev,
      {
        id: Date.now(),
        title: input,
        isChecked: false,
      },
    ]);
    setInput('');
  };

  const handleCheckboxChange = (key, checked) => {
    const newList = srcList.map((ele) =>
      ele.id === key ? { ...ele, isChecked: checked } : ele
    );
    setSrcList(newList);
  };

  const checkAll = (checked) => {
    setSrcList((prev) => prev.map((ele) => ({ ...ele, isChecked: checked })));
  };

  useEffect(() => {
    const checkedCount = srcList.filter((ele) => ele.isChecked).length;
    const isIndeterminate = checkedCount > 0 && checkedCount < srcList.length;
    const isAllChecked = checkedCount === srcList.length;

    //indeterminate overrides the checked or unchecked behaviour
    if (ref.current) {
      ref.current.indeterminate = isIndeterminate;
      ref.current.checked = isAllChecked;
    }
  }, [srcList]);

  return (
    <div className="indBox">
      <input
        value={input}
        type="text"
        className="inputclass"
        onChange={(e) => setInput(e.target.value)}
      />
      <span>
        <input
          type="checkbox"
          ref={ref}
          onChange={(e) => checkAll(e.target.checked)}
        />
        {srcList.filter((ele) => ele.isChecked).length}/{srcList.length}
      </span>
      <button onClick={handleAdd}>Add</button>
      {srcList.map((ele) => (
        <div key={ele.id}>
          <input
            type="checkbox"
            checked={ele.isChecked}
            onChange={(e) => handleCheckboxChange(ele.id, e.target.checked)}
          />
          <span>{ele.title}</span>
        </div>
      ))}
    </div>
  );
};

export default TransferList;
