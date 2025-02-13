import { useState } from 'react';
import './index.css';

const ACTION = {
  DIVIDE_BY_2: 'DIVIDE_BY_2',
  MULTIPLY_BY_2: 'MULTIPLY_BY_2',
  ADD_1: 'ADD_1',
  SUBTRACT_1: 'SUBTRACT_1',
};
const UndoableCounter = () => {
  const [undoStack, setUndoStack] = useState([]);
  const [operationsStack, setOperationsStack] = useState([]);

  const handleReset = () => {
    setUndoStack([]);
    setOperationsStack([]);
  };

  const handleUndo = () => {
    //we have disabled the undo when not possibe so no need to handle edge case
    const TempoperationsStack = [...operationsStack];
    const lastEle = TempoperationsStack.pop();
    setUndoStack([...undoStack, lastEle]);
    setOperationsStack([...TempoperationsStack]);
  };

  const handleRedo = () => {
    const TempUndoStack = [...undoStack];
    const lastEle = TempUndoStack.pop();
    setUndoStack([...TempUndoStack]);
    setOperationsStack([...operationsStack, lastEle]);
  };

  const PerformOperation = (action) => {
    const currentCount =
      operationsStack.length > 0
        ? operationsStack[operationsStack.length - 1].currentValue
        : 0;

    switch (action) {
      case ACTION.DIVIDE_BY_2:
        setOperationsStack([
          ...operationsStack,
          {
            operation: '/2',
            oldValue: currentCount,
            currentValue: currentCount / 2,
          },
        ]);
        break;
      case ACTION.MULTIPLY_BY_2:
        setOperationsStack([
          ...operationsStack,
          {
            operation: '*2',
            oldValue: currentCount,
            currentValue: currentCount * 2,
          },
        ]);
        break;
      case ACTION.ADD_1:
        setOperationsStack([
          ...operationsStack,
          {
            operation: '+1',
            oldValue: currentCount,
            currentValue: currentCount + 1,
          },
        ]);
        break;
      case ACTION.SUBTRACT_1:
        setOperationsStack([
          ...operationsStack,
          {
            operation: '-1',
            oldValue: currentCount,
            currentValue: currentCount - 1,
          },
        ]);
        break;

      default:
        console.log('some unexpected action');
    }

    setUndoStack([]);
  };

  return (
    <>
      UndoableCounter
      <div className="actionButtons">
        <button
          onClick={handleUndo}
          disabled={operationsStack.length > 0 ? false : true}
        >
          Undo
        </button>
        <button
          onClick={handleRedo}
          disabled={undoStack.length > 0 ? false : true}
        >
          Redo
        </button>
        <button onClick={handleReset}>Reset</button>
      </div>
      <div className="operationButtons">
        <button onClick={() => PerformOperation(ACTION.DIVIDE_BY_2)}>/2</button>
        <button onClick={() => PerformOperation(ACTION.SUBTRACT_1)}>-1</button>
        {operationsStack.length > 0
          ? operationsStack[operationsStack.length - 1].currentValue
          : 0}
        <button onClick={() => PerformOperation(ACTION.ADD_1)}>+1</button>
        <button onClick={() => PerformOperation(ACTION.MULTIPLY_BY_2)}>
          *2
        </button>
      </div>
      <div className="operationsList">
        <div className="theader">
          <div className="cell">operation</div>
          <div className="cell">old</div>
          <div className="cell">new</div>
        </div>
        {[...operationsStack].reverse().map((ele) => {
          return (
            <div className="trow">
              <div className="cell">{ele.operation}</div>
              <div className="cell">{ele.oldValue}</div>
              <div className="cell">{ele.currentValue}</div>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default UndoableCounter;
