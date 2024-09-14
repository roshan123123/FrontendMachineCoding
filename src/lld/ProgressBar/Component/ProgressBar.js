const ProgressBar = ({ progressPercent }) => {
  if (progressPercent > 100) progressPercent = 100;
  if (progressPercent < 0) progressPercent = 0;
  return (
    <div className="parent">
      <div className="placeholderDiv">
        <span
          className="progressPercent"
          style={{ color: progressPercent > 45 ? 'white' : 'black' }}
        >{`${progressPercent} %`}</span>
      </div>
      <div
        className="progres"
        style={{ '--progress-percent': progressPercent / 100 }}
      ></div>
    </div>
  );
};

export default ProgressBar;
