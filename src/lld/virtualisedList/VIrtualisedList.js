import { useState, useRef, useEffect } from 'react';
const ContainerComponent = () => {
  return (
    <>
      <VirtualisedList
        NodeCount={1000}
        ParentContainerHeight={'600'}
        individualChildHeight={'20'}
      />
    </>
  );
};

const VirtualisedList = ({
  NodeCount,
  ParentContainerHeight,
  individualChildHeight,
}) => {
  const [scrollTop, setScrollTop] = useState(0);
  const parentRef = useRef(null);

  // this ele can be taken from outside so that our comp is flexible

  const firstRenderedIndex = Math.floor(scrollTop / individualChildHeight);
  const lastRenderedIndex = Math.min(
    NodeCount,
    firstRenderedIndex +
      Math.floor(ParentContainerHeight / individualChildHeight)
  );

  const innerElements = new Array(lastRenderedIndex - firstRenderedIndex + 1)
    .fill(0)
    .map((ele, index) => (
      <div
        key={index}
        childIndex={index}
        style={{
          backgroundColor: 'gray',
        //   padding: '5px',
          border: '1px solid red',
          height: `${individualChildHeight}px`,
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          position: 'absolute',
          top: `${scrollTop + index * individualChildHeight}px`,
        }}
      >
        child {index + firstRenderedIndex}
      </div>
    ));

  useEffect(() => {
    const handleScroll = (e) => {
      console.log('eventtarget', e.target.scrollTop);
      setScrollTop(e.target.scrollTop);
    };
    const parentEle = parentRef.current;
    parentEle.addEventListener('scroll', handleScroll);

    return () => {
      parentEle.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <>
      <div
        ref={parentRef}
        style={{
          height: `${ParentContainerHeight}px`,
          marginInline: 'auto',
          marginTop: '100px',
          width: '200px',
          overflowY: 'scroll',
          position: 'relative',
          border: '1px solid black',
        }}
      >
        <div style={{ height: `${NodeCount * individualChildHeight}px` }}>
          {innerElements}
        </div>
      </div>
    </>
  );
};

export default ContainerComponent;
