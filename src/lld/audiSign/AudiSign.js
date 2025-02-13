import './index.css';
const AudiSign = () => {
  const CircleCount = 5;
  return (
    <>
      Audi Sign
      <div className="parent">
        {new Array(CircleCount).fill(0).map((ele, index) => {
          return (
            <div style={{ left: `${index * 120}px` }} className="circle"></div>
          );
        })}
      </div>
    </>
  );
};

export default AudiSign;
