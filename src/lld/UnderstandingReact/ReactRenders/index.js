// import React, { useState } from 'react';

// const ReactRerenders = () => {
//   return (
//     <div>
//       index <Parent />
//     </div>
//   );
// };

// const Parent = () => {
//   const [parentCount, setParentCount] = useState(0);
//   const handleClick = () => {
//     setParentCount(parentCount + 1);
//   };
//   console.log('render from Parent component');
//   return (
//     <>
//       the Value of parent counter is {parentCount}
//       <button onClick={handleClick}>Parent Increase</button>
//       <MemoizedChildCOunter parentCount={parentCount} />
//     </>
//   );
// };

// const ChildCounter = () => {
//   const [childCount, setChildCount] = useState(0);
//   const handleClick = () => {
//     setChildCount(childCount + 1);
//   };
//   console.log('render from child component');
//   return (
//     <>
//       the Value of child is {childCount}
//       <button onClick={handleClick}>Child Increase</button>
//     </>
//   );
// };

// const MemoizedChildCOunter = React.memo(ChildCounter);
// export default ReactRerenders;

//Intuit ke chutiye
import React, { useState, useEffect } from 'react';

const ReactRerenders = () => {
  return (
    <div>
      index <Parent />
    </div>
  );
};

const Parent = () => {
  const [parentCount, setParentCount] = useState(0);
  const handleClick = () => {
    setParentCount(parentCount + 1);
  };
  console.log('render from Parent component');
  return (
    <>
      the Value of parent counter is {parentCount}
      <button onClick={handleClick}>Parent Increase</button>
      <MemoizedChildCOunter parentCount={parentCount} />
    </>
  );
};

const ChildCounter = ({ parentCount }) => {
  const [childCount, setChildCount] = useState(0);
  const handleClick = () => {
    setChildCount(childCount + 1);
  };
  console.log('render from child component');
  useEffect(() => {
    setChildCount(parentCount);
    console.log('render from child useEffect');
  }, [parentCount]);

  return (
    <>
      <span>the Value of child is {parentCount}</span>
      <span>the Value of child is {childCount}</span>
      <button onClick={handleClick}>Child Increase</button>
    </>
  );
};

const MemoizedChildCOunter = React.memo(ChildCounter);
export default ReactRerenders;


//Context change pe saare child rerender hote h kya 
