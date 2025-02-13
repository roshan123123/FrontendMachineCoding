import { useState } from 'react';
const data = [
  { label: 'HTML', content: <div>Html content</div> },
  { label: 'CSS', content: <div>Css content</div> },
  { label: 'JS', content: <div>Js content</div> },
];

const Tabs = () => {
  const [activeTab, setActiveTab] = useState(0);
  return (
    <>
      {data.map((ele, index) => {
        return (
          <button
            style={{ background: activeTab == index ? 'green' : '' }}
            key={index}
            onClick={() => {
              setActiveTab(index);
            }}
          >
            {ele.label}
          </button>
        );
      })}
      {data[activeTab].content}
    </>
  );
};

export default Tabs;
