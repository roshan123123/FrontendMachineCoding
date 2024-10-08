const ProgressBar = ({ progressPercent }) => {
  if (progressPercent > 100) progressPercent = 100;
  if (progressPercent < 0) progressPercent = 0;
  return (
    <>
      <div className="ParentConatiner">
        <div
          className="progres"
          style={{ '--progress-percent': progressPercent / 100 }}
        ></div>

        <span
          className="progressPercent"
          style={{ color: progressPercent > 45 ? 'white' : 'black' }}
        >{`${progressPercent} %`}</span>
      </div>
    </>
  );
};

export default ProgressBar;
