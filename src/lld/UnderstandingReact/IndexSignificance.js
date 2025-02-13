import React, { useState } from 'react';
const constantData = [
  {
    id: 1,
    name: 'roshan1',
  },
  {
    id: 2,
    name: 'roshan2',
  },
  {
    id: 3,
    name: 'roshan3',
  },
  {
    id: 4,
    name: 'roshan4',
  },
  {
    id: 5,
    name: 'roshan5',
  },
];

const IndexSignificance = () => {
  const [data, setData] = useState(constantData);
  const handleAddFront = () => {
    setData([{ id: Date.now(), name: Date.now() }, ...data]);
  };
  const handleAddBack = () => {
    setData([...data, { id: Date.now(), name: Date.now() }]);
  };

  return (
    <div>
      <h1> IndexSignificanceM</h1>

      {data.map((ele, index) => (
        <ChildComponent name={ele.name} key={ele.id} />
      ))}
      <button onClick={handleAddFront}>Add new at Front</button>
      <button onClick={handleAddBack}>Add new at back</button>
    </div>
  );
};

const ChildComponent = ({ name }) => {
  const [count, setCount] = useState(0);
  const handleClick = () => {
    setCount(count + 1);
  };

  return (
    <>
      <h2>{name}</h2>
      <h2>count is {count}</h2>
      <button onClick={handleClick}>Increase</button>
    </>
  );
};

export default IndexSignificance;
